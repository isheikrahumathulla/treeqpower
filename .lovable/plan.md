# Remove arrows from header dropdown links

## Problem
Every link in the desktop mega-menu (e.g. "Company Overview →", "Why TreeQ Power →") and the "View overview →" link shows an arrow on hover. The mobile menu rows also have arrows. The user wants these removed from the header.

## Change (single file: `src/components/site-shell.tsx`)
1. Mega-menu page links — remove the trailing `<ArrowRight />` icon from each dropdown item.
2. "View overview" link — remove its arrow.
3. Mobile Sheet menu rows (About Us, Services, Solutions, Industries, Projects, Resources) — remove their arrows.
4. Keep:
   - The small `ChevronDown` on top-level nav items (About Us ⌄, Services ⌄ …) — this signals a dropdown, not a page arrow.
   - The arrow on the green "Start an enquiry" button (it is a CTA button, not a page link). This stays unless you want it removed too — just say the word.

## Verification
- Build check, then a browser check: hover About Us, Services and Solutions to confirm the dropdown rows show no arrows, and confirm the mobile menu is clean. Desktop and mobile screenshots.
