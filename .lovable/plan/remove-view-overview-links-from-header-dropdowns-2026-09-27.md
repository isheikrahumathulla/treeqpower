# Remove "View overview" links from header dropdowns

## Goal
The About Us and Services dropdowns currently open with a header row reading "About Us — View overview" / "Services — View overview". These are not needed:
- Clicking the top-level **About Us** / **Services** label goes directly to that page (already the case — no change needed there).
- Hovering shows the dropdown (already the case).

## Changes

### 1. `src/components/site-shell.tsx`
- Delete the dropdown head link block inside the desktop dropdown:
  `{hasOverview(g)&&<SiteLink to={g.to} className="zoho-drop-head">…View overview</SiteLink>}`
- The dropdown card then opens straight into the list of sub-page links (Company Overview, Why TreeQ Power, Our Clients, Brands, Testimonials / the four service groups).
- Keep the `hasOverview` helper — it still decides that About Us and Services top-level labels are real links while "More" (Resources) stays a hover/click toggle. The mobile hamburger menu has no such link, so nothing changes there.

### 2. `src/styles.css`
- Remove the now-unused rules: `.zoho-drop-head`, `.zoho-drop-overview`, and the two `.zoho-header .zoho-drop-head:hover…` rules.

## Verification
- Desktop: hover About Us / Services → dropdown shows only the sub-page list; clicking the top-level label navigates to /about-us and /our-services; the Resources ("More") dropdown behaves as before.
- Mobile: hamburger menu unchanged.
- Typecheck and build clean; quick Playwright check of the header dropdowns.
