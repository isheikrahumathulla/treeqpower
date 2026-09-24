# Cinematic logo intro preloader

Replace the current preloader (full logo + loading bar) with a two-stage animated intro built from the uploaded emblem, split into two layers.

## What the visitor sees

1. White screen, nothing else.
2. The outer ring (green leaf + orange arc) draws itself on clockwise, as if being traced from the top.
3. Once the ring completes, the refinery/pipeline artwork inside fades up softly with a very slight scale settle.
4. A short hold, then the whole intro fades away to reveal the page.

Total runtime roughly 2.2 seconds. No loading bar, no text, no other elements.

## Assets

Two transparent PNGs prepared from the uploaded image:

- Outer layer: green leaf + orange circular arc only, inner artwork removed.
- Inner layer: the refinery towers and pipeline only, ring removed.

Both kept on the same canvas size and alignment so they stack pixel-perfectly when layered.

## Technical notes

- Layer split: `imagegen--edit_image` twice from the uploaded file, each with an explicit preserve list (keep exact shapes, colors, positions, canvas framing), saved as `src/assets/preloader-ring.png` and `src/assets/preloader-core.png`, then visually inspected and overlay-checked for alignment before use.
- `src/components/preloader.tsx`: renders the two layers absolutely stacked inside a square wrapper; timing raised to ring (~1.1s) → core fade (~0.6s) → hold (~0.3s) → exit fade. Keeps existing behavior: shows once per session via `sessionStorage`, skipped entirely under reduced motion, body scroll locked while visible.
- Clockwise reveal: `mask-image: conic-gradient(...)` animated through a registered `@property` angle custom property, with a `clip-path` wedge-sweep fallback for browsers that don't animate the property. Core layer: opacity + `scale(0.96 → 1)` with an ease-out curve, starting only after the ring finishes.
- `src/styles.css`: replace the `.preloader-inner img` / `.preloader-bar` rules with the new layered rules; responsive size `clamp(220px, 40vw, 460px)`; keep the existing reduced-motion block that hides the preloader.
- Old `treeqpower-logo-hd.png` stays in place — it is still used by the header.

## Out of scope

Header, favicon, page transitions and every other page remain untouched.
