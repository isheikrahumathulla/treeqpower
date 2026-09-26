# Remove arrow marks from all CTA and link buttons sitewide

## Scope (confirmed)
Remove the trailing arrow icon from every call-to-action button and "Explore / View details / Read article"-style link across the entire website — including the header's "Start an enquiry" button.

**Explicitly kept (not buttons):**
- Lifecycle flow connectors (down-arrows between lifecycle steps on About Us; right-arrows between lifecycle stages on Company Overview) — these are step connectors, not buttons.
- The search bar's submit arrow (it is the enter/go control you asked for earlier).
- Carousel previous/next arrows (the client-logo slider controls).

## Change — 11 files, icon removal only
In each file, delete the `<ArrowRight />` icon after the button/link label (and its now-unused import). No text, layout, spacing, hover behavior or color changes.

| File | Arrows removed |
|---|---|
| `src/components/site-shell.tsx` | Desktop header "Start an enquiry" CTA |
| `src/components/home-page.tsx` | Hero "Explore services"; image-card "Explore"; "Explore service" core cards; Resources cards (Blogs, Downloads); "View All FAQs"; "Request a Consultation" |
| `src/components/about-page.tsx` | Hero "Explore Our Services"; "Read the Company Overview"; capability cards "Explore capability"; industry cards; "Explore Engineering & Design Services"; "Explore Supported Industries"; "Why TreeQ Power"; "View Certifications"; "View Clients & Partners"; "Explore Brands"; "View All FAQs"; "Request a Consultation" (keeps lifecycle down-arrows) |
| `src/components/company-overview-page.tsx` | "Start an Enquiry" (hero + final CTA); "Why TreeQ Power"; "What We Do" card links; "Where We Work" chip links (keeps lifecycle stage arrows) |
| `src/components/services-page.tsx` | "About TreeQ Power"; "Explore All Industries"; "View All FAQs"; "Discuss Your Requirement" |
| `src/components/service-group-page.tsx` | "View details" card links; group list item links; "Contact TreeQ Power" CTA |
| `src/components/contact-page.tsx` | "Get Directions" (both); contact form submit arrow; "View location on Google Maps" |
| `src/components/content-page.tsx` | "Contact TreeQ Power" CTA |
| `src/components/coming-soon-page.tsx` | "Contact TreeQ Power" CTA (Blogs/Downloads Coming Soon pages) |
| `src/components/blog-index-page.tsx` | "Read article" card links |
| `src/components/blog-post-page.tsx` | "Start an enquiry" CTA |

Any hover CSS that nudges the removed arrow (e.g. translate-on-hover) simply becomes inert; no CSS edits needed.

## Verification
- Build check.
- Browser check on desktop + mobile: header CTA, home hero and cards, About Us, Company Overview, Services, one service group page, Contact (including the form submit button) — confirm no arrow marks remain on buttons, lifecycle connectors/search/carousel arrows still present, and nothing shifted in layout.
