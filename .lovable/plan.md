# Contact Page — Key Personals, Two Office Maps & Full Contact Details

## Scope
Update only the Contact page (`src/components/contact-page.tsx`) plus its SEO description in `src/routes/$.tsx`. No navigation, layout or other pages change.

## 1. Key Personals table
New "Key Personals" section on the Contact page (kicker-style heading, simple table matching the site's card styling), exactly:

| Sl. No | Name | Designation |
|---|---|---|
| 1 | Raj N | Chief Executive Officer |
| 2 | Naga Mukil | Operation Manager |

No phone numbers or emails attached to individuals (not requested, nothing fabricated).

## 2. Two office map cards (reference: attached screenshot)
Replace the current single "Al Qusais 3, Dubai" map section with a two-card grid (side by side on desktop, stacked on mobile). Each card:
- Embedded Google Map on top (existing `q=...&output=embed` pattern — short links can't be embedded directly)
- Office name + full address below the map
- Full-width "Get Directions" button opening the client's Google Maps link in a new tab
- "Open in Maps" link on the map card, as in the reference

**HQ — Dubai**
- Address: P.O. Box: 239085, Dubai – United Arab Emirates
- Directions: https://maps.app.goo.gl/QBgGjJAYa3BB82mv9
- Embed query: TreeQ Power Electromechanical Works LLC, Al Qusais 3, Dubai, UAE

**Branch — India**
- Address: TreeQ Power Engineering Private Limited, 13/46-I Perumal Nagar, Lake Road, Panamarathupatti, Salem, Tamil Nadu, India – 636204
- Directions: https://maps.app.goo.gl/KWZLCmLW7x7emoZF9
- Embed query: the full branch address

## 3. Full contact details in the sidebar
Update the sidebar cards:
- "Call us" card → both numbers with white phone/mobile icons:
  - Tel: +971 2 6224499 (telephone icon)
  - Mobile: +971 55 948 9080 (mobile icon)
- New/updated email row: info@treeqpower.com and raj@treeqpower.com (mailto links)
- Location card updated to reflect both offices (Dubai HQ + Salem, Tamil Nadu branch)

Hero phone button stays as-is (+971 55 948 9080 mobile).

## 4. SEO
Update the /contact meta description in `src/routes/$.tsx` to mention both offices (Dubai HQ and Salem, Tamil Nadu branch) and both phone numbers.

## Verification
- Playwright: both map embeds load, Get Directions links point to the two short URLs, Key Personals table renders, both numbers/emails present and tappable, desktop + mobile screenshots, no console errors.
- Production build clean.
