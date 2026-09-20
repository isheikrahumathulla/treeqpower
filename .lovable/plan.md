# Motion polish + hero button fix

## 1. Opening preloader
A short branded loading screen shows on first visit only: TreeQ Power logo on a dark background with a thin green progress line, then it fades away once the page is ready. It never blocks later navigation, and it is skipped for visitors who prefer reduced motion.

## 2. Fade between pages
Clicking any link fades the outgoing page content out and the new page in (about 250ms), with the page scrolling to the top. The header and footer stay fixed in place so only the page body transitions.

## 3. Scroll reveal on every section
Each section across all pages gently fades and rises into view the first time it is scrolled to, then stays visible. Applies to home sections, page heroes' content, intro blocks, content sections, notes, cards and CTAs. Above-the-fold content shows immediately so nothing looks blank on load.

## 4. Home hero "Start an enquiry" button
The secondary hero button currently renders as a solid white block over the photo. It becomes a transparent outlined button with white text, filling with a subtle white tint only on hover.

## Technical notes
- New `src/components/preloader.tsx`, mounted once in `src/routes/__root.tsx`, gated by a first-visit flag in `sessionStorage` and rendered only after hydration to avoid SSR mismatch.
- New `src/components/page-transition.tsx` keyed on `useLocation().pathname`, wrapping `<Outlet />` in `site-shell.tsx`; CSS keyframe fade-in, no layout shift.
- New `src/components/reveal.tsx` (or a `useReveal` hook) using a single shared `IntersectionObserver` that adds an `is-visible` class; applied to sections in `home-page.tsx` and `content-page.tsx`.
- Animation CSS (`.reveal`, `.page-fade`, `.preloader`) appended to `src/styles.css`, all wrapped so `@media (prefers-reduced-motion: reduce)` disables transforms/animations.
- Hero button fix: the existing rule targets `button[data-variant="outline"]`, an attribute shadcn buttons do not emit. Replace with a class on the hero secondary button styled for transparent background, light border, white text, translucent hover.

## Verification
Build check plus Playwright passes at desktop and mobile on `/`, a deep service page and `/contact`: confirm preloader disappears, sections become visible after scroll, no console errors, and hero button renders transparent.
