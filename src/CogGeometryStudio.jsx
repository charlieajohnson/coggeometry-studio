import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import * as d3 from "d3";

// ═══════════════════════════════════════════════════════════════════════════════
//  COGGEOMETRY STUDIO — Geometric Cognition Programme Suite
//  Modules: State Space Workbench · Coupling Analyzer
//  Responsive: mobile-first with desktop enhancement
// ═══════════════════════════════════════════════════════════════════════════════

const TAU = 2 * Math.PI;

// ─── RESPONSIVE HOOK ─────────────────────────────────────────────────────────

function useMedia(query) {
  const [matches, setMatches] = useState(() => typeof window !== "undefined" ? window.matchMedia(query).matches : false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────

const T = {
  bg:        "#060a11",
  bg1:       "#0a1018",
  bg2:       "#0e1520",
  bg3:       "#141d2b",
  surface:   "rgba(14,21,33,0.7)",
  border:    "rgba(74,144,217,0.10)",
  border2:   "rgba(74,144,217,0.20)",
  border3:   "rgba(74,144,217,0.35)",
  text:      "#c8d8ec",
  textDim:   "#5a7a9a",
  textMuted: "#3a5070",
  accent:    "#4a90d9",
  accentLt:  "#8bb8e0",
  purple:    "#8b5cf6",
  rose:      "#f472b6",
  emerald:   "#34d399",
  amber:     "#f59e0b",
  red:       "#e85d5d",
  mono:      "'JetBrains Mono', 'Fira Code', monospace",
  sans:      "'DM Sans', 'Söhne', sans-serif",
  display:   "'Instrument Serif', 'Georgia', serif",
};

// ─── SHARED GENERATORS ───────────────────────────────────────────────────────

function generateCircle(n = 800, noise = 0.08) {
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * TAU;
    return [Math.cos(t) + (Math.random() - 0.5) * noise, Math.sin(t) + (Math.random() - 0.5) * noise, (Math.random() - 0.5) * noise * 0.5];
  });
}

function generateTorus(n = 1200, noise = 0.06, R = 2, r = 0.8) {
  return Array.from({ length: n }, () => {
    const u = Math.random() * TAU, v = Math.random() * TAU;
    return [(R + r * Math.cos(v)) * Math.cos(u) + (Math.random() - 0.5) * noise, (R + r * Math.cos(v)) * Math.sin(u) + (Math.random() - 0.5) * noise, r * Math.sin(v) + (Math.random() - 0.5) * noise];
  });
}

function generateKleinBottle(n = 1200, noise = 0.06) {
  return Array.from({ length: n }, () => {
    const u = Math.random() * TAU, v = Math.random() * TAU, a = 2, b = 1;
    let x = (a + b * Math.cos(v)) * Math.cos(u), y = (a + b * Math.cos(v)) * Math.sin(u), z = u < Math.PI ? b * Math.sin(v) : -b * Math.sin(v) * Math.cos(u - Math.PI);
    return [x + (Math.random() - 0.5) * noise, y + (Math.random() - 0.5) * noise, z + (Math.random() - 0.5) * noise];
  });
}

function generateSphere(n = 1000, noise = 0.06) {
  return Array.from({ length: n }, () => {
    const theta = Math.acos(2 * Math.random() - 1), phi = Math.random() * TAU, r = 1.5;
    return [r * Math.sin(theta) * Math.cos(phi) + (Math.random() - 0.5) * noise, r * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * noise, r * Math.cos(theta) + (Math.random() - 0.5) * noise];
  });
}

function generateCoupledOscillators(n = 1000, coupling = 0.7) {
  const pts = []; let p1 = 0, p2 = 0;
  for (let i = 0; i < n; i++) { p1 += 0.05 + (Math.random() - 0.5) * 0.02; p2 += 0.08 + coupling * Math.sin(p1 - p2) * 0.03 + (Math.random() - 0.5) * 0.02; pts.push([Math.cos(p1), Math.sin(p1), Math.cos(p2)]); }
  return pts;
}

function generateStratified(n = 1000) {
  return Array.from({ length: n }, () => {
    const r = Math.random();
    if (r < 0.4) { const t = Math.random() * TAU; return [Math.cos(t) * 1.5, Math.sin(t) * 1.5, -1 + (Math.random() - 0.5) * 0.1]; }
    if (r < 0.7) { const t = Math.random() * TAU, s = Math.random() * 0.8; return [Math.cos(t) * s, Math.sin(t) * s, (Math.random() - 0.5) * 0.1]; }
    return [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, 1 + (Math.random() - 0.5) * 0.3];
  });
}

function generateProductCircles(n, noise = 0) {
  return Array.from({ length: n }, () => { const t1 = Math.random() * TAU, t2 = Math.random() * TAU; return { x: [Math.cos(t1) + (Math.random() - 0.5) * noise, Math.sin(t1) + (Math.random() - 0.5) * noise], y: [Math.cos(t2) + (Math.random() - 0.5) * noise, Math.sin(t2) + (Math.random() - 0.5) * noise], t1, t2 }; });
}
function generatePhaseLocked(n, lockStrength = 0.8, noise = 0.1) {
  return Array.from({ length: n }, () => { const t1 = Math.random() * TAU, t2 = (t1 * lockStrength + (1 - lockStrength) * Math.random() * TAU + (Math.random() - 0.5) * noise) % TAU; return { x: [Math.cos(t1) + (Math.random() - 0.5) * noise, Math.sin(t1) + (Math.random() - 0.5) * noise], y: [Math.cos(t2) + (Math.random() - 0.5) * noise, Math.sin(t2) + (Math.random() - 0.5) * noise], t1, t2 }; });
}
function generateFiberWidth(n, noise = 0.1) {
  return Array.from({ length: n }, () => { const t1 = Math.random() * TAU, fw = 0.3 + 0.7 * Math.abs(Math.sin(t1)), t2 = (Math.random() - 0.5) * fw; return { x: [Math.cos(t1) + (Math.random() - 0.5) * noise, Math.sin(t1) + (Math.random() - 0.5) * noise], y: [t2 + (Math.random() - 0.5) * noise, t2 * 0.5 + (Math.random() - 0.5) * noise], t1, t2, fiberWidth: fw }; });
}
function generateKleinCoupling(n, noise = 0.1) {
  return Array.from({ length: n }, () => { const t1 = Math.random() * TAU, flip = t1 > Math.PI ? -1 : 1, t2 = Math.random() * TAU; return { x: [Math.cos(t1) + (Math.random() - 0.5) * noise, Math.sin(t1) + (Math.random() - 0.5) * noise], y: [Math.cos(t2) * flip + (Math.random() - 0.5) * noise, Math.sin(t2) + (Math.random() - 0.5) * noise], t1, t2 }; });
}

// ─── TOPOLOGY COMPUTATIONS ───────────────────────────────────────────────────

const SINGLE_GENERATORS = {
  circle: { fn: generateCircle, label: "S¹ Circle", betti: [1, 1, 0], desc: "Head direction ring" },
  torus: { fn: generateTorus, label: "T² Torus", betti: [1, 2, 1], desc: "Grid cell manifold" },
  klein: { fn: generateKleinBottle, label: "Klein Bottle", betti: [1, 1, 0], desc: "Non-orientable surface" },
  sphere: { fn: generateSphere, label: "S² Sphere", betti: [1, 0, 1], desc: "Closed surface" },
  coupled: { fn: generateCoupledOscillators, label: "Coupled Oscillators", betti: [1, 1, 0], desc: "Phase-locked systems" },
  stratified: { fn: generateStratified, label: "Stratified Space", betti: [1, 1, 0], desc: "Multi-dimensional strata" },
};

const COUPLING_FAMILIES = {
  "product-torus": { label: "Product Torus (S¹ × S¹)", shortLabel: "Product T²", desc: "Independent → T² product", coupled: false },
  "phase-locked": { label: "Phase-Locked Circles", shortLabel: "Phase-Lock", desc: "Diagonal → non-product", coupled: true },
  "fiber-width": { label: "Fiber-Width Coupling", shortLabel: "Fiber-Width", desc: "Phase-dep. range", coupled: true },
  "klein": { label: "Klein Coupling", shortLabel: "Klein", desc: "Orientation-reversing", coupled: true },
  "null": { label: "Gaussian Null", shortLabel: "Null", desc: "No manifold structure", coupled: false },
};

function simulatePersistence(type) {
  const b = SINGLE_GENERATORS[type].betti, bars = [];
  for (let i = 0; i < 5 + Math.floor(Math.random() * 3); i++) { const birth = Math.random() * 0.1; bars.push({ dim: 0, birth, death: i === 0 ? 2.5 : birth + 0.05 + Math.random() * 0.2, persistent: i === 0 }); }
  for (let i = 0; i < b[1] + Math.floor(Math.random() * 3); i++) { const birth = 0.1 + Math.random() * 0.15; bars.push({ dim: 1, birth, death: i < b[1] ? 1.8 + Math.random() * 0.7 : birth + 0.1 + Math.random() * 0.3, persistent: i < b[1] }); }
  for (let i = 0; i < b[2] + Math.floor(Math.random() * 2); i++) { const birth = 0.2 + Math.random() * 0.2; bars.push({ dim: 2, birth, death: i < b[2] ? 1.5 + Math.random() * 0.8 : birth + 0.1 + Math.random() * 0.2, persistent: i < b[2] }); }
  return bars;
}

function generateClaimReport(type) {
  const b = SINGLE_GENERATORS[type].betti, claims = [];
  claims.push(b[1] >= 1 ? { text: `${b[1]} persistent 1-cycle${b[1] > 1 ? "s" : ""} detected`, status: "confirmed", confidence: 0.92 + Math.random() * 0.06 } : { text: "No persistent 1-cycles", status: "confirmed", confidence: 0.95 });
  const mc = { torus: [{ text: "Toroidal manifold supported", status: "strong", confidence: 0.85 + Math.random() * 0.1 }, { text: "Orientability: orientable", status: "confirmed", confidence: 0.9 }], circle: [{ text: "Circular manifold (S¹) supported", status: "strong", confidence: 0.88 + Math.random() * 0.1 }, { text: "Orientability: trivially orientable", status: "confirmed", confidence: 0.95 }], klein: [{ text: "Non-orientable surface detected", status: "strong", confidence: 0.78 + Math.random() * 0.1 }, { text: "Z₂ vs Z₃ coefficient sensitivity flagged", status: "investigating", confidence: 0.65 }], sphere: [{ text: "Closed surface (S²) supported", status: "strong", confidence: 0.82 + Math.random() * 0.1 }, { text: "Orientability: orientable", status: "confirmed", confidence: 0.9 }], coupled: [{ text: "Coupled circular structure detected", status: "strong", confidence: 0.75 + Math.random() * 0.1 }, { text: "Geometric coupling: under investigation", status: "investigating", confidence: 0.6 }], stratified: [{ text: "Multiple strata detected", status: "strong", confidence: 0.7 + Math.random() * 0.1 }, { text: "Local dimension variation confirmed", status: "confirmed", confidence: 0.82 }] };
  return [...claims, ...(mc[type] || [])];
}

function generateBarcode(family) {
  const bc = { "product-torus": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.15, death: 2.8, label: "1-cycle (θ₁)" }, { dim: 1, birth: 0.18, death: 2.6, label: "1-cycle (θ₂)" }, { dim: 2, birth: 0.35, death: 1.8, label: "2-cavity" }], "phase-locked": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.12, death: 2.9, label: "1-cycle (diagonal)" }, { dim: 1, birth: 0.5, death: 0.9, label: "1-cycle (noise)" }], "fiber-width": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.14, death: 2.7, label: "1-cycle (base S¹)" }], "klein": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.13, death: 2.5, label: "1-cycle (orient.-rev.)" }, { dim: 1, birth: 0.2, death: 2.3, label: "1-cycle (fiber)" }], "null": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.8, death: 1.1, label: "Noise artifact" }] };
  return bc[family] || bc["null"];
}

function computeKunneth(key) {
  const r = { "product-torus": { marginalX: [1,1,0], marginalY: [1,1,0], predicted: [1,2,1], observed: [1,2,1], delta: [0,0,0], coupled: false }, "phase-locked": { marginalX: [1,1,0], marginalY: [1,1,0], predicted: [1,2,1], observed: [1,1,0], delta: [0,1,1], coupled: true }, "fiber-width": { marginalX: [1,1,0], marginalY: [1,0,0], predicted: [1,1,0], observed: [1,1,0], delta: [0,0,0], coupled: false }, "klein": { marginalX: [1,1,0], marginalY: [1,1,0], predicted: [1,2,1], observed: [1,1,0], delta: [0,1,1], coupled: true }, "null": { marginalX: [1,0,0], marginalY: [1,0,0], predicted: [1,0,0], observed: [1,0,0], delta: [0,0,0], coupled: false } };
  return r[key] || r["null"];
}

// ─── SHARED UI COMPONENTS ────────────────────────────────────────────────────

function Btn({ children, active, onClick, style = {} }) {
  return <button onClick={onClick} style={{ padding: "7px 14px", border: "1px solid", borderRadius: 6, cursor: "pointer", borderColor: active ? T.border3 : T.border, fontFamily: T.mono, fontSize: 10, background: active ? `${T.accent}18` : "transparent", color: active ? T.accentLt : T.textDim, fontWeight: active ? 600 : 400, transition: "all 0.2s", ...style }}>{children}</button>;
}

function Card({ children, style = {} }) {
  return <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: 16, ...style }}>{children}</div>;
}

function CardHeader({ children, style = {} }) {
  return <div style={{ fontSize: 11, fontWeight: 600, color: T.textDim, marginBottom: 12, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: T.mono, ...style }}>{children}</div>;
}

function Slider({ label, value, min, max, step, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
      <span style={{ fontSize: 10, color: T.textDim, fontFamily: T.mono, minWidth: 40 }}>{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(+e.target.value)} style={{ flex: 1, accentColor: T.accent, height: 3 }} />
      <span style={{ fontSize: 10, color: T.accentLt, fontFamily: T.mono, minWidth: 36, textAlign: "right" }}>{typeof value === "number" && value % 1 !== 0 ? value.toFixed(2) : value}</span>
    </div>
  );
}

function Collapsible({ title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid ${T.border}` }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", padding: "12px 16px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: T.textDim, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: T.mono }}>{title}</span>
        <span style={{ fontSize: 14, color: T.textDim, transform: open ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.2s" }}>▾</span>
      </button>
      {open && <div style={{ padding: "0 16px 16px" }}>{children}</div>}
    </div>
  );
}

function SubTabs({ tabs, active, onChange }) {
  return (
    <div style={{ display: "flex", overflowX: "auto", WebkitOverflowScrolling: "touch", borderBottom: `1px solid ${T.border}`, background: "rgba(15,23,42,0.3)" }}>
      {tabs.map(tab => (
        <button key={tab.key} onClick={() => onChange(tab.key)} style={{
          padding: "11px 16px", border: "none", cursor: "pointer", background: "transparent",
          fontSize: 11, letterSpacing: "0.02em", fontFamily: T.mono, whiteSpace: "nowrap", flexShrink: 0,
          color: active === tab.key ? T.accentLt : T.textDim,
          borderBottom: active === tab.key ? `2px solid ${T.accent}` : "2px solid transparent",
          fontWeight: active === tab.key ? 600 : 400,
        }}>{tab.label}</button>
      ))}
    </div>
  );
}

// ─── THREE.JS SCENE ──────────────────────────────────────────────────────────

function ThreeScene({ points, colorMode, height = "100%" }) {
  const mountRef = useRef(null);
  const sceneRef = useRef({});
  const frameRef = useRef(0);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0.3, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const w = container.clientWidth, h = container.clientHeight;
    if (w === 0 || h === 0) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 0, 6);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    sceneRef.current = { scene, camera, renderer };

    const onDown = (e) => { isDragging.current = true; const cx = e.touches ? e.touches[0].clientX : e.clientX; const cy = e.touches ? e.touches[0].clientY : e.clientY; lastMouse.current = { x: cx, y: cy }; };
    const onMove = (e) => { if (!isDragging.current) return; const cx = e.touches ? e.touches[0].clientX : e.clientX; const cy = e.touches ? e.touches[0].clientY : e.clientY; rotation.current.y += (cx - lastMouse.current.x) * 0.005; rotation.current.x += (cy - lastMouse.current.y) * 0.005; lastMouse.current = { x: cx, y: cy }; };
    const onUp = () => { isDragging.current = false; };

    const el = renderer.domElement;
    el.addEventListener("mousedown", onDown); el.addEventListener("mousemove", onMove); window.addEventListener("mouseup", onUp);
    el.addEventListener("touchstart", onDown, { passive: true }); el.addEventListener("touchmove", onMove, { passive: true }); window.addEventListener("touchend", onUp);

    const animate = () => { frameRef.current = requestAnimationFrame(animate); if (!isDragging.current) rotation.current.y += 0.003; scene.rotation.x = rotation.current.x; scene.rotation.y = rotation.current.y; renderer.render(scene, camera); };
    animate();

    return () => { cancelAnimationFrame(frameRef.current); el.removeEventListener("mousedown", onDown); el.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); el.removeEventListener("touchstart", onDown); el.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onUp); renderer.dispose(); if (container.contains(el)) container.removeChild(el); };
  }, []);

  useEffect(() => {
    const { scene } = sceneRef.current;
    if (!scene) return;
    while (scene.children.length > 0) scene.remove(scene.children[0]);
    const grid = new THREE.GridHelper(8, 16, 0x1a2a4a, 0x0d1a2d);
    grid.position.y = -2.5; grid.material.opacity = 0.3; grid.material.transparent = true; scene.add(grid);
    if (!points || !points.length) return;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
    points.forEach(p => { minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]); minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); minZ = Math.min(minZ, p[2]); maxZ = Math.max(maxZ, p[2]); });
    const cx = (minX+maxX)/2, cy = (minY+maxY)/2, cz = (minZ+maxZ)/2;
    const scale = 2.5 / Math.max(maxX-minX, maxY-minY, maxZ-minZ, 0.01);
    const colorSchemes = {
      topology: (i, p) => new THREE.Color().setHSL(((Math.atan2(p[1]-cy, p[0]-cx)/TAU)+1)%1*0.8+0.55, 0.85, 0.55),
      time: (i) => { const t = i/points.length; return new THREE.Color().setHSL(0.55+t*0.35, 0.8, 0.45+t*0.2); },
      height: (i, p) => { const t = (p[2]-minZ)/(maxZ-minZ+0.001); return new THREE.Color().setHSL(t*0.15, 0.9, 0.4+t*0.25); },
    };
    const colorFn = colorSchemes[colorMode] || colorSchemes.topology;
    const geo = new THREE.BufferGeometry(), pos = new Float32Array(points.length*3), col = new Float32Array(points.length*3);
    points.forEach((p, i) => { pos[i*3]=(p[0]-cx)*scale; pos[i*3+1]=(p[1]-cy)*scale; pos[i*3+2]=(p[2]-cz)*scale; const c = colorFn(i, p); col[i*3]=c.r; col[i*3+1]=c.g; col[i*3+2]=c.b; });
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true })));
    if (points.length < 2000) {
      const lineGeo = new THREE.BufferGeometry(), lp = [], lc = [];
      const sorted = [...points].sort((a, b) => Math.atan2(a[1], a[0]) - Math.atan2(b[1], b[0]));
      const step = Math.max(1, Math.floor(sorted.length / 300));
      for (let i = 0; i < sorted.length - step; i += step) { const a = sorted[i], b = sorted[i+step]; if (Math.sqrt((a[0]-b[0])**2+(a[1]-b[1])**2+(a[2]-b[2])**2) < (maxX-minX)*0.25) { lp.push((a[0]-cx)*scale,(a[1]-cy)*scale,(a[2]-cz)*scale,(b[0]-cx)*scale,(b[1]-cy)*scale,(b[2]-cz)*scale); const cA=colorFn(i,a), cB=colorFn(i+step,b); lc.push(cA.r,cA.g,cA.b,cB.r,cB.g,cB.b); } }
      if (lp.length > 0) { lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lp, 3)); lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(lc, 3)); scene.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.2 }))); }
    }
  }, [points, colorMode]);

  return <div ref={mountRef} style={{ width: "100%", height, cursor: "grab", touchAction: "none" }} />;
}

// ─── D3 CHART COMPONENTS ─────────────────────────────────────────────────────

function SingleBarcodeChart({ bars, width = 320, height = 150 }) {
  const svgRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current || !bars.length) return;
    const svg = d3.select(svgRef.current); svg.selectAll("*").remove();
    const m = { top: 12, right: 16, bottom: 24, left: 36 }, w = width-m.left-m.right, h = height-m.top-m.bottom;
    const g = svg.append("g").attr("transform", `translate(${m.left},${m.top})`);
    const maxD = d3.max(bars, d => d.death) || 2.5, x = d3.scaleLinear().domain([0, maxD]).range([0, w]);
    const dc = [T.accent, T.red, T.purple], dl = ["β₀", "β₁", "β₂"];
    [0,1,2].forEach((dim, di) => {
      const db = bars.filter(b => b.dim === dim), ys = di*(h/3)+4, bh = Math.min(12, (h/3-8)/Math.max(db.length, 1));
      g.append("text").attr("x", -8).attr("y", ys+(db.length*bh)/2+4).attr("text-anchor", "end").attr("fill", dc[di]).attr("font-size", "11px").attr("font-family", T.mono).attr("font-weight", "600").text(dl[di]);
      db.forEach((bar, bi) => { g.append("rect").attr("x", x(bar.birth)).attr("y", ys+bi*bh).attr("width", x(bar.death)-x(bar.birth)).attr("height", Math.max(bh-2, 2)).attr("fill", dc[di]).attr("opacity", bar.persistent ? 0.9 : 0.3).attr("rx", 1); });
    });
    g.append("g").attr("transform", `translate(0,${h})`).call(d3.axisBottom(x).ticks(5).tickSize(3)).selectAll("text").attr("fill", T.textDim).attr("font-size", "9px");
    g.selectAll(".domain").attr("stroke", T.textMuted); g.selectAll(".tick line").attr("stroke", T.textMuted);
    g.append("text").attr("x", w/2).attr("y", h+20).attr("text-anchor", "middle").attr("fill", T.textMuted).attr("font-size", "9px").text("filtration radius ε");
  }, [bars, width, height]);
  return <svg ref={svgRef} width={width} height={height} style={{ maxWidth: "100%" }} />;
}

function PersistenceDiagram({ bars, width = 200, height = 200 }) {
  const svgRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current || !bars.length) return;
    const svg = d3.select(svgRef.current); svg.selectAll("*").remove();
    const m = { top: 12, right: 12, bottom: 28, left: 32 }, w = width-m.left-m.right, h = height-m.top-m.bottom;
    const g = svg.append("g").attr("transform", `translate(${m.left},${m.top})`);
    const mv = d3.max(bars, d => d.death) || 2.5, x = d3.scaleLinear().domain([0, mv]).range([0, w]), y = d3.scaleLinear().domain([0, mv]).range([h, 0]);
    g.append("line").attr("x1",0).attr("y1",h).attr("x2",w).attr("y2",0).attr("stroke",T.textMuted).attr("stroke-dasharray","3,3");
    const dc = [T.accent, T.red, T.purple];
    bars.forEach(bar => { g.append("circle").attr("cx",x(bar.birth)).attr("cy",y(bar.death)).attr("r",bar.persistent?5:3).attr("fill",dc[bar.dim]).attr("opacity",bar.persistent?0.9:0.35).attr("stroke",bar.persistent?"#fff":"none").attr("stroke-width",bar.persistent?1:0); });
    g.append("g").attr("transform",`translate(0,${h})`).call(d3.axisBottom(x).ticks(4).tickSize(3)).selectAll("text").attr("fill",T.textDim).attr("font-size","8px");
    g.append("g").call(d3.axisLeft(y).ticks(4).tickSize(3)).selectAll("text").attr("fill",T.textDim).attr("font-size","8px");
    g.selectAll(".domain").attr("stroke",T.textMuted); g.selectAll(".tick line").attr("stroke",T.textMuted);
  }, [bars, width, height]);
  return <svg ref={svgRef} width={width} height={height} style={{ maxWidth: "100%" }} />;
}

function CohomologyPlot({ points, width = 200, height = 200 }) {
  const svgRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current || !points.length) return;
    const svg = d3.select(svgRef.current); svg.selectAll("*").remove();
    const m = 12, w = width-m*2, h = height-m*2;
    const g = svg.append("g").attr("transform", `translate(${m+w/2},${m+h/2})`);
    const r = Math.min(w, h)/2-10;
    const sampled = points.filter((_, i) => i % Math.max(1, Math.floor(points.length/150)) === 0);
    g.append("circle").attr("r", r).attr("fill","none").attr("stroke",T.border2).attr("stroke-width",1);
    g.append("circle").attr("r", r*0.5).attr("fill","none").attr("stroke",T.border).attr("stroke-width",0.5).attr("stroke-dasharray","2,3");
    sampled.forEach(p => { const angle=Math.atan2(p[1],p[0]), dist=Math.sqrt(p[0]**2+p[1]**2+(p[2]||0)**2), nr=(dist/3.5)*r; g.append("circle").attr("cx",nr*Math.cos(angle)).attr("cy",nr*Math.sin(angle)).attr("r",2.5).attr("fill",d3.interpolateViridis(((angle/TAU)+1)%1)).attr("opacity",0.7); });
  }, [points, width, height]);
  return <svg ref={svgRef} width={width} height={height} style={{ maxWidth: "100%" }} />;
}

// Canvas-based coupling visualizations
function ManifoldCanvas({ data, width = 340, height = 260 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!data?.length || !canvasRef.current) return;
    const c = canvasRef.current, ctx = c.getContext("2d"), dpr = window.devicePixelRatio||1;
    c.width = width*dpr; c.height = height*dpr; ctx.scale(dpr, dpr); ctx.clearRect(0,0,width,height);
    const xs = data.map(d => d.x[0]), ys = data.map(d => d.x[1]), pad = 24;
    const xS = d3.scaleLinear().domain([Math.min(...xs)-0.2, Math.max(...xs)+0.2]).range([pad, width-pad]);
    const yS = d3.scaleLinear().domain([Math.min(...ys)-0.2, Math.max(...ys)+0.2]).range([height-pad, pad]);
    const cS = d3.scaleSequential(d3.interpolatePlasma).domain([0, TAU]);
    ctx.globalAlpha=0.04; ctx.strokeStyle=T.textDim;
    for (let i=0;i<data.length;i++) for (let j=i+1;j<Math.min(i+3,data.length);j++) { ctx.beginPath(); ctx.moveTo(xS(data[i].x[0]),yS(data[i].x[1])); ctx.lineTo(xS(data[j].x[0]),yS(data[j].x[1])); ctx.stroke(); }
    ctx.globalAlpha=1;
    data.forEach(d => { ctx.beginPath(); ctx.arc(xS(d.x[0]),yS(d.x[1]),2.2,0,TAU); ctx.fillStyle=cS(d.t1||0); ctx.fill(); });
  }, [data, width, height]);
  return <canvas ref={canvasRef} style={{ width: "100%", height: "auto", aspectRatio: `${width}/${height}`, borderRadius: 6 }} />;
}

function JointCanvas({ data, width = 340, height = 260 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!data?.length || !canvasRef.current) return;
    const c = canvasRef.current, ctx = c.getContext("2d"), dpr = window.devicePixelRatio||1;
    c.width = width*dpr; c.height = height*dpr; ctx.scale(dpr, dpr); ctx.clearRect(0,0,width,height);
    const pad = 24, xS = d3.scaleLinear().domain([0,TAU]).range([pad,width-pad]), yS = d3.scaleLinear().domain([0,TAU]).range([height-pad,pad]);
    const cS = d3.scaleSequential(d3.interpolateViridis).domain([0, TAU]);
    ctx.strokeStyle=T.border; ctx.lineWidth=0.5;
    for (let i=0;i<=4;i++) { const v=(i/4)*TAU; ctx.beginPath(); ctx.moveTo(xS(v),pad); ctx.lineTo(xS(v),height-pad); ctx.stroke(); ctx.beginPath(); ctx.moveTo(pad,yS(v)); ctx.lineTo(width-pad,yS(v)); ctx.stroke(); }
    data.forEach(d => { const t1=((d.t1%TAU)+TAU)%TAU, t2=((d.t2%TAU)+TAU)%TAU; ctx.beginPath(); ctx.arc(xS(t1),yS(t2),2,0,TAU); ctx.fillStyle=cS(t1); ctx.globalAlpha=0.7; ctx.fill(); ctx.globalAlpha=1; });
    ctx.fillStyle=T.textDim; ctx.font=`11px ${T.mono}`; ctx.textAlign="center";
    ctx.fillText("θ₁",width/2,height-4);
    ctx.save(); ctx.translate(8,height/2); ctx.rotate(-Math.PI/2); ctx.fillText("θ₂",0,0); ctx.restore();
  }, [data, width, height]);
  return <canvas ref={canvasRef} style={{ width: "100%", height: "auto", aspectRatio: `${width}/${height}`, borderRadius: 6 }} />;
}

function CouplingBarcodeCanvas({ barcodes, width = 380, height = 160 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const c = canvasRef.current, ctx = c.getContext("2d"), dpr = window.devicePixelRatio||1;
    c.width = width*dpr; c.height = height*dpr; ctx.scale(dpr,dpr); ctx.clearRect(0,0,width,height);
    const dc = { 0: T.rose, 1: T.accent, 2: T.emerald }, pad = { left: 36, right: 16, top: 16, bottom: 28 };
    const maxD = Math.max(...barcodes.filter(b => b.death !== Infinity).map(b => b.death), 3);
    const xS = d3.scaleLinear().domain([0,maxD]).range([pad.left,width-pad.right]);
    const bh = Math.min(18, (height-pad.top-pad.bottom)/barcodes.length-3);
    barcodes.forEach((bar, i) => {
      const y = pad.top+i*(bh+4), x0 = xS(bar.birth), x1 = bar.death===Infinity?width-pad.right:xS(bar.death), color = dc[bar.dim]||T.textDim;
      ctx.fillStyle=color; ctx.globalAlpha=0.15; ctx.fillRect(x0,y,x1-x0,bh);
      ctx.globalAlpha=1; ctx.strokeStyle=color; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(x0,y+bh/2); ctx.lineTo(x1,y+bh/2); ctx.stroke();
      if (bar.death===Infinity) { ctx.fillStyle=color; ctx.beginPath(); ctx.moveTo(x1-5,y+2); ctx.lineTo(x1,y+bh/2); ctx.lineTo(x1-5,y+bh-2); ctx.fill(); }
      ctx.fillStyle=T.text; ctx.font=`9px ${T.mono}`; ctx.textAlign="left"; ctx.fillText(`H${bar.dim}`,6,y+bh/2+3);
    });
    ctx.strokeStyle=T.textMuted; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(pad.left,height-pad.bottom); ctx.lineTo(width-pad.right,height-pad.bottom); ctx.stroke();
    ctx.fillStyle=T.textDim; ctx.font=`10px ${T.mono}`; ctx.textAlign="center"; ctx.fillText("filtration radius ε",width/2,height-6);
  }, [barcodes, width, height]);
  return <canvas ref={canvasRef} style={{ width: "100%", height: "auto", aspectRatio: `${width}/${height}`, borderRadius: 6 }} />;
}

// ═══════════════════════════════════════════════════════════════════════════════
//  MODULE A — STATE SPACE WORKBENCH
// ═══════════════════════════════════════════════════════════════════════════════

function StateSpaceWorkbench() {
  const isMobile = useMedia("(max-width: 768px)");
  const [manifold, setManifold] = useState("torus");
  const [noise, setNoise] = useState(0.06);
  const [nPoints, setNPoints] = useState(isMobile ? 600 : 1200);
  const [colorMode, setColorMode] = useState("topology");
  const [analysisRun, setAnalysisRun] = useState(false);
  const [claimLevel, setClaimLevel] = useState(0);
  const [escalating, setEscalating] = useState(null);
  const [mobileTab, setMobileTab] = useState("3d");

  const points = useMemo(() => {
    if (manifold === "torus") return generateTorus(nPoints, noise);
    if (manifold === "circle") return generateCircle(nPoints, noise);
    if (manifold === "klein") return generateKleinBottle(nPoints, noise);
    if (manifold === "sphere") return generateSphere(nPoints, noise);
    if (manifold === "coupled") return generateCoupledOscillators(nPoints);
    if (manifold === "stratified") return generateStratified(nPoints);
    return generateTorus(nPoints, noise);
  }, [manifold, noise, nPoints]);

  const bars = useMemo(() => simulatePersistence(manifold), [manifold, analysisRun]);
  const claims = useMemo(() => generateClaimReport(manifold), [manifold, analysisRun]);
  const escalateClaim = useCallback((test) => { setEscalating(test); setTimeout(() => { setClaimLevel(prev => Math.min(prev + 1, 4)); setEscalating(null); }, 1500); }, []);

  const gen = SINGLE_GENERATORS[manifold];
  const statusColors = { confirmed: T.emerald, strong: T.accent, investigating: T.amber, unresolved: "#6b7280" };
  const claimLevels = ["Topological screening", "Geometry estimation", "Orientability resolved", "Dynamical characterization", "Full geometric claim"];
  const strongestClaims = { torus: "Toroidal latent manifold with two persistent 1-cycles. Orientable.", circle: "Circular manifold (S¹) with one persistent 1-cycle. Ring attractor dynamics.", klein: "Non-orientable surface candidate. Z₂/Z₃ coefficient divergence detected.", sphere: "Closed orientable surface (S²) with persistent 2-cycle. Spherical topology.", coupled: "Coupled circular systems with Künneth deviation Δ₁ = 1. Geometric coupling.", stratified: "Multi-stratum state space. Stratified structure candidate. Not a smooth manifold." };

  // ─── MOBILE LAYOUT ──────────────────────────────
  if (isMobile) {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Controls */}
        <Collapsible title="◇ State Space Explorer" defaultOpen={false}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, marginBottom: 12 }}>
            {Object.entries(SINGLE_GENERATORS).map(([key, val]) => (
              <button key={key} onClick={() => { setManifold(key); setClaimLevel(0); }} style={{ padding: "8px 4px", border: `1px solid ${manifold === key ? T.border3 : T.border}`, borderRadius: 5, cursor: "pointer", fontSize: 9, fontFamily: T.sans, fontWeight: 500, background: manifold === key ? `${T.accent}18` : T.bg2, color: manifold === key ? T.accentLt : T.textDim }}>{val.label}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 10 }}>
            <Slider label="σ" value={noise} min={0} max={0.3} step={0.01} onChange={setNoise} />
            <Slider label="n" value={nPoints} min={200} max={2000} step={100} onChange={setNPoints} />
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {["topology", "time", "height"].map(mode => <Btn key={mode} active={colorMode === mode} onClick={() => setColorMode(mode)} style={{ fontSize: 9, padding: "6px 10px" }}>{mode}</Btn>)}
          </div>
        </Collapsible>

        {/* Mobile tabs */}
        <SubTabs
          tabs={[{ key: "3d", label: "3D View" }, { key: "topology", label: "Topology" }, { key: "claims", label: "Claims" }]}
          active={mobileTab}
          onChange={setMobileTab}
        />

        {/* Tab content */}
        <div style={{ flex: 1, overflow: "auto" }}>
          {mobileTab === "3d" && (
            <div style={{ position: "relative", height: "min(60vh, 500px)" }}>
              <ThreeScene points={points} colorMode={colorMode} />
              <div style={{ position: "absolute", bottom: 8, left: 8, background: "rgba(6,11,20,0.85)", borderRadius: 6, padding: "5px 8px", border: `1px solid ${T.border}`, fontSize: 9, color: T.textDim, fontFamily: T.mono }}>
                {gen.label} · dim: {manifold === "stratified" ? "1–2" : manifold === "circle" ? "1" : "2"} · n: {points.length}
              </div>
              <div style={{ position: "absolute", top: 8, right: 8, background: "rgba(6,11,20,0.8)", borderRadius: 6, padding: "4px 8px", border: `1px solid ${T.border}`, fontSize: 9, color: T.textMuted, fontFamily: T.mono }}>drag to rotate</div>
            </div>
          )}

          {mobileTab === "topology" && (
            <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 12 }}>
              <Card>
                <div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: T.mono }}>Betti Numbers</div>
                <div style={{ display: "flex", gap: 16, padding: "6px 0" }}>
                  {gen.betti.map((b, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: [T.accent, T.red, T.purple][i], fontFamily: T.mono, fontSize: 13, fontWeight: 700 }}>β₀β₁β₂</span><span style={{ color: T.text, fontFamily: T.mono, fontSize: 15 }}>{b}</span></div>)}
                </div>
              </Card>
              <Card style={{ padding: 10 }}>
                <div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: T.mono }}>Persistence Barcode</div>
                <SingleBarcodeChart bars={bars} width={360} height={140} />
              </Card>
              <Card style={{ padding: 10 }}>
                <div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: T.mono }}>Persistence Diagram</div>
                <PersistenceDiagram bars={bars} width={300} height={200} />
              </Card>
              <Card style={{ padding: 10 }}>
                <div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: T.mono }}>Cohomology Coordinates</div>
                <CohomologyPlot points={points} width={300} height={200} />
              </Card>
            </div>
          )}

          {mobileTab === "claims" && (
            <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 12 }}>
              <Card>
                <div style={{ fontSize: 10, fontWeight: 600, color: T.accentLt, marginBottom: 10, fontFamily: T.sans }}>Current Hypothesis</div>
                {claims.map((claim, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", marginTop: 4, flexShrink: 0, background: statusColors[claim.status] }} />
                    <div>
                      <div style={{ fontSize: 11, color: T.text, fontFamily: T.sans, lineHeight: 1.4 }}>{claim.text}</div>
                      <div style={{ fontSize: 9, color: T.textMuted, fontFamily: T.mono, marginTop: 2 }}>confidence: {(claim.confidence * 100).toFixed(0)}%</div>
                    </div>
                  </div>
                ))}
              </Card>
              <Card>
                <div style={{ fontSize: 9, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: T.mono }}>Inference Ladder</div>
                {claimLevels.map((level, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, opacity: i <= claimLevel ? 1 : 0.35 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 3, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${i <= claimLevel ? T.accent : T.textMuted}`, background: i < claimLevel ? `${T.accent}30` : "transparent", fontSize: 9, color: i < claimLevel ? T.accent : T.textMuted }}>{i < claimLevel ? "✓" : i + 1}</div>
                    <span style={{ fontSize: 10, fontFamily: T.sans, color: i <= claimLevel ? T.accentLt : T.textMuted, fontWeight: i === claimLevel ? 600 : 400 }}>{level}</span>
                  </div>
                ))}
              </Card>
              <Card>
                <div style={{ fontSize: 10, fontWeight: 600, color: T.accentLt, marginBottom: 10, fontFamily: T.sans }}>Escalate Study</div>
                {[{ id: "curvature", label: "Test Curvature", min: 0 }, { id: "dynamics", label: "Analyze Dynamics", min: 1 }, { id: "orientability", label: "Check Orientability", min: 0 }, { id: "holonomy", label: "Estimate Holonomy", min: 2 }, { id: "coupling", label: "Test Coupling", min: 1 }].map(test => (
                  <div key={test.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6, opacity: claimLevel >= test.min ? 1 : 0.3 }}>
                    <span style={{ fontSize: 10, color: T.textDim, fontFamily: T.sans }}>▸ {test.label}</span>
                    <button onClick={() => claimLevel >= test.min && escalateClaim(test.id)} disabled={claimLevel < test.min || escalating !== null} style={{ padding: "4px 12px", border: `1px solid ${T.border2}`, borderRadius: 4, cursor: claimLevel >= test.min ? "pointer" : "default", background: escalating === test.id ? `${T.accent}30` : `${T.accent}10`, color: T.accentLt, fontSize: 9, fontFamily: T.mono }}>{escalating === test.id ? "running..." : "Run"}</button>
                  </div>
                ))}
              </Card>
              <div style={{ padding: 12, borderRadius: 8, background: `linear-gradient(135deg, ${T.accent}10, ${T.purple}10)`, border: `1px solid ${T.accent}20` }}>
                <div style={{ fontSize: 9, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: T.mono }}>Strongest Defensible Claim</div>
                <div style={{ fontSize: 12, color: T.text, fontFamily: T.sans, lineHeight: 1.5 }}>{strongestClaims[manifold]}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─── DESKTOP LAYOUT ─────────────────────────────
  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      {/* LEFT — 3D Explorer */}
      <div style={{ width: 380, flexShrink: 0, display: "flex", flexDirection: "column", borderRight: `1px solid ${T.border}`, background: T.bg1 }}>
        <div style={{ padding: "14px 16px", borderBottom: `1px solid ${T.border}` }}>
          <CardHeader style={{ marginBottom: 10 }}>◇ State Space Explorer</CardHeader>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, marginBottom: 12 }}>
            {Object.entries(SINGLE_GENERATORS).map(([key, val]) => (
              <button key={key} onClick={() => { setManifold(key); setClaimLevel(0); }} style={{ padding: "7px 4px", border: `1px solid ${manifold === key ? T.border3 : T.border}`, borderRadius: 5, cursor: "pointer", fontSize: 10, fontFamily: T.sans, fontWeight: 500, background: manifold === key ? `${T.accent}18` : T.bg2, color: manifold === key ? T.accentLt : T.textDim, transition: "all 0.2s" }}>{val.label}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Slider label="noise σ" value={noise} min={0} max={0.3} step={0.01} onChange={setNoise} />
            <Slider label="points" value={nPoints} min={200} max={3000} step={100} onChange={setNPoints} />
          </div>
          <div style={{ display: "flex", gap: 4, marginTop: 10 }}>
            {["topology", "time", "height"].map(mode => <Btn key={mode} active={colorMode === mode} onClick={() => setColorMode(mode)}>{mode}</Btn>)}
          </div>
        </div>
        <div style={{ flex: 1, position: "relative" }}>
          <ThreeScene points={points} colorMode={colorMode} />
          <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(6,11,20,0.85)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "6px 10px", border: `1px solid ${T.border}`, display: "flex", gap: 14 }}>
            <span style={{ fontSize: 9, color: T.textDim, fontFamily: T.mono }}>dim: <span style={{ color: T.accentLt }}>{manifold === "stratified" ? "1–2" : manifold === "circle" ? "1" : "2"}</span></span>
            <span style={{ fontSize: 9, color: T.textDim, fontFamily: T.mono }}>n: <span style={{ color: T.accentLt }}>{points.length.toLocaleString()}</span></span>
          </div>
          <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(6,11,20,0.8)", borderRadius: 6, padding: "5px 9px", border: `1px solid ${T.border}`, fontSize: 9, color: T.textDim, fontFamily: T.mono }}>drag to rotate</div>
        </div>
        <div style={{ padding: "10px 16px", borderTop: `1px solid ${T.border}`, fontSize: 11, color: T.textDim, fontFamily: T.sans }}>
          <span style={{ color: T.accentLt, fontWeight: 600 }}>{gen.label}</span> — {gen.desc}
        </div>
      </div>

      {/* CENTER — Topology */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "rgba(8,15,28,0.3)", overflow: "auto" }}>
        <div style={{ padding: "14px 20px", borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <CardHeader style={{ margin: 0 }}>◎ Topology Inspector</CardHeader>
          <Btn active onClick={() => setAnalysisRun(prev => !prev)}>Run Persistence</Btn>
        </div>
        <div style={{ padding: "12px 20px", flex: 1 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}><Btn active>VR filtration</Btn><Btn>Z₂</Btn><Btn>Z₃</Btn></div>
          <div style={{ padding: "8px 12px", borderRadius: 6, marginBottom: 14, background: T.bg2, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: T.mono }}>Betti Numbers (persistent)</div>
            <div style={{ display: "flex", gap: 16, padding: "6px 0" }}>
              {gen.betti.map((b, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: [T.accent, T.red, T.purple][i], fontFamily: T.mono, fontSize: 13, fontWeight: 700 }}>{"β₀β₁β₂"[i*2]+"₀₁₂"[i]}</span><span style={{ color: T.text, fontFamily: T.mono, fontSize: 15 }}>{b}</span></div>)}
            </div>
          </div>
          <Card style={{ marginBottom: 14, padding: 10 }}><div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: T.mono }}>Persistence Barcode</div><SingleBarcodeChart bars={bars} width={380} height={150} /></Card>
          <div style={{ display: "flex", gap: 12 }}>
            <Card style={{ flex: 1, padding: 10 }}><div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: T.mono }}>Persistence Diagram</div><PersistenceDiagram bars={bars} width={200} height={200} /></Card>
            <Card style={{ flex: 1, padding: 10 }}><div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: T.mono }}>Cohomology Coordinates</div><CohomologyPlot points={points} width={200} height={200} /></Card>
          </div>
          {manifold === "coupled" && (
            <Card style={{ marginTop: 14, borderColor: `${T.purple}30` }}>
              <div style={{ fontSize: 9, color: T.purple, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: T.mono }}>Künneth Deviation Test</div>
              <div style={{ display: "flex", gap: 16 }}>
                {[["Δ₀","0",T.emerald],["Δ₁","1",T.amber],["Δ₂","0",T.emerald]].map(([l,v,c]) => <div key={l} style={{ fontSize: 11, fontFamily: T.mono }}><span style={{ color: T.textDim }}>{l} = </span><span style={{ color: c }}>{v}</span></div>)}
              </div>
              <div style={{ fontSize: 10, color: T.purple, marginTop: 6, fontFamily: T.sans }}>Non-product topology detected — geometric coupling supported</div>
            </Card>
          )}
        </div>
      </div>

      {/* RIGHT — Claims */}
      <div style={{ width: 290, flexShrink: 0, display: "flex", flexDirection: "column", borderLeft: `1px solid ${T.border}`, background: T.bg1 }}>
        <div style={{ padding: "14px 16px", borderBottom: `1px solid ${T.border}` }}><CardHeader style={{ margin: 0 }}>⊙ Claim Builder</CardHeader></div>
        <div style={{ padding: "12px 16px", flex: 1, overflow: "auto" }}>
          <Card style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.accentLt, marginBottom: 10, fontFamily: T.sans }}>Current Hypothesis</div>
            {claims.map((claim, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", marginTop: 4, flexShrink: 0, background: statusColors[claim.status], boxShadow: `0 0 6px ${statusColors[claim.status]}50` }} />
                <div><div style={{ fontSize: 11, color: T.text, fontFamily: T.sans, lineHeight: 1.4 }}>{claim.text}</div><div style={{ fontSize: 9, color: T.textMuted, fontFamily: T.mono, marginTop: 2 }}>confidence: {(claim.confidence*100).toFixed(0)}%</div></div>
              </div>
            ))}
          </Card>
          <Card style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 9, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: T.mono }}>Inference Ladder</div>
            {claimLevels.map((level, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, opacity: i <= claimLevel ? 1 : 0.35 }}>
                <div style={{ width: 16, height: 16, borderRadius: 3, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${i<=claimLevel?T.accent:T.textMuted}`, background: i<claimLevel?`${T.accent}30`:"transparent", fontSize: 9, color: i<claimLevel?T.accent:T.textMuted }}>{i<claimLevel?"✓":i+1}</div>
                <span style={{ fontSize: 10, fontFamily: T.sans, color: i<=claimLevel?T.accentLt:T.textMuted, fontWeight: i===claimLevel?600:400 }}>{level}</span>
              </div>
            ))}
          </Card>
          <Card style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.accentLt, marginBottom: 10, fontFamily: T.sans }}>Escalate Study</div>
            {[{ id: "curvature", label: "Test Curvature", min: 0 }, { id: "dynamics", label: "Analyze Dynamics", min: 1 }, { id: "orientability", label: "Check Orientability", min: 0 }, { id: "holonomy", label: "Estimate Holonomy", min: 2 }, { id: "coupling", label: "Test Coupling", min: 1 }].map(test => (
              <div key={test.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6, opacity: claimLevel>=test.min?1:0.3 }}>
                <span style={{ fontSize: 10, color: T.textDim, fontFamily: T.sans }}>▸ {test.label}</span>
                <button onClick={() => claimLevel>=test.min && escalateClaim(test.id)} disabled={claimLevel<test.min||escalating!==null} style={{ padding: "3px 10px", border: `1px solid ${T.border2}`, borderRadius: 4, cursor: claimLevel>=test.min?"pointer":"default", background: escalating===test.id?`${T.accent}30`:`${T.accent}10`, color: T.accentLt, fontSize: 9, fontFamily: T.mono, transition: "all 0.2s" }}>{escalating===test.id?"running...":"Run"}</button>
              </div>
            ))}
          </Card>
          <div style={{ padding: 12, borderRadius: 8, background: `linear-gradient(135deg, ${T.accent}10, ${T.purple}10)`, border: `1px solid ${T.accent}20` }}>
            <div style={{ fontSize: 9, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: T.mono }}>Strongest Defensible Claim</div>
            <div style={{ fontSize: 12, color: T.text, fontFamily: T.sans, lineHeight: 1.5 }}>{strongestClaims[manifold]}</div>
          </div>
          <div style={{ marginTop: 14, padding: "10px 12px", borderRadius: 6, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 9, color: T.textMuted, fontStyle: "italic", fontFamily: T.sans, lineHeight: 1.5 }}>"Report at the strongest defensible level, not the most exciting one."</div>
            <div style={{ fontSize: 8, color: T.textMuted, marginTop: 4, fontFamily: T.mono }}>— Conservative Claim Ladder, §9</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  MODULE B — COUPLING ANALYZER
// ═══════════════════════════════════════════════════════════════════════════════

const LAYER_INFO = {
  topology: { title: "Layer I — Topological", desc: "Künneth deviation: does the joint topology factorize?", icon: "◯" },
  bundle: { title: "Layer II — Bundle", desc: "Fiber coherence and holonomy diagnostics", icon: "⊘" },
  dynamics: { title: "Layer III — Dynamical", desc: "Chirality alignment and flow constraints", icon: "⟳" },
};

function CouplingAnalyzer() {
  const isMobile = useMedia("(max-width: 768px)");
  const [activeFamily, setActiveFamily] = useState("product-torus");
  const [sampleSize, setSampleSize] = useState(isMobile ? 250 : 400);
  const [noiseLevel, setNoiseLevel] = useState(0.1);
  const [activeLayer, setActiveLayer] = useState("topology");
  const [activePanel, setActivePanel] = useState("explorer");
  const [data, setData] = useState(null);
  const [claimState, setClaimState] = useState(null);
  const [aiInsight, setAiInsight] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);

  const generateData = useCallback(() => {
    let d;
    switch (activeFamily) {
      case "product-torus": d = generateProductCircles(sampleSize, noiseLevel); break;
      case "phase-locked": d = generatePhaseLocked(sampleSize, 0.8, noiseLevel); break;
      case "fiber-width": d = generateFiberWidth(sampleSize, noiseLevel); break;
      case "klein": d = generateKleinCoupling(sampleSize, noiseLevel); break;
      default: d = Array.from({ length: sampleSize }, () => ({ x: [(Math.random()-0.5)*2,(Math.random()-0.5)*2], y: [(Math.random()-0.5)*2,(Math.random()-0.5)*2], t1: Math.random()*TAU, t2: Math.random()*TAU }));
    }
    setData(d); return d;
  }, [activeFamily, sampleSize, noiseLevel]);

  useEffect(() => { generateData(); }, [activeFamily, sampleSize, noiseLevel]);

  const runAnalysis = useCallback(() => {
    const kunneth = computeKunneth(activeFamily), barcodes = generateBarcode(activeFamily), hc = kunneth.coupled;
    const fc = activeFamily==="product-torus"?0.95:activeFamily==="phase-locked"?0.72:activeFamily==="fiber-width"?0.61:activeFamily==="klein"?0.45:0.12;
    const hnt = activeFamily==="klein"||activeFamily==="fiber-width";
    const ca = activeFamily==="phase-locked"?0.87:activeFamily==="klein"?-0.62:Math.random()*0.1-0.05;
    setClaimState({ kunneth, barcodes, fiberCoherence: fc, holonomyNonTrivial: hnt, chiralityAlignment: ca,
      claimLevel: !hc?0:hnt?3:Math.abs(ca)>0.5?4:1,
      claims: [{ level:0, text:"No coupling — product topology consistent", met:!hc }, { level:1, text:"Topologically coupled — Künneth Δ > 0", met:hc }, { level:2, text:"Bundle-structured — fiber coherence Γ high", met:hc&&fc>0.5 }, { level:3, text:"Non-trivially bundled — holonomy H ≠ Id", met:hnt }, { level:4, text:"Dynamically coupled — chirality significant", met:Math.abs(ca)>0.5 }, { level:5, text:"Berry-phase — geometric phase ϕ_B measurable", met:false }],
    });
  }, [activeFamily]);

  useEffect(() => { if (data) runAnalysis(); }, [data]);

  const requestAiInsight = async () => {
    setAiLoading(true);
    try {
      const resp = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ system: "You are a geometric topology expert analyzing coupling between dynamical systems. Provide a concise scientific interpretation (3-4 sentences). Focus on Künneth deviation, fiber coherence, and coupling claim level. Use fiber bundle and persistent homology language. No bullet points.", prompt: `Analysis for "${COUPLING_FAMILIES[activeFamily]?.label}":\n- Künneth Δ = [${claimState?.kunneth?.delta?.join(", ")}]\n- Observed β: (${claimState?.kunneth?.observed?.join(", ")}) vs predicted (${claimState?.kunneth?.predicted?.join(", ")})\n- Fiber coherence Γ = ${claimState?.fiberCoherence?.toFixed(3)}\n- Holonomy: ${claimState?.holonomyNonTrivial}\n- Chirality α_χ = ${claimState?.chiralityAlignment?.toFixed(3)}\n- Claim level: ${claimState?.claimLevel}/5\n- n=${sampleSize}, σ=${noiseLevel}\n\nGeometric coupling interpretation?` }),
      });
      const result = await resp.json();
      setAiInsight(result.insight || "Analysis unavailable.");
    } catch { setAiInsight("AI analysis unavailable — check server configuration."); }
    setAiLoading(false);
  };

  const correlation = useMemo(() => {
    if (!data?.length) return 0;
    const xs = data.map(d => d.x[0]), ys = data.map(d => d.y[0]);
    const mx = xs.reduce((a,b)=>a+b,0)/xs.length, my = ys.reduce((a,b)=>a+b,0)/ys.length;
    const num = xs.reduce((s,x,i)=>s+(x-mx)*(ys[i]-my),0);
    const dx = Math.sqrt(xs.reduce((s,x)=>s+(x-mx)**2,0)), dy = Math.sqrt(ys.reduce((s,y)=>s+(y-my)**2,0));
    return dx*dy===0?0:num/(dx*dy);
  }, [data]);

  const claimLevelColor = (l) => [T.textDim, T.accent, T.purple, T.rose, T.amber, T.emerald][l] || T.textDim;

  // ─── MOBILE LAYOUT ──────────────────────────────
  if (isMobile) {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Collapsible title="Generator" defaultOpen={false}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginBottom: 12 }}>
            {Object.entries(COUPLING_FAMILIES).map(([key, fam]) => (
              <button key={key} onClick={() => setActiveFamily(key)} style={{ padding: "8px", border: `1px solid ${activeFamily===key?T.border3:T.border}`, borderRadius: 6, cursor: "pointer", textAlign: "left", background: activeFamily===key?`${T.accent}18`:"transparent" }}>
                <div style={{ fontSize: 10, color: activeFamily===key?T.accentLt:T.text, fontWeight: 500, fontFamily: T.sans }}>{fam.shortLabel || fam.label}</div>
                {fam.coupled && <span style={{ fontSize: 8, color: T.rose, background: `${T.rose}18`, padding: "1px 4px", borderRadius: 3, marginTop: 2, display: "inline-block" }}>coupled</span>}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Slider label="n" value={sampleSize} min={100} max={800} step={50} onChange={setSampleSize} />
            <Slider label="σ" value={noiseLevel} min={0} max={0.5} step={0.02} onChange={setNoiseLevel} />
          </div>
          <button onClick={generateData} style={{ marginTop: 12, width: "100%", padding: "10px", background: `linear-gradient(135deg, #1e40af, ${T.purple})`, border: "none", borderRadius: 8, color: T.text, fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: T.mono }}>↻ Regenerate</button>
          {/* Quick status */}
          {claimState && (
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <div style={{ flex: 1, padding: 8, borderRadius: 6, background: T.bg2, border: `1px solid ${T.border}`, textAlign: "center" }}>
                <div style={{ fontSize: 9, color: T.textDim }}>Status</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: claimState.kunneth.coupled?T.rose:T.emerald }}>{claimState.kunneth.coupled?"COUPLED":"INDEP."}</div>
              </div>
              <div style={{ flex: 1, padding: 8, borderRadius: 6, background: T.bg2, border: `1px solid ${T.border}`, textAlign: "center" }}>
                <div style={{ fontSize: 9, color: T.textDim }}>ρ</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: Math.abs(correlation)>0.3?T.amber:T.emerald }}>{correlation.toFixed(3)}</div>
              </div>
              <div style={{ flex: 1, padding: 8, borderRadius: 6, background: `${claimLevelColor(claimState.claimLevel)}08`, border: `1px solid ${claimLevelColor(claimState.claimLevel)}20`, textAlign: "center" }}>
                <div style={{ fontSize: 9, color: T.textDim }}>Claim</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: claimLevelColor(claimState.claimLevel) }}>{claimState.claimLevel}<span style={{ fontSize: 10, color: T.textMuted }}>/5</span></div>
              </div>
            </div>
          )}
        </Collapsible>

        <SubTabs
          tabs={[{ key: "explorer", label: "Explorer" }, { key: "topology", label: "Topology" }, { key: "coupling", label: "Coupling" }, { key: "claims", label: "Claims" }]}
          active={activePanel} onChange={setActivePanel}
        />

        <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
          {activePanel === "explorer" && data && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Card><CardHeader>System X</CardHeader><ManifoldCanvas data={data} /></Card>
              <Card><CardHeader>System Y</CardHeader><ManifoldCanvas data={data.map(d => ({ ...d, x: d.y }))} /></Card>
              <Card><CardHeader>Joint Phase Space (θ₁, θ₂)</CardHeader><JointCanvas data={data} /></Card>
            </div>
          )}

          {activePanel === "topology" && claimState && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Card><CardHeader>Persistence Barcode</CardHeader><CouplingBarcodeCanvas barcodes={claimState.barcodes} /><div style={{ fontSize: 10, color: T.textDim, marginTop: 8 }}><span style={{ color: T.rose }}>■ H₀</span> · <span style={{ color: T.accent }}>■ H₁</span> · <span style={{ color: T.emerald }}>■ H₂</span></div></Card>
              <Card>
                <CardHeader>Künneth Deviation</CardHeader>
                <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse", fontFamily: T.mono }}>
                  <thead><tr style={{ color: T.textDim, borderBottom: `1px solid ${T.border}` }}><th style={{ padding: "6px", textAlign: "left" }}>k</th><th style={{ padding: "6px", textAlign: "center" }}>β̂ᵒᵇˢ</th><th style={{ padding: "6px", textAlign: "center" }}>β̂ⁱⁿᵈ</th><th style={{ padding: "6px", textAlign: "center" }}>Δ</th></tr></thead>
                  <tbody>{[0,1,2].map(k => (
                    <tr key={k} style={{ borderBottom: `1px solid ${T.border}` }}>
                      <td style={{ padding: 6, color: T.text }}>{k}</td>
                      <td style={{ padding: 6, textAlign: "center", color: T.text, fontWeight: 600 }}>{claimState.kunneth.observed[k]}</td>
                      <td style={{ padding: 6, textAlign: "center", color: T.textDim }}>{claimState.kunneth.predicted[k]}</td>
                      <td style={{ padding: 6, textAlign: "center", fontWeight: 700, color: claimState.kunneth.delta[k]>0?T.rose:T.emerald }}>{claimState.kunneth.delta[k]}{claimState.kunneth.delta[k]>0&&" ✦"}</td>
                    </tr>
                  ))}</tbody>
                </table>
                <div style={{ marginTop: 8, padding: "8px 10px", borderRadius: 6, background: claimState.kunneth.coupled?`${T.rose}10`:`${T.emerald}10`, border: `1px solid ${claimState.kunneth.coupled?T.rose:T.emerald}30`, fontSize: 10, color: claimState.kunneth.coupled?"#f9a8d4":"#6ee7b7" }}>
                  {claimState.kunneth.coupled?"⚡ Künneth deviation — non-product topology":"✓ Künneth satisfied — consistent with independence"}
                </div>
              </Card>
            </div>
          )}

          {activePanel === "coupling" && claimState && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {Object.entries(LAYER_INFO).map(([key, info]) => (
                  <button key={key} onClick={() => setActiveLayer(key)} style={{ flex: 1, padding: "10px 8px", borderRadius: 8, cursor: "pointer", textAlign: "center", background: activeLayer===key?`${T.accent}12`:T.bg2, border: activeLayer===key?`1px solid ${T.border3}`:`1px solid ${T.border}` }}>
                    <div style={{ fontSize: 14, marginBottom: 2 }}>{info.icon}</div>
                    <div style={{ fontSize: 9, color: activeLayer===key?T.accentLt:T.text, fontWeight: 600, fontFamily: T.sans }}>{info.title.replace("Layer ","").replace(" — ","\n")}</div>
                  </button>
                ))}
              </div>
              {activeLayer === "topology" && (
                <>
                  <Card>
                    <CardHeader>Künneth Deviation Vector</CardHeader>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center", padding: 12 }}>
                      {[0,1,2].map(k => (
                        <div key={k} style={{ width: 64, height: 64, borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: claimState.kunneth.delta[k]>0?`radial-gradient(circle, ${T.rose}20, ${T.rose}05)`:`radial-gradient(circle, ${T.emerald}15, ${T.emerald}04)`, border: `2px solid ${claimState.kunneth.delta[k]>0?`${T.rose}60`:`${T.emerald}30`}` }}>
                          <div style={{ fontSize: 20, fontWeight: 800, color: claimState.kunneth.delta[k]>0?T.rose:T.emerald }}>{claimState.kunneth.delta[k]}</div>
                          <div style={{ fontSize: 8, color: T.textDim }}>Δ{k}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card><CardHeader>Interpretation</CardHeader><div style={{ fontSize: 11, color: T.textDim, lineHeight: 1.8, fontFamily: T.sans }}>{claimState.kunneth.coupled?`Künneth predicts β = (${claimState.kunneth.predicted.join(", ")}). Observed β = (${claimState.kunneth.observed.join(", ")}), Δ = (${claimState.kunneth.delta.join(", ")}). Non-product topology — geometrically coupled.`:`Joint Betti numbers match Künneth prediction. Consistent with geometric independence.`}</div></Card>
                </>
              )}
              {activeLayer === "bundle" && (
                <>
                  <Card>
                    <CardHeader>Fiber Coherence Γ</CardHeader>
                    <div style={{ textAlign: "center", padding: 16 }}>
                      <div style={{ position: "relative", width: 120, height: 120, margin: "0 auto" }}>
                        <svg width={120} height={120} viewBox="0 0 120 120"><circle cx={60} cy={60} r={50} fill="none" stroke={T.border} strokeWidth={7} /><circle cx={60} cy={60} r={50} fill="none" stroke={claimState.fiberCoherence>0.5?T.accent:T.amber} strokeWidth={7} strokeDasharray={`${claimState.fiberCoherence*314} ${314-claimState.fiberCoherence*314}`} strokeDashoffset={78} strokeLinecap="round" /></svg>
                        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ fontSize: 22, fontWeight: 800, color: T.text }}>{claimState.fiberCoherence.toFixed(2)}</div>
                          <div style={{ fontSize: 9, color: T.textDim }}>Γ</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 10, color: T.textDim, marginTop: 10, fontFamily: T.sans }}>{claimState.fiberCoherence>0.7?"High coherence — consistent fiber structure":claimState.fiberCoherence>0.4?"Moderate — partial bundle":"Low — no clear bundle"}</div>
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>Holonomy</CardHeader>
                    <div style={{ textAlign: "center", padding: 16 }}>
                      <div style={{ width: 80, height: 80, margin: "0 auto", borderRadius: "50%", border: `3px solid ${claimState.holonomyNonTrivial?T.rose:T.textDim}`, display: "flex", alignItems: "center", justifyContent: "center", background: claimState.holonomyNonTrivial?`${T.rose}08`:"transparent" }}>
                        <div style={{ fontSize: 28 }}>{claimState.holonomyNonTrivial?"⟳":"="}</div>
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: claimState.holonomyNonTrivial?T.rose:T.textDim, marginTop: 8 }}>{claimState.holonomyNonTrivial?"H ≠ Id":"H = Id"}</div>
                      <div style={{ fontSize: 10, color: T.textDim, marginTop: 6, fontFamily: T.sans }}>{claimState.holonomyNonTrivial?"Non-trivial holonomy — bundle has curvature.":"Trivial — flat or product bundle."}</div>
                    </div>
                  </Card>
                </>
              )}
              {activeLayer === "dynamics" && (
                <>
                  <Card>
                    <CardHeader>Chirality α_χ</CardHeader>
                    <div style={{ textAlign: "center", padding: 16 }}>
                      <div style={{ fontSize: 36, fontWeight: 800, color: Math.abs(claimState.chiralityAlignment)>0.5?T.amber:T.textDim }}>{claimState.chiralityAlignment.toFixed(3)}</div>
                      <div style={{ fontSize: 10, color: T.textDim, marginTop: 4 }}>α_χ = corr(sign(θ̇₁), sign(θ̇₂))</div>
                      <div style={{ marginTop: 12, height: 8, borderRadius: 4, background: T.border, overflow: "hidden" }}>
                        <div style={{ height: "100%", borderRadius: 4, width: `${Math.abs(claimState.chiralityAlignment)*100}%`, background: claimState.chiralityAlignment>0?`linear-gradient(90deg, ${T.accent}, ${T.accentLt})`:`linear-gradient(90deg, ${T.red}, #f87171)`, marginLeft: claimState.chiralityAlignment<0?"auto":0 }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 9, color: T.textMuted }}><span>anti-aligned</span><span>aligned</span></div>
                    </div>
                  </Card>
                  <Card><CardHeader>Summary</CardHeader><div style={{ fontSize: 11, color: T.textDim, lineHeight: 1.8, fontFamily: T.sans }}>{Math.abs(claimState.chiralityAlignment)>0.5?`Significant chirality (α_χ = ${claimState.chiralityAlignment.toFixed(3)}). Systems are ${claimState.chiralityAlignment>0?"co-rotating":"counter-rotating"}. Layer III coupling.`:"Weak chirality — dynamical flows appear independent at this noise/sample level."}</div></Card>
                </>
              )}
            </div>
          )}

          {activePanel === "claims" && claimState && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Card>
                <CardHeader>Conservative Claim Ladder</CardHeader>
                {claimState.claims.map((claim, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, marginBottom: 4, background: claim.met?`${claimLevelColor(claim.level)}08`:"transparent", borderLeft: `3px solid ${claim.met?claimLevelColor(claim.level):T.border}` }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: claim.met?`${claimLevelColor(claim.level)}15`:`${T.textMuted}08`, color: claim.met?claimLevelColor(claim.level):T.textMuted, fontSize: 11, fontWeight: 700 }}>{claim.met?"✓":claim.level}</div>
                    <div style={{ fontSize: 11, color: claim.met?T.text:T.textMuted, fontFamily: T.sans, flex: 1 }}>{claim.text}</div>
                  </div>
                ))}
                <div style={{ marginTop: 8, padding: "10px 12px", borderRadius: 8, background: `${T.accent}08`, border: `1px solid ${T.accent}20`, fontSize: 10, color: T.accentLt }}>▲ Strongest: Level {claimState.claimLevel}/5</div>
              </Card>
              <Card>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <CardHeader style={{ margin: 0 }}>AI Interpretation</CardHeader>
                  <button onClick={requestAiInsight} disabled={aiLoading} style={{ padding: "6px 12px", borderRadius: 6, background: `linear-gradient(135deg, #6d28d9, ${T.purple})`, border: "none", color: T.text, fontSize: 9, cursor: aiLoading?"wait":"pointer", opacity: aiLoading?0.6:1, fontFamily: T.mono }}>{aiLoading?"...":"◎ Analyze"}</button>
                </div>
                {aiInsight?<div style={{ fontSize: 11, color: T.text, lineHeight: 1.8, fontFamily: T.sans }}>{aiInsight}</div>
                :<div style={{ fontSize: 11, color: T.textMuted, textAlign: "center", padding: "12px 0" }}>Tap "Analyze" for AI interpretation</div>}
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─── DESKTOP LAYOUT ─────────────────────────────
  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      <aside style={{ width: 260, borderRight: `1px solid ${T.border}`, padding: 16, background: T.bg1, overflowY: "auto", flexShrink: 0 }}>
        <CardHeader>Synthetic Generator</CardHeader>
        {Object.entries(COUPLING_FAMILIES).map(([key, fam]) => (
          <button key={key} onClick={() => setActiveFamily(key)} style={{ display: "block", width: "100%", padding: "10px 12px", marginBottom: 4, background: activeFamily===key?`${T.accent}18`:"transparent", border: activeFamily===key?`1px solid ${T.border3}`:`1px solid transparent`, borderRadius: 8, cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
            <div style={{ fontSize: 12, color: activeFamily===key?T.accentLt:T.text, fontWeight: 500, fontFamily: T.sans }}>{fam.label}</div>
            <div style={{ fontSize: 10, color: T.textDim, marginTop: 2, fontFamily: T.sans }}>{fam.desc}</div>
            {fam.coupled && <span style={{ fontSize: 9, color: T.rose, background: `${T.rose}18`, padding: "1px 6px", borderRadius: 4, marginTop: 4, display: "inline-block" }}>coupled</span>}
          </button>
        ))}
        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <Slider label="n" value={sampleSize} min={100} max={1000} step={50} onChange={setSampleSize} />
          <Slider label="σ" value={noiseLevel} min={0} max={0.5} step={0.02} onChange={setNoiseLevel} />
        </div>
        <button onClick={generateData} style={{ marginTop: 16, width: "100%", padding: "10px 0", background: `linear-gradient(135deg, #1e40af, ${T.purple})`, border: "none", borderRadius: 8, color: T.text, fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: T.mono }}>↻ Regenerate</button>
        <Card style={{ marginTop: 20 }}><div style={{ fontSize: 10, color: T.textDim, marginBottom: 4 }}>Coordinate Correlation</div><div style={{ fontSize: 22, fontWeight: 700, color: Math.abs(correlation)>0.3?T.amber:T.emerald }}>ρ = {correlation.toFixed(3)}</div><div style={{ fontSize: 9, color: T.textMuted, marginTop: 4 }}>{Math.abs(correlation)<0.15?"Near-zero — coupling may still exist geometrically":"Nonzero — coordinate-level dependence"}</div></Card>
      </aside>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <SubTabs tabs={[{ key: "explorer", label: "State Space Explorer" }, { key: "topology", label: "Topology Inspector" }, { key: "coupling", label: "Coupling Stack" }, { key: "claims", label: "Claim Builder" }]} active={activePanel} onChange={setActivePanel} />
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {activePanel === "explorer" && data && (
            <div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}><Card><CardHeader>System X</CardHeader><ManifoldCanvas data={data} /></Card><Card><CardHeader>System Y</CardHeader><ManifoldCanvas data={data.map(d => ({...d, x: d.y}))} /></Card><Card><CardHeader>Joint (θ₁, θ₂)</CardHeader><JointCanvas data={data} /></Card></div>
            <Card style={{ marginTop: 16 }}><CardHeader>Embedding Comparison</CardHeader><div style={{ fontSize: 11, color: T.textDim, padding: "12px 0", lineHeight: 1.7, fontFamily: T.sans }}>The joint phase space reveals the geometric relationship. Independent systems fill [0,2π]² uniformly (product torus). Coupled systems concentrate on a submanifold: diagonal (phase-locking), band (fiber-width), or orientation-reversed (Klein). This is the visual intuition behind the Künneth deviation test.</div></Card></div>
          )}
          {activePanel === "topology" && claimState && (
            <div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Card><CardHeader>Persistence Barcode</CardHeader><CouplingBarcodeCanvas barcodes={claimState.barcodes} width={420} height={180} /><div style={{ fontSize: 10, color: T.textDim, marginTop: 8 }}><span style={{ color: T.rose }}>■ H₀</span> · <span style={{ color: T.accent }}>■ H₁</span> · <span style={{ color: T.emerald }}>■ H₂</span></div></Card>
              <Card><CardHeader>Künneth Deviation</CardHeader>
                <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse", fontFamily: T.mono }}><thead><tr style={{ color: T.textDim, borderBottom: `1px solid ${T.border}` }}><th style={{ padding: "6px 8px", textAlign: "left" }}>k</th><th style={{ padding: "6px", textAlign: "center" }}>β̂ᵒᵇˢ</th><th style={{ padding: "6px", textAlign: "center" }}>β̂ⁱⁿᵈ</th><th style={{ padding: "6px", textAlign: "center" }}>Δₖ</th></tr></thead>
                <tbody>{[0,1,2].map(k => <tr key={k} style={{ borderBottom: `1px solid ${T.border}` }}><td style={{ padding: 8, color: T.text }}>k={k}</td><td style={{ padding: 8, textAlign: "center", color: T.text, fontWeight: 600 }}>{claimState.kunneth.observed[k]}</td><td style={{ padding: 8, textAlign: "center", color: T.textDim }}>{claimState.kunneth.predicted[k]}</td><td style={{ padding: 8, textAlign: "center", fontWeight: 700, color: claimState.kunneth.delta[k]>0?T.rose:T.emerald }}>{claimState.kunneth.delta[k]}{claimState.kunneth.delta[k]>0&&" ✦"}</td></tr>)}</tbody></table>
                <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 6, background: claimState.kunneth.coupled?`${T.rose}10`:`${T.emerald}10`, border: `1px solid ${claimState.kunneth.coupled?T.rose:T.emerald}30`, fontSize: 11, color: claimState.kunneth.coupled?"#f9a8d4":"#6ee7b7" }}>{claimState.kunneth.coupled?"⚡ Künneth deviation — non-product":"✓ Künneth satisfied — independence"}</div>
              </Card></div>
              <Card style={{ marginTop: 16 }}><CardHeader>Betti Comparison</CardHeader><div style={{ display: "flex", gap: 16, padding: "12px 0" }}>{["Marginal X","Marginal Y","Predicted","Observed"].map((label,idx) => { const bettis=[claimState.kunneth.marginalX,claimState.kunneth.marginalY,claimState.kunneth.predicted,claimState.kunneth.observed][idx]; const isJ=idx===3; return <div key={label} style={{ flex: 1, padding: 12, borderRadius: 8, background: isJ?`${T.accent}08`:T.bg2, border: `1px solid ${isJ?T.border2:T.border}` }}><div style={{ fontSize: 10, color: T.textDim, marginBottom: 8 }}>{label}</div><div style={{ display: "flex", gap: 8 }}>{bettis.map((b,j) => <div key={j} style={{ textAlign: "center" }}><div style={{ fontSize: 18, fontWeight: 700, color: isJ?T.accentLt:T.text }}>{b}</div><div style={{ fontSize: 9, color: T.textMuted }}>β{j}</div></div>)}</div></div>; })}</div></Card>
            </div>
          )}
          {activePanel === "coupling" && claimState && (
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>{Object.entries(LAYER_INFO).map(([key, info]) => <button key={key} onClick={() => setActiveLayer(key)} style={{ flex: 1, padding: "14px 16px", borderRadius: 10, cursor: "pointer", textAlign: "left", background: activeLayer===key?`${T.accent}12`:T.bg2, border: activeLayer===key?`1px solid ${T.border3}`:`1px solid ${T.border}` }}><div style={{ fontSize: 18, marginBottom: 4 }}>{info.icon}</div><div style={{ fontSize: 11, color: activeLayer===key?T.accentLt:T.text, fontWeight: 600, fontFamily: T.sans }}>{info.title}</div><div style={{ fontSize: 10, color: T.textDim, marginTop: 2, fontFamily: T.sans }}>{info.desc}</div></button>)}</div>
              {activeLayer === "topology" && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}><Card><CardHeader>Künneth Deviation Vector</CardHeader><div style={{ display: "flex", gap: 16, justifyContent: "center", padding: 16 }}>{[0,1,2].map(k => <div key={k} style={{ width: 80, height: 80, borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: claimState.kunneth.delta[k]>0?`radial-gradient(circle, ${T.rose}20, ${T.rose}05)`:`radial-gradient(circle, ${T.emerald}15, ${T.emerald}04)`, border: `2px solid ${claimState.kunneth.delta[k]>0?`${T.rose}60`:`${T.emerald}30`}` }}><div style={{ fontSize: 24, fontWeight: 800, color: claimState.kunneth.delta[k]>0?T.rose:T.emerald }}>{claimState.kunneth.delta[k]}</div><div style={{ fontSize: 9, color: T.textDim }}>Δ{k}</div></div>)}</div><div style={{ textAlign: "center", marginTop: 8, fontSize: 11, color: T.textDim }}>Δ = ({claimState.kunneth.delta.join(", ")})</div></Card><Card><CardHeader>Interpretation</CardHeader><div style={{ fontSize: 11, color: T.textDim, lineHeight: 1.8, fontFamily: T.sans }}>{claimState.kunneth.coupled?`Künneth predicts β = (${claimState.kunneth.predicted.join(", ")}). We observe β = (${claimState.kunneth.observed.join(", ")}), yielding Δ = (${claimState.kunneth.delta.join(", ")}). Non-product topology — geometrically coupled (Definition 2.2).`:`Joint Betti numbers match Künneth prediction exactly. Consistent with geometric independence — joint space factorizes as product M × N.`}</div></Card></div>}
              {activeLayer === "bundle" && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}><Card><CardHeader>Fiber Coherence Γ</CardHeader><div style={{ padding: 20, textAlign: "center" }}><div style={{ position: "relative", width: 160, height: 160, margin: "0 auto" }}><svg width={160} height={160} viewBox="0 0 160 160"><circle cx={80} cy={80} r={70} fill="none" stroke={T.border} strokeWidth={8} /><circle cx={80} cy={80} r={70} fill="none" stroke={claimState.fiberCoherence>0.5?T.accent:T.amber} strokeWidth={8} strokeDasharray={`${claimState.fiberCoherence*440} ${440-claimState.fiberCoherence*440}`} strokeDashoffset={110} strokeLinecap="round" /></svg><div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><div style={{ fontSize: 28, fontWeight: 800, color: T.text }}>{claimState.fiberCoherence.toFixed(2)}</div><div style={{ fontSize: 9, color: T.textDim }}>Γ</div></div></div><div style={{ fontSize: 10, color: T.textDim, marginTop: 12, fontFamily: T.sans }}>{claimState.fiberCoherence>0.7?"High coherence — consistent fiber structure":claimState.fiberCoherence>0.4?"Moderate — partial bundle":"Low — no clear bundle"}</div></div></Card><Card><CardHeader>Holonomy Transfer</CardHeader><div style={{ padding: 20, textAlign: "center" }}><div style={{ width: 120, height: 120, margin: "0 auto", borderRadius: "50%", border: `3px solid ${claimState.holonomyNonTrivial?T.rose:T.textDim}`, display: "flex", alignItems: "center", justifyContent: "center", background: claimState.holonomyNonTrivial?`${T.rose}08`:"transparent", position: "relative" }}><div style={{ fontSize: 36 }}>{claimState.holonomyNonTrivial?"⟳":"="}</div>{claimState.holonomyNonTrivial&&<div style={{ position: "absolute", bottom: -8, fontSize: 9, color: T.rose, background: T.bg, padding: "2px 8px" }}>H ≠ Id</div>}</div><div style={{ fontSize: 10, color: T.textDim, marginTop: 20, fontFamily: T.sans }}>{claimState.holonomyNonTrivial?"Non-trivial holonomy — bundle has curvature.":"Trivial — flat or product bundle."}</div></div></Card></div>}
              {activeLayer === "dynamics" && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}><Card><CardHeader>Chirality α_χ</CardHeader><div style={{ padding: 20, textAlign: "center" }}><div style={{ fontSize: 48, fontWeight: 800, color: Math.abs(claimState.chiralityAlignment)>0.5?T.amber:T.textDim }}>{claimState.chiralityAlignment.toFixed(3)}</div><div style={{ fontSize: 10, color: T.textDim, marginTop: 4 }}>α_χ = corr(sign(θ̇₁), sign(θ̇₂))</div><div style={{ marginTop: 16, height: 8, borderRadius: 4, background: T.border, overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 4, width: `${Math.abs(claimState.chiralityAlignment)*100}%`, background: claimState.chiralityAlignment>0?`linear-gradient(90deg, ${T.accent}, ${T.accentLt})`:`linear-gradient(90deg, ${T.red}, #f87171)`, marginLeft: claimState.chiralityAlignment<0?"auto":0 }} /></div><div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 9, color: T.textMuted }}><span>anti-aligned</span><span>aligned</span></div></div></Card><Card><CardHeader>Dynamical Summary</CardHeader><div style={{ padding: "12px 0", fontSize: 11, color: T.textDim, lineHeight: 1.8, fontFamily: T.sans }}>{Math.abs(claimState.chiralityAlignment)>0.5?`Significant chirality (α_χ = ${claimState.chiralityAlignment.toFixed(3)}). Systems ${claimState.chiralityAlignment>0?"co-rotating":"counter-rotating"}. Layer III — strongest before Berry phase.`:"Weak chirality — dynamical flows independent at this noise/sample."}</div></Card></div>}
            </div>
          )}
          {activePanel === "claims" && claimState && (
            <div>
              <Card>
                <CardHeader>Conservative Claim Ladder</CardHeader>
                {claimState.claims.map((claim, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 8, marginBottom: 4, background: claim.met?`${claimLevelColor(claim.level)}08`:"transparent", borderLeft: `3px solid ${claim.met?claimLevelColor(claim.level):T.border}` }}><div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: claim.met?`${claimLevelColor(claim.level)}15`:`${T.textMuted}08`, color: claim.met?claimLevelColor(claim.level):T.textMuted, fontSize: 12, fontWeight: 700 }}>{claim.met?"✓":claim.level}</div><div style={{ fontSize: 12, color: claim.met?T.text:T.textMuted, fontFamily: T.sans }}>{claim.text}</div></div>)}
                <div style={{ marginTop: 8, padding: "12px 16px", borderRadius: 8, background: `${T.accent}08`, border: `1px solid ${T.accent}20`, fontSize: 11, color: T.accentLt }}>▲ Strongest defensible: Level {claimState.claimLevel}/5</div>
              </Card>
              <Card style={{ marginTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}><CardHeader style={{ margin: 0 }}>AI Geometric Interpretation</CardHeader><button onClick={requestAiInsight} disabled={aiLoading} style={{ padding: "6px 14px", borderRadius: 6, background: `linear-gradient(135deg, #6d28d9, ${T.purple})`, border: "none", color: T.text, fontSize: 10, cursor: aiLoading?"wait":"pointer", opacity: aiLoading?0.6:1, fontFamily: T.mono }}>{aiLoading?"Analyzing...":"◎ Request Analysis"}</button></div>
                {aiInsight?<div style={{ padding: "16px 0", fontSize: 12, color: T.text, lineHeight: 1.8, borderTop: `1px solid ${T.border}`, marginTop: 8, fontFamily: T.sans }}>{aiInsight}</div>:<div style={{ padding: "20px 0", fontSize: 11, color: T.textMuted, textAlign: "center" }}>Click "Request Analysis" for AI interpretation</div>}
              </Card>
              <Card style={{ marginTop: 16, borderColor: `${T.amber}20` }}><CardHeader style={{ color: T.amber }}>Reporting Protocol</CardHeader><div style={{ fontSize: 11, color: T.textDim, lineHeight: 1.7, fontFamily: T.sans }}><strong style={{ color: T.text }}>Report at the strongest defensible level, not the most exciting one.</strong> Each level requires all preceding levels. Topological coupling (L1) is coarsest/most robust. Bundle (L2–3) needs more data. Dynamical (L4) is most stringent. Berry phase (L5) requires cyclic traversal.</div></Card>
            </div>
          )}
        </div>
      </main>

      <aside style={{ width: 210, borderLeft: `1px solid ${T.border}`, padding: 16, background: T.bg1, overflowY: "auto", flexShrink: 0 }}>
        <CardHeader>Current Analysis</CardHeader>
        <Card style={{ marginBottom: 12 }}><div style={{ fontSize: 10, color: T.textDim }}>Generator</div><div style={{ fontSize: 12, color: T.text, fontWeight: 600, marginTop: 2, fontFamily: T.sans }}>{COUPLING_FAMILIES[activeFamily]?.label}</div></Card>
        {claimState && <>
          <Card style={{ marginBottom: 12 }}><div style={{ fontSize: 10, color: T.textDim }}>Coupling</div><div style={{ fontSize: 14, fontWeight: 700, marginTop: 4, color: claimState.kunneth.coupled?T.rose:T.emerald }}>{claimState.kunneth.coupled?"COUPLED":"INDEPENDENT"}</div><div style={{ fontSize: 10, color: T.textMuted, marginTop: 2 }}>Δ = ({claimState.kunneth.delta.join(", ")})</div></Card>
          <Card style={{ marginBottom: 12 }}><div style={{ fontSize: 10, color: T.textDim }}>Diagnostics</div><div style={{ marginTop: 8 }}>{[{label:"Γ fiber",value:claimState.fiberCoherence.toFixed(2)},{label:"H holonomy",value:claimState.holonomyNonTrivial?"≠ Id":"= Id"},{label:"α_χ",value:claimState.chiralityAlignment.toFixed(3)},{label:"ρ",value:correlation.toFixed(3)}].map(d => <div key={d.label} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 10, borderBottom: `1px solid ${T.border}` }}><span style={{ color: T.textDim }}>{d.label}</span><span style={{ color: T.text, fontWeight: 600 }}>{d.value}</span></div>)}</div></Card>
          <Card style={{ background: `${claimLevelColor(claimState.claimLevel)}08`, borderColor: `${claimLevelColor(claimState.claimLevel)}20` }}><div style={{ fontSize: 10, color: T.textDim }}>Claim Level</div><div style={{ fontSize: 32, fontWeight: 800, marginTop: 4, color: claimLevelColor(claimState.claimLevel) }}>{claimState.claimLevel}<span style={{ fontSize: 14, color: T.textMuted }}>/5</span></div></Card>
        </>}
        <div style={{ marginTop: 20, padding: 12, borderRadius: 8, border: `1px dashed ${T.border}` }}><div style={{ fontSize: 9, color: T.textMuted, lineHeight: 1.6 }}>Framework: Geometric Coupling — Fiber-Bundle Framework for Structural Dependence Beyond Correlation</div></div>
      </aside>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  PROGRAMME SHELL
// ═══════════════════════════════════════════════════════════════════════════════

const MODULES = [
  { id: "statespace", label: "State Space", icon: "◇", desc: "Single manifold exploration" },
  { id: "coupling", label: "Coupling", icon: "⇋", desc: "Inter-system dependence" },
];

export default function CogGeometryStudio() {
  const isMobile = useMedia("(max-width: 768px)");
  const [activeModule, setActiveModule] = useState("statespace");
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: `linear-gradient(145deg, ${T.bg} 0%, ${T.bg1} 40%, ${T.bg2} 100%)`, fontFamily: T.sans, color: T.text, display: "flex", flexDirection: "column" }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap" rel="stylesheet" />
      <div style={{ position: "fixed", inset: 0, opacity: 0.025, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(74,144,217,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,217,0.4) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* HEADER */}
      <header style={{
        flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: isMobile ? "10px 12px" : "0 24px", height: isMobile ? "auto" : 54,
        flexWrap: isMobile ? "wrap" : "nowrap", gap: isMobile ? 8 : 0,
        borderBottom: `1px solid ${T.border2}`, background: "rgba(6,10,17,0.85)", backdropFilter: "blur(16px)", zIndex: 10,
      }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 14 }}>
          <div style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30, borderRadius: 7, background: `linear-gradient(135deg, ${T.accent}, ${T.purple})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#fff", boxShadow: `0 0 20px ${T.accent}30` }}>◎</div>
          <div>
            <span style={{ fontSize: isMobile ? 14 : 17, fontWeight: 600, letterSpacing: "0.03em", background: `linear-gradient(90deg, ${T.text}, ${T.accentLt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CogGeometry Studio</span>
            {!isMobile && <div style={{ fontSize: 9, color: T.textMuted, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: T.mono, marginTop: -1 }}>Geometric Cognition Programme</div>}
          </div>
        </div>

        {/* Module Switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: 2, background: "rgba(10,16,26,0.8)", padding: 3, borderRadius: 8, border: `1px solid ${T.border}`, order: isMobile ? 3 : 0, width: isMobile ? "100%" : "auto" }}>
          {MODULES.map(mod => (
            <button key={mod.id} onClick={() => setActiveModule(mod.id)} style={{
              padding: isMobile ? "8px 0" : "7px 18px", border: "none", borderRadius: 6, cursor: "pointer",
              fontFamily: T.sans, fontSize: 12, fontWeight: 500, flex: isMobile ? 1 : "none",
              background: activeModule === mod.id ? `${T.accent}18` : "transparent",
              color: activeModule === mod.id ? T.accentLt : T.textDim,
              transition: "all 0.25s ease",
            }}>
              <span style={{ marginRight: 6, fontSize: 13 }}>{mod.icon}</span>{mod.label}
            </button>
          ))}
        </div>

        {/* Info button */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setShowInfo(!showInfo)} style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${T.border}`, background: "transparent", color: T.textDim, cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>?</button>
            <div style={{ fontSize: 9, color: T.textMuted, fontFamily: T.mono, maxWidth: 200, textAlign: "right", lineHeight: 1.4 }}>{MODULES.find(m => m.id === activeModule)?.desc}</div>
          </div>
        )}
      </header>

      {/* Info panel (desktop only) */}
      {showInfo && !isMobile && (
        <div style={{ position: "absolute", top: 54, right: 0, width: 360, bottom: 0, background: "rgba(10,16,26,0.95)", backdropFilter: "blur(20px)", borderLeft: `1px solid ${T.border2}`, zIndex: 20, padding: 24, overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 14, fontWeight: 600, fontFamily: T.display, fontStyle: "italic", color: T.text }}>About the Programme</span>
            <button onClick={() => setShowInfo(false)} style={{ background: "none", border: "none", color: T.textDim, cursor: "pointer", fontSize: 18 }}>×</button>
          </div>
          <div style={{ fontSize: 12, color: T.textDim, lineHeight: 1.8, fontFamily: T.sans }}>
            <p style={{ marginBottom: 16 }}>CogGeometry Studio is a computational prototype of the <strong style={{ color: T.text }}>Geometric Cognition Programme</strong> — cognition as structured dynamics on latent state spaces.</p>
            <p style={{ marginBottom: 16 }}><strong style={{ color: T.accentLt }}>State Space</strong> — Explore individual manifolds with 3D visualisation, persistent homology, and conservative claim ladder.</p>
            <p style={{ marginBottom: 16 }}><strong style={{ color: T.accentLt }}>Coupling</strong> — Künneth deviation, fiber coherence, holonomy, chirality analysis between paired systems.</p>
            <div style={{ marginTop: 24, padding: "12px 16px", borderRadius: 8, border: `1px solid ${T.border}`, fontStyle: "italic", fontSize: 11, color: T.textMuted, lineHeight: 1.6 }}>"Report at the strongest defensible level, not the most exciting one."</div>
          </div>
        </div>
      )}

      {activeModule === "statespace" && <StateSpaceWorkbench />}
      {activeModule === "coupling" && <CouplingAnalyzer />}
    </div>
  );
}
