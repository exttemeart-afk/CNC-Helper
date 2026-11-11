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
    const lastDot = cut.lastIndexOf('. ');
    if (lastDot > 60) summary = cut.slice(0, lastDot + 1);
    else summary = cut.replace(/\s+\S*$/, '') + '…';
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
        return `<div class="res"><span>${escHtml(label)}</span><b>${escHtml(text)}</b></div>`;
      }).join('');
    }
  } catch (err) {
    resultsHtml = `<span>${escHtml(tLang('invalid'))}</span>`;
  }

  return `<div class="card calc"><h3><span>${c.ic}</span>${escHtml(tLang(c.t))}</h3>${fieldsHtml}<div class="results">${resultsHtml}</div><button class="btn-save">${escHtml(tLang('save'))}</button></div>`;
}

function preRenderCalcGrid(group, lang) {
  return CALCS.filter(c => c.group === group).map(c => preRenderCalcCard(c, lang)).join('\n');
}

function preRenderQuickCalcs(lang) {
  return CALCS.filter(c => c.id === 'mill' || c.id === 'mass' || c.id === 'turn').map(c => preRenderCalcCard(c, lang)).join('\n');
}

// 3. Pre-render Articles HTML
function preRenderArticleCard(a, lang) {
  const tag = a.tag[lang] || a.tag.en;
  const title = a.title[lang] || a.title.en;
  const summary = a.summary[lang] || a.summary.en;
  return `<a class="card art-card" href="article.html?id=${a.id}">` +
    `<span class="tag">${escHtml(tag)}</span>` +
    `<h3>${escHtml(title)}</h3>` +
    `<p>${escHtml(summary)}</p>` +
    `<span class="more">${escHtml(t(lang, 'read_more'))}</span>` +
    `</a>`;
}

function preRenderArticlesList(lang) {
  return articles.map(a => preRenderArticleCard(a, lang)).join('\n');
}

function preRenderHomeArticles(lang) {
  return articles.slice(0, 6).map(a => preRenderArticleCard(a, lang)).join('\n');
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

// 6. Pre-render Default Article
function preRenderArticleBody(lang) {
  const a0 = articles[0];
  const title = a0.title[lang] || a0.title.en;
  const body = a0.body[lang] || a0.body.en;
  const others = articles.slice(1, 4).map(a => preRenderArticleCard(a, lang)).join('');
  return `<h1>${escHtml(title)}</h1>${body}<h2>${escHtml(t(lang, 'latest'))}</h2><div class="grid">${others}</div>`;
}

// 7. Full Page Translation & SSR Hydration
function translateHtml(templateHtml, lang, pageKey, file) {
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
    html = html.replace('<article class="card article" id="articleBody"></article>', `<article class="card article" id="articleBody">${preRenderArticleBody(lang)}</article>`);
  }

  return html;
}

// 8. Generate Static Pages
const templateHtml = fs.readFileSync(path.join(root, 'template.html'), 'utf8');

const pagesToBuild = [
  { key: 'index', file: 'index.html', route: 'home' },
  { key: 'calculators', file: 'calculators.html', route: 'calc' },
  { key: 'codes', file: 'codes.html', route: 'codes' },
  { key: 'articles', file: 'articles.html', route: 'articles' },
  { key: 'article', file: 'article.html', route: 'article' }
];

console.log('Generating pre-rendered static HTML pages...');

langs.forEach(lang => {
  const dir = path.join(root, lang);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  pagesToBuild.forEach(p => {
    const meta = (seo.pages[p.key] && seo.pages[p.key][lang]) || { t: 'CNCHelper', d: 'CNC Machinist Toolkit' };
    const canonical = `${domain}/${lang}/${p.file}`;
    const hreflangs = langs.map(l => `<link rel="alternate" hreflang="${l}" href="${domain}/${l}/${p.file}">`).join('\n') +
      `\n<link rel="alternate" hreflang="x-default" href="${domain}/en/${p.file}">`;

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
});

console.log('Static pages generated for ru/, pl/, en/.');

// 9. Generate sitemap.xml
console.log('Generating sitemap.xml...');
const today = new Date().toISOString().slice(0, 10);
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

// Main pages
pagesToBuild.forEach(p => {
  langs.forEach(l => {
    sitemap += `  <url><loc>${domain}/${l}/${p.file}</loc><lastmod>${today}</lastmod>\n`;
    langs.forEach(alt => {
      sitemap += `    <xhtml:link rel="alternate" hreflang="${alt}" href="${domain}/${alt}/${p.file}"/>\n`;
    });
    sitemap += '  </url>\n';
  });
});

// Deep article URLs
articles.forEach(a => {
  langs.forEach(l => {
    sitemap += `  <url><loc>${domain}/${l}/article.html?id=${a.id}</loc><lastmod>${today}</lastmod>\n`;
    langs.forEach(alt => {
      sitemap += `    <xhtml:link rel="alternate" hreflang="${alt}" href="${domain}/${alt}/article.html?id=${a.id}"/>\n`;
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
