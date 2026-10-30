/* Cookie consent + ad loader.
   The AdSense script is loaded ONLY after the visitor accepts. To add an ad block anywhere, just put
   <ins class="adsbygoogle" ... data-ad-slot="..."></ins> in template.html (no inline push script needed). */
(function () {
  const KEY = "cookie_consent";
  const lang = document.documentElement.lang in I18N ? document.documentElement.lang : "en";
  const t = k => I18N[lang][k] || I18N.en[k];
  const ADS_SRC = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1775700331598232";
  let adsLoaded = false;

  function loadAds() {
    if (adsLoaded) return; adsLoaded = true;
    const s = document.createElement("script");
    s.async = true; s.crossOrigin = "anonymous"; s.src = ADS_SRC;
    document.head.appendChild(s);
    document.documentElement.classList.add("ads-on");
    // Only fill visible slots (the template contains sections of other routes that are hidden)
    document.querySelectorAll("ins.adsbygoogle").forEach(ins => {
      if (!ins.offsetParent && !ins.getClientRects().length) { ins.remove(); return; }
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    });
  }

  function banner() {
    if (document.getElementById("cookieBar")) return;
    const b = document.createElement("div");
    b.id = "cookieBar"; b.className = "cookie-bar"; b.setAttribute("role", "dialog");
    b.innerHTML = `<p>${t("cookie_text")}</p><div><button class="btn-sm" data-c="denied">${t("cookie_decline")}</button><button class="btn-acc" data-c="granted">${t("cookie_accept")}</button></div>`;
    b.addEventListener("click", e => {
      const c = e.target.dataset && e.target.dataset.c; if (!c) return;
      localStorage.setItem(KEY, c); b.remove();
      if (c === "granted") loadAds();
    });
    document.body.appendChild(b);
  }

  const link = document.getElementById("cookieSettings");
  if (link) { link.textContent = t("cookie_settings"); link.addEventListener("click", e => { e.preventDefault(); localStorage.removeItem(KEY); banner(); }); }

  const v = localStorage.getItem(KEY);
  if (v === "granted") loadAds(); else if (!v) banner();
})();
