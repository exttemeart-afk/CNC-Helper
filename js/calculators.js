/* Calculators. Each: {id, title key, icon, fields[], calc(values) -> [{k, v, u}]}
   Field: {id, k (label key), def, type:'number'|'select', options, showIf(values)} */
const PI = Math.PI;
const matOptions = () => MATERIALS.map((m, i) => ({v: i, k: m.k}));
const valid = (...a) => a.every(x => isFinite(x) && x > 0);

const CALCS = [
 {id:"mill", t:"c_mill", ic:"🛠",
  fields:[
   {id:"D",k:"f_D",def:12},{id:"z",k:"f_z",def:4},{id:"vc",k:"f_vc",def:150},{id:"fz",k:"f_fz",def:0.05},{id:"L",k:"f_L",def:100}],
  calc:v=>{
   if(!valid(v.D,v.z,v.vc,v.fz)) return null;
   const n=1000*v.vc/(PI*v.D), F=n*v.fz*v.z, r=[{k:"r_n",v:n,u:"u_rpm",d:0},{k:"r_F",v:F,u:"u_mmmin",d:0}];
   if(v.L>0) r.push({k:"r_t",v:v.L/F,u:"u_min",d:2});
   return r;}},

 {id:"turn", t:"c_turn", ic:"🔩",
  fields:[
   {id:"D",k:"f_Dw",def:50},{id:"vc",k:"f_vc",def:200},{id:"f",k:"f_f",def:0.2},{id:"L",k:"f_L",def:100},{id:"r",k:"f_r",def:0.8}],
  calc:v=>{
   if(!valid(v.D,v.vc,v.f)) return null;
   const n=1000*v.vc/(PI*v.D), F=n*v.f, r=[{k:"r_n",v:n,u:"u_rpm",d:0},{k:"r_F",v:F,u:"u_mmmin",d:0}];
   if(v.L>0) r.push({k:"r_t",v:v.L/F,u:"u_min",d:2});
   if(v.r>0) r.push({k:"r_Ra",v:v.f*v.f/(8*v.r)*1000,u:"u_um",d:2});
   return r;}},

 {id:"drill", t:"c_drill", ic:"🕳",
  fields:[
   {id:"D",k:"f_D",def:8},{id:"vc",k:"f_vc",def:80},{id:"f",k:"f_f",def:0.15},{id:"depth",k:"f_depth",def:30}],
  calc:v=>{
   if(!valid(v.D,v.vc,v.f)) return null;
   const n=1000*v.vc/(PI*v.D), F=n*v.f, r=[{k:"r_n",v:n,u:"u_rpm",d:0},{k:"r_F",v:F,u:"u_mmmin",d:0}];
   if(v.depth>0) r.push({k:"r_t",v:(v.depth+0.3*v.D)/F,u:"u_min",d:2}); // + drill point allowance
   return r;}},

 {id:"mass", t:"c_mass", ic:"⚖",
  fields:[
   {id:"shape",k:"f_shape",type:"select",def:"plate",options:[{v:"plate",k:"sh_plate"},{v:"round",k:"sh_round"},{v:"tube",k:"sh_tube"},{v:"hex",k:"sh_hex"}]},
   {id:"mat",k:"f_mat",type:"select",def:0,options:matOptions()},
   {id:"W",k:"f_W",def:100,showIf:v=>v.shape==="plate"},
   {id:"H",k:"f_H",def:20,showIf:v=>v.shape==="plate"},
   {id:"Do",k:"f_Dout",def:50,showIf:v=>v.shape==="round"||v.shape==="tube"},
   {id:"wall",k:"f_wall",def:5,showIf:v=>v.shape==="tube"},
   {id:"S",k:"f_S",def:30,showIf:v=>v.shape==="hex"},
   {id:"L",k:"f_Len",def:200},{id:"qty",k:"f_qty",def:1}],
  calc:v=>{
   let vol;
   if(v.shape==="plate") vol=v.W*v.H*v.L;
   else if(v.shape==="round") vol=PI/4*v.Do*v.Do*v.L;
   else if(v.shape==="tube"){ const di=v.Do-2*v.wall; if(di<0) return null; vol=PI/4*(v.Do*v.Do-di*di)*v.L; }
   else vol=Math.sqrt(3)/2*v.S*v.S*v.L;
   if(!valid(vol)) return null;
   const m=vol*MATERIALS[v.mat].den*1e-9, q=v.qty>0?v.qty:1;
   const r=[{k:"r_vol",v:vol/1000,u:"u_cm3",d:2},{k:"r_mass",v:m,u:"u_kg",d:3}];
   if(q>1) r.push({k:"r_total",v:m*q,u:"u_kg",d:3});
   return r;}},

 {id:"power", t:"c_power", ic:"⚡",
  fields:[
   {id:"mat",k:"f_mat",type:"select",def:0,options:matOptions()},
   {id:"ap",k:"f_ap",def:3},{id:"ae",k:"f_ae",def:6},{id:"F",k:"f_F",def:800},{id:"eff",k:"f_eff",def:0.8}],
  calc:v=>{
   if(!valid(v.ap,v.ae,v.F,v.eff)||v.eff>1) return null;
   const q=v.ap*v.ae*v.F/1000, pc=v.ap*v.ae*v.F*MATERIALS[v.mat].kc/(6e7*v.eff);
   return [{k:"r_mrr",v:q,u:"u_cm3min",d:2},{k:"r_pc",v:pc,u:"u_kw",d:2}];}},

 {id:"thread", t:"c_thread", ic:"🔧",
  fields:[{id:"th",k:"f_thread",type:"select",def:5,options:THREADS.map((t,i)=>({v:i,label:t[0]+" × "+t[2]}))}],
  calc:v=>{
   const [,D,P]=THREADS[v.th];
   return [{k:"r_pitch",v:P,u:"",d:2},{k:"r_drill",v:D-P,u:"",d:2,raw:"mm"},{k:"r_drillF",v:D-P/2*0.9,u:"",d:2,raw:"mm"},
           {k:"r_minor",v:D-1.0825*P,u:"",d:3,raw:"mm"},{k:"r_tdepth",v:0.6134*P,u:"",d:3,raw:"mm"}];}},

 {id:"conv", t:"c_conv", ic:"🔁",
  fields:[{id:"mm",k:"f_mm",def:25.4},{id:"in",k:"f_in",def:1},{id:"mpm",k:"f_mpm",def:100},{id:"sfm",k:"f_sfm",def:300},{id:"fmm",k:"f_fmm",def:500},{id:"ipm",k:"f_ipm",def:20}],
  calc:v=>[
   {k:"r_in",v:v.mm/25.4,u:"",d:4,raw:"in"},{k:"r_mm",v:v.in*25.4,u:"",d:3,raw:"mm"},
   {k:"r_sfm",v:v.mpm*3.28084,u:"",d:1,raw:"SFM"},{k:"r_mpm",v:v.sfm/3.28084,u:"",d:1,raw:"m/min"},
   {k:"r_fipm",v:v.fmm/25.4,u:"",d:2,raw:"IPM"},{k:"r_fmm",v:v.ipm*25.4,u:"",d:1,raw:"mm/min"}]}
];


/* ---------- Trigonometry & geometry ---------- */
const rad = d => d * PI / 180, deg = r => r * 180 / PI;
CALCS.forEach(c => c.group = "cut");
CALCS.push(
 {id:"tri", t:"c_tri", ic:"📐", group:"trig",
  fields:[{id:"a",k:"f_a",def:30},{id:"b",k:"f_b",def:40}],
  calc:v=>{
   if(!valid(v.a,v.b)) return null;
   const al=deg(Math.atan(v.a/v.b));
   return [{k:"r_c",v:Math.hypot(v.a,v.b),raw:"mm",d:4},{k:"r_alpha",v:al,raw:"°",d:4},{k:"r_beta",v:90-al,raw:"°",d:4}];}},

 {id:"taper", t:"c_taper", ic:"🔻", group:"trig",
  fields:[{id:"D1",k:"f_D1",def:40},{id:"D2",k:"f_D2",def:30},{id:"L",k:"f_Len",def:50}],
  calc:v=>{
   if(!valid(v.D1,v.L)||!(v.D2>=0)||v.D1<=v.D2) return null;
   const dd=v.D1-v.D2, half=deg(Math.atan(dd/(2*v.L)));
   return [{k:"r_half",v:half,raw:"°",d:4},{k:"r_full",v:2*half,raw:"°",d:4},{k:"r_ratio",v:dd/v.L,raw:"",d:5},{k:"r_ratio1",v:v.L/dd,raw:"",d:3}];}},

 {id:"bolt", t:"c_bolt", ic:"🎯", group:"trig",
  fields:[{id:"n",k:"f_n",def:6},{id:"pcd",k:"f_pcd",def:80},{id:"a0",k:"f_a0",def:0},{id:"cx",k:"f_cx",def:0},{id:"cy",k:"f_cy",def:0}],
  calc:v=>{
   const n=Math.round(v.n);
   if(!valid(n,v.pcd)||n>100||!isFinite(v.a0)||!isFinite(v.cx)||!isFinite(v.cy)) return null;
   const out=[], r=v.pcd/2, f=x=>(Math.abs(x)<1e-9?0:x).toFixed(4);
   for(let i=0;i<n;i++){const a=rad(v.a0+360*i/n); out.push({label:"#"+(i+1),s:"X"+f(v.cx+r*Math.cos(a))+"  Y"+f(v.cy+r*Math.sin(a))});}
   return out;}},

 {id:"sine", t:"c_sine", ic:"📏", group:"trig",
  fields:[{id:"bar",k:"f_bar",def:200},{id:"ang",k:"f_ang",def:15}],
  calc:v=>{ if(!valid(v.bar,v.ang)||v.ang>=90) return null; return [{k:"r_hg",v:v.bar*Math.sin(rad(v.ang)),raw:"mm",d:4}]; }},

 {id:"csink", t:"c_csink", ic:"🔽", group:"trig",
  fields:[{id:"dt",k:"f_dtop",def:12},{id:"dh",k:"f_dhole",def:6},{id:"tip",k:"f_tip",def:90}],
  calc:v=>{ if(!valid(v.dt,v.tip)||!(v.dh>=0)||v.dt<=v.dh||v.tip>=180) return null;
   return [{k:"r_cd",v:(v.dt-v.dh)/2/Math.tan(rad(v.tip/2)),raw:"mm",d:4}]; }},

 {id:"arc", t:"c_arc", ic:"🌙", group:"trig",
  fields:[{id:"c",k:"f_chord",def:60},{id:"h",k:"f_h",def:10}],
  calc:v=>{ if(!valid(v.c,v.h)) return null;
   const R=(v.c*v.c/4+v.h*v.h)/(2*v.h);
   return [{k:"r_R",v:R,raw:"mm",d:4},{k:"r_ca",v:deg(2*Math.atan2(v.c/2,R-v.h)),raw:"°",d:3}]; }}
);

/* ---------- Rendering ---------- */
const calcState = {};      // user input, kept across re-renders
const SAVE_KEY = "cnc_saved_calcs";
let savedRoot = null, savedT = null, gridRender = null;

const loadSavedList = () => { try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || []; } catch (e) { return []; } };
const storeSavedList = l => localStorage.setItem(SAVE_KEY, JSON.stringify(l));
const fmtNum = (v, d) => isFinite(v) ? v.toLocaleString(undefined, {maximumFractionDigits: d == null ? 3 : d, minimumFractionDigits: 0}) : "—";

function renderCalcGrid(root, t, filter) {
  root.innerHTML = "";
  CALCS.filter(filter || (() => true)).forEach(c => {
    const st = calcState[c.id] = calcState[c.id] || Object.fromEntries(c.fields.map(f => [f.id, f.def]));
    const card = document.createElement("div");
    card.className = "card calc";
    card.innerHTML = `<h3><span>${c.ic}</span>${t(c.t)}</h3>`;
    const fieldEls = {};
    c.fields.forEach(f => {
      const w = document.createElement("div"); w.className = "field";
      let input;
      if (f.type === "select") {
        input = document.createElement("select");
        f.options.forEach(o => { const op = document.createElement("option"); op.value = o.v; op.textContent = o.label || t(o.k); input.appendChild(op); });
      } else {
        input = document.createElement("input"); input.type = "number"; input.step = "any"; input.inputMode = "decimal";
      }
      input.value = st[f.id];
      const lab = document.createElement("label"); lab.textContent = t(f.k);
      w.append(lab, input); card.appendChild(w);
      fieldEls[f.id] = {w, input, f};
    });
    const res = document.createElement("div"); res.className = "results"; card.appendChild(res);
    const saveBtn = document.createElement("button"); saveBtn.className = "btn-save"; saveBtn.textContent = t("save"); card.appendChild(saveBtn);

    let lastRows = null;
    const update = () => {
      const v = {};
      c.fields.forEach(f => {
        const raw = fieldEls[f.id].input.value;
        v[f.id] = f.type === "select" ? (typeof f.options[0].v === "number" ? +raw : raw) : parseFloat(raw);
        st[f.id] = raw;
      });
      c.fields.forEach(f => { if (f.showIf) fieldEls[f.id].w.hidden = !f.showIf(v); });
      const out = c.calc(v);
      if (!out) { lastRows = null; res.innerHTML = `<span>${t("invalid")}</span>`; return; }
      lastRows = out.map(o => {
        if (o.s) return {label: o.label, text: o.s};
        const unit = o.raw != null ? o.raw : (o.u ? t(o.u) : "");
        return {label: t(o.k), text: (fmtNum(o.v, o.d) + " " + unit).trim()};
      });
      res.innerHTML = lastRows.map(r => `<div class="res"><span>${r.label}</span><b>${r.text}</b></div>`).join("");
    };
    Object.values(fieldEls).forEach(e => e.input.addEventListener("input", update));
    saveBtn.addEventListener("click", () => {
      if (!lastRows) return;
      const inputs = c.fields.filter(f => !f.showIf || !fieldEls[f.id].w.hidden).map(f => {
        const el = fieldEls[f.id].input;
        return {label: t(f.k), text: el.tagName === "SELECT" ? el.options[el.selectedIndex].textContent : el.value};
      });
      const list = loadSavedList();
      list.unshift({id: Date.now(), calc: c.id, title: t(c.t), ic: c.ic, ts: new Date().toISOString(), state: {...st}, inputs, results: lastRows});
      storeSavedList(list.slice(0, 200));
      saveBtn.textContent = t("saved_ok");
      setTimeout(() => saveBtn.textContent = t("save"), 1200);
      if (savedRoot) renderSaved(savedRoot, savedT);
    });
    update();
    root.appendChild(card);
  });
}

function renderSaved(root, t) {
  savedRoot = root; savedT = t;
  const list = loadSavedList();
  const esc = s => String(s).replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
  if (!list.length) { root.innerHTML = `<p class="note">${t("saved_empty")}</p><p class="note">${t("saved_note")}</p>`; return; }
  root.innerHTML = `<div class="saved-bar"><button class="btn-sm" data-act="csv">${t("export_csv")}</button><button class="btn-sm danger" data-act="clear">${t("clear_all")}</button></div>` +
    list.map(e => `<div class="saved-item" data-id="${e.id}"><div class="saved-head"><b>${e.ic} ${esc(e.title)}</b><small>${new Date(e.ts).toLocaleString()}</small></div>
      <div class="saved-body"><div>${e.inputs.map(i => `<span>${esc(i.label)}: <b>${esc(i.text)}</b></span>`).join("")}</div>
      <div class="saved-res">${e.results.map(r => `<span>${esc(r.label)}: <b>${esc(r.text)}</b></span>`).join("")}</div></div>
      <div class="saved-act"><button class="btn-sm" data-act="load">${t("load")}</button><button class="btn-sm danger" data-act="del">${t("del")}</button></div></div>`).join("") +
    `<p class="note">${t("saved_note")}</p>`;
  root.onclick = ev => {
    const b = ev.target.closest("button[data-act]"); if (!b) return;
    const item = b.closest(".saved-item"), id = item && +item.dataset.id, l = loadSavedList();
    if (b.dataset.act === "del") storeSavedList(l.filter(x => x.id !== id));
    else if (b.dataset.act === "clear") storeSavedList([]);
    else if (b.dataset.act === "load") {
      const e = l.find(x => x.id === id);
      if (e) { calcState[e.calc] = {...e.state}; if (window.rerenderCalcs) window.rerenderCalcs(); }
      return;
    } else if (b.dataset.act === "csv") {
      const q = s => '"' + String(s).replace(/"/g, '""') + '"';
      const rows = [["date","calculator","inputs","results"].map(q).join(";")].concat(l.map(e => [e.ts, e.title,
        e.inputs.map(i => i.label + "=" + i.text).join(" | "), e.results.map(r => r.label + "=" + r.text).join(" | ")].map(q).join(";")));
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob(["\ufeff" + rows.join("\r\n")], {type: "text/csv;charset=utf-8"}));
      a.download = "cnc-calculations.csv"; a.click(); URL.revokeObjectURL(a.href);
      return;
    }
    renderSaved(root, t);
  };
}
