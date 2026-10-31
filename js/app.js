(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const body = document.body;
  const route = body.dataset.route, articleId = body.dataset.article, file = body.dataset.file;
  const lang = document.documentElement.lang in I18N ? document.documentElement.lang : "en";
  let ctl = "iso", codeTab = "G";

  const t = k => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;
  const li = o => o[lang] || o.en;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

  /* ---------- theme ---------- */
  function setTheme(th) {
    document.documentElement.setAttribute("data-theme", th);
    localStorage.setItem("theme", th);
    $("#themeBtn").textContent = th === "dark" ? "☀️" : "🌙";
  }
  $("#themeBtn").addEventListener("click", () =>
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"));

  /* ---------- language: each language lives in its own folder (SEO) ---------- */
  $("#lang").value = lang;
  $("#lang").addEventListener("change", e => { location.href = "../" + e.target.value + "/" + file + location.hash; });
  $$("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  $$("[data-i18n-ph]").forEach(e => e.placeholder = t(e.dataset.i18nPh));

  /* ---------- renderers ---------- */
  const articleCard = a => `<a class="card art-card" href="article-${a.id}.html"><span class="tag">${esc(li(a.tag))}</span>
      <h3>${esc(li(a.title))}</h3><p>${esc(li(a.summary))}</p><span class="more">${t("read_more")}</span></a>`;

  let activeTag = "";
  function renderArticles() {
    if ($("#statArt")) $("#statArt").textContent = ARTICLES.length;
    if ($("#articlesList")) {
      const tags = [...new Set(ARTICLES.map(a => li(a.tag)))];
      if ($("#artTags") && !$("#artTags").children.length) {
        $("#artTags").innerHTML = `<button class="pill active" data-tag="">${esc(t("tag_all"))}</button>` +
          tags.map(tg => `<button class="pill" data-tag="${esc(tg)}">${esc(tg)}</button>`).join("");
        $("#artTags").addEventListener("click", e => {
          const b = e.target.closest(".pill"); if (!b) return;
          activeTag = b.dataset.tag;
          $$(".pill", $("#artTags")).forEach(x => x.classList.toggle("active", x === b));
          renderArticles();
        });
      }
      const q = ($("#artSearch") && $("#artSearch").value.trim().toLowerCase()) || "";
      const list = ARTICLES.filter(a => (!activeTag || li(a.tag) === activeTag) &&
        (!q || li(a.title).toLowerCase().includes(q) || li(a.summary).toLowerCase().includes(q) || li(a.body).toLowerCase().includes(q)));
      $("#articlesList").innerHTML = list.length ? list.map(articleCard).join("") : `<p class="note">${t("no_results")}</p>`;
    }
    if ($("#homeArticles")) $("#homeArticles").innerHTML = ARTICLES.slice(0, 6).map(articleCard).join("");
    if (route === "article") {
      const a = ARTICLES.find(x => x.id === articleId);
      if (a) {
        $("#articleBody").innerHTML = `<h1>${esc(li(a.title))}</h1>${li(a.body)}`;
        const others = ARTICLES.filter(x => x.id !== a.id).slice(0, 3);
        $("#articleBody").insertAdjacentHTML("beforeend", `<h2>${t("latest")}</h2><div class="grid">${others.map(articleCard).join("")}</div>`);
      }
    }
  }
  function renderMatTable() {
    $("#matTable").innerHTML = `<tr><th>${t("col_mat")}</th><th>${t("col_vc")}</th><th>${t("col_den")}</th><th>${t("col_kc")}</th></tr>` +
      MATERIALS.map(m => `<tr><td>${t(m.k)}</td><td>${m.vc}</td><td>${m.den}</td><td>${m.kc}</td></tr>`).join("");
  }

  const langIdx = {ru:1, pl:2, en:3}[lang];
  function renderCodes() {
    const q = $("#codeSearch").value.trim().toLowerCase();
    const c = CONTROLS[ctl];
    const all = c.sets ? c.sets[codeTab] : c.list;
    const rows = all.filter(r => !q || r[0].toLowerCase().includes(q) || r.slice(1, 4).some(s => s.toLowerCase().includes(q)));
    $("#gmTabs").style.display = c.sets ? "" : "none";
    $("#codesTable").innerHTML = `<tr><th>${t("col_code")}</th><th>${t("col_desc")}</th><th>${t("col_ex")}</th></tr>` +
      (rows.length ? rows.map(r => `<tr><td class="code">${esc(r[0])}</td><td>${esc(r[langIdx])}</td><td class="ex">${esc(r[4])}</td></tr>`).join("")
        : `<tr><td colspan="3">${t("no_results")}</td></tr>`);
  }

  function renderCalcPages() {
    if (route === "home" && $("#calcsQuick")) renderCalcGrid($("#calcsQuick"), t, c => c.id === "mill" || c.id === "mass" || c.id === "turn");
    if ($("#calcsCut")) renderCalcGrid($("#calcsCut"), t, c => c.group === "cut");
    if ($("#calcsTrig")) renderCalcGrid($("#calcsTrig"), t, c => c.group === "trig");
  }
  window.rerenderCalcs = renderCalcPages;

  /* ---------- hero terminal animation ---------- */
  function typeTerminal() {
    const el = $("#termCode"); if (!el) return;
    const lines = ["O0001 (CNCHELPER)", "G21 G90 G54 G17 G40 G49", "T01 M06", "S3183 M03   ; D12 Vc120", "G43 H01 Z50. M08",
      "G00 X0 Y0", "G01 Z-5. F764   ; z4 fz0.06", "G01 X80. F764", "G02 X100. Y20. R20.", "G01 Y60.", "G00 Z100. M09", "M05", "M30"];
    const full = lines.join("\n");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = full; return; }
    let i = 0;
    (function tick() {
      i++; el.textContent = full.slice(0, i) + "▌";
      if (i < full.length) setTimeout(tick, full[i] === "\n" ? 220 : 35);
      else { el.textContent = full; setTimeout(() => { i = 0; tick(); }, 4000); }
    })();
  }

  /* ---------- events ---------- */
  $("#burger").addEventListener("click", () => $("#nav").classList.toggle("open"));
  $$("[data-route-link]").forEach(a => a.classList.toggle("active", a.dataset.routeLink === (route === "article" ? "articles" : route)));

  if ($("#ctlSel")) {
    $("#ctlSel").innerHTML = Object.entries(CONTROLS).map(([k, v]) => `<option value="${k}">${t(v.k)}</option>`).join("");
    $("#ctlSel").addEventListener("change", e => { ctl = e.target.value; renderCodes(); });
    $("#codeSearch").addEventListener("input", renderCodes);
    $$(".tab").forEach(b => b.addEventListener("click", () => {
      codeTab = b.dataset.tab;
      $$(".tab").forEach(x => x.classList.toggle("active", x === b));
      renderCodes();
    }));
    renderCodes();
  }

  setTheme(document.documentElement.getAttribute("data-theme"));
  if ($("#artSearch")) $("#artSearch").addEventListener("input", renderArticles);
  renderArticles();
  if ($("#matTable")) renderMatTable();
  renderCalcPages();
  if ($("#savedList")) renderSaved($("#savedList"), t);
  typeTerminal();
})();
