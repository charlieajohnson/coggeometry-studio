# CogGeometry Studio

**An interactive platform for discovering topology, geometry, and dynamics in cognitive state spaces.**

CogGeometry Studio is a computational prototype of the Geometric Cognition Programme — a research agenda proposing that cognition is best understood as structured dynamics on latent state spaces, characterised by their topology, geometry, and dynamical flow.

## What it does

The platform transforms high-dimensional trajectory data into interpretable geometric objects through a staged inference pipeline:

1. **State Space Explorer** — Interactive 3D visualization of point clouds on manifolds with configurable noise, sampling, and color encoding (topology / time / height).

2. **Topology Inspector** — Persistent homology barcodes, persistence diagrams, Betti number summaries, and cohomological coordinate extraction. For coupled systems, includes the Künneth deviation test for detecting non-product topology.

3. **Claim Builder** — A conservative inference ladder that tracks the strongest defensible geometric hypothesis supported by the data, preventing overinterpretation.

## Synthetic generators

The prototype includes six built-in manifold generators:

| Generator | Topology | Betti numbers | Cognitive analogue |
|-----------|----------|---------------|-------------------|
| S¹ Circle | Loop | (1, 1, 0) | Head direction ring |
| T² Torus | Two loops + void | (1, 2, 1) | Grid cell manifold |
| Klein Bottle | Non-orientable | (1, 1, 0) | Orientability test case |
| S² Sphere | Void | (1, 0, 1) | Closed surface |
| Coupled Oscillators | Coupled loops | (1, 1, 0) | Phase-locked systems |
| Stratified Space | Mixed dimension | (1, 1, 0) | Multi-regime cognition |

## Scientific context

This prototype operationalises ideas from the Geometric Cognition Programme:

- **Geometric Coupling Framework** — The Künneth deviation test implements Definition 2.4 from the paper.
- **Conservative Inference Pipeline** — The Claim Builder encodes the principle: *"report at the strongest defensible level, not the most exciting one."*
- **CogGeometry Studio Spec** — The three-panel MVP (State Space Explorer + Topology Inspector + Claim Builder).

## Getting started

```bash
git clone https://github.com/charlieajohnson/coggeometry-studio.git
cd coggeometry-studio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deployment

One-click deployment on Vercel:

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Deploy (zero config — Vercel auto-detects Vite)

## Tech stack

- **React** + **Vite**
- **Three.js** — 3D point cloud visualization
- **D3.js** — Persistence barcodes, diagrams, coordinate plots

## Roadmap

- [ ] Geometry & Transport Lab — curvature, parallel transport, holonomy
- [ ] Dynamics Engine — vector fields, attractors, chirality tests
- [ ] Coupling Analyzer — joint topology, fiber coherence, bundle diagnostics
- [ ] Real data import (neural recordings, model activations)
- [ ] Python backend (Ripser, GUDHI, giotto-tda) for actual TDA computation

## License

MIT

---

*Part of the Geometric Cognition Programme — toward a unified theory of topology, geometry, and dynamics in neural and artificial systems.*
