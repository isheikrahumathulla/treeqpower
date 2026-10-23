# Remove /about-us and rename Company Overview

## What changes
1. **Remove the /about-us page** — the standalone About Us landing page is retired. Anyone opening /about-us is permanently redirected (301) to the renamed page below, so old links keep working.
2. **Rename "Company Overview" to "About TreeQ Power"**
   - New address: `/about-us/about-treeqpower`
   - Old address `/about-us/company-overview` permanently redirects to the new one.
   - Menu label, footer link, sitemap, search results and breadcrumbs all read "About TreeQ Power".
   - Page title/description updated to "About TreeQ Power | TreeQ Power".
3. **"About Us" menu heading** stays as a dropdown heading but is no longer a clickable page; its items remain: About TreeQ Power, Why TreeQ Power, Our Clients, Brands, Testimonials.
4. **Breadcrumbs** on Our Clients, Brands, etc. change from "Home > About Us > ..." to "Home > About TreeQ Power > ..." (pointing to the renamed page), so no breadcrumb leads to a removed page.

## Technical details
- `src/lib/site-data.ts`: drop `/about-us` content entry; rename `/about-us/company-overview` key to `/about-us/about-treeqpower`; nav item label/href; parent `to` removed/non-link; add redirects `/about-us` and `/about-us/company-overview` -> new URL; retarget `/about-us/certifications` redirect.
- `src/routes/$.tsx`: remove `/about-us` → `AboutPage` branch and its meta; switch CompanyOverviewPage + meta to the new path.
- Delete `src/components/about-page.tsx` (and its image import if unused elsewhere).
- Update breadcrumbs in `our-clients-page.tsx`, `brands-page.tsx`, company overview page; footer, sitemap page, search index, any other `/about-us` link found by search.
- Bump Service Worker cache version.
