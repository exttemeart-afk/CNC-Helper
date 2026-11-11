/* Calculators Engine. Total: 25 professional CNC calculators.
   Each calculator: { id, t (title key), ic (icon), group: 'cut'|'thread'|'trig'|'tol', fields[], calc(v) -> results[] }
*/

const PI = Math.PI;
const rad = d => d * PI / 180, deg = r => r * 180 / PI;
const valid = (...a) => a.every(x => isFinite(x) && x > 0);
const matOptions = () => MATERIALS.map((m, i) => ({v: i, k: m.k}));

const CALCS = [
  /* =========================================================
     GROUP 1: CUTTING DATA, POWER & TOOL LIFE ('cut')
     ========================================================= */

  // 1. Milling Speed & Feed
  {id:"mill", t:"c_mill", ic:"🛠", group:"cut",
   fields:[
    {id:"D", k:"f_D", def:12},
    {id:"z", k:"f_z", def:4},
    {id:"vc", k:"f_vc", def:150},
    {id:"fz", k:"f_fz", def:0.05},
    {id:"L", k:"f_mill_l", def:100},
    {id:"ae", k:"f_mill_ae", def:0}
   ],
   calc:v=>{
    if (!valid(v.D, v.z, v.vc, v.fz)) return null;
    const n = 1000 * v.vc / (PI * v.D);
    const F = n * v.fz * v.z;
    const r = [
      {k:"r_n", v:n, u:"u_rpm", d:0},
      {k:"r_F", v:F, u:"u_mmmin", d:0}
    ];
    if (v.L > 0) r.push({k:"r_t", v:v.L / F, u:"u_min", d:2});
    if (v.ae > 0 && v.ae < 0.5 * v.D) {
      const ratio = v.ae / v.D;
      const fz_adj = v.fz / (2 * Math.sqrt(ratio * (1 - ratio)));
      const F_adj = n * fz_adj * v.z;
      r.push(
        {k:"r_fz_adj", v:fz_adj, raw:"mm", d:3},
        {k:"r_f_adj", v:F_adj, u:"u_mmmin", d:0}
      );
    }
    return r;
   }},

  // 2. Turning Speed & Feed
  {id:"turn", t:"c_turn", ic:"🔩", group:"cut",
   fields:[
    {id:"D", k:"f_Dw", def:50},
    {id:"vc", k:"f_vc", def:200},
    {id:"f", k:"f_f", def:0.2},
    {id:"L", k:"f_L", def:100},
    {id:"r", k:"f_r", def:0.8}
   ],
   calc:v=>{
    if (!valid(v.D, v.vc, v.f)) return null;
    const n = 1000 * v.vc / (PI * v.D);
    const F = n * v.f;
    const r = [
      {k:"r_n", v:n, u:"u_rpm", d:0},
      {k:"r_F", v:F, u:"u_mmmin", d:0}
    ];
    if (v.L > 0) r.push({k:"r_t", v:v.L / F, u:"u_min", d:2});
    if (v.r > 0) {
      const Rz = (v.f * v.f) / (8 * v.r) * 1000;
      const Ra = (v.f * v.f) / (31.2 * v.r) * 1000;
      r.push({k:"r_surf_finish", s:`Ra: ${Ra.toFixed(2)} µm | Rz: ${Rz.toFixed(2)} µm`});
    }
    return r;
   }},

  // 3. Drilling Speed & Feed
  {id:"drill", t:"c_drill", ic:"🕳", group:"cut",
   fields:[
    {id:"D", k:"f_D", def:8},
    {id:"vc", k:"f_vc", def:80},
    {id:"f", k:"f_f", def:0.15},
    {id:"depth", k:"f_depth", def:30}
   ],
   calc:v=>{
    if (!valid(v.D, v.vc, v.f)) return null;
    const n = 1000 * v.vc / (PI * v.D);
    const F = n * v.f;
    const r = [
      {k:"r_n", v:n, u:"u_rpm", d:0},
      {k:"r_F", v:F, u:"u_mmmin", d:0}
    ];
    if (v.depth > 0) r.push({k:"r_t", v:(v.depth + 0.3 * v.D) / F, u:"u_min", d:2});
    return r;
   }},

  // 4. Stock Mass & Material Blank
  {id:"mass", t:"c_mass", ic:"⚖", group:"cut",
   fields:[
    {id:"shape", k:"f_shape", type:"select", def:"plate", options:[{v:"plate",k:"sh_plate"},{v:"round",k:"sh_round"},{v:"tube",k:"sh_tube"},{v:"hex",k:"sh_hex"}]},
    {id:"mat", k:"f_mat", type:"select", def:0, options:matOptions()},
    {id:"W", k:"f_W", def:100, showIf:v=>v.shape==="plate"},
    {id:"H", k:"f_H", def:20, showIf:v=>v.shape==="plate"},
    {id:"Do", k:"f_Dout", def:50, showIf:v=>v.shape==="round"||v.shape==="tube"},
    {id:"wall", k:"f_wall", def:5, showIf:v=>v.shape==="tube"},
    {id:"S", k:"f_S", def:30, showIf:v=>v.shape==="hex"},
    {id:"L", k:"f_Len", def:200},
    {id:"qty", k:"f_qty", def:1}
   ],
   calc:v=>{
    let vol;
    if (v.shape === "plate") vol = v.W * v.H * v.L;
    else if (v.shape === "round") vol = PI / 4 * v.Do * v.Do * v.L;
    else if (v.shape === "tube") { const di = v.Do - 2 * v.wall; if (di < 0) return null; vol = PI / 4 * (v.Do * v.Do - di * di) * v.L; }
    else vol = Math.sqrt(3) / 2 * v.S * v.S * v.L;
    if (!valid(vol)) return null;
    const m = vol * MATERIALS[v.mat].den * 1e-9;
    const q = v.qty > 0 ? v.qty : 1;
    const r = [{k:"r_vol", v:vol / 1000, u:"u_cm3", d:2}, {k:"r_mass", v:m, u:"u_kg", d:3}];
    if (q > 1) r.push({k:"r_total", v:m * q, u:"u_kg", d:3});
    return r;
   }},

  // 5. Material Removal Rate (MRR) & Machining Time
  {id:"mrr_time", t:"c_mrr_time", ic:"⏱", group:"cut",
   fields:[
    {id:"mode", k:"f_mrr_mode", type:"select", def:"mill", options:[{v:"mill", k:"opt_mrr_mill"}, {v:"turn", k:"opt_mrr_turn"}]},
    // Milling fields
    {id:"ap", k:"f_mrr_ap", def:4, showIf:v=>v.mode==="mill"},
    {id:"ae", k:"f_mrr_ae", def:10, showIf:v=>v.mode==="mill"},
    {id:"vf", k:"f_mrr_vf", def:1200, showIf:v=>v.mode==="mill"},
    // Turning fields
    {id:"d1", k:"f_mrr_d1", def:60, showIf:v=>v.mode==="turn"},
    {id:"d2", k:"f_mrr_d2", def:52, showIf:v=>v.mode==="turn"},
    {id:"vc", k:"f_mrr_vc", def:220, showIf:v=>v.mode==="turn"},
    {id:"f", k:"f_mrr_f", def:0.25, showIf:v=>v.mode==="turn"},
    // Common
    {id:"L", k:"f_mrr_l", def:150}
   ],
   calc:v=>{
    if (v.mode === "mill") {
      if (!valid(v.ap, v.ae, v.vf)) return null;
      const Q = (v.ap * v.ae * v.vf) / 1000;
      const tMin = v.L > 0 ? v.L / v.vf : 0;
      const tSec = tMin * 60;
      const tStr = tMin >= 1 ? `${Math.floor(tMin)} мин ${(tSec % 60).toFixed(0)} с` : `${tSec.toFixed(1)} с`;
      return [
        {k:"r_mrr_val", v:Q, u:"u_cm3min", d:2},
        {k:"r_cut_time", s:tStr}
      ];
    } else {
      if (!valid(v.d1, v.vc, v.f) || !(v.d2 >= 0) || v.d1 <= v.d2) return null;
      const ap = (v.d1 - v.d2) / 2;
      const Q = v.vc * ap * v.f;
      const dAvg = (v.d1 + v.d2) / 2;
      const n = (1000 * v.vc) / (PI * dAvg);
      const vf = n * v.f;
      const tMin = v.L > 0 && vf > 0 ? v.L / vf : 0;
      const tSec = tMin * 60;
      const tStr = tMin >= 1 ? `${Math.floor(tMin)} мин ${(tSec % 60).toFixed(0)} с` : `${tSec.toFixed(1)} с`;
      return [
        {k:"r_mrr_val", v:Q, u:"u_cm3min", d:2},
        {k:"r_cut_time", s:tStr}
      ];
    }
   }},

  // 6. Spindle Cutting Power & Torque
  {id:"spindle_torque", t:"c_spindle_torque", ic:"⚡", group:"cut",
   fields:[
    {id:"mat", k:"f_st_mat", type:"select", def:0, options:matOptions()},
    {id:"rpm", k:"f_st_rpm", def:3500},
    {id:"ap", k:"f_st_ap", def:3},
    {id:"ae", k:"f_st_ae", def:8},
    {id:"vf", k:"f_st_vf", def:1000},
    {id:"eff", k:"f_st_eff", def:0.85}
   ],
   calc:v=>{
    if (!valid(v.rpm, v.ap, v.ae, v.vf, v.eff) || v.eff > 1) return null;
    const kc = MATERIALS[v.mat].kc;
    const Q = (v.ap * v.ae * v.vf) / 1000; // cm3/min
    const Pc = (v.ap * v.ae * v.vf * kc) / (60 * 1e6); // kW net cutting power
    const Pm = Pc / v.eff; // kW motor power
    const Mc = (9550 * Pc) / v.rpm; // N*m
    return [
      {k:"r_mrr_val", v:Q, u:"u_cm3min", d:2},
      {k:"r_pc_net", v:Pc, u:"u_kw", d:2},
      {k:"r_pm_motor", v:Pm, u:"u_kw", d:2},
      {k:"r_st_torque", s:`${Mc.toFixed(2)} N·m (${(Mc * 0.73756).toFixed(2)} ft·lb)`}
    ];
   }},

  // 7. Ball Nose: Effective Diameter & Chip Thinning
  {id:"ball_eff", t:"c_ball_eff", ic:"🔮", group:"cut",
   fields:[
    {id:"D", k:"f_be_d", def:10},
    {id:"ap", k:"f_be_ap", def:0.5},
    {id:"ae", k:"f_be_ae", def:0.8},
    {id:"vc", k:"f_be_vc", def:180},
    {id:"fz", k:"f_be_fz", def:0.06},
    {id:"z", k:"f_be_z", def:2}
   ],
   calc:v=>{
    if (!valid(v.D, v.ap, v.ae, v.vc, v.fz, v.z)) return null;
    const apClamped = Math.min(v.ap, v.D / 2);
    // Effective diameter at axial depth ap
    const Deff = 2 * Math.sqrt(apClamped * (v.D - apClamped));
    const n_nom = (1000 * v.vc) / (PI * v.D);
    const n_eff = (1000 * v.vc) / (PI * Deff);

    // Radial chip thinning factor for small ae < D/2
    const aeClamped = Math.min(v.ae, v.D / 2);
    const thinFactor = Math.sqrt(aeClamped / v.D);
    const fz_mod = thinFactor > 0 ? v.fz / thinFactor : v.fz;
    const vf = n_eff * fz_mod * v.z;

    return [
      {k:"r_be_deff", s:`${Deff.toFixed(3)} mm (при номин. Ø${v.D} mm)`},
      {k:"r_be_rpm", s:`${Math.round(n_eff)} об/мин (вместо ${Math.round(n_nom)} об/мин)`},
      {k:"r_be_fz_mod", s:`${fz_mod.toFixed(3)} mm/зуб (коэфф. +${(((fz_mod/v.fz)-1)*100).toFixed(0)}%)`},
      {k:"r_be_vf", v:vf, u:"u_mmmin", d:0}
    ];
   }},

  // 8. Taylor Tool Life
  {id:"taylor", t:"c_taylor", ic:"⏳", group:"cut",
   fields:[
    {id:"matIdx", k:"f_ty_mat", type:"select", def:0, options:TAYLOR_EXPONENTS.map((x, i) => ({v: i, k: x.k}))},
    {id:"vc1", k:"f_ty_vc1", def:160},
    {id:"t1", k:"f_ty_t1", def:60},
    {id:"vc2", k:"f_ty_vc2", def:190}
   ],
   calc:v=>{
    if (!valid(v.vc1, v.t1, v.vc2)) return null;
    const m = TAYLOR_EXPONENTS[v.matIdx].m;
    const invM = 1 / m;
    const t2 = v.t1 * Math.pow(v.vc1 / v.vc2, invM);
    const ratio = (t2 / v.t1) * 100;
    const C = v.vc1 * Math.pow(v.t1, m);
    return [
      {k:"r_ty_t2", s:`${t2.toFixed(1)} мин (${(t2 >= 60 ? (t2/60).toFixed(1) + " ч" : "")})`},
      {k:"r_ty_ratio", s:`${ratio.toFixed(0)}% от прежней стойкости`},
      {k:"r_ty_c", s:`C = ${C.toFixed(1)} (показатель m = ${m})`}
    ];
   }},

  /* =========================================================
     GROUP 2: THREADS & GAUGES ('thread')
     ========================================================= */

  // 9. Metric Thread & Tap Drill
  {id:"thread", t:"c_thread", ic:"🔧", group:"thread",
   fields:[
    {id:"th", k:"f_thread", type:"select", def:5, options:[
      ...THREADS.map((t,i)=>({v:i,label:t[0]+" × "+t[2]})),
      {v:"custom", k:"opt_custom_th"}
    ]},
    {id:"custD", k:"f_cust_d", def:10, showIf:v=>v.th==="custom"},
    {id:"custP", k:"f_cust_p", def:1.25, showIf:v=>v.th==="custom"}
   ],
   calc:v=>{
    let D, P;
    if (v.th === "custom") {
      if (!valid(v.custD, v.custP)) return null;
      D = v.custD;
      P = v.custP;
    } else {
      const row = THREADS[v.th];
      if (!row) return null;
      D = row[1];
      P = row[2];
    }
    return [
      {k:"r_pitch", v:P, u:"", d:2},
      {k:"r_drill", v:D-P, u:"", d:2, raw:"mm"},
      {k:"r_drillF", v:D-P/2*0.9, u:"", d:2, raw:"mm"},
      {k:"r_minor", v:D-1.0825*P, u:"", d:3, raw:"mm"},
      {k:"r_tdepth", v:0.6134*P, u:"", d:3, raw:"mm"}
    ];
   }},

  // 10. Inch & Pipe Threads (G, NPT, UNC, UNF)
  {id:"thread_inch", t:"c_thread_inch", ic:"🔩", group:"thread",
   fields:[
    {id:"idx", k:"f_thread_inch", type:"select", def:3, options:INCH_PIPE_THREADS.map((t,i)=>({v:i, label:`[${t.cat}] ${t.name}`}))}
   ],
   calc:v=>{
    const t = INCH_PIPE_THREADS[v.idx];
    if (!t) return null;
    const profileStr = `${t.ang}° (${t.type === "taper" ? "Taper 1:16" : "Cylindrical"})`;
    return [
      {k:"r_th_maj", s:`${t.dMm.toFixed(3)} mm (${t.dIn.toFixed(3)}")`},
      {k:"r_tpi_pitch", s:`${t.tpi} TPI (P = ${t.pitch.toFixed(3)} mm)`},
      {k:"r_drill", s:`${t.drill.toFixed(2)} mm (${(t.drill/25.4).toFixed(3)}")`},
      {k:"r_minor", s:`${t.dMin.toFixed(3)} mm`},
      {k:"r_profile", s:profileStr}
    ];
   }},

  // 11. Three-Wire Thread Measurement
  {id:"thread_wires", t:"c_thread_wires", ic:"📏", group:"thread",
   fields:[
    {id:"type", k:"f_tw_type", type:"select", def:"m60", options:[{v:"m60", k:"opt_tw_m60"}, {v:"w55", k:"opt_tw_w55"}]},
    {id:"d", k:"f_tw_nom_d", def:12},
    {id:"P", k:"f_tw_pitch", def:1.75},
    {id:"dw", k:"f_tw_wire", def:1.008}
   ],
   calc:v=>{
    if (!valid(v.d, v.P, v.dw)) return null;
    const is60 = v.type === "m60";
    // Optimal wire size:
    // 60 deg: dw_opt = P / (2 * cos 30) = 0.57735 * P
    // 55 deg: dw_opt = P / (2 * cos 27.5) = 0.56369 * P
    const dw_opt = is60 ? 0.57735 * v.P : 0.56369 * v.P;
    // Pitch diameter d2:
    // 60 deg: d2 = d - 0.649519 * P
    // 55 deg: d2 = d - 0.640327 * P
    const d2 = is60 ? (v.d - 0.649519 * v.P) : (v.d - 0.640327 * v.P);
    // Over-wire dimension M:
    // 60 deg: M = d2 + 3 * dw - 0.866025 * P
    // 55 deg: M = d2 + 3.16568 * dw - 0.960491 * P
    const M = is60 ? (d2 + 3 * v.dw - 0.866025 * v.P) : (d2 + 3.16568 * v.dw - 0.960491 * v.P);
    return [
      {k:"r_tw_opt", s:`Ø${dw_opt.toFixed(3)} mm (наилучшая)`},
      {k:"r_tw_d2", s:`Ø${d2.toFixed(3)} mm`},
      {k:"r_tw_m", s:`${M.toFixed(3)} mm`}
    ];
   }},

  // 12. Thread Milling Parameters
  {id:"thread_mill", t:"c_thread_mill", ic:"🌀", group:"thread",
   fields:[
    {id:"type", k:"f_th_type", type:"select", def:"int", options:[{v:"int", k:"opt_th_int"}, {v:"ext", k:"opt_th_ext"}]},
    {id:"dTh", k:"f_th_d", def:20},
    {id:"P", k:"f_th_p", def:2.5},
    {id:"dCut", k:"f_cut_d", def:14},
    {id:"z", k:"f_z_flutes", def:3},
    {id:"vc", k:"f_vc", def:120},
    {id:"fz", k:"f_fz", def:0.05}
   ],
   calc:v=>{
    const isInt = v.type === "int";
    if (!valid(v.dTh, v.P, v.dCut, v.z, v.vc, v.fz)) return null;
    if (isInt && v.dCut >= v.dTh) return null;
    const n = 1000 * v.vc / (PI * v.dCut);
    const F_edge = n * v.fz * v.z;
    const D_center = isInt ? (v.dTh - v.dCut) : (v.dTh + v.dCut);
    const factor = D_center / v.dTh;
    const F_center = F_edge * factor;
    const L_center = PI * D_center;
    const t_sec = (L_center / F_center) * 60;
    const I_val = (D_center / 2).toFixed(3);
    const gcode = isInt
      ? `G91 G03 I-${I_val} Z${v.P.toFixed(3)} F${Math.round(F_center)}`
      : `G91 G02 I${I_val} Z-${v.P.toFixed(3)} F${Math.round(F_center)}`;
    return [
      {k:"r_n", v:n, u:"u_rpm", d:0},
      {k:"r_f_edge", v:F_edge, u:"u_mmmin", d:0},
      {k:"r_f_prog", v:F_center, u:"u_mmmin", d:0},
      {k:"r_f_factor", s:`${(factor * 100).toFixed(1)}%`},
      {k:"r_orbit_d", v:D_center, raw:"mm", d:3},
      {k:"r_t_rev", v:t_sec, raw:"s", d:1},
      {k:"r_gcode", s:gcode}
    ];
   }},

  /* =========================================================
     GROUP 3: GEOMETRY, TRIGONOMETRY & COORDINATES ('trig')
     ========================================================= */

  // 13. Right-angled Triangle
  {id:"tri", t:"c_tri", ic:"📐", group:"trig",
   fields:[{id:"a", k:"f_a", def:30}, {id:"b", k:"f_b", def:40}],
   calc:v=>{
    if (!valid(v.a, v.b)) return null;
    const al = deg(Math.atan(v.a / v.b));
    return [
      {k:"r_c", v:Math.hypot(v.a, v.b), raw:"mm", d:4},
      {k:"r_alpha", v:al, raw:"°", d:4},
      {k:"r_beta", v:90 - al, raw:"°", d:4}
    ];
   }},

  // 14. Taper Turning
  {id:"taper", t:"c_taper", ic:"🔻", group:"trig",
   fields:[{id:"D1", k:"f_D1", def:40}, {id:"D2", k:"f_D2", def:30}, {id:"L", k:"f_Len", def:50}],
   calc:v=>{
    if (!valid(v.D1, v.L) || !(v.D2 >= 0) || v.D1 <= v.D2) return null;
    const dd = v.D1 - v.D2, half = deg(Math.atan(dd / (2 * v.L)));
    return [
      {k:"r_half", v:half, raw:"°", d:4},
      {k:"r_full", v:2 * half, raw:"°", d:4},
      {k:"r_ratio", v:dd / v.L, raw:"", d:5},
      {k:"r_ratio1", v:v.L / dd, raw:"", d:3}
    ];
   }},

  // 15. Bolt Hole Circle (PCD)
  {id:"bolt", t:"c_bolt", ic:"🎯", group:"trig",
   fields:[
    {id:"n", k:"f_n", def:6},
    {id:"pcd", k:"f_pcd", def:80},
    {id:"a0", k:"f_a0", def:0},
    {id:"cx", k:"f_cx", def:0},
    {id:"cy", k:"f_cy", def:0}
   ],
   calc:v=>{
    const n = Math.round(v.n);
    if (!valid(n, v.pcd) || n > 100 || !isFinite(v.a0) || !isFinite(v.cx) || !isFinite(v.cy)) return null;
    const out = [], r = v.pcd / 2, f = x => (Math.abs(x) < 1e-9 ? 0 : x).toFixed(3);
    for (let i = 0; i < n; i++) {
      const a = rad(v.a0 + 360 * i / n);
      out.push({label: "#" + (i + 1), s: `X${f(v.cx + r * Math.cos(a))}  Y${f(v.cy + r * Math.sin(a))}`});
    }
    return out;
   }},

  // 16. Hole Grid & Linear Pattern (with G-code generator)
  {id:"hole_grid", t:"c_hole_grid", ic:"⊞", group:"trig",
   fields:[
    {id:"mode", k:"f_hg_mode", type:"select", def:"line", options:[{v:"line", k:"opt_hg_line"}, {v:"grid", k:"opt_hg_grid"}]},
    {id:"x0", k:"f_hg_x0", def:10},
    {id:"y0", k:"f_hg_y0", def:10},
    // Line mode
    {id:"stepL", k:"f_hg_step_l", def:25, showIf:v=>v.mode==="line"},
    {id:"ang", k:"f_hg_ang", def:30, showIf:v=>v.mode==="line"},
    {id:"n", k:"f_hg_n", def:5, showIf:v=>v.mode==="line"},
    // Grid mode
    {id:"nx", k:"f_hg_nx", def:4, showIf:v=>v.mode==="grid"},
    {id:"dx", k:"f_hg_dx", def:20, showIf:v=>v.mode==="grid"},
    {id:"ny", k:"f_hg_ny", def:3, showIf:v=>v.mode==="grid"},
    {id:"dy", k:"f_hg_dy", def:15, showIf:v=>v.mode==="grid"}
   ],
   calc:v=>{
    const pts = [];
    const fmt = n => (Math.abs(n) < 1e-9 ? 0 : n).toFixed(3);
    if (v.mode === "line") {
      const n = Math.round(v.n);
      if (!valid(n, v.stepL) || n > 60) return null;
      const a = rad(v.ang || 0);
      for (let i = 0; i < n; i++) {
        const x = v.x0 + i * v.stepL * Math.cos(a);
        const y = v.y0 + i * v.stepL * Math.sin(a);
        pts.push({x, y});
      }
    } else {
      const nx = Math.round(v.nx), ny = Math.round(v.ny);
      if (!valid(nx, ny, v.dx, v.dy) || nx * ny > 100) return null;
      for (let r = 0; r < ny; r++) {
        for (let c = 0; c < nx; c++) {
          pts.push({x: v.x0 + c * v.dx, y: v.y0 + r * v.dy});
        }
      }
    }
    const gcode = pts.slice(0, 10).map((p, i) => `N${i+1} X${fmt(p.x)} Y${fmt(p.y)}`).join(" ; ");
    const preview = pts.slice(0, 6).map((p, i) => `#${i+1}: X${fmt(p.x)} Y${fmt(p.y)}`).join(" | ") + (pts.length > 6 ? ` ... (+${pts.length - 6})` : "");
    return [
      {k:"r_hg_total", s:`${pts.length} отверстий`},
      {k:"r_hg_points", s:preview},
      {k:"r_hg_gcode", s:gcode}
    ];
   }},

  // 17. Sine Bar & Gauge Blocks
  {id:"sine_bar", t:"c_sine_bar", ic:"📐", group:"trig",
   fields:[
    {id:"L", k:"f_sb_len", def:100},
    {id:"deg", k:"f_sb_deg", def:14},
    {id:"min", k:"f_sb_min", def:30},
    {id:"sec", k:"f_sb_sec", def:0}
   ],
   calc:v=>{
    if (!valid(v.L) || !(v.deg >= 0)) return null;
    const angDeg = v.deg + (v.min || 0) / 60 + (v.sec || 0) / 3600;
    if (angDeg >= 90) return null;
    const aRad = rad(angDeg);
    const H = v.L * Math.sin(aRad);
    return [
      {k:"r_sb_h", s:`${H.toFixed(4)} mm (${(H * 1000).toFixed(1)} µm)`},
      {k:"r_alpha", s:`${angDeg.toFixed(4)}° (${v.deg}° ${v.min || 0}' ${v.sec || 0}")`},
      {k:"r_sb_rad", s:`${aRad.toFixed(5)} rad`}
    ];
   }},

  // 18. Drill Point & Countersink Depth
  {id:"drill_depth", t:"c_drill_depth", ic:"🔽", group:"trig",
   fields:[
    {id:"D", k:"f_dd_d", def:10},
    {id:"ang", k:"f_dd_ang", def:118},
    {id:"cyl", k:"f_dd_cyl", def:25},
    {id:"csinkD", k:"f_dd_csink_d", def:12},
    {id:"csinkAng", k:"f_dd_csink_ang", def:90}
   ],
   calc:v=>{
    if (!valid(v.D, v.ang, v.cyl) || v.ang >= 180) return null;
    const halfTip = rad(v.ang / 2);
    const coneL = (v.D / 2) / Math.tan(halfTip);
    const totalZ = v.cyl + coneL;

    let csinkFeed = 0;
    let zSpot = 0;
    if (v.csinkD > 0 && v.csinkAng > 0 && v.csinkAng < 180) {
      const halfCsink = rad(v.csinkAng / 2);
      if (v.csinkD > v.D) {
        csinkFeed = ((v.csinkD - v.D) / 2) / Math.tan(halfCsink);
      }
      zSpot = (v.csinkD / 2) / Math.tan(halfCsink);
    }
    const r = [
      {k:"r_dd_cone_l", v:coneL, raw:"mm", d:3},
      {k:"r_dd_total_z", s:`Z -${totalZ.toFixed(3)} mm (L = ${v.cyl} mm)`},
      {k:"r_dd_csink_depth", s:csinkFeed > 0 ? `${csinkFeed.toFixed(3)} mm` : "—"}
    ];
    if (zSpot > 0) {
      r.push({k:"r_z_spot", s:`Z -${zSpot.toFixed(3)} mm`});
    }
    return r;
   }},

  // 19. Arc from Chord and Height
  {id:"arc", t:"c_arc", ic:"🌙", group:"trig",
   fields:[{id:"c", k:"f_chord", def:60}, {id:"h", k:"f_h", def:10}],
   calc:v=>{
    if (!valid(v.c, v.h)) return null;
    const R = (v.c * v.c / 4 + v.h * v.h) / (2 * v.h);
    return [
      {k:"r_R", v:R, raw:"mm", d:4},
      {k:"r_ca", v:deg(2 * Math.atan2(v.c / 2, R - v.h)), raw:"°", d:3}
    ];
   }},

  /* =========================================================
     GROUP 4: ISO 286 FITS, SURFACE FINISH & METROLOGY ('tol')
     ========================================================= */

  // 20. Surface Roughness (Ra/Rz & Ball Nose Scallop)
  {id:"roughness", t:"c_roughness", ic:"〰", group:"tol",
   fields:[
    {id:"mode", k:"f_surf_mode", type:"select", def:"turn", options:[{v:"turn", k:"opt_surf_turn"}, {v:"ball", k:"opt_surf_ball"}]},
    // Turning
    {id:"f", k:"f_surf_f", def:0.15, showIf:v=>v.mode==="turn"},
    {id:"re", k:"f_surf_re", def:0.8, showIf:v=>v.mode==="turn"},
    // Ball nose
    {id:"R", k:"f_ball_r", def:5, showIf:v=>v.mode==="ball"},
    {id:"ae", k:"f_ball_ae", def:0.4, showIf:v=>v.mode==="ball"}
   ],
   calc:v=>{
    if (v.mode === "turn") {
      if (!valid(v.f, v.re)) return null;
      // Theoretical Rz = (f^2 / (8 * r)) * 1000 [µm]
      const Rz = (v.f * v.f) / (8 * v.re) * 1000;
      // Theoretical Ra approx (f^2 / (32 * r)) * 1000 [µm]
      const Ra = (v.f * v.f) / (32 * v.re) * 1000;
      let grade = "N7 (Ra 1.6)";
      if (Ra <= 0.4) grade = "N5 (Ra 0.4)";
      else if (Ra <= 0.8) grade = "N6 (Ra 0.8)";
      else if (Ra <= 1.6) grade = "N7 (Ra 1.6)";
      else if (Ra <= 3.2) grade = "N8 (Ra 3.2)";
      else grade = "N9 (Ra 6.3)";
      return [
        {k:"r_ra_th", s:`${Ra.toFixed(2)} µm (Ra)`},
        {k:"r_rz_th", s:`${Rz.toFixed(2)} µm (Rz)`},
        {k:"r_rec_class", s:grade}
      ];
    } else {
      if (!valid(v.R, v.ae) || v.ae >= 2 * v.R) return null;
      // Scallop height h = R - sqrt(R^2 - (ae/2)^2) in mm
      const h_mm = v.R - Math.sqrt(v.R * v.R - (v.ae / 2) * (v.ae / 2));
      const h_um = h_mm * 1000;
      return [
        {k:"r_scallop_h", s:`${h_um.toFixed(2)} µm (${h_mm.toFixed(4)} mm)`},
        {k:"r_ra_th", s:`≈ ${(h_um / 4).toFixed(2)} µm (Ra)`},
        {k:"r_rz_th", s:`≈ ${h_um.toFixed(2)} µm (Rz)`}
      ];
    }
   }},

  // 21. Manual Tool Nose Radius Compensation (TNRC)
  {id:"tnrc", t:"c_tnrc", ic:"📐", group:"tol",
   fields:[
    {id:"R", k:"f_tool_r", def:0.8},
    {id:"ang", k:"f_chamfer_ang", def:45},
    {id:"C", k:"f_chamfer_c", def:2},
    {id:"D", k:"f_Dw", def:40}
   ],
   calc:v=>{
    if (!valid(v.R, v.ang, v.C, v.D) || v.ang >= 90) return null;
    const a = rad(v.ang);
    const tanA = Math.tan(a);
    const dZ = v.R * (1 - Math.tan(a / 2));
    const dX_rad = v.R * (1 - Math.tan((PI / 2 - a) / 2));
    const dX_dia = 2 * dX_rad;
    const nomXstart = v.D - 2 * v.C * tanA;
    const progXstart = nomXstart - dX_dia;
    const progZend = -v.C - dZ;
    const gcode = `G01 X${progXstart.toFixed(3)} Z0. ; G01 X${v.D.toFixed(3)} Z${progZend.toFixed(3)}`;
    return [
      {k:"r_dz", v:dZ, raw:"mm", d:3},
      {k:"r_dx", v:dX_dia, raw:"mm", d:3},
      {k:"r_pt_start", s:`X${progXstart.toFixed(3)}  Z0.000`},
      {k:"r_pt_end", s:`X${v.D.toFixed(3)}  Z${progZend.toFixed(3)}`},
      {k:"r_gcode", s:gcode}
    ];
   }},

  // 22. ISO 286 Limits and Fits
  {id:"iso_fits", t:"c_iso_fits", ic:"🎯", group:"tol",
   fields:[
    {id:"D", k:"f_Dw", def:20},
    {id:"mode", k:"f_fit_mode", type:"select", def:"pair", options:[
      {v:"pair", k:"opt_pair"},
      {v:"hole", k:"opt_hole"},
      {v:"shaft", k:"opt_shaft"}
    ]},
    {id:"hole", k:"f_hole_tol", type:"select", def:"H7", showIf:v=>v.mode==="pair"||v.mode==="hole",
     options:["H7","H6","H8","H9","H11","JS7","G7","F8","D10","P7","N7"].map(g=>({v:g, label:g}))},
    {id:"shaft", k:"f_shaft_tol", type:"select", def:"g6", showIf:v=>v.mode==="pair"||v.mode==="shaft",
     options:["g6","h6","h7","h8","h9","f7","e8","d9","js6","k6","m6","n6","p6","s6"].map(g=>({v:g, label:g}))}
   ],
   calc:v=>{
    if (!valid(v.D) || v.D < 1 || v.D > 500) return null;
    const D = v.D;
    const fmtDev = val => (val > 0 ? "+" : "") + (val / 1000).toFixed(3);
    if (v.mode === "hole") {
      const H = calcIsoTol(D, v.hole);
      if (!H) return null;
      return [
        {k:"r_hole_tol", s:`Ø${D} ${H.grade} (${fmtDev(H.es)} / ${fmtDev(H.ei)} mm)`},
        {k:"r_es", s:`${(H.es > 0 ? "+" : "") + H.es} µm (${fmtDev(H.es)} mm)`},
        {k:"r_ei", s:`${(H.ei > 0 ? "+" : "") + H.ei} µm (${fmtDev(H.ei)} mm)`},
        {k:"r_max_d", s:`${H.max.toFixed(3)} mm`},
        {k:"r_min_d", s:`${H.min.toFixed(3)} mm`},
        {k:"r_it", s:`${H.it} µm (${(H.it / 1000).toFixed(3)} mm)`}
      ];
    }
    if (v.mode === "shaft") {
      const S = calcIsoTol(D, v.shaft);
      if (!S) return null;
      return [
        {k:"r_shaft_tol", s:`Ø${D} ${S.grade} (${fmtDev(S.es)} / ${fmtDev(S.ei)} mm)`},
        {k:"r_es", s:`${(S.es > 0 ? "+" : "") + S.es} µm (${fmtDev(S.es)} mm)`},
        {k:"r_ei", s:`${(S.ei > 0 ? "+" : "") + S.ei} µm (${fmtDev(S.ei)} mm)`},
        {k:"r_max_d", s:`${S.max.toFixed(3)} mm`},
        {k:"r_min_d", s:`${S.min.toFixed(3)} mm`},
        {k:"r_it", s:`${S.it} µm (${(S.it / 1000).toFixed(3)} mm)`}
      ];
    }
    // Pair mode
    const H = calcIsoTol(D, v.hole);
    const S = calcIsoTol(D, v.shaft);
    if (!H || !S) return null;
    const Smax = +(H.max - S.min).toFixed(4);
    const Smin = +(H.min - S.max).toFixed(4);
    let fitKey, fitVal;
    if (Smin >= 0) {
      fitKey = "fit_clearance";
      fitVal = `+${Math.round(Smin * 1000)} … +${Math.round(Smax * 1000)} µm (+${Smin.toFixed(3)} … +${Smax.toFixed(3)} mm)`;
    } else if (Smax <= 0) {
      fitKey = "fit_interference";
      const Nmax = Math.abs(Smin);
      const Nmin = Math.abs(Smax);
      fitVal = `${Math.round(Nmin * 1000)} … ${Math.round(Nmax * 1000)} µm (${Nmin.toFixed(3)} … ${Nmax.toFixed(3)} mm)`;
    } else {
      fitKey = "fit_transition";
      const Nmax = Math.abs(Smin);
      fitVal = `+${Math.round(Smax * 1000)} µm / -${Math.round(Nmax * 1000)} µm`;
    }
    return [
      {k:"r_hole_tol", s:`Ø${D} ${H.grade} (${fmtDev(H.es)} / ${fmtDev(H.ei)} mm)`},
      {k:"r_hole_lim", s:`${H.min.toFixed(3)} … ${H.max.toFixed(3)} mm`},
      {k:"r_shaft_tol", s:`Ø${D} ${S.grade} (${fmtDev(S.es)} / ${fmtDev(S.ei)} mm)`},
      {k:"r_shaft_lim", s:`${S.min.toFixed(3)} … ${S.max.toFixed(3)} mm`},
      {k:"r_fit_type", s:fitKey},
      {k:"r_fit_val", s:fitVal}
    ];
   }},

  // 23. Workpiece Thermal Expansion
  {id:"thermal_exp", t:"c_thermal_exp", ic:"🌡", group:"tol",
   fields:[
    {id:"matIdx", k:"f_te_mat", type:"select", def:0, options:THERMAL_MATS.map((m, i) => ({v: i, k: m.k}))},
    {id:"L", k:"f_te_len", def:100},
    {id:"temp", k:"f_te_temp", def:32}
   ],
   calc:v=>{
    if (!valid(v.L) || !isFinite(v.temp)) return null;
    const alpha = THERMAL_MATS[v.matIdx].alpha; // x10^-6
    const dTemp = v.temp - 20; // 20C reference per ISO 1
    const dL_um = v.L * (alpha * 1e-6) * dTemp * 1000; // in µm
    const dL_mm = dL_um / 1000;
    const actL = v.L + dL_mm;
    const sign = dL_um > 0 ? "+" : "";
    return [
      {k:"r_te_dtemp", s:`${dTemp > 0 ? "+" : ""}${dTemp.toFixed(1)} °C (база 20°C)`},
      {k:"r_te_dl", s:`${sign}${dL_um.toFixed(1)} µm (${sign}${dL_mm.toFixed(4)} mm)`},
      {k:"r_te_act_len", s:`${actL.toFixed(4)} mm`}
    ];
   }},

  // 24. Hardness Converter (HRC, HB, HV, Rm)
  {id:"hardness", t:"c_hardness", ic:"💎", group:"tol",
   fields:[
    {id:"scale", k:"f_hd_scale", type:"select", def:"hrc", options:[
      {v:"hrc", k:"opt_hd_hrc"},
      {v:"hb", k:"opt_hd_hb"},
      {v:"hv", k:"opt_hd_hv"},
      {v:"rm", k:"opt_hd_rm"}
    ]},
    {id:"val", k:"f_hd_val", def:45}
   ],
   calc:v=>{
    if (!valid(v.val)) return null;
    const res = convertHardness(v.val, v.scale);
    return [
      {k:"r_hd_hrc", s:`${res.hrc} HRC`},
      {k:"r_hd_hb", s:`${res.hb} HBW`},
      {k:"r_hd_hv", s:`${res.hv} HV`},
      {k:"r_hd_rm", s:`${res.rm} МПа (Н/мм²)`}
    ];
   }},

  // 25. Machinist's Unit Converter
  {id:"unit_conv", t:"c_unit_conv", ic:"🔄", group:"tol",
   fields:[
    {id:"cat", k:"f_uc_cat", type:"select", def:"len", options:[
      {v:"len", k:"opt_uc_len"},
      {v:"spd", k:"opt_uc_spd"},
      {v:"feed", k:"opt_uc_feed"},
      {v:"frot", k:"opt_uc_frot"},
      {v:"tq", k:"opt_uc_tq"},
      {v:"prs", k:"opt_uc_prs"}
    ]},
    {id:"val", k:"f_uc_val", def:25.4}
   ],
   calc:v=>{
    if (!valid(v.val)) return null;
    const val = v.val;
    if (v.cat === "len") {
      const inVal = val / 25.4;
      const mmVal = val * 25.4;
      return [
        {k:"r_uc_res1", s:`${val} mm = ${inVal.toFixed(4)}" (дюймы)`},
        {k:"r_uc_res2", s:`${val}" (дюймы) = ${mmVal.toFixed(3)} mm`}
      ];
    } else if (v.cat === "spd") {
      const sfm = val * 3.28084;
      const mpm = val / 3.28084;
      return [
        {k:"r_uc_res1", s:`${val} м/мин = ${sfm.toFixed(1)} SFM`},
        {k:"r_uc_res2", s:`${val} SFM = ${mpm.toFixed(1)} м/мин`}
      ];
    } else if (v.cat === "feed") {
      const ipm = val / 25.4;
      const mmMin = val * 25.4;
      return [
        {k:"r_uc_res1", s:`${val} мм/мин = ${ipm.toFixed(2)} IPM`},
        {k:"r_uc_res2", s:`${val} IPM = ${mmMin.toFixed(1)} мм/мин`}
      ];
    } else if (v.cat === "frot") {
      const ipr = val / 25.4;
      const mmRev = val * 25.4;
      return [
        {k:"r_uc_res1", s:`${val} мм/об = ${ipr.toFixed(4)} IPR`},
        {k:"r_uc_res2", s:`${val} IPR = ${mmRev.toFixed(3)} мм/об`}
      ];
    } else if (v.cat === "tq") {
      const ftlb = val * 0.73756;
      const nm = val / 0.73756;
      return [
        {k:"r_uc_res1", s:`${val} Н·м = ${ftlb.toFixed(2)} ft·lb`},
        {k:"r_uc_res2", s:`${val} ft·lb = ${nm.toFixed(2)} Н·м`}
      ];
    } else {
      const psi = val * 14.5038;
      const bar = val / 14.5038;
      return [
        {k:"r_uc_res1", s:`${val} bar = ${psi.toFixed(1)} PSI`},
        {k:"r_uc_res2", s:`${val} PSI = ${bar.toFixed(2)} bar`}
      ];
    }
   }}
];

/* ---------- Rendering Engine ---------- */
const calcState = {};
const SAVE_KEY = "cnc_saved_calcs";
let savedRoot = null, savedT = null;

const loadSavedList = () => { try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || []; } catch (e) { return []; } };
const storeSavedList = l => localStorage.setItem(SAVE_KEY, JSON.stringify(l));
const fmtNum = (v, d) => isFinite(v) ? v.toLocaleString(undefined, {maximumFractionDigits: d == null ? 3 : d, minimumFractionDigits: 0}) : "—";

function renderCalcGrid(root, t, filter) {
  if (!root) return;
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
        f.options.forEach(o => {
          const op = document.createElement("option");
          op.value = o.v;
          op.textContent = o.label || t(o.k);
          input.appendChild(op);
        });
      } else {
        input = document.createElement("input");
        input.type = "number";
        input.step = "any";
        input.inputMode = "decimal";
      }
      input.value = st[f.id];
      const lab = document.createElement("label");
      lab.textContent = t(f.k);
      w.append(lab, input);
      card.appendChild(w);
      fieldEls[f.id] = {w, input, f};
    });
    const res = document.createElement("div"); res.className = "results"; card.appendChild(res);
    const saveBtn = document.createElement("button"); saveBtn.className = "btn-save"; saveBtn.textContent = t("save"); card.appendChild(saveBtn);

    let copyBtn = null;
    if (c.id === "bolt") {
      copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "btn-copy";
      copyBtn.textContent = t("copy_gcode");
      card.appendChild(copyBtn);
    }

    let lastRows = null;
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        if (!lastRows || !lastRows.length) return;
        const gcode = lastRows.map((r, i) => `N${i + 1} ${r.text}`).join("\n");
        const onDone = () => {
          copyBtn.textContent = t("copied_ok");
          setTimeout(() => { copyBtn.textContent = t("copy_gcode"); }, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(gcode).then(onDone).catch(() => {
            const ta = document.createElement("textarea");
            ta.value = gcode;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            onDone();
          });
        } else {
          const ta = document.createElement("textarea");
          ta.value = gcode;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          onDone();
        }
      });
    }

    const update = () => {
      const v = {};
      c.fields.forEach(f => {
        const raw = fieldEls[f.id].input.value;
        v[f.id] = f.type === "select" ? (raw === "custom" || isNaN(+raw) || raw === "" ? raw : +raw) : parseFloat(raw);
        st[f.id] = raw;
      });
      c.fields.forEach(f => { if (f.showIf) fieldEls[f.id].w.hidden = !f.showIf(v); });
      const out = c.calc(v);
      if (!out) { lastRows = null; res.innerHTML = `<span>${t("invalid")}</span>`; return; }
      lastRows = out.map(o => {
        if (o.s) return {label: o.label || (o.k ? t(o.k) : ""), text: (typeof o.s === "string" && o.s.startsWith("fit_") ? t(o.s) : o.s)};
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
  if (!root) return;
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
