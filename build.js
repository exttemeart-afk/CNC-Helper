/**
 * Site Builder (Node.js)
 * 1. Compiles articles.md -> js/articles.js
 * 2. Pre-renders (SSR) all HTML pages for ru/, pl/, en/ without needing client JS for initial content:
 *    - Fully translated navigation menu, titles, buttons, and text
 *    - All 25 calculator cards with labels, default inputs, and initial calculated values
 *    - All 92 articles pre-rendered into articles.html and featured articles in index.html
 *    - ISO / Fanuc codes table pre-rendered in codes.html
 *    - Article reader default content pre-rendered in article.html
 * 3. Generates sitemap.xml, robots.txt, 404.html, and root index.html with domain https://cnc-helper.pro
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const seo = JSON.parse(fs.readFileSync(path.join(root, 'seo-pages.json'), 'utf8'));
const domain = seo.domain.replace(/\/+$/, '');
const langs = ['ru', 'pl', 'en'];
const ogLocales = { ru: 'ru_RU', pl: 'pl_PL', en: 'en_US' };

function escHtml(str) {
  return String(str || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

function formatInlineMd(str) {
  let s = escHtml(str);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  return s;
}

function convertMdToHtml(md) {
  const lines = (md || '').replace(/\r\n/g, '\n').trim().split('\n');
  let html = '';
  let inPre = false;
  let inUl = false;
  let inOl = false;
  let para = [];
  let firstParaPlain = '';
  let preBuf = [];

  function flushPara() {
    if (para.length > 0) {
      const raw = para.join(' ').trim();
      if (!firstParaPlain) {
        firstParaPlain = raw.replace(/`([^`]+)`/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
      }
      html += `<p>${formatInlineMd(raw)}</p>`;
      para = [];
    }
  }

  function closeLists() {
    if (inUl) { html += '</ul>'; inUl = false; }
    if (inOl) { html += '</ol>'; inOl = false; }
  }

  for (const line of lines) {
    if (line.startsWith('```')) {
      flushPara();
      closeLists();
      if (inPre) {
        html += `<pre>${escHtml(preBuf.join('\n'))}</pre>`;
        preBuf = [];
        inPre = false;
      } else {
        inPre = true;
      }
      continue;
    }
    if (inPre) {
      preBuf.push(line);
      continue;
    }
    const trim = line.trim();
    if (trim === '') {
      flushPara();
      closeLists();
      continue;
    }
    const h2Match = trim.match(/^##\s+(.+)$/);
    if (h2Match) {
      flushPara();
      closeLists();
      html += `<h2>${formatInlineMd(h2Match[1])}</h2>`;
      continue;
    }
    const ulMatch = trim.match(/^[-*]\s+(.+)$/);
    if (ulMatch) {
      flushPara();
      if (inOl) { html += '</ol>'; inOl = false; }
      if (!inUl) { html += '<ul>'; inUl = true; }
      html += `<li>${formatInlineMd(ulMatch[1])}</li>`;
      continue;
    }
    const olMatch = trim.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      flushPara();
      if (inUl) { html += '</ul>'; inUl = false; }
      if (!inOl) { html += '<ol>'; inOl = true; }
      html += `<li>${formatInlineMd(olMatch[1])}</li>`;
      continue;
    }
    closeLists();
    para.push(trim);
  }
  flushPara();
  closeLists();

  let summary = firstParaPlain;
  if (summary.length > 165) {
    const cut = summary.slice(0, 160);
    const m = cut.match(/([.?!])\s+[^\s.?!]*$/);
    const lastBoundary = m ? m.index + 1 : -1;
    if (lastBoundary > 60) {
      summary = cut.slice(0, lastBoundary);
    } else {
      summary = cut.replace(/\s+\S*$/, '') + '...';
    }
  }
  return { html, summary };
}

// 1. Compile articles.md -> js/articles.js
console.log('Compiling articles.md...');
const rawMd = fs.readFileSync(path.join(root, 'articles.md'), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
const blocks = rawMd.split(/^\s*---\s*$/m);
const articles = [];

for (const b of blocks) {
  if (!b.trim()) continue;
  const idMatch = b.match(/^id:\s*(\S+)/m);
  if (!idMatch) continue;
  const id = idMatch[1].trim();

  const tagMatch = b.match(/^tag:\s*(.+)$/m);
  const tagParts = tagMatch ? tagMatch[1].split('|').map(s => s.trim()) : ['ЧПУ', 'CNC', 'CNC'];
  const tags = {
    ru: tagParts[0] || 'ЧПУ',
    pl: tagParts[1] || tagParts[0] || 'CNC',
    en: tagParts[2] || tagParts[1] || 'CNC'
  };

  const titles = {}, sums = {}, bodies = {};
  let curLang = '';
  let langBuf = [];

  function flushLang() {
    if (curLang && langBuf.length > 0) {
      const title = langBuf[0].replace(/^#+\s*/, '').trim();
      const rest = langBuf.slice(1).join('\n');
      const parsed = convertMdToHtml(rest);
      titles[curLang] = title;
      sums[curLang] = parsed.summary;
      bodies[curLang] = parsed.html;
      langBuf = [];
    }
  }

  const bLines = b.replace(/\r\n/g, '\n').split('\n');
  for (const ln of bLines) {
    if (/^\*\*.*Polski\*\*\s*$/.test(ln)) { flushLang(); curLang = 'pl'; continue; }
    if (/^\*\*.*English\*\*\s*$/.test(ln)) { flushLang(); curLang = 'en'; continue; }
    if (/^\*\*.+\*\*\s*$/.test(ln) && !/Polski|English/.test(ln)) { flushLang(); curLang = 'ru'; continue; }
    if (curLang) {
      if (langBuf.length === 0 && !ln.trim()) continue;
      langBuf.push(ln);
    }
  }
  flushLang();

  articles.push({ id, tag: tags, title: titles, summary: sums, body: bodies });
}

// Write js/articles.js
const jsArticlesContent = '/* AUTO-GENERATED from articles.md by build.js. Edit articles.md to add or update articles. */\n' +
  'const ARTICLES = [\n' +
  articles.map(a => {
    return '{\n' +
      ` id:${JSON.stringify(a.id)}, tag:${JSON.stringify(a.tag)},\n` +
      ` title:${JSON.stringify(a.title)},\n` +
      ` summary:${JSON.stringify(a.summary)},\n` +
      ' body:{\n' +
      `  ru:\`${(a.body.ru || '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,\n` +
      `  pl:\`${(a.body.pl || '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,\n` +
      `  en:\`${(a.body.en || '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`\n` +
      ' }\n' +
      '}';
  }).join(',\n') +
  '\n];\n';

fs.writeFileSync(path.join(root, 'js', 'articles.js'), jsArticlesContent, 'utf8');
console.log(`Compiled ${articles.length} articles to js/articles.js.`);

// Load application dependencies in VM to pre-render static HTML
const i18nCode = fs.readFileSync(path.join(root, 'js', 'i18n.js'), 'utf8');
const dataCode = fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8');
const calcCode = fs.readFileSync(path.join(root, 'js', 'calculators.js'), 'utf8');

const I18N = vm.runInThisContext(`(function(){\n${i18nCode}\nreturn I18N;\n})()`);
const dataExports = vm.runInThisContext(`(function(){\n${dataCode}\nreturn { MATERIALS, GCODES, MCODES, CONTROLS, calcIsoTol, convertHardness, INCH_PIPE_THREADS, THREADS, HARDNESS_TABLE, THERMAL_MATS, TAYLOR_EXPONENTS };\n})()`);
const { MATERIALS, GCODES, MCODES, CONTROLS, calcIsoTol, convertHardness, INCH_PIPE_THREADS, THREADS, HARDNESS_TABLE, THERMAL_MATS, TAYLOR_EXPONENTS } = dataExports;

const calcExports = new Function(
  'MATERIALS', 'GCODES', 'MCODES', 'CONTROLS', 'calcIsoTol', 'convertHardness', 'INCH_PIPE_THREADS', 'THREADS', 'HARDNESS_TABLE', 'THERMAL_MATS', 'TAYLOR_EXPONENTS', 'I18N',
  `${calcCode}\nreturn CALCS;`
)(MATERIALS, GCODES, MCODES, CONTROLS, calcIsoTol, convertHardness, INCH_PIPE_THREADS, THREADS, HARDNESS_TABLE, THERMAL_MATS, TAYLOR_EXPONENTS, I18N);
const CALCS = calcExports;

// Helper to translate a key
function t(lang, key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

// 2. Pre-render Calculators HTML
function preRenderCalcCard(c, lang) {
  const tLang = k => t(lang, k);
  const defValues = {};
  c.fields.forEach(f => { defValues[f.id] = f.def; });

  const fieldsHtml = c.fields.map(f => {
    const isHidden = f.showIf && !f.showIf(defValues);
    const hiddenAttr = isHidden ? ' hidden' : '';
    let inputHtml = '';
    if (f.type === 'select') {
      const opts = f.options.map(o => {
        const selected = o.v === f.def ? ' selected' : '';
        const label = escHtml(o.label || tLang(o.k));
        return `<option value="${o.v}"${selected}>${label}</option>`;
      }).join('');
      inputHtml = `<select>${opts}</select>`;
    } else {
      inputHtml = `<input type="number" step="any" inputmode="decimal" value="${f.def}">`;
    }
    return `<div class="field"${hiddenAttr}><label>${escHtml(tLang(f.k))}</label>${inputHtml}</div>`;
  }).join('');

  // Initial calculation results
  let resultsHtml = '';
  try {
    const out = c.calc(defValues);
    if (out) {
      resultsHtml = out.map(o => {
        let label = o.label || (o.k ? tLang(o.k) : '');
        let text = o.s || '';
        if (text.startsWith('fit_')) text = tLang(text);
        if (o.v != null) {
          const unit = o.raw != null ? o.raw : (o.u ? tLang(o.u) : '');
          const formatted = isFinite(o.v) ? o.v.toLocaleString(undefined, { maximumFractionDigits: o.d == null ? 3 : o.d }) : '—';
          text = (formatted + ' ' + unit).trim();
        }
        return `<div class="res"><span>${escHtml(label)}</span> <b>${escHtml(text)}</b></div>`;
      }).join('');
    }
  } catch (err) {
    resultsHtml = `<span>${escHtml(tLang('invalid'))}</span>`;
  }

  const copyBtnHtml = c.id === 'bolt' ? `<button type="button" class="btn-copy">${escHtml(tLang('copy_gcode'))}</button>` : '';
  return `<div class="card calc"><h3><span>${c.ic}</span>${escHtml(tLang(c.t))}</h3>${fieldsHtml}<div class="results">${resultsHtml}</div><button class="btn-save">${escHtml(tLang('save'))}</button>${copyBtnHtml}</div>`;
}

function preRenderCalcGrid(group, lang) {
  return CALCS.filter(c => c.group === group).map(c => preRenderCalcCard(c, lang)).join('\n');
}

function preRenderQuickCalcs(lang) {
  return CALCS.filter(c => c.id === 'mill' || c.id === 'mass' || c.id === 'turn').map(c => preRenderCalcCard(c, lang)).join('\n');
}

function preRenderDedicatedCalcs(type, lang) {
  let ids = [];
  if (type === 'turning') ids = ['turn', 'tnrc', 'taper'];
  else if (type === 'milling') ids = ['mill', 'spindle_torque', 'ball_eff'];
  else if (type === 'drilling') ids = ['drill', 'drill_depth'];
  else if (type === 'thread') ids = ['thread', 'thread_mill', 'thread_wires', 'thread_inch'];
  else if (type === 'pcd') ids = ['bolt', 'hole_grid'];
  return CALCS.filter(c => ids.includes(c.id)).map(c => preRenderCalcCard(c, lang)).join('\n');
}

function preRenderSeoGuide(type, lang) {
  const guides = {
    turning: {
      ru: `<h2>Теория и формулы токарной обработки ЧПУ</h2>
<h3>1. Скорость резания Vc и частота вращения шпинделя n</h3>
<p>Скорость резания <code>Vc</code> (м/мин) определяет линейную скорость поверхности заготовки относительно режущей кромки резца:</p>
<p><code>Vc = (π × Dw × n) / 1000</code> [м/мин] &nbsp;|&nbsp; <code>n = (1000 × Vc) / (π × Dw)</code> [об/мин]</p>
<p>На токарных станках с ЧПУ рекомендуется использовать режим постоянной скорости резания (CSS) через команду <code>G96 S...</code> (м/мин) с обязательным ограничением максимальных оборотов шпинделя <code>G50 S...</code> (Fanuc/Haas) или <code>LIMS=...</code> (Siemens), чтобы исключить центробежный срыв заготовки при приближении резца к центру детали (X = 0).</p>

<h3>2. Теоретическая шероховатость поверхности Ra и Rz</h3>
<p>При точении чистовым резцом с радиусной пластиной чистота поверхности зависит исключительно от подачи на оборот <code>f</code> (мм/об) и радиуса при вершине <code>r</code> (мм):</p>
<ul>
  <li><b>Высота неровностей профиля (Rz):</b> <code>Rz = (f² / (8 × r)) × 1000</code> [мкм]</li>
  <li><b>Среднее арифметическое отклонение (Ra):</b> <code>Ra = (f² / (31.2 × r)) × 1000</code> [мкм]</li>
</ul>
<p><b>Практическое правило:</b> Для пластины с радиусом r = 0.8 мм подача f = 0.2 мм/об даёт теоретическую чистоту Ra ≈ 1.6 мкм (Rz ≈ 6.25 мкм). При f = 0.1 мм/об чистота возрастает до Ra ≈ 0.4 мкм. Для пластины r = 0.4 мм при f = 0.2 мм/об шероховатость возрастает в два раза (Ra ≈ 3.2 мкм).</p>

<h3>3. Ручная компенсация радиуса резца (TNRC)</h3>
<p>Если станок не поддерживает автоматическую компенсацию G41/G42 или точение выполняется в ручном режиме, радиус при вершине резца искажает геометрию фасок и конусов. Для фаски под углом 45° поправки на координаты составляют:</p>
<ul>
  <li>Смещение по оси Z: <code>ΔZ = r × (1 - tg(22.5°)) ≈ 0.414 × r</code></li>
  <li>Диаметральное смещение по оси X: <code>ΔX = 2 × r × (1 - tg(22.5°)) ≈ 0.828 × r</code></li>
</ul>`,
      pl: `<h2>Teoria i wzory parametrów toczenia CNC</h2>
<h3>1. Prędkość skrawania Vc i obroty wrzeciona n</h3>
<p>Prędkość skrawania <code>Vc</code> (m/min) określa prędkość liniową na obwodzie toczonego detalu:</p>
<p><code>Vc = (π × Dw × n) / 1000</code> [m/min] &nbsp;|&nbsp; <code>n = (1000 × Vc) / (π × Dw)</code> [obr/min]</p>
<p>Na tokarkach CNC zaleca się stosowanie stałej prędkości skrawania <code>G96 S...</code> z bezwzględnym ograniczeniem maksymalnych obrotów wrzeciona <code>G50 S...</code> (Fanuc/Haas) lub <code>LIMS=...</code> (Siemens), aby uniknąć utraty siły mocowania uchwytu przy obróbce w osi detalu (X = 0).</p>

<h3>2. Teoretyczna chropowatość powierzchni Ra i Rz</h3>
<p>Chropowatość powierzchni po toczeniu zależy od posuwu na obrót <code>f</code> (mm/obr) oraz promienia naroża płytki <code>r</code> (mm):</p>
<ul>
  <li><b>Wysokość nierówności (Rz):</b> <code>Rz = (f² / (8 × r)) × 1000</code> [µm]</li>
  <li><b>Średnie arytmetyczne odchylenie (Ra):</b> <code>Ra = (f² / (31.2 × r)) × 1000</code> [µm]</li>
</ul>
<p><b>Wskazówka:</b> Dla płytki r = 0.8 mm i posuwu f = 0.2 mm/obr teoretyczna chropowatość wynosi Ra ≈ 1.6 µm (Rz ≈ 6.25 µm). Zmniejszenie posuwu do f = 0.1 mm/obr pozwala osiągnąć Ra ≈ 0.4 µm.</p>

<h3>3. Ręczna kompensacja promienia naroża płytki (TNRC)</h3>
<p>W przypadku braku aktywnej kompensacji G41/G42 promień naroża płytki powoduje zniekształcenie wymiarów faz i stożków. Dla fazy pod kątem 45° naddatki wynoszą:</p>
<ul>
  <li>Korekcja w osi Z: <code>ΔZ = r × (1 - tg(22.5°)) ≈ 0.414 × r</code></li>
  <li>Korekcja średnicowa w osi X: <code>ΔX = 2 × r × (1 - tg(22.5°)) ≈ 0.828 × r</code></li>
</ul>`,
      en: `<h2>CNC Lathe Turning Speeds, Feeds & Tool Nose Theory</h2>
<h3>1. Cutting Speed Vc and Spindle RPM n</h3>
<p>Surface cutting speed <code>Vc</code> (m/min) represents the peripheral speed of the rotating workpiece:</p>
<p><code>Vc = (π × Dw × n) / 1000</code> [m/min] &nbsp;|&nbsp; <code>n = (1000 × Vc) / (π × Dw)</code> [RPM]</p>
<p>CNC lathes typically run in Constant Surface Speed (CSS) mode using <code>G96 S...</code>, paired with a maximum spindle speed clamp <code>G50 S...</code> (Fanuc/Haas) or <code>LIMS=...</code> (Siemens) to prevent centrifugal jaw gripping force loss when facing toward center (X = 0).</p>

<h3>2. Theoretical Ra and Rz Surface Finish</h3>
<p>Theoretical finish is governed by feed per revolution <code>f</code> (mm/rev) and insert corner radius <code>r</code> (mm):</p>
<ul>
  <li><b>Peak-to-valley profile height (Rz):</b> <code>Rz = (f² / (8 × r)) × 1000</code> [µm]</li>
  <li><b>Centerline average roughness (Ra):</b> <code>Ra = (f² / (31.2 × r)) × 1000</code> [µm]</li>
</ul>
<p><b>Machinist Rule of Thumb:</b> For an r = 0.8 mm insert at f = 0.2 mm/rev, theoretical roughness is Ra ≈ 1.6 µm (Rz ≈ 6.25 µm). Halving feed to 0.1 mm/rev drops Ra to ≈ 0.4 µm.</p>

<h3>3. Manual Tool Nose Radius Compensation (TNRC)</h3>
<p>When turning tapers or 45° chamfers without CNC radius compensation (G41/G42), the insert tool nose radius shifts the actual cutting edge. For a 45° chamfer:</p>
<ul>
  <li>Z-axis shift: <code>ΔZ = r × (1 - tan(22.5°)) ≈ 0.414 × r</code></li>
  <li>X-axis diameter shift: <code>ΔX = 2 × r × (1 - tan(22.5°)) ≈ 0.828 × r</code></li>
</ul>`
    },

    milling: {
      ru: `<h2>Теория фрезерования ЧПУ: утончение стружки и мощность</h2>
<h3>1. Обороты шпинделя и минутная подача</h3>
<p>Базовые параметры фрезерования концевыми и торцевыми фрезами:</p>
<p><code>n = (1000 × Vc) / (π × D)</code> [об/мин] &nbsp;|&nbsp; <code>F = n × fz × z</code> [мм/мин]</p>

<h3>2. Эффект утончения стружки (Radial Chip Thinning, RCT)</h3>
<p>При попутном фрезеровании с малой радиальной глубиной резания (<code>ae &lt; 0.5 × D</code>, трохоидальное или высокоскоростное фрезерование) срезаемая стружка утончается. Если не скорректировать подачу, реальная толщина стружки <code>hm</code> окажется меньше допустимой, вызывая наклёп, трение и быстрый износ режущих кромок.</p>
<p>Формула скорректированной подачи на зуб:</p>
<p><code>fz_adj = fz / (2 × √((ae / D) × (1 - ae / D)))</code></p>
<p><b>Пример:</b> Для фрезы D = 12 мм при ширине ae = 2 мм (16.7% от D) подача на зуб fz = 0.05 мм увеличивается до <b>0.067 мм/зуб (+34%)</b>, повышая производительность съёма без перегрузки инструмента.</p>

<h3>3. Мощность резания Pc и мощность на шпинделе Pm</h3>
<ul>
  <li><b>Минутный съём металла (Q):</b> <code>Q = (ap × ae × vf) / 1000</code> [см³/мин]</li>
  <li><b>Чистая мощность резания (Pc):</b> <code>Pc = (ap × ae × vf × kc) / (60 × 10⁶)</code> [кВт]</li>
  <li><b>Мощность шпинделя (Pm):</b> <code>Pm = Pc / η</code> [кВт] (КПД привода η ≈ 0.80 - 0.85)</li>
  <li><b>Крутящий момент (Mc):</b> <code>Mc = (9550 × Pc) / n</code> [Н·м]</li>
</ul>`,
      pl: `<h2>Teoria frezowania CNC: ścienienie wióra i moc wrzeciona</h2>
<h3>1. Obroty wrzeciona i posuw minutowy</h3>
<p>Podstawowe parametry obróbki frezami palcowymi i głowicami:</p>
<p><code>n = (1000 × Vc) / (π × D)</code> [obr/min] &nbsp;|&nbsp; <code>F = n × fz × z</code> [mm/min]</p>

<h3>2. Zjawisko ścienienia wióra (Radial Chip Thinning, RCT)</h3>
<p>Podczas frezowania współbieżnego z małą szerokością skrawania (<code>ae &lt; 0.5 × D</code>) rzeczywista grubość wióra <code>hm</code> jest mniejsza niż zadany posuw na ząb <code>fz</code>. Aby utrzymać optymalne obciążenie ostrza i uniknąć tarcia, należy skorygować posuw:</p>
<p><code>fz_adj = fz / (2 × √((ae / D) × (1 - ae / D)))</code></p>
<p><b>Przykład:</b> Frez D = 12 mm przy ae = 2 mm pozwala podnieść posuw z 0.05 mm/ząb do <b>0.067 mm/ząb (+34%)</b> przy zachowaniu pełnej trwałości ostrza.</p>

<h3>3. Czysta moc skrawania Pc i moc silnika wrzeciona Pm</h3>
<ul>
  <li><b>Wydajność usuwania wióra (Q):</b> <code>Q = (ap × ae × vf) / 1000</code> [cm³/min]</li>
  <li><b>Czysta moc skrawania (Pc):</b> <code>Pc = (ap × ae × vf × kc) / (60 × 10⁶)</code> [kW]</li>
  <li><b>Wymagana moc wrzeciona (Pm):</b> <code>Pm = Pc / η</code> [kW] (sprawność η ≈ 0.85)</li>
</ul>`,
      en: `<h2>CNC Milling Theory: Speeds, Feeds, RCT & Spindle Power</h2>
<h3>1. Spindle Speed and Table Feed Rate</h3>
<p>Primary cutting data formulas for end mills and face mills:</p>
<p><code>n = (1000 × Vc) / (π × D)</code> [RPM] &nbsp;|&nbsp; <code>F = n × fz × z</code> [mm/min]</p>

<h3>2. Radial Chip Thinning (RCT) Adjustment</h3>
<p>In climb milling with low radial engagement (<code>ae &lt; 0.5 × D</code>, trochoidal or dynamic milling), the actual chip thickness <code>hex</code> is significantly thinner than the programmed feed per tooth <code>fz</code>. Without adjustment, the tool rubs and work-hardens the workpiece:</p>
<p><code>fz_adj = fz / (2 × √((ae / D) × (1 - ae / D)))</code></p>
<p><b>Example:</b> A D = 12 mm end mill taking ae = 2 mm radial stepover allows boosting programmed fz from 0.05 mm/tooth to <b>0.067 mm/tooth (+34%)</b>, achieving higher MRR without overstressing cutting edges.</p>

<h3>3. Net Cutting Power Pc & Spindle Motor Power Pm</h3>
<ul>
  <li><b>Material Removal Rate (MRR):</b> <code>Q = (ap × ae × vf) / 1000</code> [cm³/min]</li>
  <li><b>Net Cutting Power (Pc):</b> <code>Pc = (ap × ae × vf × kc) / (60 × 10⁶)</code> [kW]</li>
  <li><b>Spindle Motor Power (Pm):</b> <code>Pm = Pc / η</code> [kW] (drive efficiency η ≈ 0.85)</li>
  <li><b>Spindle Torque (Mc):</b> <code>Mc = (9550 × Pc) / n</code> [N·m]</li>
</ul>`
    },

    drilling: {
      ru: `<h2>Справочник по сверлению, длине конуса и зенкованию</h2>
<h3>1. Режимы сверления: скорость Vc и подача f</h3>
<p>Частота вращения и минутная подача сверлильного инструмента:</p>
<p><code>n = (1000 × Vc) / (π × D)</code> [об/мин] &nbsp;|&nbsp; <code>F = n × f</code> [мм/мин]</p>

<h3>2. Длина конуса вершины сверла lp для глухих отверстий</h3>
<p>При сверлении глухих отверстий чертёж задаёт цилиндрическую глубину <code>Hcyl</code>. Чтобы цилиндрическая часть сверла достигла заданной глубины, ось Z должна опуститься на полную величину <code>Z = Hcyl + lp</code>:</p>
<p><code>lp = (D / 2) / tg(σ / 2)</code></p>
<ul>
  <li><b>Стандартные свёрла HSS (угол вершины σ = 118°):</b> <code>lp ≈ 0.300 × D</code></li>
  <li><b>Твердосплавные свёрла VHM (угол вершины σ = 140°):</b> <code>lp ≈ 0.182 × D</code></li>
  <li><b>Свёрла для жаропрочных сплавов (σ = 135°):</b> <code>lp ≈ 0.207 × D</code></li>
</ul>

<h3>3. Зенкование фаски и глубина опускания центровочного сверла (Spot Drill)</h3>
<p>При снятии фаски на отверстии глубина подачи зенкера от поверхности детали рассчитывается по формуле:</p>
<p><code>h = (D_фаски - D_отверстия) / (2 × tg(α / 2))</code></p>
<p>Если фаска формируется центровочным сверлом (Spot Drill 90°), глубина опускания по Z от острой вершины инструмента до получения нужного диаметра составляет:</p>
<p><code>Z_spot = D_фаски / (2 × tg(α / 2))</code> (для инструмента 90°: <code>Z_spot = D_фаски / 2</code>)</p>`,
      pl: `<h2>Poradnik wiercenia CNC, stożka wiertła i fazowania</h2>
<h3>1. Parametry skrawania przy wierceniu</h3>
<p><code>n = (1000 × Vc) / (π × D)</code> [obr/min] &nbsp;|&nbsp; <code>F = n × f</code> [mm/min]</p>

<h3>2. Długość stożka wierzchołka wiertła lp dla otworów nieprzelotowych</h3>
<p>Dla uzyskania pełnej głębokości walcowej <code>Hcyl</code> oś Z maszyny musi zagłębić się o <code>Z = Hcyl + lp</code>:</p>
<p><code>lp = (D / 2) / tg(σ / 2)</code></p>
<ul>
  <li><b>Wiertła HSS (kąt wierzchołkowy σ = 118°):</b> <code>lp ≈ 0.300 × D</code></li>
  <li><b>Wiertła węglikowe VHM (kąt wierzchołkowy σ = 140°):</b> <code>lp ≈ 0.182 × D</code></li>
</ul>

<h3>3. Głębokość fazowania i pozycja wiertła Spot Drill</h3>
<p>Głębokość zarysu fazy pogłębiaczem: <code>h = (D_fazy - D_otworu) / (2 × tg(α / 2))</code>.</p>
<p>Pełne zagłębienie Z od ostrego wierzchołka nawiertaka: <code>Z_spot = D_fazy / (2 × tg(α / 2))</code> (dla kąta 90°: <code>Z_spot = D_fazy / 2</code>).</p>`,
      en: `<h2>CNC Drilling, Drill Point Cone & Spot Drill Guide</h2>
<h3>1. Drilling Speeds and Feeds</h3>
<p>Spindle RPM and feed rate calculations for drills:</p>
<p><code>n = (1000 × Vc) / (π × D)</code> [RPM] &nbsp;|&nbsp; <code>F = n × f</code> [mm/min]</p>

<h3>2. Drill Point Cone Length lp for Blind Holes</h3>
<p>Blueprints specify cylindrical depth <code>Hcyl</code>. For the full diameter to reach that depth, the Z-axis must travel to <code>Z = Hcyl + lp</code>:</p>
<p><code>lp = (D / 2) / tan(σ / 2)</code></p>
<ul>
  <li><b>Standard HSS drills (σ = 118°):</b> <code>lp ≈ 0.300 × D</code></li>
  <li><b>Solid carbide drills (σ = 140°):</b> <code>lp ≈ 0.182 × D</code></li>
</ul>

<h3>3. Chamfer Depth & Spot Drill Z Plunge</h3>
<p>Step depth for countersinking: <code>h = (D_chamfer - D_hole) / (2 × tan(α / 2))</code>.</p>
<p>Full plunge from sharp tip of a 90° Spot Drill: <code>Z_spot = D_chamfer / (2 × tan(α / 2))</code> (for 90° tool: <code>Z_spot = D_chamfer / 2</code>).</p>`
    },

    thread: {
      ru: `<h2>Справочник по нарезанию метрической резьбы</h2>
<h3>1. Диаметр сверла под режущий метчик</h3>
<p>Для стандартной метрической резьбы с углом профиля 60° диаметр отверстия под нарезание рассчитывается по формуле:</p>
<p><code>D_drill = D - P</code> (где D — наружный диаметр резьбы, P — шаг резьбы в мм)</p>
<p><b>Примеры:</b> M6×1 → сверло Ø5.0 мм | M8×1.25 → сверло Ø6.8 мм | M10×1.5 → сверло Ø8.5 мм | M12×1.75 → сверло Ø10.2 мм.</p>

<h3>2. Диаметр отверстия под бесстружечный метчик (раскатник / Form Tap)</h3>
<p>Раскатывание формирует профиль за счёт пластической деформации металла без образования стружки. Диаметр отверстия значительно больше:</p>
<p><code>D_form = D - (P / 2) × 0.9 = D - 0.45 × P</code></p>
<p><b>Пример:</b> Для резьбы M10×1.5 раскатник требует отверстие <b>Ø9.3 мм</b>. Попытка применить сверло 8.5 мм вызовет немедленную поломку раскатника из-за заклинивания в металле.</p>

<h3>3. Внутренний диаметр и высота профиля резьбы</h3>
<ul>
  <li><b>Внутренний диаметр гайки (D1):</b> <code>D1 = D - 1.0825 × P</code></li>
  <li><b>Рабочая глубина профиля резьбы (H1):</b> <code>H1 = 0.6134 × P</code></li>
</ul>`,
      pl: `<h2>Poradnik doboru otworów pod gwintowniki metryczne</h2>
<h3>1. Wiertło pod gwintownik skrawający</h3>
<p>Średnica otworu pod gwintowanie skrawające:</p>
<p><code>D_drill = D - P</code> (gdzie D to średnica nominalna, P to skok gwintu)</p>
<p><b>Przykłady:</b> M6×1 → wiertło Ø5.0 mm | M8×1.25 → wiertło Ø6.8 mm | M10×1.5 → wiertło Ø8.5 mm | M12×1.75 → wiertło Ø10.2 mm.</p>

<h3>2. Wiertło pod wygniatak (gwintowanie bezwiórowe)</h3>
<p>Wygniatanie formuje gwint przez odkształcenie plastyczne. Otwór jest znacznie większy:</p>
<p><code>D_form = D - 0.45 × P</code></p>
<p><b>Przykład:</b> Dla gwintu M10×1.5 wygniatak wymaga otworu <b>Ø9.3 mm</b> (zamiast 8.5 mm dla gwintownika skrawającego).</p>

<h3>3. Średnica rdzenia i wysokość zarysu</h3>
<ul>
  <li><b>Średnica rdzenia nakrętki (D1):</b> <code>D1 = D - 1.0825 × P</code></li>
  <li><b>Wysokość zarysu (H1):</b> <code>H1 = 0.6134 × P</code></li>
</ul>`,
      en: `<h2>Metric Thread Sizing & Tap Drill Guide</h2>
<h3>1. Tap Drill Sizing for Cutting Taps</h3>
<p>Standard cutting tap drill diameter formula:</p>
<p><code>D_drill = D - P</code> (where D is nominal major diameter, P is pitch in mm)</p>
<p><b>Examples:</b> M6×1 → drill Ø5.0 mm | M8×1.25 → drill Ø6.8 mm | M10×1.5 → drill Ø8.5 mm | M12×1.75 → drill Ø10.2 mm.</p>

<h3>2. Hole Size for Cold Forming / Roll Taps</h3>
<p>Forming taps displace material plastically without creating chips. The required hole is significantly larger:</p>
<p><code>D_form = D - (P / 2) × 0.9 = D - 0.45 × P</code></p>
<p><b>Critical Rule:</b> For M10×1.5, a roll tap requires a <b>Ø9.3 mm hole</b>. Using an 8.5 mm drill will instantly snap the forming tap due to extreme torque.</p>

<h3>3. Minor Diameter and Thread Profile Depth</h3>
<ul>
  <li><b>Internal thread minor diameter (D1):</b> <code>D1 = D - 1.0825 × P</code></li>
  <li><b>Thread profile engagement depth (H1):</b> <code>H1 = 0.6134 × P</code></li>
</ul>`
    },

    pcd: {
      ru: `<h2>Расчёт координат PCD и применение в G-коде</h2>
<h3>1. Формулы декартовых координат отверстий</h3>
<p>Для окружности центров отверстий диаметром <code>PCD</code> с количеством отверстий <code>N</code> и начальным углом <code>α0</code> координаты каждого i-го отверстия (i = 0 ... N - 1) рассчитываются по формулам:</p>
<p><code>Xi = Xc + (PCD / 2) × cos(α0 + i × (360° / N))</code></p>
<p><code>Yi = Yc + (PCD / 2) × sin(α0 + i × (360° / N))</code></p>

<h3>2. Использование в циклах сверления ЧПУ</h3>
<p>Рассчитанные координаты можно скопировать одной кнопкой и вставить непосредственно в программу обработки после вызова сверлильного цикла <code>G81</code> (простое сверление) или <code>G83</code> (глубокое сверление с прерыванием стружки):</p>
<pre>G90 G54 G00 X0. Y0. S2800 M03
G43 H01 Z50. M08
G98 G81 Z-18. R2. F350
; вставьте скопированные координаты:
N1 X40.000 Y0.000
N2 X20.000 Y34.641
N3 X-20.000 Y34.641
N4 X-40.000 Y0.000
N5 X-20.000 Y-34.641
N6 X20.000 Y-34.641
G80 G00 Z100. M09
M30</pre>`,
      pl: `<h2>Obliczanie podziału otworów PCD i programowanie CNC</h2>
<h3>1. Wzory współrzędnych otworów na okręgu podziałowym</h3>
<p>Dla średnicy podziałowej <code>PCD</code> i liczby otworów <code>N</code>:</p>
<p><code>Xi = Xc + (PCD / 2) × cos(α0 + i × (360° / N))</code></p>
<p><code>Yi = Yc + (PCD / 2) × sin(α0 + i × (360° / N))</code></p>

<h3>2. Zastosowanie w cyklach wiercenia (G81, G83)</h3>
<p>Wygenerowane współrzędne można skopiować jednym kliknięciem i wkleić bezpośrednio do programu obróbczego pod blokiem cyklu wiercenia:</p>
<pre>G90 G54 G00 X0. Y0. S2800 M03
G43 H01 Z50. M08
G98 G81 Z-18. R2. F350
; wklejone współrzędne otworów:
N1 X40.000 Y0.000
...
G80 G00 Z100. M09
M30</pre>`,
      en: `<h2>Bolt Circle (PCD) Hole Pattern & CNC G-code Guide</h2>
<h3>1. Polar to Cartesian Coordinate Calculations</h3>
<p>For a bolt circle of diameter <code>PCD</code>, total hole count <code>N</code>, and starting angle <code>α0</code>, each hole coordinate (i = 0 to N - 1) is:</p>
<p><code>Xi = Xc + (PCD / 2) × cos(α0 + i × (360° / N))</code></p>
<p><code>Yi = Yc + (PCD / 2) × sin(α0 + i × (360° / N))</code></p>

<h3>2. Using Coordinates with CNC Canned Cycles</h3>
<p>Copy the generated coordinates with one click and paste directly below a canned drilling cycle (e.g. <code>G81</code> for basic drilling or <code>G83</code> for peck drilling):</p>
<pre>G90 G54 G00 X0. Y0. S2800 M03
G43 H01 Z50. M08
G98 G81 Z-18. R2. F350
; pasted hole coordinates:
N1 X40.000 Y0.000
N2 X20.000 Y34.641
...
G80 G00 Z100. M09
M30</pre>`
    }
  };
  return (guides[type] && (guides[type][lang] || guides[type].en)) || '';
}

// 3. Pre-render Articles HTML
function preRenderArticleCard(a, lang, inSubdir = false) {
  const tag = a.tag[lang] || a.tag.en;
  const title = a.title[lang] || a.title.en;
  const summary = a.summary[lang] || a.summary.en;
  const href = inSubdir ? `${a.id}.html` : `articles/${a.id}.html`;
  return `<a class="card art-card" href="${href}">` +
    `<span class="tag">${escHtml(tag)}</span>` +
    `<h3>${escHtml(title)}</h3>` +
    `<p>${escHtml(summary)}</p>` +
    `<span class="more">${escHtml(t(lang, 'read_more'))}</span>` +
    `</a>`;
}

function preRenderArticlesList(lang) {
  return articles.map(a => preRenderArticleCard(a, lang, false)).join('\n');
}

function preRenderHomeArticles(lang) {
  return articles.slice(0, 6).map(a => preRenderArticleCard(a, lang, false)).join('\n');
}

// 4. Pre-render Codes Table
function preRenderCodesTable(lang) {
  const langIdx = { ru: 1, pl: 2, en: 3 }[lang] || 3;
  const header = `<tr><th>${escHtml(t(lang, 'col_code'))}</th><th>${escHtml(t(lang, 'col_desc'))}</th><th>${escHtml(t(lang, 'col_ex'))}</th></tr>`;
  const rows = GCODES.slice(0, 50).map(r => {
    return `<tr><td class="code">${escHtml(r[0])}</td><td>${escHtml(r[langIdx])}</td><td class="ex">${escHtml(r[4])}</td></tr>`;
  }).join('');
  return header + rows;
}

// 5. Pre-render Materials Table
function preRenderMatTable(lang) {
  const header = `<tr><th>${escHtml(t(lang, 'col_mat'))}</th><th>${escHtml(t(lang, 'col_vc'))}</th><th>${escHtml(t(lang, 'col_den'))}</th><th>${escHtml(t(lang, 'col_kc'))}</th></tr>`;
  const rows = MATERIALS.map(m => {
    return `<tr><td>${escHtml(t(lang, m.k))}</td><td>${m.vc}</td><td>${m.den}</td><td>${m.kc}</td></tr>`;
  }).join('');
  return header + rows;
}

// 6. Pre-render Article Body (supports specific article or default fallback)
function preRenderArticleBody(lang, targetArticle = null, inSubdir = false) {
  const a0 = targetArticle || articles[0];
  const title = a0.title[lang] || a0.title.en;
  const body = a0.body[lang] || a0.body.en;
  const others = articles.filter(x => x.id !== a0.id).slice(0, 3).map(a => preRenderArticleCard(a, lang, inSubdir)).join('');
  return `<h1>${escHtml(title)}</h1>${body}<h2>${escHtml(t(lang, 'latest'))}</h2><div class="grid">${others}</div>`;
}

const HERO_TERMINAL_CODE = [
  'O0001 (CNCHELPER)',
  'G21 G90 G54 G17 G40 G49',
  'T01 M06',
  'S3183 M03   ; D12 Vc120',
  'G43 H01 Z50. M08',
  'G00 X0 Y0',
  'G01 Z-5. F150',
  'G01 X100. F764   ; z4 fz0.06',
  'G02 X100. Y20. R20.',
  'G01 Y60.',
  'G00 Z100. M09',
  'M05',
  'M30'
].join('\n');

// 7. Full Page Translation & SSR Hydration
function translateHtml(templateHtml, lang, pageKey, file, targetArticle = null, inSubdir = false) {
  let html = templateHtml;

  // Substitute data-i18n tags with translated text (handles nav menu, titles, buttons, footers)
  html = html.replace(/(<([a-zA-Z0-9]+)(?:\s+[^>]*?)?\s+data-i18n="([^"]+)"(?:\s+[^>]*?)?>)([\s\S]*?)(<\/\2>)/g, (match, open, tag, key, inner, close) => {
    const val = t(lang, key);
    return `${open}${escHtml(val)}${close}`;
  });

  // Substitute data-i18n-ph placeholder attributes
  html = html.replace(/data-i18n-ph="([^"]+)"/g, (match, key) => {
    return `data-i18n-ph="${key}" placeholder="${escHtml(t(lang, key))}"`;
  });

  // Set selected language in dropdown
  html = html.replace(new RegExp(`(<option\\s+value="${lang}")(>)`, 'i'), '$1 selected$2');

  // Insert pre-rendered contents into static DOM containers
  if (pageKey === 'index') {
    html = html.replace('<pre id="termCode"></pre>', `<pre id="termCode">${escHtml(HERO_TERMINAL_CODE)}</pre>`);
    html = html.replace(/<b id="statArt">\d+<\/b>/, `<b id="statArt">${articles.length}</b>`);
    html = html.replace('<div class="grid calcs" id="calcsQuick"></div>', `<div class="grid calcs" id="calcsQuick">${preRenderQuickCalcs(lang)}</div>`);
    html = html.replace('<div class="grid" id="homeArticles"></div>', `<div class="grid" id="homeArticles">${preRenderHomeArticles(lang)}</div>`);
  } else if (pageKey === 'calculators') {
    html = html.replace('<div class="grid calcs" id="calcsCut"></div>', `<div class="grid calcs" id="calcsCut">${preRenderCalcGrid('cut', lang)}</div>`);
    html = html.replace('<div class="grid calcs" id="calcsThread"></div>', `<div class="grid calcs" id="calcsThread">${preRenderCalcGrid('thread', lang)}</div>`);
    html = html.replace('<div class="grid calcs" id="calcsTrig"></div>', `<div class="grid calcs" id="calcsTrig">${preRenderCalcGrid('trig', lang)}</div>`);
    html = html.replace('<div class="grid calcs" id="calcsTol"></div>', `<div class="grid calcs" id="calcsTol">${preRenderCalcGrid('tol', lang)}</div>`);
    html = html.replace('<table id="matTable"></table>', `<table id="matTable">${preRenderMatTable(lang)}</table>`);
  } else if (pageKey === 'codes') {
    html = html.replace('<table id="codesTable"></table>', `<table id="codesTable">${preRenderCodesTable(lang)}</table>`);
    // Pre-populate control options
    const ctlOptions = Object.entries(CONTROLS).map(([k, v]) => `<option value="${k}">${escHtml(t(lang, v.k))}</option>`).join('');
    html = html.replace('<select id="ctlSel"></select>', `<select id="ctlSel">${ctlOptions}</select>`);
  } else if (pageKey === 'articles') {
    html = html.replace('<div class="grid" id="articlesList"></div>', `<div class="grid" id="articlesList">${preRenderArticlesList(lang)}</div>`);
  } else if (pageKey === 'article') {
    html = html.replace('<article class="card article" id="articleBody"></article>', `<article class="card article" id="articleBody">${preRenderArticleBody(lang, targetArticle, inSubdir)}</article>`);
  } else if (pageKey === 'calc-turning') {
    html = html.replace('<div class="grid calcs" id="calcsTurning"></div>', `<div class="grid calcs" id="calcsTurning">${preRenderDedicatedCalcs('turning', lang)}</div>`);
    html = html.replace('<div class="seo-guide" id="seoGuideTurning"></div>', `<div class="seo-guide" id="seoGuideTurning">${preRenderSeoGuide('turning', lang)}</div>`);
  } else if (pageKey === 'calc-milling') {
    html = html.replace('<div class="grid calcs" id="calcsMilling"></div>', `<div class="grid calcs" id="calcsMilling">${preRenderDedicatedCalcs('milling', lang)}</div>`);
    html = html.replace('<div class="seo-guide" id="seoGuideMilling"></div>', `<div class="seo-guide" id="seoGuideMilling">${preRenderSeoGuide('milling', lang)}</div>`);
  } else if (pageKey === 'calc-drilling') {
    html = html.replace('<div class="grid calcs" id="calcsDrilling"></div>', `<div class="grid calcs" id="calcsDrilling">${preRenderDedicatedCalcs('drilling', lang)}</div>`);
    html = html.replace('<div class="seo-guide" id="seoGuideDrilling"></div>', `<div class="seo-guide" id="seoGuideDrilling">${preRenderSeoGuide('drilling', lang)}</div>`);
  } else if (pageKey === 'calc-thread') {
    html = html.replace('<div class="grid calcs" id="calcsThreadDedicated"></div>', `<div class="grid calcs" id="calcsThreadDedicated">${preRenderDedicatedCalcs('thread', lang)}</div>`);
    html = html.replace('<div class="seo-guide" id="seoGuideThread"></div>', `<div class="seo-guide" id="seoGuideThread">${preRenderSeoGuide('thread', lang)}</div>`);
  } else if (pageKey === 'calc-pcd') {
    html = html.replace('<div class="grid calcs" id="calcsPcd"></div>', `<div class="grid calcs" id="calcsPcd">${preRenderDedicatedCalcs('pcd', lang)}</div>`);
    html = html.replace('<div class="seo-guide" id="seoGuidePcd"></div>', `<div class="seo-guide" id="seoGuidePcd">${preRenderSeoGuide('pcd', lang)}</div>`);
  }

  // Remove non-matching .page sections for clean, isolated SEO landing pages
  const targetPage = pageKey === 'index' ? 'home' : (pageKey === 'calculators' ? 'calc' : pageKey);
  html = html.replace(/<section class="page" data-page="([^"]+)">[\s\S]*?<\/section>/g, (sectionMatch, pageData) => {
    return pageData === targetPage ? sectionMatch : '';
  });
  if (pageKey !== 'index') {
    // Remove home-only hero on inner pages
    html = html.replace(/<!-- HOME HERO -->[\s\S]*?<\/section>/, '');
  } else {
    // On home page, remove layout
    html = html.replace(/<div class="layout" id="layout">[\s\S]*?<\/aside>\s*<\/div>/, '');
  }

  return html;
}

// 8. Generate Static Pages
const templateHtml = fs.readFileSync(path.join(root, 'template.html'), 'utf8');

const pagesToBuild = [
  { key: 'index', file: 'index.html', route: 'home' },
  { key: 'calculators', file: 'calculators.html', route: 'calc' },
  { key: 'calc-turning', file: 'calc-turning.html', route: 'calc-turning' },
  { key: 'calc-milling', file: 'calc-milling.html', route: 'calc-milling' },
  { key: 'calc-drilling', file: 'calc-drilling.html', route: 'calc-drilling' },
  { key: 'calc-thread', file: 'calc-thread.html', route: 'calc-thread' },
  { key: 'calc-pcd', file: 'calc-pcd.html', route: 'calc-pcd' },
  { key: 'codes', file: 'codes.html', route: 'codes' },
  { key: 'articles', file: 'articles.html', route: 'articles' },
  { key: 'article', file: 'article.html', route: 'article' },
  { key: 'privacy', file: 'privacy.html', route: 'privacy' },
  { key: 'about', file: 'about.html', route: 'about' }
];

console.log('Generating pre-rendered static HTML pages...');

function buildMetaDesc(text) {
  let s = String(text || '').replace(/\s+/g, ' ').trim();
  if (s.length <= 155) return s;
  const cut = s.slice(0, 152);
  const idx = cut.lastIndexOf(' ');
  return (idx > 90 ? cut.slice(0, idx) : cut) + '...';
}

langs.forEach(lang => {
  const dir = path.join(root, lang);
  const artDir = path.join(dir, 'articles');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(artDir)) fs.mkdirSync(artDir, { recursive: true });

  pagesToBuild.forEach(p => {
    const meta = (seo.pages[p.key] && seo.pages[p.key][lang]) || { t: 'CNCHelper', d: 'CNC Machinist Toolkit' };
    const canonical = `${domain}/${lang}/${p.file}`;
    const hreflangs = langs.map(l => `<link rel="alternate" hreflang="${l}" href="${domain}/${l}/${p.file}">`).join('\n') +
      `\n<link rel="alternate" hreflang="x-default" href="${domain}/en/${p.file}">` +
      (p.key === 'article' ? '\n<meta name="robots" content="noindex, follow">' : '');

    let jsonLd = '';
    if (p.route === 'article') {
      jsonLd = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        inLanguage: lang,
        url: canonical,
        headline: meta.t.split('|')[0].trim(),
        description: meta.d,
        image: `${domain}/images/hero.jpg`
      });
    } else {
      jsonLd = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        inLanguage: lang,
        url: canonical,
        name: meta.t,
        description: meta.d
      });
    }

    let out = templateHtml
      .replace(/{{LANG}}/g, lang)
      .replace(/{{TITLE}}/g, escHtml(meta.t))
      .replace(/{{DESC}}/g, escHtml(meta.d))
      .replace(/{{CANONICAL}}/g, canonical)
      .replace(/{{HREFLANGS}}/g, hreflangs)
      .replace(/{{DOMAIN}}/g, domain)
      .replace(/{{OGLOCALE}}/g, ogLocales[lang])
      .replace(/{{JSONLD}}/g, jsonLd)
      .replace(/{{ROUTE}}/g, p.route)
      .replace(/{{ARTICLE}}/g, '')
      .replace(/{{FILE}}/g, p.file);

    // Apply translations and SSR pre-rendering
    out = translateHtml(out, lang, p.key, p.file);

    fs.writeFileSync(path.join(dir, p.file), out, 'utf8');
  });

  // Generate individual static SEO pages for every article: /{lang}/articles/{id}.html
  articles.forEach(a => {
    const artTitle = (a.title[lang] || a.title.en) + ' | CNCHelper';
    const artDesc = buildMetaDesc(a.summary[lang] || a.summary.en);
    const relFile = `articles/${a.id}.html`;
    const canonical = `${domain}/${lang}/${relFile}`;
    const hreflangs = langs.map(l => `<link rel="alternate" hreflang="${l}" href="${domain}/${l}/${relFile}">`).join('\n') +
      `\n<link rel="alternate" hreflang="x-default" href="${domain}/en/${relFile}">`;

    const jsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      inLanguage: lang,
      url: canonical,
      headline: a.title[lang] || a.title.en,
      description: artDesc,
      image: `${domain}/images/hero.jpg`
    });

    let out = templateHtml
      .replace(/{{LANG}}/g, lang)
      .replace(/{{TITLE}}/g, escHtml(artTitle))
      .replace(/{{DESC}}/g, escHtml(artDesc))
      .replace(/{{CANONICAL}}/g, canonical)
      .replace(/{{HREFLANGS}}/g, hreflangs)
      .replace(/{{DOMAIN}}/g, domain)
      .replace(/{{OGLOCALE}}/g, ogLocales[lang])
      .replace(/{{JSONLD}}/g, jsonLd)
      .replace(/{{ROUTE}}/g, 'article')
      .replace(/{{ARTICLE}}/g, a.id)
      .replace(/{{FILE}}/g, relFile);

    out = translateHtml(out, lang, 'article', relFile, a, true);

    // Adjust relative paths for 2-level depth (/{lang}/articles/{id}.html)
    out = out
      .replace(/href="\.\.\/css\//g, 'href="../../css/')
      .replace(/src="\.\.\/js\//g, 'src="../../js/')
      .replace(/href="(index|calculators|calc-turning|calc-milling|calc-drilling|calc-thread|calc-pcd|codes|articles|privacy|about)\.html"/g, 'href="../$1.html"');

    fs.writeFileSync(path.join(artDir, `${a.id}.html`), out, 'utf8');
  });
});

console.log(`Static pages & ${articles.length} individual article pages generated for ru/, pl/, en/.`);

// 9. Generate sitemap.xml
console.log('Generating sitemap.xml...');
const today = new Date().toISOString().slice(0, 10);
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

// Main pages (exclude fallback article.html)
pagesToBuild.filter(p => p.key !== 'article').forEach(p => {
  langs.forEach(l => {
    sitemap += `  <url><loc>${domain}/${l}/${p.file}</loc><lastmod>${today}</lastmod>\n`;
    langs.forEach(alt => {
      sitemap += `    <xhtml:link rel="alternate" hreflang="${alt}" href="${domain}/${alt}/${p.file}"/>\n`;
    });
    sitemap += '  </url>\n';
  });
});

// Static SEO article URLs
articles.forEach(a => {
  langs.forEach(l => {
    sitemap += `  <url><loc>${domain}/${l}/articles/${a.id}.html</loc><lastmod>${today}</lastmod>\n`;
    langs.forEach(alt => {
      sitemap += `    <xhtml:link rel="alternate" hreflang="${alt}" href="${domain}/${alt}/articles/${a.id}.html"/>\n`;
    });
    sitemap += '  </url>\n';
  });
});

sitemap += '</urlset>\n';
fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap, 'utf8');

// 10. Generate robots.txt
console.log('Generating robots.txt...');
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`;
fs.writeFileSync(path.join(root, 'robots.txt'), robots, 'utf8');

// 11. Generate root index.html
console.log('Generating root index.html...');
const rootIndex = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>CNCHelper</title>
<meta name="description" content="CNC operator toolkit / Pomocnik operatora CNC / Pomoshchnik operatora CHPU">
<link rel="canonical" href="${domain}/en/index.html">
<link rel="alternate" hreflang="ru" href="${domain}/ru/index.html">
<link rel="alternate" hreflang="pl" href="${domain}/pl/index.html">
<link rel="alternate" hreflang="en" href="${domain}/en/index.html">
<link rel="alternate" hreflang="x-default" href="${domain}/en/index.html">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1775700331598232"
     crossorigin="anonymous"></script>
<script>
var s=localStorage.getItem('lang'),n=(navigator.language||'en').slice(0,2),l=['ru','pl','en'].indexOf(s)>-1?s:(['ru','pl'].indexOf(n)>-1?n:'en');
location.replace(l+'/index.html');
</script>
<noscript><meta http-equiv="refresh" content="0; url=en/index.html"></noscript>
</head><body><p><a href="ru/index.html">RU</a> · <a href="pl/index.html">PL</a> · <a href="en/index.html">EN</a></p></body></html>
`;
fs.writeFileSync(path.join(root, 'index.html'), rootIndex, 'utf8');

// 12. Generate 404.html
console.log('Generating 404.html...');
const notFound = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<title>CNCHelper</title>
<script>
var path = location.pathname;
var m = path.match(/\\/(ru|pl|en)\\/article-([^/]+)\\.html/);
if (m) {
  location.replace('/' + m[1] + '/article.html?id=' + m[2]);
} else {
  location.replace('/en/index.html');
}
</script>
<noscript><meta http-equiv="refresh" content="0; url=/en/index.html"></noscript>
</head><body><p>Redirecting to <a href="/en/index.html">CNCHelper</a>...</p></body></html>
`;
fs.writeFileSync(path.join(root, '404.html'), notFound, 'utf8');

console.log('Build completed successfully!');
