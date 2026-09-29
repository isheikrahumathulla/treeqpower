# Add second contact number (+971 58 565 4226) and set number order

## Goal
Everywhere phone numbers appear, show two mobile numbers in this order:
1. **+971 58 565 4226** (new, first)
2. **+971 55 948 9080** (existing, second)

Per your choices: the "Call us" card loses the landline "Tel: +971 2 6224499" line; both numbers appear in the contact hero; and the second mobile is added site-wide.

## Changes

### Contact page — src/components/contact-page.tsx
- **Hero row (line ~188):** show two phone buttons — `+971 58 565 4226` then `+971 55 948 9080` — followed by the Get Directions button.
- **Call us card (lines ~400–406):** remove the `Tel: +971 2 6224499` line; the card lists only `Mobile: +971 58 565 4226` then `Mobile: +971 55 948 9080` (tel: links `tel:+971585654226` / `tel:+971559489080`).
- **Error / success messages (lines 128, 152, 168, 224):** quote both numbers in order ("call +971 58 565 4226 or +971 55 948 9080").

### Site-wide additions of the second mobile
- **Footer — src/components/site-shell.tsx:** add `+971 58 565 4226` line above the existing `+971 55 948 9080` line in the Contact column (landline kept, per footer staying as-is otherwise).
- **Homepage final CTA — src/components/home-page.tsx (line 22):** address line shows both mobiles in order.
- **Blog article — src/lib/blog-content.ts (line 158):** both numbers in the contact sentence.
- **Fallback contact data — src/lib/site-data.ts (line 61):** contact details list both numbers.
- **SEO meta description — src/routes/$.tsx (line 70):** "Call +971 58 565 4226 or +971 55 948 9080…".

### Not changed
- WhatsApp number in src/components/social-links.tsx (separate channel, stays +971 55 948 9080).
- The landline stays in the footer and SEO meta; it is only removed from the "Call us" card as you chose.

## Verification
- Typecheck and build pass; Playwright check of /contact showing both numbers in hero and Call us card in the right order, plus footer.
