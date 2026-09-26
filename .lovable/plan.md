# Remove hero paragraph from Company Overview

## What
Remove the selected paragraph in the hero section of the Company Overview page (`/about-us/company-overview`):

> "Tree Q Power Electromechanical LLC is a UAE-based engineering, electromechanical and independent inspection services company, registered in Dubai, United Arab Emirates under Commercial Registration No. 829050."

## Where
`src/components/company-overview-page.tsx` — the second `<p>` inside the hero copy block (line 36). Only this instance is removed; the same sentence elsewhere on the page (the About section intro) and on other pages stays untouched.

## Notes
- The hero already has a kicker, h1 and buttons, so removing the paragraph leaves the layout intact — no other styling change needed.

## Verification
- Check the hero in the preview renders with kicker, heading and buttons only.
- Build check clean, no console errors.
