# Hide "Engineering & Technical Services" from header dropdown and footer

## Goal

Remove "Engineering & Technical Services" from the header Services dropdown (desktop and mobile menu) and the footer Services column, while keeping the page itself live and reachable via its direct URL and the Sitemap page.

## Confirmed current state

- Header dropdown (desktop + mobile menu): built in `src/components/site-shell.tsx` from `navGroups` in `src/lib/site-data.ts` — the Services group's items come straight from `servicesNav`, which lists all 4 groups including Engineering & Technical Services.
- Footer Services column: hardcoded list of 4 links in `src/components/site-shell.tsx` — the first is Engineering & Technical Services.
- Sitemap page (`src/components/sitemap-page.tsx`): lists Engineering & Technical Services with all its detail pages — stays as is.
- The page `/our-services/engineering-technical-services` and all its sub-pages stay live; no redirects, no route changes.

## Changes

### 1. Header dropdown — `src/components/site-shell.tsx`
- Create a filtered copy of the nav groups for the header: same groups, but the Services group's item list excludes `/our-services/engineering-technical-services`.
- Use that filtered list for both the desktop dropdown and the mobile hamburger menu (both already iterate the same data, so one filter covers both).
- Do not modify `servicesNav` or `navGroups` at the source — the search index and sitemap read them and must keep the full list.

### 2. Footer — `src/components/site-shell.tsx`
- Remove the Engineering & Technical Services `<li>` from the Services column, leaving Inspection & Project Services, Asset Integrity, and Electrical & Automation.

### 3. Untouched on purpose
- Sitemap page keeps Engineering & Technical Services and its sub-pages (user requirement).
- The `/our-services` page keeps its four category cards, including the Engineering & Technical Services card — the request was scoped to the header dropdown and footer only.
- Home page service cards, search index, and all routes/redirects unchanged; the page stays reachable by direct URL.

## Verification

- Build and typecheck pass.
- Playwright: Services dropdown on desktop shows 3 items (no Engineering & Technical Services); mobile menu shows the same 3; footer Services column shows 3 links.
- Direct navigation to `/our-services/engineering-technical-services` still renders the page.
- Sitemap page still lists Engineering & Technical Services with its sub-pages.
