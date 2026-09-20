# Header hover: remove orange background, add subtle elevation

## Root cause (confirmed)
Every header element (logo, nav items, dropdown rows, mobile menu rows) is a shared `Button variant="ghost"`, whose hover style is `hover:bg-accent hover:text-accent-foreground`. In the TreeQ theme, `--accent` is orange (`oklch(0.69 0.21 42)`), so hovering paints an orange box and flips the text to white.

## Change

### 1. `src/styles.css` — add one small header-scoped block (no theme/token changes, so the rest of the site is untouched)
Scope all new rules to `.zoho-header [data-slot="button"]` (desktop header) and `[data-slot="sheet-content"] [data-slot="button"]` (the Sheet menu renders in a portal, outside `.zoho-header`, so it needs its own scope). This covers logo, nav items, "View overview", dropdown rows, mobile rows, hamburger and the enquiry CTA.

- **On hover/focus-visible for all header ghost buttons:**
  - `background: transparent` (kills the orange fill)
  - `color: inherit` (prevents the white-text flip that the orange background relied on)
  - `box-shadow: 0 6px 18px rgba(0,0,0,0.10)` — soft elevation; dropdown/mega-menu rows get a slightly softer `0 4px 14px rgba(0,0,0,0.08)` since they are full-width rows
  - `transition: box-shadow .25s ease, transform .25s ease` (250ms, within the requested 200–300ms)
  - No border, no glow, no background tint
- **Logo button:** target it via a single new class `zoho-logo-btn` added to the logo `<Button>` in `src/components/site-shell.tsx` (one-word change, not a rebuild):
  - No background, no border, no box-shadow rectangle
  - On hover: soft shape-following shadow on the image itself (`filter: drop-shadow(0 6px 14px rgba(0,0,0,0.14))`), `transform: scale(1.01)`, same smooth transition
  - Logo image and size unchanged
- **"Start an enquiry" CTA:** keeps its existing green fill and green hover (not orange) — only the subtle elevation shadow is added on hover. Its arrow stays.
- **Active-page indication:** untouched — only hover/focus styling changes.
- Existing reduced-motion rules already neutralize transitions; no extra work.

### 2. `src/components/site-shell.tsx` — add the `zoho-logo-btn` class to the logo Button only
No other markup, structure, spacing, dropdown behavior or typography changes.

## Verification
- Build check.
- Playwright: hover the logo, About Us, a mega-menu row, the CTA and the hamburger — confirm no orange background anywhere, subtle shadow instead; hover a mobile menu row in the Sheet; confirm active nav state still shows; desktop + mobile screenshots.
