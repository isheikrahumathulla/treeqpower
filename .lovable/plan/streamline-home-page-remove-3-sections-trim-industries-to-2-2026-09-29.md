# Streamline Home Page — Remove 3 Sections, Trim Industries to 2

## Requested changes (per the client's table)

| # | Section | Action |
|---|---------|--------|
| Header & Navigation | KEEP |
| Hero Section | KEEP |
| About TreeQ Power | KEEP |
| Our Capabilities | REMOVE |
| What We Do | KEEP |
| Industries We Support | KEEP — Oil & Gas + Industrial only |
| Resources | REMOVE |
| Frequently Asked Questions | REMOVE |
| Let's Discuss Your Requirements | KEEP |
| Our Clients | KEEP |
| Footer | KEEP |

## Resulting page flow

Hero → About TreeQ Power → What We Do (3 cards) → Industries We Support (2 cards) → Let's Discuss Your Requirements → Our Clients → Footer

## Implementation

1. **src/components/home-page.tsx**
   - Delete the "Our Capabilities" marquee section (`home-cap-carousel`).
   - Delete the "Resources" section (`home-resources`) and its now-unused `FileText`, `Check`, `HelpCircle` icon imports.
   - Delete the "Frequently Asked Questions" section (`home-faq-new`) and the Accordion component import.
   - Industries section stays; it will render whatever `industries` contains (after step 2, two cards).

2. **src/lib/home-content.ts**
   - Trim `industries` to exactly two entries, in this order:
     1. Oil & Gas (→ `/industries/oil-gas`)
     2. Industrial (→ `/industries/industrial`)
   - Remove the Commercial, Infrastructure and Utilities entries.
   - Remove the now-unused `capabilityStrip` export (nothing else references it after the marquee is gone — verified against the codebase; `home-page.tsx` is its only consumer).

3. **CSS (src/styles.css)**
   - Adjust `.home-industry-cards` so the two remaining cards sit side by side in one row on desktop (2-column grid instead of the current card count) while stacking on tablet/mobile.
   - Remove orphaned styles for the marquee strip (`.home-cap-*`), resources grid (`.home-resource-*`) and FAQ layout (`.home-faq-*`) if they become unused.

## Not changing

- Hero, About, What We Do, final CTA, Our Clients slider, footer — untouched.
- The full Resources (/resources/blogs, /downloads, /faqs) and FAQ pages remain reachable via the header/footer/sitemap; only the home-page sections are removed.
- All other pages and routes.
