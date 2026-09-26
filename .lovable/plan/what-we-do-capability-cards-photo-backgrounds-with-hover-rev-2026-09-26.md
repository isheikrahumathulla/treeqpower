# "What We Do" capability cards — photo backgrounds with hover reveal

## Goal

Restyle the Home "What We Do / Integrated Capabilities. One Technical Partner." bento grid (8 cards, `section.home-core`):

- Each of the 8 cards gets its own HD photo background related to that capability.
- **Before hover:** the photo background, the orange number (01–08) and the title are visible. The description and "Explore service" label are hidden.
- **On hover / keyboard focus:** the title changes color, and the description (with the Explore label) fades in.

## Visual behavior

- Cards become photo tiles: image fills the card, with a dark gradient overlay so white text stays readable on every photo.
- Number: stays orange `#ff6000` (unchanged rule for this section).
- Title: **white before hover → green `#2f9f3d` on hover** (the section's approved default/hover colors).
- Description + "Explore service": hidden by default (opacity 0), fade/slide in on hover and on keyboard focus (`:focus-within`) so keyboard users can reach them; text stays in the HTML (crawlable, SEO-safe).
- Card 8 (Renewable Energy, full-width row) gets the same treatment with its own photo.
- Touch devices (no hover): descriptions remain always visible so mobile/tablet users don't lose content.
- Reduced-motion mode: no animation, states switch instantly.

## Images (8 new, unique sitewide)

Sourced from Pexels (free license) as real photos — no AI images. Each is a new download, so nothing repeats any existing photo on the site:

1. Engineering & Design — engineer reviewing electrical drawings
2. Technical Field Services — field technician working on equipment
3. Power Systems & Switchgear — HV/LV switchgear panel
4. Industrial Automation — PLC / control panel
5. Testing, Inspection & Diagnostics — electrical testing / thermal instrument
6. Asset Integrity & RBI — industrial plant inspection
7. MEP & Building Technologies — HVAC / plant room
8. Renewable Energy & Sustainability — solar installation

Saved as WebP (~1920px, quality 82) under `src/assets/home/capabilities/`; photographer, license and source page recorded in a new `credits.json` beside them. UAE-relevant scenes preferred where genuinely identifiable.

## Files changed

- `src/lib/home-content.ts` — add `image` + `imageAlt` to the 8 `coreCapabilities` entries.
- `src/components/home-page.tsx` — render the background image layer inside each `home-core-card`.
- `src/styles.css` — `.home-core-card` becomes an image tile; overlay, title color states, hover/focus reveal of description, touch and reduced-motion rules.
- New `src/assets/home/capabilities/` (8 WebP images + `credits.json`).

## Not changed

Section heading, intro text, card links/routes, numbers format, icons, grid layout, other sections, or any other page.

## Verification

Playwright check of the section on desktop (before-hover and hover states, no console errors) and a narrow viewport (descriptions visible without hover), plus a clean production build.
