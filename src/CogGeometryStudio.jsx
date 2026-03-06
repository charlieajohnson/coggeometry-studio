import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import * as d3 from "d3";

// ═══════════════════════════════════════════════════════════════════════════════
//  COGGEOMETRY STUDIO — Geometric Cognition Programme Suite
//  Modules: State Space Workbench · Coupling Analyzer
// ═══════════════════════════════════════════════════════════════════════════════

const TAU = 2 * Math.PI;

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
    const u = Math.random() * TAU, v = Math.random() * TAU;
    const a = 2, b = 1;
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
  const pts = [];
  let p1 = 0, p2 = 0;
  for (let i = 0; i < n; i++) {
    p1 += 0.05 + (Math.random() - 0.5) * 0.02;
    p2 += 0.08 + coupling * Math.sin(p1 - p2) * 0.03 + (Math.random() - 0.5) * 0.02;
    pts.push([Math.cos(p1), Math.sin(p1), Math.cos(p2)]);
  }
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

// Coupling-specific generators
function generateProductCircles(n, noise = 0) {
  return Array.from({ length: n }, () => {
    const t1 = Math.random() * TAU, t2 = Math.random() * TAU;
    return { x: [Math.cos(t1) + (Math.random() - 0.5) * noise, Math.sin(t1) + (Math.random() - 0.5) * noise], y: [Math.cos(t2) + (Math.random() - 0.5) * noise, Math.sin(t2) + (Math.random() - 0.5) * noise], t1, t2 };
  });
}

function generatePhaseLocked(n, lockStrength = 0.8, noise = 0.1) {
  return Array.from({ length: n }, () => {
    const t1 = Math.random() * TAU, t2 = (t1 * lockStrength + (1 - lockStrength) * Math.random() * TAU + (Math.random() - 0.5) * noise) % TAU;
    return { x: [Math.cos(t1) + (Math.random() - 0.5) * noise, Math.sin(t1) + (Math.random() - 0.5) * noise], y: [Math.cos(t2) + (Math.random() - 0.5) * noise, Math.sin(t2) + (Math.random() - 0.5) * noise], t1, t2 };
  });
}

function generateFiberWidth(n, noise = 0.1) {
  return Array.from({ length: n }, () => {
    const t1 = Math.random() * TAU, fw = 0.3 + 0.7 * Math.abs(Math.sin(t1)), t2 = (Math.random() - 0.5) * fw;
    return { x: [Math.cos(t1) + (Math.random() - 0.5) * noise, Math.sin(t1) + (Math.random() - 0.5) * noise], y: [t2 + (Math.random() - 0.5) * noise, t2 * 0.5 + (Math.random() - 0.5) * noise], t1, t2, fiberWidth: fw };
  });
}

function generateKleinCoupling(n, noise = 0.1) {
  return Array.from({ length: n }, () => {
    const t1 = Math.random() * TAU, flip = t1 > Math.PI ? -1 : 1, t2 = Math.random() * TAU;
    return { x: [Math.cos(t1) + (Math.random() - 0.5) * noise, Math.sin(t1) + (Math.random() - 0.5) * noise], y: [Math.cos(t2) * flip + (Math.random() - 0.5) * noise, Math.sin(t2) + (Math.random() - 0.5) * noise], t1, t2 };
  });
}

// ─── TOPOLOGY COMPUTATIONS ───────────────────────────────────────────────────

const SINGLE_GENERATORS = {
  circle:     { fn: generateCircle, label: "S¹ Circle", betti: [1, 1, 0], desc: "Head direction ring" },
  torus:      { fn: generateTorus, label: "T² Torus", betti: [1, 2, 1], desc: "Grid cell manifold" },
  klein:      { fn: generateKleinBottle, label: "Klein Bottle", betti: [1, 1, 0], desc: "Non-orientable surface" },
  sphere:     { fn: generateSphere, label: "S² Sphere", betti: [1, 0, 1], desc: "Closed surface" },
  coupled:    { fn: generateCoupledOscillators, label: "Coupled Oscillators", betti: [1, 1, 0], desc: "Phase-locked systems" },
  stratified: { fn: generateStratified, label: "Stratified Space", betti: [1, 1, 0], desc: "Multi-dimensional strata" },
};

const COUPLING_FAMILIES = {
  "product-torus": { label: "Product Torus (S¹ × S¹)", desc: "Independent circular systems → T² product", coupled: false },
  "phase-locked":  { label: "Phase-Locked Circles", desc: "Diagonal constraint → non-product topology", coupled: true },
  "fiber-width":   { label: "Fiber-Width Coupling", desc: "Phase-dependent range constraint", coupled: true },
  "klein":         { label: "Klein Coupling", desc: "Orientation-reversing fiber twist", coupled: true },
  "null":          { label: "Gaussian Null", desc: "No manifold structure", coupled: false },
};

function simulatePersistence(type) {
  const b = SINGLE_GENERATORS[type].betti;
  const bars = [];
  for (let i = 0; i < 5 + Math.floor(Math.random() * 3); i++) {
    const birth = Math.random() * 0.1;
    bars.push({ dim: 0, birth, death: i === 0 ? 2.5 : birth + 0.05 + Math.random() * 0.2, persistent: i === 0 });
  }
  for (let i = 0; i < b[1] + Math.floor(Math.random() * 3); i++) {
    const birth = 0.1 + Math.random() * 0.15;
    bars.push({ dim: 1, birth, death: i < b[1] ? 1.8 + Math.random() * 0.7 : birth + 0.1 + Math.random() * 0.3, persistent: i < b[1] });
  }
  for (let i = 0; i < b[2] + Math.floor(Math.random() * 2); i++) {
    const birth = 0.2 + Math.random() * 0.2;
    bars.push({ dim: 2, birth, death: i < b[2] ? 1.5 + Math.random() * 0.8 : birth + 0.1 + Math.random() * 0.2, persistent: i < b[2] });
  }
  return bars;
}

function generateClaimReport(type, bars) {
  const b = SINGLE_GENERATORS[type].betti;
  const claims = [];
  claims.push(b[1] >= 1
    ? { text: `${b[1]} persistent 1-cycle${b[1] > 1 ? "s" : ""} detected`, status: "confirmed", confidence: 0.92 + Math.random() * 0.06 }
    : { text: "No persistent 1-cycles", status: "confirmed", confidence: 0.95 });
  const manifoldClaims = {
    torus: [{ text: "Toroidal manifold supported", status: "strong", confidence: 0.85 + Math.random() * 0.1 }, { text: "Orientability: orientable", status: "confirmed", confidence: 0.9 }],
    circle: [{ text: "Circular manifold (S¹) supported", status: "strong", confidence: 0.88 + Math.random() * 0.1 }, { text: "Orientability: trivially orientable", status: "confirmed", confidence: 0.95 }],
    klein: [{ text: "Non-orientable surface detected", status: "strong", confidence: 0.78 + Math.random() * 0.1 }, { text: "Z₂ vs Z₃ coefficient sensitivity flagged", status: "investigating", confidence: 0.65 }],
    sphere: [{ text: "Closed surface (S²) supported", status: "strong", confidence: 0.82 + Math.random() * 0.1 }, { text: "Orientability: orientable", status: "confirmed", confidence: 0.9 }],
    coupled: [{ text: "Coupled circular structure detected", status: "strong", confidence: 0.75 + Math.random() * 0.1 }, { text: "Geometric coupling: under investigation", status: "investigating", confidence: 0.6 }],
    stratified: [{ text: "Multiple strata detected", status: "strong", confidence: 0.7 + Math.random() * 0.1 }, { text: "Local dimension variation confirmed", status: "confirmed", confidence: 0.82 }],
  };
  return [...claims, ...(manifoldClaims[type] || [])];
}

function generateBarcode(family) {
  const barcodes = {
    "product-torus": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.15, death: 2.8, label: "1-cycle (θ₁)" }, { dim: 1, birth: 0.18, death: 2.6, label: "1-cycle (θ₂)" }, { dim: 2, birth: 0.35, death: 1.8, label: "2-cavity (torus void)" }],
    "phase-locked": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.12, death: 2.9, label: "1-cycle (diagonal)" }, { dim: 1, birth: 0.5, death: 0.9, label: "1-cycle (noise)" }],
    "fiber-width": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.14, death: 2.7, label: "1-cycle (base S¹)" }],
    "klein": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.13, death: 2.5, label: "1-cycle (orientation-reversing)" }, { dim: 1, birth: 0.2, death: 2.3, label: "1-cycle (fiber)" }],
    "null": [{ dim: 0, birth: 0, death: Infinity, label: "Connected component" }, { dim: 1, birth: 0.8, death: 1.1, label: "Noise artifact" }],
  };
  return barcodes[family] || barcodes["null"];
}

function computeKunneth(key) {
  const results = {
    "product-torus": { marginalX: [1, 1, 0], marginalY: [1, 1, 0], predicted: [1, 2, 1], observed: [1, 2, 1], delta: [0, 0, 0], coupled: false },
    "phase-locked":  { marginalX: [1, 1, 0], marginalY: [1, 1, 0], predicted: [1, 2, 1], observed: [1, 1, 0], delta: [0, 1, 1], coupled: true },
    "fiber-width":   { marginalX: [1, 1, 0], marginalY: [1, 0, 0], predicted: [1, 1, 0], observed: [1, 1, 0], delta: [0, 0, 0], coupled: false },
    "klein":         { marginalX: [1, 1, 0], marginalY: [1, 1, 0], predicted: [1, 2, 1], observed: [1, 1, 0], delta: [0, 1, 1], coupled: true },
    "null":          { marginalX: [1, 0, 0], marginalY: [1, 0, 0], predicted: [1, 0, 0], observed: [1, 0, 0], delta: [0, 0, 0], coupled: false },
  };
  return results[key] || results["null"];
}

// ─── SHARED UI COMPONENTS ────────────────────────────────────────────────────

function Btn({ children, active, onClick, style = {} }) {
  return (
    <button onClick={onClick} style={{
      padding: "6px 14px", border: "1px solid", borderRadius: 5, cursor: "pointer",
      borderColor: active ? T.border3 : T.border, fontFamily: T.mono, fontSize: 10,
      background: active ? `${T.accent}18` : "transparent",
      color: active ? T.accentLt : T.textDim,
      fontWeight: active ? 600 : 400, transition: "all 0.2s", ...style,
    }}>{children}</button>
  );
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(+e.target.value)}
        style={{ flex: 1, accentColor: T.accent, height: 3 }} />
      <span style={{ fontSize: 10, color: T.accentLt, fontFamily: T.mono, minWidth: 36, textAlign: "right" }}>
        {typeof value === "number" && value % 1 !== 0 ? value.toFixed(2) : value}
      </span>
    </div>
  );
}

// ─── THREE.JS SCENE ──────────────────────────────────────────────────────────

function ThreeScene({ points, colorMode }) {
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

    return () => {
      cancelAnimationFrame(frameRef.current);
      el.removeEventListener("mousedown", onDown); el.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp);
      el.removeEventListener("touchstart", onDown); el.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onUp);
      renderer.dispose(); container.removeChild(el);
    };
  }, []);

  useEffect(() => {
    const { scene } = sceneRef.current;
    if (!scene) return;
    while (scene.children.length > 0) scene.remove(scene.children[0]);

    const grid = new THREE.GridHelper(8, 16, 0x1a2a4a, 0x0d1a2d);
    grid.position.y = -2.5; grid.material.opacity = 0.3; grid.material.transparent = true;
    scene.add(grid);

    if (!points || !points.length) return;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
    points.forEach(p => { minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]); minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); minZ = Math.min(minZ, p[2]); maxZ = Math.max(maxZ, p[2]); });
    const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2, cz = (minZ + maxZ) / 2;
    const scale = 2.5 / Math.max(maxX - minX, maxY - minY, maxZ - minZ, 0.01);

    const colorSchemes = {
      topology: (i, p) => new THREE.Color().setHSL(((Math.atan2(p[1] - cy, p[0] - cx) / TAU) + 1) % 1 * 0.8 + 0.55, 0.85, 0.55),
      time: (i) => { const t = i / points.length; return new THREE.Color().setHSL(0.55 + t * 0.35, 0.8, 0.45 + t * 0.2); },
      height: (i, p) => { const t = (p[2] - minZ) / (maxZ - minZ + 0.001); return new THREE.Color().setHSL(0.0 + t * 0.15, 0.9, 0.4 + t * 0.25); },
    };
    const colorFn = colorSchemes[colorMode] || colorSchemes.topology;

    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(points.length * 3);
    const col = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      pos[i * 3] = (p[0] - cx) * scale; pos[i * 3 + 1] = (p[1] - cy) * scale; pos[i * 3 + 2] = (p[2] - cz) * scale;
      const c = colorFn(i, p); col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    });
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true })));

    if (points.length < 2000) {
      const lineGeo = new THREE.BufferGeometry();
      const lp = [], lc = [];
      const sorted = [...points].sort((a, b) => Math.atan2(a[1], a[0]) - Math.atan2(b[1], b[0]));
      const step = Math.max(1, Math.floor(sorted.length / 300));
      for (let i = 0; i < sorted.length - step; i += step) {
        const a = sorted[i], b = sorted[i + step];
        if (Math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2 + (a[2]-b[2])**2) < (maxX - minX) * 0.25) {
          lp.push((a[0]-cx)*scale, (a[1]-cy)*scale, (a[2]-cz)*scale, (b[0]-cx)*scale, (b[1]-cy)*scale, (b[2]-cz)*scale);
          const cA = colorFn(i, a), cB = colorFn(i + step, b);
          lc.push(cA.r, cA.g, cA.b, cB.r, cB.g, cB.b);
        }
      }
      if (lp.length > 0) {
        lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lp, 3));
        lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(lc, 3));
        scene.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.2 })));
      }
    }
  }, [points, colorMode]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", cursor: "grab" }} />;
}

// ─── D3 BARCODE CHARTS ───────────────────────────────────────────────────────

function SingleBarcodeChart({ bars, width = 320, height = 150 }) {
  const svgRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current || !bars.length) return;
    const svg = d3.select(svgRef.current); svg.selectAll("*").remove();
    const m = { top: 12, right: 16, bottom: 24, left: 36 };
    const w = width - m.left - m.right, h = height - m.top - m.bottom;
    const g = svg.append("g").attr("transform", `translate(${m.left},${m.top})`);
    const maxD = d3.max(bars, d => d.death) || 2.5;
    const x = d3.scaleLinear().domain([0, maxD]).range([0, w]);
    const dims = [0, 1, 2];
    const dc = [T.accent, T.red, T.purple];
    const dl = ["β₀", "β₁", "β₂"];
    dims.forEach((dim, di) => {
      const db = bars.filter(b => b.dim === dim);
      const ys = di * (h / 3) + 4;
      const bh = Math.min(12, (h / 3 - 8) / Math.max(db.length, 1));
      g.append("text").attr("x", -8).attr("y", ys + (db.length * bh) / 2 + 4).attr("text-anchor", "end").attr("fill", dc[di]).attr("font-size", "11px").attr("font-family", T.mono).attr("font-weight", "600").text(dl[di]);
      db.forEach((bar, bi) => {
        g.append("rect").attr("x", x(bar.birth)).attr("y", ys + bi * bh).attr("width", x(bar.death) - x(bar.birth)).attr("height", Math.max(bh - 2, 2)).attr("fill", dc[di]).attr("opacity", bar.persistent ? 0.9 : 0.3).attr("rx", 1);
      });
    });
    const xA = d3.axisBottom(x).ticks(5).tickSize(3);
    g.append("g").attr("transform", `translate(0,${h})`).call(xA).selectAll("text").attr("fill", T.textDim).attr("font-size", "9px");
    g.selectAll(".domain").attr("stroke", T.textMuted); g.selectAll(".tick line").attr("stroke", T.textMuted);
    g.append("text").attr("x", w / 2).attr("y", h + 20).attr("text-anchor", "middle").attr("fill", T.textMuted).attr("font-size", "9px").text("filtration radius ε");
  }, [bars, width, height]);
  return <svg ref={svgRef} width={width} height={height} />;
}

function PersistenceDiagram({ bars, width = 200, height = 200 }) {
  const svgRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current || !bars.length) return;
    const svg = d3.select(svgRef.current); svg.selectAll("*").remove();
    const m = { top: 12, right: 12, bottom: 28, left: 32 };
    const w = width - m.left - m.right, h = height - m.top - m.bottom;
    const g = svg.append("g").attr("transform", `translate(${m.left},${m.top})`);
    const mv = d3.max(bars, d => d.death) || 2.5;
    const x = d3.scaleLinear().domain([0, mv]).range([0, w]);
    const y = d3.scaleLinear().domain([0, mv]).range([h, 0]);
    g.append("line").attr("x1", 0).attr("y1", h).attr("x2", w).attr("y2", 0).attr("stroke", T.textMuted).attr("stroke-dasharray", "3,3");
    const dc = [T.accent, T.red, T.purple];
    bars.forEach(bar => { g.append("circle").attr("cx", x(bar.birth)).attr("cy", y(bar.death)).attr("r", bar.persistent ? 5 : 3).attr("fill", dc[bar.dim]).attr("opacity", bar.persistent ? 0.9 : 0.35).attr("stroke", bar.persistent ? "#fff" : "none").attr("stroke-width", bar.persistent ? 1 : 0); });
    g.append("g").attr("transform", `translate(0,${h})`).call(d3.axisBottom(x).ticks(4).tickSize(3)).selectAll("text").attr("fill", T.textDim).attr("font-size", "8px");
    g.append("g").call(d3.axisLeft(y).ticks(4).tickSize(3)).selectAll("text").attr("fill", T.textDim).attr("font-size", "8px");
    g.selectAll(".domain").attr("stroke", T.textMuted); g.selectAll(".tick line").attr("stroke", T.textMuted);
    g.append("text").attr("x", w / 2).attr("y", h + 22).attr("text-anchor", "middle").attr("fill", T.textMuted).attr("font-size", "9px").text("birth");
    g.append("text").attr("x", -20).attr("y", h / 2).attr("text-anchor", "middle").attr("fill", T.textMuted).attr("font-size", "9px").attr("transform", `rotate(-90,-20,${h/2})`).text("death");
  }, [bars, width, height]);
  return <svg ref={svgRef} width={width} height={height} />;
}

function CohomologyPlot({ points, width = 200, height = 200 }) {
  const svgRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current || !points.length) return;
    const svg = d3.select(svgRef.current); svg.selectAll("*").remove();
    const m = 12;
    const w = width - m * 2, h = height - m * 2;
    const g = svg.append("g").attr("transform", `translate(${m + w/2},${m + h/2})`);
    const r = Math.min(w, h) / 2 - 10;
    const sampled = points.filter((_, i) => i % Math.max(1, Math.floor(points.length / 150)) === 0);
    g.append("circle").attr("r", r).attr("fill", "none").attr("stroke", T.border2).attr("stroke-width", 1);
    g.append("circle").attr("r", r * 0.5).attr("fill", "none").attr("stroke", T.border).attr("stroke-width", 0.5).attr("stroke-dasharray", "2,3");
    sampled.forEach(p => {
      const angle = Math.atan2(p[1], p[0]);
      const dist = Math.sqrt(p[0]**2 + p[1]**2 + (p[2] || 0)**2);
      const nr = (dist / 3.5) * r;
      g.append("circle").attr("cx", nr * Math.cos(angle)).attr("cy", nr * Math.sin(angle)).attr("r", 2.5).attr("fill", d3.interpolateViridis(((angle / TAU) + 1) % 1)).attr("opacity", 0.7);
    });
  }, [points, width, height]);
  return <svg ref={svgRef} width={width} height={height} />;
}

// Canvas-based coupling visualizations
function ManifoldCanvas({ data, width = 340, height = 260 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!data?.length || !canvasRef.current) return;
    const c = canvasRef.current, ctx = c.getContext("2d"), dpr = window.devicePixelRatio || 1;
    c.width = width * dpr; c.height = height * dpr; ctx.scale(dpr, dpr); ctx.clearRect(0, 0, width, height);
    const xs = data.map(d => d.x[0]), ys = data.map(d => d.x[1]);
    const pad = 24;
    const xS = d3.scaleLinear().domain([Math.min(...xs) - 0.2, Math.max(...xs) + 0.2]).range([pad, width - pad]);
    const yS = d3.scaleLinear().domain([Math.min(...ys) - 0.2, Math.max(...ys) + 0.2]).range([height - pad, pad]);
    const cS = d3.scaleSequential(d3.interpolatePlasma).domain([0, TAU]);
    ctx.globalAlpha = 0.04; ctx.strokeStyle = T.textDim;
    for (let i = 0; i < data.length; i++) for (let j = i + 1; j < Math.min(i + 3, data.length); j++) { ctx.beginPath(); ctx.moveTo(xS(data[i].x[0]), yS(data[i].x[1])); ctx.lineTo(xS(data[j].x[0]), yS(data[j].x[1])); ctx.stroke(); }
    ctx.globalAlpha = 1;
    data.forEach(d => { ctx.beginPath(); ctx.arc(xS(d.x[0]), yS(d.x[1]), 2.2, 0, TAU); ctx.fillStyle = cS(d.t1 || 0); ctx.fill(); });
  }, [data, width, height]);
  return <canvas ref={canvasRef} style={{ width, height, borderRadius: 6 }} />;
}

function JointCanvas({ data, width = 340, height = 260 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!data?.length || !canvasRef.current) return;
    const c = canvasRef.current, ctx = c.getContext("2d"), dpr = window.devicePixelRatio || 1;
    c.width = width * dpr; c.height = height * dpr; ctx.scale(dpr, dpr); ctx.clearRect(0, 0, width, height);
    const pad = 24;
    const xS = d3.scaleLinear().domain([0, TAU]).range([pad, width - pad]);
    const yS = d3.scaleLinear().domain([0, TAU]).range([height - pad, pad]);
    const cS = d3.scaleSequential(d3.interpolateViridis).domain([0, TAU]);
    ctx.strokeStyle = `${T.border}`;
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 4; i++) { const v = (i / 4) * TAU; ctx.beginPath(); ctx.moveTo(xS(v), pad); ctx.lineTo(xS(v), height - pad); ctx.stroke(); ctx.beginPath(); ctx.moveTo(pad, yS(v)); ctx.lineTo(width - pad, yS(v)); ctx.stroke(); }
    data.forEach(d => {
      const t1 = ((d.t1 % TAU) + TAU) % TAU, t2 = ((d.t2 % TAU) + TAU) % TAU;
      ctx.beginPath(); ctx.arc(xS(t1), yS(t2), 2, 0, TAU); ctx.fillStyle = cS(t1); ctx.globalAlpha = 0.7; ctx.fill(); ctx.globalAlpha = 1;
    });
    ctx.fillStyle = T.textDim; ctx.font = `11px ${T.mono}`; ctx.textAlign = "center";
    ctx.fillText("θ₁", width / 2, height - 4);
    ctx.save(); ctx.translate(8, height / 2); ctx.rotate(-Math.PI / 2); ctx.fillText("θ₂", 0, 0); ctx.restore();
  }, [data, width, height]);
  return <canvas ref={canvasRef} style={{ width, height, borderRadius: 6 }} />;
}

function CouplingBarcodeCanvas({ barcodes, width = 380, height = 160 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const c = canvasRef.current, ctx = c.getContext("2d"), dpr = window.devicePixelRatio || 1;
    c.width = width * dpr; c.height = height * dpr; ctx.scale(dpr, dpr); ctx.clearRect(0, 0, width, height);
    const dc = { 0: T.rose, 1: T.accent, 2: T.emerald };
    const pad = { left: 36, right: 16, top: 16, bottom: 28 };
    const maxD = Math.max(...barcodes.filter(b => b.death !== Infinity).map(b => b.death), 3);
    const xS = d3.scaleLinear().domain([0, maxD]).range([pad.left, width - pad.right]);
    const bh = Math.min(18, (height - pad.top - pad.bottom) / barcodes.length - 3);
    barcodes.forEach((bar, i) => {
      const y = pad.top + i * (bh + 4);
      const x0 = xS(bar.birth), x1 = bar.death === Infinity ? width - pad.right : xS(bar.death);
      const color = dc[bar.dim] || T.textDim;
      ctx.fillStyle = color; ctx.globalAlpha = 0.15; ctx.fillRect(x0, y, x1 - x0, bh);
      ctx.globalAlpha = 1; ctx.strokeStyle = color; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x0, y + bh / 2); ctx.lineTo(x1, y + bh / 2); ctx.stroke();
      if (bar.death === Infinity) { ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(x1 - 5, y + 2); ctx.lineTo(x1, y + bh / 2); ctx.lineTo(x1 - 5, y + bh - 2); ctx.fill(); }
      ctx.fillStyle = T.text; ctx.font = `9px ${T.mono}`; ctx.textAlign = "left"; ctx.fillText(`H${bar.dim}`, 6, y + bh / 2 + 3);
    });
    ctx.strokeStyle = T.textMuted; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(pad.left, height - pad.bottom); ctx.lineTo(width - pad.right, height - pad.bottom); ctx.stroke();
    ctx.fillStyle = T.textDim; ctx.font = `10px ${T.mono}`; ctx.textAlign = "center"; ctx.fillText("filtration radius ε", width / 2, height - 6);
  }, [barcodes, width, height]);
  return <canvas ref={canvasRef} style={{ width, height, borderRadius: 6 }} />;
}

// ═══════════════════════════════════════════════════════════════════════════════
//  MODULE A — STATE SPACE WORKBENCH
// ═══════════════════════════════════════════════════════════════════════════════

function StateSpaceWorkbench() {
  const [manifold, setManifold] = useState("torus");
  const [noise, setNoise] = useState(0.06);
  const [nPoints, setNPoints] = useState(1200);
  const [colorMode, setColorMode] = useState("topology");
  const [analysisRun, setAnalysisRun] = useState(false);
  const [claimLevel, setClaimLevel] = useState(0);
  const [escalating, setEscalating] = useState(null);

  const points = useMemo(() => {
    const g = SINGLE_GENERATORS[manifold];
    if (manifold === "torus") return generateTorus(nPoints, noise);
    if (manifold === "circle") return generateCircle(nPoints, noise);
    if (manifold === "klein") return generateKleinBottle(nPoints, noise);
    if (manifold === "sphere") return generateSphere(nPoints, noise);
    if (manifold === "coupled") return generateCoupledOscillators(nPoints);
    if (manifold === "stratified") return generateStratified(nPoints);
    return g.fn(nPoints, noise);
  }, [manifold, noise, nPoints]);

  const bars = useMemo(() => simulatePersistence(manifold), [manifold, analysisRun]);
  const claims = useMemo(() => generateClaimReport(manifold, bars), [manifold, bars, analysisRun]);

  const escalateClaim = useCallback((test) => {
    setEscalating(test);
    setTimeout(() => { setClaimLevel(prev => Math.min(prev + 1, 4)); setEscalating(null); }, 1500);
  }, []);

  const gen = SINGLE_GENERATORS[manifold];
  const statusColors = { confirmed: T.emerald, strong: T.accent, investigating: T.amber, unresolved: "#6b7280" };
  const claimLevels = ["Topological screening", "Geometry estimation", "Orientability resolved", "Dynamical characterization", "Full geometric claim"];

  const strongestClaims = {
    torus: "Toroidal latent manifold with two persistent 1-cycles. Orientable.",
    circle: "Circular manifold (S¹) with one persistent 1-cycle. Consistent with ring attractor dynamics.",
    klein: "Non-orientable surface candidate. Z₂/Z₃ coefficient divergence detected. Requires further investigation.",
    sphere: "Closed orientable surface (S²) with persistent 2-cycle. No 1-cycles. Spherical topology supported.",
    coupled: "Coupled circular systems with Künneth deviation Δ₁ = 1. Non-product joint topology. Geometric coupling supported.",
    stratified: "Multi-stratum state space with local dimension variation. Stratified structure candidate. Not a smooth manifold.",
  };

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      {/* LEFT — 3D Explorer */}
      <div style={{ width: 380, flexShrink: 0, display: "flex", flexDirection: "column", borderRight: `1px solid ${T.border}`, background: T.bg1 }}>
        <div style={{ padding: "14px 16px", borderBottom: `1px solid ${T.border}` }}>
          <CardHeader style={{ marginBottom: 10 }}>◇ State Space Explorer</CardHeader>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, marginBottom: 12 }}>
            {Object.entries(SINGLE_GENERATORS).map(([key, val]) => (
              <button key={key} onClick={() => { setManifold(key); setClaimLevel(0); }} style={{
                padding: "7px 4px", border: `1px solid ${manifold === key ? T.border3 : T.border}`,
                borderRadius: 5, cursor: "pointer", fontSize: 10, fontFamily: T.sans, fontWeight: 500,
                background: manifold === key ? `${T.accent}18` : T.bg2,
                color: manifold === key ? T.accentLt : T.textDim, transition: "all 0.2s",
              }}>{val.label}</button>
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

      {/* CENTER — Topology Inspector */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "rgba(8,15,28,0.3)", overflow: "auto" }}>
        <div style={{ padding: "14px 20px", borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <CardHeader style={{ margin: 0 }}>◎ Topology Inspector</CardHeader>
          <Btn active onClick={() => setAnalysisRun(prev => !prev)}>Run Persistence</Btn>
        </div>
        <div style={{ padding: "12px 20px", flex: 1 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            <Btn active>VR filtration</Btn><Btn>Z₂</Btn><Btn>Z₃</Btn>
          </div>
          <div style={{ padding: "8px 12px", borderRadius: 6, marginBottom: 14, background: T.bg2, border: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: T.mono }}>Betti Numbers (persistent)</div>
            <div style={{ display: "flex", gap: 16, padding: "6px 0" }}>
              {gen.betti.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: [T.accent, T.red, T.purple][i], fontFamily: T.mono, fontSize: 13, fontWeight: 700 }}>{"β₀β₁β₂"[i*2] + "₀₁₂"[i]}</span>
                  <span style={{ color: T.text, fontFamily: T.mono, fontSize: 15 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <Card style={{ marginBottom: 14, padding: 10 }}>
            <div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: T.mono }}>Persistence Barcode</div>
            <SingleBarcodeChart bars={bars} width={380} height={150} />
          </Card>
          <div style={{ display: "flex", gap: 12 }}>
            <Card style={{ flex: 1, padding: 10 }}>
              <div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: T.mono }}>Persistence Diagram</div>
              <PersistenceDiagram bars={bars} width={200} height={200} />
            </Card>
            <Card style={{ flex: 1, padding: 10 }}>
              <div style={{ fontSize: 9, color: T.textDim, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: T.mono }}>Cohomology Coordinates</div>
              <CohomologyPlot points={points} width={200} height={200} />
            </Card>
          </div>
          {manifold === "coupled" && (
            <Card style={{ marginTop: 14, borderColor: `${T.purple}30` }}>
              <div style={{ fontSize: 9, color: T.purple, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: T.mono }}>Künneth Deviation Test</div>
              <div style={{ display: "flex", gap: 16 }}>
                {[["Δ₀", "0", T.emerald], ["Δ₁", "1", T.amber], ["Δ₂", "0", T.emerald]].map(([l, v, c]) => (
                  <div key={l} style={{ fontSize: 11, fontFamily: T.mono }}><span style={{ color: T.textDim }}>{l} = </span><span style={{ color: c }}>{v}</span></div>
                ))}
              </div>
              <div style={{ fontSize: 10, color: T.purple, marginTop: 6, fontFamily: T.sans }}>Non-product topology detected — geometric coupling supported</div>
            </Card>
          )}
        </div>
      </div>

      {/* RIGHT — Claim Builder */}
      <div style={{ width: 290, flexShrink: 0, display: "flex", flexDirection: "column", borderLeft: `1px solid ${T.border}`, background: T.bg1 }}>
        <div style={{ padding: "14px 16px", borderBottom: `1px solid ${T.border}` }}>
          <CardHeader style={{ margin: 0 }}>⊙ Claim Builder</CardHeader>
        </div>
        <div style={{ padding: "12px 16px", flex: 1, overflow: "auto" }}>
          <Card style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.accentLt, marginBottom: 10, fontFamily: T.sans }}>Current Hypothesis</div>
            {claims.map((claim, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", marginTop: 4, flexShrink: 0, background: statusColors[claim.status], boxShadow: `0 0 6px ${statusColors[claim.status]}50` }} />
                <div>
                  <div style={{ fontSize: 11, color: T.text, fontFamily: T.sans, lineHeight: 1.4 }}>{claim.text}</div>
                  <div style={{ fontSize: 9, color: T.textMuted, fontFamily: T.mono, marginTop: 2 }}>confidence: {(claim.confidence * 100).toFixed(0)}%</div>
                </div>
              </div>
            ))}
          </Card>
          <Card style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 9, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: T.mono }}>Inference Ladder</div>
            {claimLevels.map((level, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, opacity: i <= claimLevel ? 1 : 0.35 }}>
                <div style={{ width: 16, height: 16, borderRadius: 3, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${i <= claimLevel ? T.accent : T.textMuted}`, background: i < claimLevel ? `${T.accent}30` : "transparent", fontSize: 9, color: i < claimLevel ? T.accent : T.textMuted }}>{i < claimLevel ? "✓" : i + 1}</div>
                <span style={{ fontSize: 10, fontFamily: T.sans, color: i <= claimLevel ? T.accentLt : T.textMuted, fontWeight: i === claimLevel ? 600 : 400 }}>{level}</span>
              </div>
            ))}
          </Card>
          <Card style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: T.accentLt, marginBottom: 10, fontFamily: T.sans }}>Escalate Study</div>
            {[{ id: "curvature", label: "Test Curvature", min: 0 }, { id: "dynamics", label: "Analyze Dynamics", min: 1 }, { id: "orientability", label: "Check Orientability", min: 0 }, { id: "holonomy", label: "Estimate Holonomy", min: 2 }, { id: "coupling", label: "Test Coupling", min: 1 }].map(test => (
              <div key={test.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6, opacity: claimLevel >= test.min ? 1 : 0.3 }}>
                <span style={{ fontSize: 10, color: T.textDim, fontFamily: T.sans }}>▸ {test.label}</span>
                <button onClick={() => claimLevel >= test.min && escalateClaim(test.id)} disabled={claimLevel < test.min || escalating !== null} style={{ padding: "3px 10px", border: `1px solid ${T.border2}`, borderRadius: 4, cursor: claimLevel >= test.min ? "pointer" : "default", background: escalating === test.id ? `${T.accent}30` : `${T.accent}10`, color: T.accentLt, fontSize: 9, fontFamily: T.mono, transition: "all 0.2s" }}>{escalating === test.id ? "running..." : "Run"}</button>
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
  topology: { title: "Layer I — Topological Coupling", desc: "Künneth deviation test: does the joint topology factorize?", icon: "◯" },
  bundle:   { title: "Layer II — Bundle Coupling", desc: "Fiber coherence and holonomy transfer diagnostics", icon: "⊘" },
  dynamics: { title: "Layer III — Dynamical Coupling", desc: "Chirality alignment and flow constraint analysis", icon: "⟳" },
};

function CouplingAnalyzer() {
  const [activeFamily, setActiveFamily] = useState("product-torus");
  const [sampleSize, setSampleSize] = useState(400);
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
      default: d = Array.from({ length: sampleSize }, () => ({ x: [(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2], y: [(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2], t1: Math.random() * TAU, t2: Math.random() * TAU }));
    }
    setData(d); return d;
  }, [activeFamily, sampleSize, noiseLevel]);

  useEffect(() => { generateData(); }, [activeFamily, sampleSize, noiseLevel]);

  const runAnalysis = useCallback(() => {
    const kunneth = computeKunneth(activeFamily);
    const barcodes = generateBarcode(activeFamily);
    const hc = kunneth.coupled;
    const fc = activeFamily === "product-torus" ? 0.95 : activeFamily === "phase-locked" ? 0.72 : activeFamily === "fiber-width" ? 0.61 : activeFamily === "klein" ? 0.45 : 0.12;
    const hnt = activeFamily === "klein" || activeFamily === "fiber-width";
    const ca = activeFamily === "phase-locked" ? 0.87 : activeFamily === "klein" ? -0.62 : Math.random() * 0.1 - 0.05;
    setClaimState({
      kunneth, barcodes, fiberCoherence: fc, holonomyNonTrivial: hnt, chiralityAlignment: ca,
      claimLevel: !hc ? 0 : hnt ? 3 : Math.abs(ca) > 0.5 ? 4 : 1,
      claims: [
        { level: 0, text: "No coupling detected — product topology consistent", met: !hc },
        { level: 1, text: "Topologically coupled — Künneth deviation Δ > 0", met: hc },
        { level: 2, text: "Bundle-structured — fiber coherence Γ high", met: hc && fc > 0.5 },
        { level: 3, text: "Non-trivially bundled — holonomy H ≠ Id", met: hnt },
        { level: 4, text: "Dynamically coupled — chirality alignment significant", met: Math.abs(ca) > 0.5 },
        { level: 5, text: "Berry-phase-supported — geometric phase ϕ_B measurable", met: false },
      ],
    });
  }, [activeFamily]);

  useEffect(() => { if (data) runAnalysis(); }, [data]);

  const requestAiInsight = async () => {
    setAiLoading(true);
    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514", max_tokens: 1000,
          system: "You are a geometric topology expert analyzing coupling between dynamical systems. Given analysis results from the CogGeometry Studio framework, provide a concise scientific interpretation (3-4 sentences). Focus on what the Künneth deviation, fiber coherence, and coupling claim level tell us about the structural relationship between the two systems. Be precise and use the mathematical language of fiber bundles and persistent homology. Never use bullet points or lists.",
          messages: [{ role: "user", content: `Analysis results for "${COUPLING_FAMILIES[activeFamily]?.label}":\n- Künneth deviation: Δ = [${claimState?.kunneth?.delta?.join(", ")}]\n- Observed Betti: (${claimState?.kunneth?.observed?.join(", ")}) vs predicted (${claimState?.kunneth?.predicted?.join(", ")})\n- Fiber coherence Γ = ${claimState?.fiberCoherence?.toFixed(3)}\n- Holonomy non-trivial: ${claimState?.holonomyNonTrivial}\n- Chirality alignment α_χ = ${claimState?.chiralityAlignment?.toFixed(3)}\n- Strongest claim level: ${claimState?.claimLevel}/5\n- Sample size: ${sampleSize}, noise: ${noiseLevel}\n\nWhat does this tell us about the geometric coupling structure?` }],
        }),
      });
      const result = await resp.json();
      setAiInsight(result.content?.map(c => c.text || "").join("\n") || "Analysis unavailable.");
    } catch { setAiInsight("AI analysis unavailable — connect to the Anthropic API to enable geometric interpretation."); }
    setAiLoading(false);
  };

  const correlation = useMemo(() => {
    if (!data?.length) return 0;
    const xs = data.map(d => d.x[0]), ys = data.map(d => d.y[0]);
    const mx = xs.reduce((a, b) => a + b, 0) / xs.length, my = ys.reduce((a, b) => a + b, 0) / ys.length;
    const num = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0);
    const dx = Math.sqrt(xs.reduce((s, x) => s + (x - mx) ** 2, 0)), dy = Math.sqrt(ys.reduce((s, y) => s + (y - my) ** 2, 0));
    return dx * dy === 0 ? 0 : num / (dx * dy);
  }, [data]);

  const claimLevelColor = (l) => [T.textDim, T.accent, T.purple, T.rose, T.amber, T.emerald][l] || T.textDim;

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      {/* LEFT — Generator Controls */}
      <aside style={{ width: 260, borderRight: `1px solid ${T.border}`, padding: 16, background: T.bg1, overflowY: "auto", flexShrink: 0 }}>
        <CardHeader>Synthetic Generator</CardHeader>
        {Object.entries(COUPLING_FAMILIES).map(([key, fam]) => (
          <button key={key} onClick={() => setActiveFamily(key)} style={{
            display: "block", width: "100%", padding: "10px 12px", marginBottom: 4,
            background: activeFamily === key ? `${T.accent}18` : "transparent",
            border: activeFamily === key ? `1px solid ${T.border3}` : `1px solid transparent`,
            borderRadius: 8, cursor: "pointer", textAlign: "left", transition: "all 0.15s",
          }}>
            <div style={{ fontSize: 12, color: activeFamily === key ? T.accentLt : T.text, fontWeight: 500, fontFamily: T.sans }}>{fam.label}</div>
            <div style={{ fontSize: 10, color: T.textDim, marginTop: 2, fontFamily: T.sans }}>{fam.desc}</div>
            {fam.coupled && <span style={{ fontSize: 9, color: T.rose, background: `${T.rose}18`, padding: "1px 6px", borderRadius: 4, marginTop: 4, display: "inline-block" }}>coupled</span>}
          </button>
        ))}
        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <Slider label="n" value={sampleSize} min={100} max={1000} step={50} onChange={setSampleSize} />
          <Slider label="σ" value={noiseLevel} min={0} max={0.5} step={0.02} onChange={setNoiseLevel} />
        </div>
        <button onClick={generateData} style={{ marginTop: 16, width: "100%", padding: "10px 0", background: `linear-gradient(135deg, #1e40af, ${T.purple})`, border: "none", borderRadius: 8, color: T.text, fontSize: 11, fontWeight: 600, cursor: "pointer", letterSpacing: "0.04em", fontFamily: T.mono }}>↻ Regenerate</button>
        <Card style={{ marginTop: 20 }}>
          <div style={{ fontSize: 10, color: T.textDim, marginBottom: 4 }}>Coordinate Correlation</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: Math.abs(correlation) > 0.3 ? T.amber : T.emerald }}>ρ = {correlation.toFixed(3)}</div>
          <div style={{ fontSize: 9, color: T.textMuted, marginTop: 4 }}>{Math.abs(correlation) < 0.15 ? "Near-zero — but coupling may still exist geometrically" : "Nonzero — coordinate-level dependence present"}</div>
        </Card>
      </aside>

      {/* CENTER — Main Content */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ display: "flex", borderBottom: `1px solid ${T.border}`, padding: "0 16px", background: "rgba(15,23,42,0.3)" }}>
          {[{ key: "explorer", label: "State Space Explorer" }, { key: "topology", label: "Topology Inspector" }, { key: "coupling", label: "Coupling Stack" }, { key: "claims", label: "Claim Builder" }].map(tab => (
            <button key={tab.key} onClick={() => setActivePanel(tab.key)} style={{
              padding: "12px 20px", border: "none", cursor: "pointer", background: "transparent",
              fontSize: 11, letterSpacing: "0.02em", fontFamily: T.mono,
              color: activePanel === tab.key ? T.accentLt : T.textDim,
              borderBottom: activePanel === tab.key ? `2px solid ${T.accent}` : "2px solid transparent",
              fontWeight: activePanel === tab.key ? 600 : 400,
            }}>{tab.label}</button>
          ))}
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {/* EXPLORER */}
          {activePanel === "explorer" && data && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                <Card><CardHeader>System X — Marginal</CardHeader><ManifoldCanvas data={data} /></Card>
                <Card><CardHeader>System Y — Marginal</CardHeader><ManifoldCanvas data={data.map(d => ({ ...d, x: d.y }))} /></Card>
                <Card><CardHeader>Joint Phase Space (θ₁, θ₂)</CardHeader><JointCanvas data={data} /></Card>
              </div>
              <Card style={{ marginTop: 16 }}>
                <CardHeader>Embedding Comparison</CardHeader>
                <div style={{ fontSize: 11, color: T.textDim, padding: "12px 0", lineHeight: 1.7, fontFamily: T.sans }}>
                  The joint phase space reveals the geometric relationship between systems. For independent systems, points fill the full square [0, 2π]² uniformly — this is the product torus T². For coupled systems, the joint distribution concentrates on a submanifold: a diagonal (phase-locking), a band (fiber-width), or an orientation-reversed structure (Klein coupling). This is the visual intuition behind the Künneth deviation test.
                </div>
              </Card>
            </div>
          )}

          {/* TOPOLOGY */}
          {activePanel === "topology" && claimState && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Card><CardHeader>Persistence Barcode — Joint Space</CardHeader><CouplingBarcodeCanvas barcodes={claimState.barcodes} width={420} height={180} /><div style={{ fontSize: 10, color: T.textDim, marginTop: 8, lineHeight: 1.6, padding: "0 4px" }}><span style={{ color: T.rose }}>■ H₀</span> components · <span style={{ color: T.accent }}>■ H₁</span> loops · <span style={{ color: T.emerald }}>■ H₂</span> voids</div></Card>
                <Card>
                  <CardHeader>Künneth Deviation Test</CardHeader>
                  <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse", fontFamily: T.mono }}>
                    <thead><tr style={{ color: T.textDim, borderBottom: `1px solid ${T.border}` }}><th style={{ padding: "6px 8px", textAlign: "left" }}>k</th><th style={{ padding: "6px 8px", textAlign: "center" }}>β̂ᵒᵇˢ</th><th style={{ padding: "6px 8px", textAlign: "center" }}>β̂ⁱⁿᵈ</th><th style={{ padding: "6px 8px", textAlign: "center" }}>Δₖ</th></tr></thead>
                    <tbody>{[0, 1, 2].map(k => (
                      <tr key={k} style={{ borderBottom: `1px solid ${T.border}` }}>
                        <td style={{ padding: 8, color: T.text }}>k = {k}</td>
                        <td style={{ padding: 8, textAlign: "center", color: T.text, fontWeight: 600 }}>{claimState.kunneth.observed[k]}</td>
                        <td style={{ padding: 8, textAlign: "center", color: T.textDim }}>{claimState.kunneth.predicted[k]}</td>
                        <td style={{ padding: 8, textAlign: "center", fontWeight: 700, color: claimState.kunneth.delta[k] > 0 ? T.rose : T.emerald }}>{claimState.kunneth.delta[k]}{claimState.kunneth.delta[k] > 0 && " ✦"}</td>
                      </tr>
                    ))}</tbody>
                  </table>
                  <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 6, background: claimState.kunneth.coupled ? `${T.rose}10` : `${T.emerald}10`, border: `1px solid ${claimState.kunneth.coupled ? T.rose : T.emerald}30`, fontSize: 11, color: claimState.kunneth.coupled ? "#f9a8d4" : "#6ee7b7" }}>
                    {claimState.kunneth.coupled ? "⚡ Künneth deviation detected — joint topology is non-product" : "✓ Künneth prediction satisfied — consistent with independence"}
                  </div>
                </Card>
              </div>
              <Card style={{ marginTop: 16 }}>
                <CardHeader>Betti Number Comparison</CardHeader>
                <div style={{ display: "flex", gap: 16, padding: "12px 0" }}>
                  {["Marginal X", "Marginal Y", "Predicted (X×Y)", "Observed Joint"].map((label, idx) => {
                    const bettis = [claimState.kunneth.marginalX, claimState.kunneth.marginalY, claimState.kunneth.predicted, claimState.kunneth.observed][idx];
                    const isJ = idx === 3;
                    return (
                      <div key={label} style={{ flex: 1, padding: 12, borderRadius: 8, background: isJ ? `${T.accent}08` : T.bg2, border: `1px solid ${isJ ? T.border2 : T.border}` }}>
                        <div style={{ fontSize: 10, color: T.textDim, marginBottom: 8 }}>{label}</div>
                        <div style={{ display: "flex", gap: 8 }}>
                          {bettis.map((b, j) => <div key={j} style={{ textAlign: "center" }}><div style={{ fontSize: 18, fontWeight: 700, color: isJ ? T.accentLt : T.text }}>{b}</div><div style={{ fontSize: 9, color: T.textMuted }}>β{j}</div></div>)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          )}

          {/* COUPLING STACK */}
          {activePanel === "coupling" && claimState && (
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {Object.entries(LAYER_INFO).map(([key, info]) => (
                  <button key={key} onClick={() => setActiveLayer(key)} style={{
                    flex: 1, padding: "14px 16px", borderRadius: 10, cursor: "pointer", textAlign: "left",
                    background: activeLayer === key ? `${T.accent}12` : T.bg2,
                    border: activeLayer === key ? `1px solid ${T.border3}` : `1px solid ${T.border}`,
                  }}>
                    <div style={{ fontSize: 18, marginBottom: 4 }}>{info.icon}</div>
                    <div style={{ fontSize: 11, color: activeLayer === key ? T.accentLt : T.text, fontWeight: 600, fontFamily: T.sans }}>{info.title}</div>
                    <div style={{ fontSize: 10, color: T.textDim, marginTop: 2, fontFamily: T.sans }}>{info.desc}</div>
                  </button>
                ))}
              </div>
              {activeLayer === "topology" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Card>
                    <CardHeader>Künneth Deviation Vector</CardHeader>
                    <div style={{ display: "flex", gap: 16, justifyContent: "center", padding: 16 }}>
                      {[0, 1, 2].map(k => (
                        <div key={k} style={{ width: 80, height: 80, borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: claimState.kunneth.delta[k] > 0 ? `radial-gradient(circle, ${T.rose}20, ${T.rose}05)` : `radial-gradient(circle, ${T.emerald}15, ${T.emerald}04)`, border: `2px solid ${claimState.kunneth.delta[k] > 0 ? `${T.rose}60` : `${T.emerald}30`}` }}>
                          <div style={{ fontSize: 24, fontWeight: 800, color: claimState.kunneth.delta[k] > 0 ? T.rose : T.emerald }}>{claimState.kunneth.delta[k]}</div>
                          <div style={{ fontSize: 9, color: T.textDim }}>Δ{k}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: 8, fontSize: 11, color: T.textDim }}>Δ = ({claimState.kunneth.delta.join(", ")})</div>
                  </Card>
                  <Card>
                    <CardHeader>Interpretation</CardHeader>
                    <div style={{ fontSize: 11, color: T.textDim, lineHeight: 1.8, fontFamily: T.sans }}>
                      {claimState.kunneth.coupled
                        ? `The Künneth theorem predicts β = (${claimState.kunneth.predicted.join(", ")}) for independent systems. We observe β = (${claimState.kunneth.observed.join(", ")}), yielding Δ = (${claimState.kunneth.delta.join(", ")}). Non-zero entries indicate non-product topology — the systems are geometrically coupled (Definition 2.2).`
                        : `The observed joint Betti numbers match the Künneth prediction exactly: β = (${claimState.kunneth.observed.join(", ")}). This is consistent with geometric independence — the joint state space factorizes as a product M × N.`}
                    </div>
                  </Card>
                </div>
              )}
              {activeLayer === "bundle" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Card>
                    <CardHeader>Fiber Coherence Score Γ</CardHeader>
                    <div style={{ padding: 20, textAlign: "center" }}>
                      <div style={{ position: "relative", width: 160, height: 160, margin: "0 auto" }}>
                        <svg width={160} height={160} viewBox="0 0 160 160">
                          <circle cx={80} cy={80} r={70} fill="none" stroke={`${T.border}`} strokeWidth={8} />
                          <circle cx={80} cy={80} r={70} fill="none" stroke={claimState.fiberCoherence > 0.5 ? T.accent : T.amber} strokeWidth={8} strokeDasharray={`${claimState.fiberCoherence * 440} ${440 - claimState.fiberCoherence * 440}`} strokeDashoffset={110} strokeLinecap="round" />
                        </svg>
                        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ fontSize: 28, fontWeight: 800, color: T.text }}>{claimState.fiberCoherence.toFixed(2)}</div>
                          <div style={{ fontSize: 9, color: T.textDim }}>Γ</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 10, color: T.textDim, marginTop: 12, fontFamily: T.sans }}>{claimState.fiberCoherence > 0.7 ? "High coherence — consistent fiber structure" : claimState.fiberCoherence > 0.4 ? "Moderate coherence — partial bundle structure" : "Low coherence — no clear bundle structure"}</div>
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>Holonomy Transfer</CardHeader>
                    <div style={{ padding: 20, textAlign: "center" }}>
                      <div style={{ width: 120, height: 120, margin: "0 auto", borderRadius: "50%", border: `3px solid ${claimState.holonomyNonTrivial ? T.rose : T.textDim}`, display: "flex", alignItems: "center", justifyContent: "center", background: claimState.holonomyNonTrivial ? `${T.rose}08` : "transparent", position: "relative" }}>
                        <div style={{ fontSize: 36 }}>{claimState.holonomyNonTrivial ? "⟳" : "="}</div>
                        {claimState.holonomyNonTrivial && <div style={{ position: "absolute", bottom: -8, fontSize: 9, color: T.rose, background: T.bg, padding: "2px 8px" }}>H ≠ Id</div>}
                      </div>
                      <div style={{ fontSize: 10, color: T.textDim, marginTop: 20, fontFamily: T.sans }}>{claimState.holonomyNonTrivial ? "Non-trivial holonomy — parallel transport rotates the fiber. The coupling bundle has curvature." : "Trivial holonomy — transport preserves fiber orientation. Consistent with flat or product bundle."}</div>
                    </div>
                  </Card>
                </div>
              )}
              {activeLayer === "dynamics" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Card>
                    <CardHeader>Chirality Alignment α_χ</CardHeader>
                    <div style={{ padding: 20, textAlign: "center" }}>
                      <div style={{ fontSize: 48, fontWeight: 800, color: Math.abs(claimState.chiralityAlignment) > 0.5 ? T.amber : T.textDim }}>{claimState.chiralityAlignment.toFixed(3)}</div>
                      <div style={{ fontSize: 10, color: T.textDim, marginTop: 4 }}>α_χ = corr(sign(θ̇₁), sign(θ̇₂))</div>
                      <div style={{ marginTop: 16, height: 8, borderRadius: 4, background: `${T.border}`, overflow: "hidden" }}>
                        <div style={{ height: "100%", borderRadius: 4, width: `${Math.abs(claimState.chiralityAlignment) * 100}%`, background: claimState.chiralityAlignment > 0 ? `linear-gradient(90deg, ${T.accent}, ${T.accentLt})` : `linear-gradient(90deg, ${T.red}, #f87171)`, marginLeft: claimState.chiralityAlignment < 0 ? "auto" : 0 }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 9, color: T.textMuted }}><span>anti-aligned</span><span>aligned</span></div>
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>Dynamical Coupling Summary</CardHeader>
                    <div style={{ padding: "12px 0", fontSize: 11, color: T.textDim, lineHeight: 1.8, fontFamily: T.sans }}>
                      {Math.abs(claimState.chiralityAlignment) > 0.5
                        ? `Significant chirality alignment (α_χ = ${claimState.chiralityAlignment.toFixed(3)}). The systems are ${claimState.chiralityAlignment > 0 ? "co-rotating" : "counter-rotating"} — dynamical flow on one manifold constrains the other. This is Layer III coupling, the strongest level before Berry phase measurement.`
                        : "Chirality alignment is weak — winding directions appear independent. Structural coupling may still exist, but dynamical flows are not measurably coordinated at this noise/sample level."}
                    </div>
                  </Card>
                </div>
              )}
            </div>
          )}

          {/* CLAIM BUILDER */}
          {activePanel === "claims" && claimState && (
            <div>
              <Card>
                <CardHeader>Conservative Claim Ladder</CardHeader>
                <div style={{ padding: "12px 0" }}>
                  {claimState.claims.map((claim, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 8, marginBottom: 4, background: claim.met ? `${claimLevelColor(claim.level)}08` : "transparent", borderLeft: `3px solid ${claim.met ? claimLevelColor(claim.level) : `${T.border}`}` }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: claim.met ? `${claimLevelColor(claim.level)}15` : `${T.textMuted}08`, color: claim.met ? claimLevelColor(claim.level) : T.textMuted, fontSize: 12, fontWeight: 700 }}>{claim.met ? "✓" : claim.level}</div>
                      <div style={{ fontSize: 12, color: claim.met ? T.text : T.textMuted, fontWeight: claim.met ? 500 : 400, fontFamily: T.sans }}>{claim.text}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 8, padding: "12px 16px", borderRadius: 8, background: `${T.accent}08`, border: `1px solid ${T.accent}20`, fontSize: 11, color: T.accentLt }}>
                  ▲ Strongest defensible claim: Level {claimState.claimLevel}/5 — report at this level, not above
                </div>
              </Card>
              <Card style={{ marginTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <CardHeader style={{ margin: 0 }}>AI Geometric Interpretation</CardHeader>
                  <button onClick={requestAiInsight} disabled={aiLoading} style={{ padding: "6px 14px", borderRadius: 6, background: `linear-gradient(135deg, #6d28d9, ${T.purple})`, border: "none", color: T.text, fontSize: 10, cursor: aiLoading ? "wait" : "pointer", opacity: aiLoading ? 0.6 : 1, fontFamily: T.mono }}>{aiLoading ? "Analyzing..." : "◎ Request Analysis"}</button>
                </div>
                {aiInsight ? <div style={{ padding: "16px 0", fontSize: 12, color: T.text, lineHeight: 1.8, borderTop: `1px solid ${T.border}`, marginTop: 8, fontFamily: T.sans }}>{aiInsight}</div>
                  : <div style={{ padding: "20px 0", fontSize: 11, color: T.textMuted, textAlign: "center" }}>Click "Request Analysis" for an AI-powered geometric interpretation</div>}
              </Card>
              <Card style={{ marginTop: 16, borderColor: `${T.amber}20` }}>
                <CardHeader style={{ color: T.amber }}>Reporting Protocol</CardHeader>
                <div style={{ fontSize: 11, color: T.textDim, lineHeight: 1.7, padding: "8px 0", fontFamily: T.sans }}>
                  The critical principle: <strong style={{ color: T.text }}>report at the strongest defensible level, not the most exciting one</strong>. Each level requires all preceding levels to be established first. Topological coupling (Level 1) is the coarsest and most robust diagnostic. Bundle coupling (Levels 2–3) requires more data and lower noise. Dynamical coupling (Level 4) has the most stringent requirements. Berry phase (Level 5) requires cyclic stimulus traversal — not available from synthetic generators alone.
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>

      {/* RIGHT — Quick Status */}
      <aside style={{ width: 210, borderLeft: `1px solid ${T.border}`, padding: 16, background: T.bg1, overflowY: "auto", flexShrink: 0 }}>
        <CardHeader>Current Analysis</CardHeader>
        <Card style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 10, color: T.textDim }}>Generator</div>
          <div style={{ fontSize: 12, color: T.text, fontWeight: 600, marginTop: 2, fontFamily: T.sans }}>{COUPLING_FAMILIES[activeFamily]?.label}</div>
        </Card>
        {claimState && (
          <>
            <Card style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: T.textDim }}>Coupling Status</div>
              <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4, color: claimState.kunneth.coupled ? T.rose : T.emerald }}>{claimState.kunneth.coupled ? "COUPLED" : "INDEPENDENT"}</div>
              <div style={{ fontSize: 10, color: T.textMuted, marginTop: 2 }}>Δ = ({claimState.kunneth.delta.join(", ")})</div>
            </Card>
            <Card style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: T.textDim }}>Diagnostics</div>
              <div style={{ marginTop: 8 }}>
                {[{ label: "Γ fiber", value: claimState.fiberCoherence.toFixed(2) }, { label: "H holonomy", value: claimState.holonomyNonTrivial ? "≠ Id" : "= Id" }, { label: "α_χ chirality", value: claimState.chiralityAlignment.toFixed(3) }, { label: "ρ correlation", value: correlation.toFixed(3) }].map(d => (
                  <div key={d.label} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 10, borderBottom: `1px solid ${T.border}` }}>
                    <span style={{ color: T.textDim }}>{d.label}</span>
                    <span style={{ color: T.text, fontWeight: 600 }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card style={{ background: `${claimLevelColor(claimState.claimLevel)}08`, borderColor: `${claimLevelColor(claimState.claimLevel)}20` }}>
              <div style={{ fontSize: 10, color: T.textDim }}>Claim Level</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginTop: 4, color: claimLevelColor(claimState.claimLevel) }}>
                {claimState.claimLevel}<span style={{ fontSize: 14, color: T.textMuted }}>/5</span>
              </div>
            </Card>
          </>
        )}
        <div style={{ marginTop: 20, padding: 12, borderRadius: 8, border: `1px dashed ${T.border}` }}>
          <div style={{ fontSize: 9, color: T.textMuted, lineHeight: 1.6 }}>Framework: Geometric Coupling Between Dynamical Systems — A Fiber-Bundle Framework for Detecting Structural Dependence Beyond Correlation</div>
        </div>
      </aside>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  PROGRAMME SHELL
// ═══════════════════════════════════════════════════════════════════════════════

const MODULES = [
  { id: "statespace", label: "State Space", icon: "◇", desc: "Single manifold exploration" },
  { id: "coupling",   label: "Coupling",    icon: "⇋", desc: "Inter-system dependence" },
];

export default function CogGeometryStudio() {
  const [activeModule, setActiveModule] = useState("statespace");
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      background: `linear-gradient(145deg, ${T.bg} 0%, ${T.bg1} 40%, ${T.bg2} 100%)`,
      fontFamily: T.sans, color: T.text, display: "flex", flexDirection: "column",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif&display=swap" rel="stylesheet" />

      {/* Background texture */}
      <div style={{ position: "fixed", inset: 0, opacity: 0.025, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(74,144,217,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,217,0.4) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* ─── PROGRAMME HEADER ─────────────────────────────────── */}
      <header style={{
        height: 54, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", borderBottom: `1px solid ${T.border2}`,
        background: "rgba(6,10,17,0.85)", backdropFilter: "blur(16px)", zIndex: 10,
      }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 7,
            background: `linear-gradient(135deg, ${T.accent}, ${T.purple})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 15, fontWeight: 700, color: "#fff",
            boxShadow: `0 0 20px ${T.accent}30`,
          }}>◎</div>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{
                fontSize: 17, fontWeight: 600, letterSpacing: "0.03em",
                background: `linear-gradient(90deg, ${T.text}, ${T.accentLt})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>CogGeometry Studio</span>
              <span style={{ fontSize: 9, color: T.textMuted, fontFamily: T.mono }}>v0.2</span>
            </div>
            <div style={{ fontSize: 9, color: T.textMuted, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: T.mono, marginTop: -1 }}>
              Geometric Cognition Programme
            </div>
          </div>
        </div>

        {/* Module Switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: 2, background: "rgba(10,16,26,0.8)", padding: 3, borderRadius: 8, border: `1px solid ${T.border}` }}>
          {MODULES.map(mod => (
            <button key={mod.id} onClick={() => setActiveModule(mod.id)} style={{
              padding: "7px 18px", border: "none", borderRadius: 6, cursor: "pointer",
              fontFamily: T.sans, fontSize: 12, fontWeight: 500,
              background: activeModule === mod.id ? `${T.accent}18` : "transparent",
              color: activeModule === mod.id ? T.accentLt : T.textDim,
              transition: "all 0.25s ease",
              boxShadow: activeModule === mod.id ? `inset 0 0 12px ${T.accent}08` : "none",
            }}>
              <span style={{ marginRight: 6, fontSize: 13 }}>{mod.icon}</span>{mod.label}
            </button>
          ))}
        </div>

        {/* Right info */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setShowInfo(!showInfo)} style={{
            width: 28, height: 28, borderRadius: "50%", border: `1px solid ${T.border}`,
            background: "transparent", color: T.textDim, cursor: "pointer",
            fontSize: 13, fontFamily: T.sans, display: "flex", alignItems: "center", justifyContent: "center",
          }}>?</button>
          <div style={{ fontSize: 9, color: T.textMuted, fontFamily: T.mono, maxWidth: 200, textAlign: "right", lineHeight: 1.4 }}>
            {MODULES.find(m => m.id === activeModule)?.desc}
          </div>
        </div>
      </header>

      {/* Info panel */}
      {showInfo && (
        <div style={{
          position: "absolute", top: 54, right: 0, width: 360, bottom: 0,
          background: "rgba(10,16,26,0.95)", backdropFilter: "blur(20px)",
          borderLeft: `1px solid ${T.border2}`, zIndex: 20, padding: 24, overflowY: "auto",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 14, fontWeight: 600, fontFamily: T.display, fontStyle: "italic", color: T.text }}>About the Programme</span>
            <button onClick={() => setShowInfo(false)} style={{ background: "none", border: "none", color: T.textDim, cursor: "pointer", fontSize: 18 }}>×</button>
          </div>
          <div style={{ fontSize: 12, color: T.textDim, lineHeight: 1.8, fontFamily: T.sans }}>
            <p style={{ marginBottom: 16 }}>CogGeometry Studio is a computational prototype of the <strong style={{ color: T.text }}>Geometric Cognition Programme</strong> — a research agenda proposing that cognition is best understood as structured dynamics on latent state spaces, characterised by their topology, geometry, and dynamical flow.</p>
            <p style={{ marginBottom: 16 }}><strong style={{ color: T.accentLt }}>State Space Workbench</strong> — Explore individual manifolds (S¹, T², Klein, S², coupled oscillators, stratified spaces) with interactive 3D visualisation, persistent homology, and the conservative claim ladder.</p>
            <p style={{ marginBottom: 16 }}><strong style={{ color: T.accentLt }}>Coupling Analyzer</strong> — Investigate geometric dependence between paired dynamical systems using the Künneth deviation test, fiber coherence diagnostics, holonomy transfer, and chirality alignment analysis.</p>
            <div style={{ marginTop: 24, padding: "12px 16px", borderRadius: 8, border: `1px solid ${T.border}`, fontStyle: "italic", fontSize: 11, color: T.textMuted, lineHeight: 1.6 }}>
              "Report at the strongest defensible level, not the most exciting one."
            </div>
          </div>
        </div>
      )}

      {/* ─── MODULE CONTENT ───────────────────────────────────── */}
      {activeModule === "statespace" && <StateSpaceWorkbench />}
      {activeModule === "coupling" && <CouplingAnalyzer />}
    </div>
  );
}
