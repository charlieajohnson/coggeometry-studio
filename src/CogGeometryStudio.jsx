import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import * as d3 from "d3";

// ─── SYNTHETIC DATA GENERATORS ───────────────────────────────────────────────

function generateCircle(n = 800, noise = 0.08) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    pts.push([
      Math.cos(t) + (Math.random() - 0.5) * noise,
      Math.sin(t) + (Math.random() - 0.5) * noise,
      (Math.random() - 0.5) * noise * 0.5,
    ]);
  }
  return pts;
}

function generateTorus(n = 1200, noise = 0.06, R = 2, r = 0.8) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;
    pts.push([
      (R + r * Math.cos(v)) * Math.cos(u) + (Math.random() - 0.5) * noise,
      (R + r * Math.cos(v)) * Math.sin(u) + (Math.random() - 0.5) * noise,
      r * Math.sin(v) + (Math.random() - 0.5) * noise,
    ]);
  }
  return pts;
}

function generateKleinBottle(n = 1200, noise = 0.06) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;
    const a = 2, b = 1;
    let x, y, z;
    if (u < Math.PI) {
      x = (a + b * Math.cos(v)) * Math.cos(u);
      y = (a + b * Math.cos(v)) * Math.sin(u);
      z = b * Math.sin(v);
    } else {
      x = (a + b * Math.cos(v)) * Math.cos(u);
      y = (a + b * Math.cos(v)) * Math.sin(u);
      z = -b * Math.sin(v) * Math.cos((u - Math.PI));
    }
    pts.push([
      x + (Math.random() - 0.5) * noise,
      y + (Math.random() - 0.5) * noise,
      z + (Math.random() - 0.5) * noise,
    ]);
  }
  return pts;
}

function generateSphere(n = 1000, noise = 0.06) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = Math.random() * Math.PI * 2;
    const r = 1.5;
    pts.push([
      r * Math.sin(theta) * Math.cos(phi) + (Math.random() - 0.5) * noise,
      r * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * noise,
      r * Math.cos(theta) + (Math.random() - 0.5) * noise,
    ]);
  }
  return pts;
}

function generateCoupledOscillators(n = 1000, coupling = 0.7) {
  const pts = [];
  let phase1 = 0, phase2 = 0;
  for (let i = 0; i < n; i++) {
    phase1 += 0.05 + (Math.random() - 0.5) * 0.02;
    phase2 += 0.08 + coupling * Math.sin(phase1 - phase2) * 0.03 + (Math.random() - 0.5) * 0.02;
    pts.push([
      Math.cos(phase1),
      Math.sin(phase1),
      Math.cos(phase2),
      Math.sin(phase2),
    ]);
  }
  return pts.map(p => [p[0], p[1], p[2]]);
}

function generateStratified(n = 1000) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const r = Math.random();
    if (r < 0.4) {
      const t = Math.random() * Math.PI * 2;
      pts.push([Math.cos(t) * 1.5, Math.sin(t) * 1.5, -1 + (Math.random() - 0.5) * 0.1]);
    } else if (r < 0.7) {
      const t = Math.random() * Math.PI * 2;
      const s = Math.random() * 0.8;
      pts.push([Math.cos(t) * s, Math.sin(t) * s, 0 + (Math.random() - 0.5) * 0.1]);
    } else {
      pts.push([
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        1 + (Math.random() - 0.5) * 0.3,
      ]);
    }
  }
  return pts;
}

const GENERATORS = {
  circle: { fn: generateCircle, label: "S¹ Circle", betti: [1, 1, 0], desc: "Head direction ring" },
  torus: { fn: generateTorus, label: "T² Torus", betti: [1, 2, 1], desc: "Grid cell manifold" },
  klein: { fn: generateKleinBottle, label: "Klein Bottle", betti: [1, 1, 0], desc: "Non-orientable surface" },
  sphere: { fn: generateSphere, label: "S² Sphere", betti: [1, 0, 1], desc: "Closed surface" },
  coupled: { fn: generateCoupledOscillators, label: "Coupled Oscillators", betti: [1, 1, 0], desc: "Phase-locked systems" },
  stratified: { fn: generateStratified, label: "Stratified Space", betti: [1, 1, 0], desc: "Multi-dimensional strata" },
};

// ─── SIMULATED TOPOLOGY ANALYSIS ─────────────────────────────────────────────

function simulatePersistence(manifoldType) {
  const gen = GENERATORS[manifoldType];
  const betti = gen.betti;

  const bars = [];
  // β₀ bars
  for (let i = 0; i < 5 + Math.floor(Math.random() * 3); i++) {
    const birth = Math.random() * 0.1;
    const death = i === 0 ? Infinity : birth + 0.05 + Math.random() * 0.2;
    bars.push({ dim: 0, birth, death: death === Infinity ? 2.5 : death, persistent: i === 0 });
  }
  // β₁ bars
  for (let i = 0; i < betti[1] + Math.floor(Math.random() * 3); i++) {
    const birth = 0.1 + Math.random() * 0.15;
    const death = i < betti[1] ? 1.8 + Math.random() * 0.7 : birth + 0.1 + Math.random() * 0.3;
    bars.push({ dim: 1, birth, death, persistent: i < betti[1] });
  }
  // β₂ bars
  for (let i = 0; i < betti[2] + Math.floor(Math.random() * 2); i++) {
    const birth = 0.2 + Math.random() * 0.2;
    const death = i < betti[2] ? 1.5 + Math.random() * 0.8 : birth + 0.1 + Math.random() * 0.2;
    bars.push({ dim: 2, birth, death, persistent: i < betti[2] });
  }
  return bars;
}

function generateClaimReport(manifoldType, bars) {
  const gen = GENERATORS[manifoldType];
  const betti = gen.betti;
  const claims = [];

  if (betti[1] >= 1) claims.push({ text: `${betti[1]} persistent 1-cycle${betti[1] > 1 ? "s" : ""} detected`, status: "confirmed", confidence: 0.92 + Math.random() * 0.06 });
  else claims.push({ text: "No persistent 1-cycles", status: "confirmed", confidence: 0.95 });

  if (manifoldType === "torus") {
    claims.push({ text: "Toroidal manifold supported", status: "strong", confidence: 0.85 + Math.random() * 0.1 });
    claims.push({ text: "Orientability: orientable", status: "confirmed", confidence: 0.9 });
  } else if (manifoldType === "klein") {
    claims.push({ text: "Non-orientable surface detected", status: "strong", confidence: 0.78 + Math.random() * 0.1 });
    claims.push({ text: "Z₂ vs Z₃ coefficient sensitivity flagged", status: "investigating", confidence: 0.65 });
  } else if (manifoldType === "circle") {
    claims.push({ text: "Circular manifold (S¹) supported", status: "strong", confidence: 0.88 + Math.random() * 0.1 });
    claims.push({ text: "Orientability: trivially orientable", status: "confirmed", confidence: 0.95 });
  } else if (manifoldType === "sphere") {
    claims.push({ text: "Closed surface (S²) supported", status: "strong", confidence: 0.82 + Math.random() * 0.1 });
    claims.push({ text: "Orientability: orientable", status: "confirmed", confidence: 0.9 });
  } else if (manifoldType === "coupled") {
    claims.push({ text: "Coupled circular structure detected", status: "strong", confidence: 0.75 + Math.random() * 0.1 });
    claims.push({ text: "Geometric coupling: under investigation", status: "investigating", confidence: 0.6 });
  } else if (manifoldType === "stratified") {
    claims.push({ text: "Multiple strata detected", status: "strong", confidence: 0.7 + Math.random() * 0.1 });
    claims.push({ text: "Local dimension variation confirmed", status: "confirmed", confidence: 0.82 });
  }

  claims.push({ text: "Dynamical chirality: unresolved", status: "unresolved", confidence: 0.4 + Math.random() * 0.2 });

  return claims;
}

// ─── THREE.JS SCENE ──────────────────────────────────────────────────────────

function ThreeScene({ points, manifoldType, colorMode }) {
  const mountRef = useRef(null);
  const sceneRef = useRef({});
  const frameRef = useRef(0);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0.3, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    sceneRef.current = { scene, camera, renderer };

    const onDown = (e) => {
      isDragging.current = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      lastMouse.current = { x: clientX, y: clientY };
    };
    const onMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      rotation.current.y += (clientX - lastMouse.current.x) * 0.005;
      rotation.current.x += (clientY - lastMouse.current.y) * 0.005;
      lastMouse.current = { x: clientX, y: clientY };
    };
    const onUp = () => { isDragging.current = false; };

    renderer.domElement.addEventListener("mousedown", onDown);
    renderer.domElement.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    renderer.domElement.addEventListener("touchstart", onDown, { passive: true });
    renderer.domElement.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      if (!isDragging.current) rotation.current.y += 0.003;
      scene.rotation.x = rotation.current.x;
      scene.rotation.y = rotation.current.y;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      renderer.domElement.removeEventListener("mousedown", onDown);
      renderer.domElement.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      renderer.domElement.removeEventListener("touchstart", onDown);
      renderer.domElement.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const { scene } = sceneRef.current;
    if (!scene) return;

    while (scene.children.length > 0) scene.remove(scene.children[0]);

    // Grid
    const gridHelper = new THREE.GridHelper(8, 16, 0x1a2a4a, 0x0d1a2d);
    gridHelper.position.y = -2.5;
    gridHelper.material.opacity = 0.3;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    if (!points || points.length === 0) return;

    // Compute bounds for normalization
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
    points.forEach(p => {
      minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]);
      minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]);
      minZ = Math.min(minZ, p[2]); maxZ = Math.max(maxZ, p[2]);
    });
    const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2, cz = (minZ + maxZ) / 2;
    const scale = 2.5 / Math.max(maxX - minX, maxY - minY, maxZ - minZ, 0.01);

    // Color schemes
    const colorSchemes = {
      topology: (i, p) => {
        const angle = Math.atan2(p[1] - cy, p[0] - cx);
        const hue = ((angle / (Math.PI * 2)) + 1) % 1;
        return new THREE.Color().setHSL(hue * 0.8 + 0.55, 0.85, 0.55);
      },
      time: (i, p) => {
        const t = i / points.length;
        return new THREE.Color().setHSL(0.55 + t * 0.35, 0.8, 0.45 + t * 0.2);
      },
      height: (i, p) => {
        const t = (p[2] - minZ) / (maxZ - minZ + 0.001);
        return new THREE.Color().setHSL(0.0 + t * 0.15, 0.9, 0.4 + t * 0.25);
      },
    };

    const colorFn = colorSchemes[colorMode] || colorSchemes.topology;

    // Points
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(points.length * 3);
    const colors = new Float32Array(points.length * 3);

    points.forEach((p, i) => {
      positions[i * 3] = (p[0] - cx) * scale;
      positions[i * 3 + 1] = (p[1] - cy) * scale;
      positions[i * 3 + 2] = (p[2] - cz) * scale;
      const c = colorFn(i, p);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    });

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    scene.add(new THREE.Points(geometry, material));

    // Wireframe mesh for structure
    if (points.length < 2000) {
      const lineGeo = new THREE.BufferGeometry();
      const linePositions = [];
      const lineColors = [];
      const sorted = [...points].sort((a, b) => {
        const angA = Math.atan2(a[1], a[0]);
        const angB = Math.atan2(b[1], b[0]);
        return angA - angB;
      });
      const step = Math.max(1, Math.floor(sorted.length / 300));
      for (let i = 0; i < sorted.length - step; i += step) {
        const a = sorted[i], b = sorted[i + step];
        const dist = Math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2 + (a[2]-b[2])**2);
        if (dist < (maxX - minX) * 0.25) {
          linePositions.push(
            (a[0]-cx)*scale, (a[1]-cy)*scale, (a[2]-cz)*scale,
            (b[0]-cx)*scale, (b[1]-cy)*scale, (b[2]-cz)*scale
          );
          const cA = colorFn(i, a);
          const cB = colorFn(i + step, b);
          lineColors.push(cA.r, cA.g, cA.b, cB.r, cB.g, cB.b);
        }
      }
      if (linePositions.length > 0) {
        lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
        lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));
        const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.2 });
        scene.add(new THREE.LineSegments(lineGeo, lineMat));
      }
    }
  }, [points, colorMode]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", cursor: "grab" }} />;
}

// ─── BARCODE CHART ───────────────────────────────────────────────────────────

function BarcodeChart({ bars, width = 320, height = 160 }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !bars.length) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 12, right: 16, bottom: 24, left: 36 };
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const maxDeath = d3.max(bars, d => d.death) || 2.5;
    const x = d3.scaleLinear().domain([0, maxDeath]).range([0, w]);

    const dims = [0, 1, 2];
    const dimColors = ["#4a90d9", "#e85d5d", "#8b5cf6"];
    const dimLabels = ["β₀", "β₁", "β₂"];

    dims.forEach((dim, di) => {
      const dimBars = bars.filter(b => b.dim === dim);
      const yStart = di * (h / 3) + 4;
      const barH = Math.min(12, (h / 3 - 8) / Math.max(dimBars.length, 1));

      g.append("text")
        .attr("x", -8)
        .attr("y", yStart + (dimBars.length * barH) / 2 + 4)
        .attr("text-anchor", "end")
        .attr("fill", dimColors[di])
        .attr("font-size", "11px")
        .attr("font-family", "'JetBrains Mono', monospace")
        .attr("font-weight", "600")
        .text(dimLabels[di]);

      dimBars.forEach((bar, bi) => {
        g.append("rect")
          .attr("x", x(bar.birth))
          .attr("y", yStart + bi * barH)
          .attr("width", x(bar.death) - x(bar.birth))
          .attr("height", Math.max(barH - 2, 2))
          .attr("fill", dimColors[di])
          .attr("opacity", bar.persistent ? 0.9 : 0.3)
          .attr("rx", 1);
      });
    });

    // x axis
    const xAxis = d3.axisBottom(x).ticks(5).tickSize(3);
    g.append("g")
      .attr("transform", `translate(0,${h})`)
      .call(xAxis)
      .selectAll("text").attr("fill", "#6b7d99").attr("font-size", "9px");
    g.selectAll(".domain").attr("stroke", "#2a3a54");
    g.selectAll(".tick line").attr("stroke", "#2a3a54");

    g.append("text")
      .attr("x", w / 2).attr("y", h + 20)
      .attr("text-anchor", "middle")
      .attr("fill", "#4a6080")
      .attr("font-size", "9px")
      .text("filtration radius ε");

  }, [bars, width, height]);

  return <svg ref={svgRef} width={width} height={height} />;
}

// ─── PERSISTENCE DIAGRAM ─────────────────────────────────────────────────────

function PersistenceDiagram({ bars, width = 200, height = 200 }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !bars.length) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 12, right: 12, bottom: 28, left: 32 };
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;
    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const maxVal = d3.max(bars, d => d.death) || 2.5;
    const x = d3.scaleLinear().domain([0, maxVal]).range([0, w]);
    const y = d3.scaleLinear().domain([0, maxVal]).range([h, 0]);

    // Diagonal
    g.append("line")
      .attr("x1", 0).attr("y1", h).attr("x2", w).attr("y2", 0)
      .attr("stroke", "#2a3a54").attr("stroke-dasharray", "3,3");

    const dimColors = ["#4a90d9", "#e85d5d", "#8b5cf6"];

    bars.forEach(bar => {
      g.append("circle")
        .attr("cx", x(bar.birth))
        .attr("cy", y(bar.death))
        .attr("r", bar.persistent ? 5 : 3)
        .attr("fill", dimColors[bar.dim])
        .attr("opacity", bar.persistent ? 0.9 : 0.35)
        .attr("stroke", bar.persistent ? "#fff" : "none")
        .attr("stroke-width", bar.persistent ? 1 : 0);
    });

    // Axes
    g.append("g").attr("transform", `translate(0,${h})`).call(d3.axisBottom(x).ticks(4).tickSize(3))
      .selectAll("text").attr("fill", "#6b7d99").attr("font-size", "8px");
    g.append("g").call(d3.axisLeft(y).ticks(4).tickSize(3))
      .selectAll("text").attr("fill", "#6b7d99").attr("font-size", "8px");
    g.selectAll(".domain").attr("stroke", "#2a3a54");
    g.selectAll(".tick line").attr("stroke", "#2a3a54");

    g.append("text").attr("x", w / 2).attr("y", h + 22).attr("text-anchor", "middle").attr("fill", "#4a6080").attr("font-size", "9px").text("birth");
    g.append("text").attr("x", -20).attr("y", h / 2).attr("text-anchor", "middle").attr("fill", "#4a6080").attr("font-size", "9px").attr("transform", `rotate(-90,-20,${h/2})`).text("death");

  }, [bars, width, height]);

  return <svg ref={svgRef} width={width} height={height} />;
}

// ─── COHOMOLOGY COORDINATES PLOT ─────────────────────────────────────────────

function CohomologyPlot({ points, manifoldType, width = 200, height = 200 }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !points.length) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 12, right: 12, bottom: 12, left: 12 };
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;
    const g = svg.append("g").attr("transform", `translate(${margin.left + w/2},${margin.top + h/2})`);

    // Project to circular/toroidal coordinates
    const r = Math.min(w, h) / 2 - 10;
    const sampled = points.filter((_, i) => i % Math.max(1, Math.floor(points.length / 150)) === 0);

    // Draw guide circles
    g.append("circle").attr("r", r).attr("fill", "none").attr("stroke", "#1a2a44").attr("stroke-width", 1);
    g.append("circle").attr("r", r * 0.5).attr("fill", "none").attr("stroke", "#1a2a44").attr("stroke-width", 0.5).attr("stroke-dasharray", "2,3");

    sampled.forEach((p, i) => {
      const angle = Math.atan2(p[1], p[0]);
      const dist = Math.sqrt(p[0]**2 + p[1]**2 + (p[2] || 0)**2);
      const maxDist = 3.5;
      const nr = (dist / maxDist) * r;
      g.append("circle")
        .attr("cx", nr * Math.cos(angle))
        .attr("cy", nr * Math.sin(angle))
        .attr("r", 2.5)
        .attr("fill", d3.interpolateViridis(((angle / (Math.PI * 2)) + 1) % 1))
        .attr("opacity", 0.7);
    });

  }, [points, manifoldType, width, height]);

  return <svg ref={svgRef} width={width} height={height} />;
}

// ─── BETTI SUMMARY BAR ──────────────────────────────────────────────────────

function BettiSummary({ betti }) {
  const colors = ["#4a90d9", "#e85d5d", "#8b5cf6"];
  const labels = ["β₀", "β₁", "β₂"];
  return (
    <div style={{ display: "flex", gap: 16, padding: "6px 0" }}>
      {betti.map((b, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: colors[i], fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700 }}>{labels[i]}</span>
          <span style={{ color: "#c0d0e8", fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 400 }}>{b}</span>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────

const TABS = [
  { id: "explore", label: "State Space", icon: "◇" },
  { id: "topology", label: "Topology", icon: "◎" },
  { id: "dynamics", label: "Dynamics", icon: "↻" },
  { id: "coupling", label: "Coupling", icon: "⇋" },
];

export default function CogGeometryStudio() {
  const [manifold, setManifold] = useState("torus");
  const [noise, setNoise] = useState(0.06);
  const [nPoints, setNPoints] = useState(1200);
  const [colorMode, setColorMode] = useState("topology");
  const [activeTab, setActiveTab] = useState("explore");
  const [analysisRun, setAnalysisRun] = useState(false);
  const [claimLevel, setClaimLevel] = useState(0);
  const [escalating, setEscalating] = useState(null);

  const points = useMemo(() => {
    const gen = GENERATORS[manifold];
    if (manifold === "torus") return generateTorus(nPoints, noise);
    if (manifold === "circle") return generateCircle(nPoints, noise);
    if (manifold === "klein") return generateKleinBottle(nPoints, noise);
    if (manifold === "sphere") return generateSphere(nPoints, noise);
    if (manifold === "coupled") return generateCoupledOscillators(nPoints);
    if (manifold === "stratified") return generateStratified(nPoints);
    return gen.fn(nPoints, noise);
  }, [manifold, noise, nPoints]);

  const bars = useMemo(() => simulatePersistence(manifold), [manifold, analysisRun]);
  const claims = useMemo(() => generateClaimReport(manifold, bars), [manifold, bars, analysisRun]);

  const runAnalysis = useCallback(() => {
    setAnalysisRun(prev => !prev);
    setClaimLevel(0);
  }, []);

  const escalateClaim = useCallback((test) => {
    setEscalating(test);
    setTimeout(() => {
      setClaimLevel(prev => Math.min(prev + 1, 4));
      setEscalating(null);
    }, 1500);
  }, []);

  const gen = GENERATORS[manifold];

  const statusColors = {
    confirmed: "#22c55e",
    strong: "#3b82f6",
    investigating: "#f59e0b",
    unresolved: "#6b7280",
  };

  const claimLevels = [
    "Topological screening",
    "Geometry estimation",
    "Orientability resolved",
    "Dynamical characterization",
    "Full geometric claim",
  ];

  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      background: "linear-gradient(145deg, #060b14 0%, #0a1628 40%, #0d1b30 100%)",
      fontFamily: "'Söhne', 'Helvetica Neue', sans-serif",
      color: "#c0d0e8",
      display: "flex", flexDirection: "column",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ─── HEADER ─────────────────────────────────────────── */}
      <header style={{
        height: 52, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px",
        borderBottom: "1px solid rgba(74, 144, 217, 0.15)",
        background: "rgba(6, 11, 20, 0.8)",
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: "linear-gradient(135deg, #4a90d9, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 700, color: "#fff",
          }}>◎</div>
          <span style={{
            fontSize: 16, fontWeight: 600, letterSpacing: "0.04em",
            fontFamily: "'DM Sans', sans-serif",
            background: "linear-gradient(90deg, #c0d0e8, #8baac8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>CogGeometry Studio</span>
          <span style={{ fontSize: 10, color: "#4a6080", fontFamily: "'JetBrains Mono', monospace", marginLeft: 4 }}>v0.1 prototype</span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 2 }}>
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: "6px 14px", border: "none", borderRadius: 6, cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500,
              background: activeTab === tab.id ? "rgba(74, 144, 217, 0.15)" : "transparent",
              color: activeTab === tab.id ? "#8bb8e0" : "#4a6080",
              transition: "all 0.2s",
            }}>
              <span style={{ marginRight: 5 }}>{tab.icon}</span>{tab.label}
            </button>
          ))}
        </div>

        <div style={{ fontSize: 10, color: "#3a5070", fontFamily: "'JetBrains Mono', monospace" }}>
          Geometric Cognition Programme
        </div>
      </header>

      {/* ─── MAIN LAYOUT ────────────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* ─── LEFT: STATE SPACE EXPLORER ──────────────────── */}
        <div style={{
          width: 380, flexShrink: 0, display: "flex", flexDirection: "column",
          borderRight: "1px solid rgba(74, 144, 217, 0.1)",
          background: "rgba(10, 18, 32, 0.5)",
        }}>
          {/* Controls */}
          <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(74, 144, 217, 0.08)" }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#5a7a9a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, fontFamily: "'DM Sans', sans-serif" }}>
              ◇ State Space Explorer
            </div>

            {/* Manifold selector */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, marginBottom: 12 }}>
              {Object.entries(GENERATORS).map(([key, val]) => (
                <button key={key} onClick={() => { setManifold(key); setClaimLevel(0); }} style={{
                  padding: "7px 4px", border: "1px solid",
                  borderColor: manifold === key ? "rgba(74, 144, 217, 0.5)" : "rgba(42, 58, 84, 0.5)",
                  borderRadius: 5, cursor: "pointer",
                  background: manifold === key ? "rgba(74, 144, 217, 0.12)" : "rgba(15, 25, 40, 0.5)",
                  color: manifold === key ? "#8bb8e0" : "#5a7090",
                  fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                  transition: "all 0.2s",
                }}>
                  {val.label}
                </button>
              ))}
            </div>

            {/* Parameters */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 10, color: "#4a6080", fontFamily: "'JetBrains Mono', monospace" }}>noise σ</span>
                <input type="range" min="0" max="0.3" step="0.01" value={noise} onChange={e => setNoise(+e.target.value)}
                  style={{ width: 120, accentColor: "#4a90d9" }} />
                <span style={{ fontSize: 10, color: "#8bb8e0", fontFamily: "'JetBrains Mono', monospace", width: 36, textAlign: "right" }}>{noise.toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 10, color: "#4a6080", fontFamily: "'JetBrains Mono', monospace" }}>points</span>
                <input type="range" min="200" max="3000" step="100" value={nPoints} onChange={e => setNPoints(+e.target.value)}
                  style={{ width: 120, accentColor: "#4a90d9" }} />
                <span style={{ fontSize: 10, color: "#8bb8e0", fontFamily: "'JetBrains Mono', monospace", width: 36, textAlign: "right" }}>{nPoints}</span>
              </div>
            </div>

            {/* Color mode */}
            <div style={{ display: "flex", gap: 4, marginTop: 10 }}>
              {["topology", "time", "height"].map(mode => (
                <button key={mode} onClick={() => setColorMode(mode)} style={{
                  padding: "4px 10px", border: "1px solid",
                  borderColor: colorMode === mode ? "rgba(74, 144, 217, 0.4)" : "rgba(42, 58, 84, 0.3)",
                  borderRadius: 4, cursor: "pointer",
                  background: colorMode === mode ? "rgba(74, 144, 217, 0.1)" : "transparent",
                  color: colorMode === mode ? "#8bb8e0" : "#4a6080",
                  fontSize: 9, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase",
                }}>
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* 3D View */}
          <div style={{ flex: 1, position: "relative" }}>
            <ThreeScene points={points} manifoldType={manifold} colorMode={colorMode} />
            {/* Stats overlay */}
            <div style={{
              position: "absolute", bottom: 12, left: 12,
              background: "rgba(6, 11, 20, 0.85)", backdropFilter: "blur(8px)",
              borderRadius: 6, padding: "6px 10px",
              border: "1px solid rgba(74, 144, 217, 0.1)",
              display: "flex", gap: 14,
            }}>
              <span style={{ fontSize: 9, color: "#4a6080", fontFamily: "'JetBrains Mono', monospace" }}>
                dim: <span style={{ color: "#8bb8e0" }}>{manifold === "stratified" ? "1–2" : manifold === "circle" ? "1" : "2"}</span>
              </span>
              <span style={{ fontSize: 9, color: "#4a6080", fontFamily: "'JetBrains Mono', monospace" }}>
                n: <span style={{ color: "#8bb8e0" }}>{points.length.toLocaleString()}</span>
              </span>
              <span style={{ fontSize: 9, color: "#4a6080", fontFamily: "'JetBrains Mono', monospace" }}>
                σ: <span style={{ color: "#8bb8e0" }}>{noise.toFixed(2)}</span>
              </span>
            </div>
            <div style={{
              position: "absolute", top: 12, right: 12,
              background: "rgba(6, 11, 20, 0.8)", borderRadius: 6, padding: "5px 9px",
              border: "1px solid rgba(74, 144, 217, 0.1)",
              fontSize: 9, color: "#5a7a9a", fontFamily: "'JetBrains Mono', monospace",
            }}>
              drag to rotate
            </div>
          </div>

          {/* Description */}
          <div style={{
            padding: "10px 16px",
            borderTop: "1px solid rgba(74, 144, 217, 0.08)",
            fontSize: 11, color: "#5a7a9a", fontFamily: "'DM Sans', sans-serif",
          }}>
            <span style={{ color: "#8bb8e0", fontWeight: 600 }}>{gen.label}</span> — {gen.desc}
          </div>
        </div>

        {/* ─── CENTER: TOPOLOGY INSPECTOR ──────────────────── */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          background: "rgba(8, 15, 28, 0.3)",
          overflow: "auto",
        }}>
          <div style={{
            padding: "14px 20px",
            borderBottom: "1px solid rgba(74, 144, 217, 0.08)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#5a7a9a", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'DM Sans', sans-serif" }}>
              ◎ Topology Inspector
            </div>
            <button onClick={runAnalysis} style={{
              padding: "5px 14px", border: "1px solid rgba(74, 144, 217, 0.4)",
              borderRadius: 5, cursor: "pointer",
              background: "rgba(74, 144, 217, 0.12)", color: "#8bb8e0",
              fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              transition: "all 0.2s",
            }}>
              Run Persistence
            </button>
          </div>

          <div style={{ padding: "12px 20px", flex: 1 }}>
            {/* Filtration controls */}
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              <div style={{
                padding: "4px 10px", borderRadius: 4,
                background: "rgba(74, 144, 217, 0.12)", border: "1px solid rgba(74, 144, 217, 0.3)",
                fontSize: 10, color: "#8bb8e0", fontFamily: "'JetBrains Mono', monospace",
              }}>VR filtration</div>
              <div style={{
                padding: "4px 10px", borderRadius: 4,
                background: "rgba(30, 40, 60, 0.5)", border: "1px solid rgba(42, 58, 84, 0.3)",
                fontSize: 10, color: "#5a7090", fontFamily: "'JetBrains Mono', monospace",
              }}>Z₂</div>
              <div style={{
                padding: "4px 10px", borderRadius: 4,
                background: "rgba(30, 40, 60, 0.5)", border: "1px solid rgba(42, 58, 84, 0.3)",
                fontSize: 10, color: "#5a7090", fontFamily: "'JetBrains Mono', monospace",
              }}>Z₃</div>
            </div>

            {/* Betti summary */}
            <div style={{
              padding: "8px 12px", borderRadius: 6, marginBottom: 14,
              background: "rgba(15, 25, 40, 0.5)", border: "1px solid rgba(42, 58, 84, 0.3)",
            }}>
              <div style={{ fontSize: 9, color: "#4a6080", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>
                Betti Numbers (persistent)
              </div>
              <BettiSummary betti={gen.betti} />
            </div>

            {/* Barcode */}
            <div style={{
              padding: "10px", borderRadius: 6, marginBottom: 14,
              background: "rgba(10, 18, 32, 0.6)", border: "1px solid rgba(42, 58, 84, 0.2)",
            }}>
              <div style={{ fontSize: 9, color: "#4a6080", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>
                Persistence Barcode
              </div>
              <BarcodeChart bars={bars} width={380} height={150} />
            </div>

            {/* Diagram + Cohomology */}
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{
                flex: 1, padding: "10px", borderRadius: 6,
                background: "rgba(10, 18, 32, 0.6)", border: "1px solid rgba(42, 58, 84, 0.2)",
              }}>
                <div style={{ fontSize: 9, color: "#4a6080", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>
                  Persistence Diagram
                </div>
                <PersistenceDiagram bars={bars} width={200} height={200} />
              </div>
              <div style={{
                flex: 1, padding: "10px", borderRadius: 6,
                background: "rgba(10, 18, 32, 0.6)", border: "1px solid rgba(42, 58, 84, 0.2)",
              }}>
                <div style={{ fontSize: 9, color: "#4a6080", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>
                  Cohomology Coordinates
                </div>
                <CohomologyPlot points={points} manifoldType={manifold} width={200} height={200} />
              </div>
            </div>

            {/* Künneth deviation (for coupled) */}
            {manifold === "coupled" && (
              <div style={{
                marginTop: 14, padding: "10px 12px", borderRadius: 6,
                background: "rgba(139, 92, 246, 0.08)", border: "1px solid rgba(139, 92, 246, 0.2)",
              }}>
                <div style={{ fontSize: 9, color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>
                  Künneth Deviation Test
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>
                    <span style={{ color: "#6b7d99" }}>Δ₀ = </span><span style={{ color: "#22c55e" }}>0</span>
                  </div>
                  <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>
                    <span style={{ color: "#6b7d99" }}>Δ₁ = </span><span style={{ color: "#f59e0b" }}>1</span>
                  </div>
                  <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>
                    <span style={{ color: "#6b7d99" }}>Δ₂ = </span><span style={{ color: "#22c55e" }}>0</span>
                  </div>
                </div>
                <div style={{ fontSize: 10, color: "#8b5cf6", marginTop: 6, fontFamily: "'DM Sans', sans-serif" }}>
                  Non-product topology detected — geometric coupling supported
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ─── RIGHT: CLAIM BUILDER ────────────────────────── */}
        <div style={{
          width: 300, flexShrink: 0, display: "flex", flexDirection: "column",
          borderLeft: "1px solid rgba(74, 144, 217, 0.1)",
          background: "rgba(10, 18, 32, 0.5)",
        }}>
          <div style={{
            padding: "14px 16px",
            borderBottom: "1px solid rgba(74, 144, 217, 0.08)",
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#5a7a9a", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'DM Sans', sans-serif" }}>
              ⊙ Claim Builder
            </div>
          </div>

          <div style={{ padding: "12px 16px", flex: 1, overflow: "auto" }}>
            {/* Current hypothesis */}
            <div style={{
              padding: "12px", borderRadius: 8, marginBottom: 14,
              background: "rgba(15, 25, 40, 0.6)", border: "1px solid rgba(42, 58, 84, 0.3)",
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#8baac8", marginBottom: 10, fontFamily: "'DM Sans', sans-serif" }}>
                Current Hypothesis
              </div>
              {claims.map((claim, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                  <div style={{
                    width: 7, height: 7, borderRadius: "50%", marginTop: 4, flexShrink: 0,
                    background: statusColors[claim.status],
                    boxShadow: `0 0 6px ${statusColors[claim.status]}50`,
                  }} />
                  <div>
                    <div style={{ fontSize: 11, color: "#c0d0e8", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>
                      {claim.text}
                    </div>
                    <div style={{ fontSize: 9, color: "#4a6080", fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>
                      confidence: {(claim.confidence * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Claim level indicator */}
            <div style={{
              padding: "10px 12px", borderRadius: 8, marginBottom: 14,
              background: "rgba(15, 25, 40, 0.4)", border: "1px solid rgba(42, 58, 84, 0.2)",
            }}>
              <div style={{ fontSize: 9, color: "#4a6080", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>
                Inference Ladder
              </div>
              {claimLevels.map((level, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
                  opacity: i <= claimLevel ? 1 : 0.35,
                }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 3, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1px solid ${i <= claimLevel ? "#4a90d9" : "#2a3a54"}`,
                    background: i < claimLevel ? "rgba(74, 144, 217, 0.2)" : "transparent",
                    fontSize: 9, color: i < claimLevel ? "#4a90d9" : "#3a5070",
                  }}>
                    {i < claimLevel ? "✓" : i + 1}
                  </div>
                  <span style={{
                    fontSize: 10, fontFamily: "'DM Sans', sans-serif",
                    color: i <= claimLevel ? "#8bb8e0" : "#3a5070",
                    fontWeight: i === claimLevel ? 600 : 400,
                  }}>
                    {level}
                  </span>
                </div>
              ))}
            </div>

            {/* Escalate */}
            <div style={{
              padding: "12px", borderRadius: 8,
              background: "rgba(15, 25, 40, 0.4)", border: "1px solid rgba(42, 58, 84, 0.2)",
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#8baac8", marginBottom: 10, fontFamily: "'DM Sans', sans-serif" }}>
                Escalate Study
              </div>
              {[
                { id: "curvature", label: "Test Curvature", available: claimLevel >= 0 },
                { id: "dynamics", label: "Analyze Dynamics", available: claimLevel >= 1 },
                { id: "orientability", label: "Check Orientability", available: claimLevel >= 0 },
                { id: "holonomy", label: "Estimate Holonomy", available: claimLevel >= 2 },
                { id: "coupling", label: "Test Coupling", available: claimLevel >= 1 },
              ].map(test => (
                <div key={test.id} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginBottom: 6, opacity: test.available ? 1 : 0.3,
                }}>
                  <span style={{ fontSize: 10, color: "#7a9ab8", fontFamily: "'DM Sans', sans-serif" }}>
                    ▸ {test.label}
                  </span>
                  <button
                    onClick={() => test.available && escalateClaim(test.id)}
                    disabled={!test.available || escalating !== null}
                    style={{
                      padding: "3px 10px", border: "1px solid rgba(74, 144, 217, 0.3)",
                      borderRadius: 4, cursor: test.available ? "pointer" : "default",
                      background: escalating === test.id ? "rgba(74, 144, 217, 0.3)" : "rgba(74, 144, 217, 0.08)",
                      color: "#8bb8e0", fontSize: 9, fontFamily: "'JetBrains Mono', monospace",
                      transition: "all 0.2s",
                    }}
                  >
                    {escalating === test.id ? "running..." : "Run"}
                  </button>
                </div>
              ))}
            </div>

            {/* Strongest claim summary */}
            <div style={{
              marginTop: 14, padding: "12px", borderRadius: 8,
              background: "linear-gradient(135deg, rgba(74, 144, 217, 0.08), rgba(139, 92, 246, 0.08))",
              border: "1px solid rgba(74, 144, 217, 0.15)",
            }}>
              <div style={{ fontSize: 9, color: "#4a6080", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>
                Strongest Defensible Claim
              </div>
              <div style={{ fontSize: 12, color: "#c0d0e8", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                {manifold === "torus" && "Toroidal latent manifold with two persistent 1-cycles. Orientable. Dynamics uncharacterized."}
                {manifold === "circle" && "Circular manifold (S¹) with one persistent 1-cycle. Consistent with ring attractor dynamics."}
                {manifold === "klein" && "Non-orientable surface candidate. Z₂/Z₃ coefficient divergence detected. Requires further investigation."}
                {manifold === "sphere" && "Closed orientable surface (S²) with persistent 2-cycle. No 1-cycles. Spherical topology supported."}
                {manifold === "coupled" && "Coupled circular systems with Künneth deviation Δ₁ = 1. Non-product joint topology. Geometric coupling supported."}
                {manifold === "stratified" && "Multi-stratum state space with local dimension variation. Stratified structure candidate. Not a smooth manifold."}
              </div>
            </div>

            {/* Philosophy note */}
            <div style={{
              marginTop: 14, padding: "10px 12px", borderRadius: 6,
              border: "1px solid rgba(42, 58, 84, 0.15)",
            }}>
              <div style={{ fontSize: 9, color: "#3a5070", fontStyle: "italic", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                "Report at the strongest defensible level, not the most exciting one."
              </div>
              <div style={{ fontSize: 8, color: "#2a3a54", marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>
                — Conservative Claim Ladder, §9
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
