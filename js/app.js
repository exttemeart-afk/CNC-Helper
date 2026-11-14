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
    const btn = $("#themeBtn");
    if (btn) btn.textContent = th === "dark" ? "☀️" : "🌙";
  }
  const themeBtn = $("#themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () =>
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"));
  }

  /* ---------- language: each language lives in its own folder (SEO) ---------- */
  const langSel = $("#lang");
  const isDeepArticle = file && file.indexOf("articles/") === 0;
  if (langSel) {
    langSel.value = lang;
    langSel.addEventListener("change", e => {
      const q = (route === "article" && !articleId && location.search) ? location.search : (location.hash || "");
      const prefix = isDeepArticle ? "../../" : "../";
      location.href = prefix + e.target.value + "/" + file + q;
    });
  }
  $$("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  $$("[data-i18n-ph]").forEach(e => e.placeholder = t(e.dataset.i18nPh));

  /* ---------- renderers ---------- */
  const articleHref = id => (isDeepArticle ? "" : "articles/") + id + ".html";
  const articleCard = a => `<a class="card art-card" href="${articleHref(a.id)}"><span class="tag">${esc(li(a.tag))}</span>
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
      const qParam = new URLSearchParams(location.search).get("id");
      const qId = qParam || (location.hash ? location.hash.replace("#", "") : "") || articleId;
      if (!articleId && qParam && ARTICLES.some(x => x.id === qParam)) {
        location.replace("articles/" + qParam + ".html");
        return;
      }
      const a = ARTICLES.find(x => x.id === qId) || ARTICLES[0];
      if (a && !articleId) {
        document.title = li(a.title) + " | CNCHelper";
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
    if ($("#calcsThread")) renderCalcGrid($("#calcsThread"), t, c => c.group === "thread");
    if ($("#calcsTrig")) renderCalcGrid($("#calcsTrig"), t, c => c.group === "trig");
    if ($("#calcsTol")) renderCalcGrid($("#calcsTol"), t, c => c.group === "tol");

    // Dedicated Landing Pages
    if ($("#calcsTurning")) renderCalcGrid($("#calcsTurning"), t, c => c.id === "turn" || c.id === "tnrc" || c.id === "taper");
    if ($("#calcsMilling")) renderCalcGrid($("#calcsMilling"), t, c => c.id === "mill" || c.id === "spindle_torque" || c.id === "ball_eff");
    if ($("#calcsDrilling")) renderCalcGrid($("#calcsDrilling"), t, c => c.id === "drill" || c.id === "drill_depth");
    if ($("#calcsThreadDedicated")) renderCalcGrid($("#calcsThreadDedicated"), t, c => c.id === "thread" || c.id === "thread_mill" || c.id === "thread_wires" || c.id === "thread_inch");
    if ($("#calcsPcd")) renderCalcGrid($("#calcsPcd"), t, c => c.id === "bolt" || c.id === "hole_grid");
  }
  window.rerenderCalcs = renderCalcPages;

  /* ---------- global copy handler for bolt PCD ---------- */
  window.copyBoltGcode = function (btn) {
    if (!btn) return;
    const card = btn.closest(".card");
    if (!card) return;
    const resEls = card.querySelectorAll(".results .res b");
    if (!resEls.length) return;
    const lines = Array.from(resEls).map((b, i) => `N${i + 1} ${b.textContent.trim()}`).join("\n");
    const origText = btn.textContent;
    const onDone = () => {
      btn.textContent = t("copied_ok");
      setTimeout(() => { btn.textContent = origText; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lines).then(onDone).catch(() => {
        const ta = document.createElement("textarea");
        ta.value = lines;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        onDone();
      });
    } else {
      const ta = document.createElement("textarea");
      ta.value = lines;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      onDone();
    }
  };

  /* ---------- hero terminal animation ---------- */
  function typeTerminal() {
    const el = $("#termCode"); if (!el) return;
    const lines = ["O0001 (CNCHELPER)", "G21 G90 G54 G17 G40 G49", "T01 M06", "S3183 M03   ; D12 Vc120", "G43 H01 Z50. M08",
      "G00 X0 Y0", "G01 Z-5. F150", "G01 X100. F764   ; z4 fz0.06", "G02 X100. Y20. R20.", "G01 Y60.", "G00 Z100. M09", "M05", "M30"];
    el.textContent = lines.join("\n");
  }

  /* ---------- events ---------- */
  const burger = $("#burger"), nav = $("#nav");
  if (burger && nav) {
    burger.addEventListener("click", () => nav.classList.toggle("open"));
  }
  const navDrop = $(".nav-dropdown");
  if (navDrop) {
    const dropBtn = $(".nav-drop-btn", navDrop);
    if (dropBtn) {
      dropBtn.addEventListener("click", e => {
        if (window.innerWidth <= 720) {
          e.preventDefault();
          navDrop.classList.toggle("open");
        }
      });
    }
  }

  $$("[data-route-link]").forEach(a => {
    const lk = a.dataset.routeLink;
    const isAct = lk === route || (lk === "articles" && route === "article") || (lk === "calc" && (route === "calc" || route.startsWith("calc-")));
    a.classList.toggle("active", isAct);
  });

  if ($("#ctlSel")) {
    $("#ctlSel").innerHTML = Object.entries(CONTROLS).map(([k, v]) => `<option value="${k}">${t(v.k)}</option>`).join("");
    $("#ctlSel").addEventListener("change", e => { ctl = e.target.value; renderCodes(); });
    const codeSearch = $("#codeSearch");
    if (codeSearch) codeSearch.addEventListener("input", renderCodes);
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

  /* ---------- contact / about page ---------- */
  const copyEmailBtn = $("#copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = "Exttemeart@gmail.com";
      const done = () => {
        const orig = copyEmailBtn.textContent;
        copyEmailBtn.textContent = t("contact_copied");
        setTimeout(() => { copyEmailBtn.textContent = orig; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done).catch(() => {});
      }
    });
  }
  const contactForm = $("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = ($("#cfName") && $("#cfName").value.trim()) || "";
      const email = ($("#cfEmail") && $("#cfEmail").value.trim()) || "";
      const subj = ($("#cfSubj") && $("#cfSubj").value.trim()) || "CNCHelper Feedback";
      const msg = ($("#cfMsg") && $("#cfMsg").value.trim()) || "";
      const body = `Name: ${name}\nReply-To: ${email}\n\n${msg}`;
      location.href = `mailto:Exttemeart@gmail.com?subject=${encodeURIComponent("[CNCHelper] " + subj)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
