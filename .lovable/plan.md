# Our Clients page: rename, reorder, add missing clients, better cards

These changes apply only to the Our Clients page. The logo slider on other pages stays the same.

## New order (each client shown once)
1. Mina Petroleum, Oman (uses the current Mina Group logo)
2. Energy Engineering, UAE (new)
3. Advario (Formerly Oiltanking Oman) (current logo)
4. Penspen International Limited, UAE (current logo)
5. DNV GL – Oman & UAE (current logo)
6. REI OIL & GAS PROCESS SERVICES LLC (current logo)
7. Bureau Veritas Oman (new)
8. KTI (new)
9. Omaniyat (new)
10. Emaar (current logo; your list says "Emmar", so I'll use the official spelling "Emaar" unless you want otherwise)

The current clients that aren't on your list come after it, in this order: DAMAC, GE Vernova, Al Ghurair, Dubai Holding, Ejadah Asset Management Group, Emrill, Imdaad.

## Missing logos
- I'll search online for official logos for Energy Engineering, Bureau Veritas, KTI and Omaniyat. I'll only use a logo when I can clearly confirm it belongs to that company (from the company's own website or an official brand source).
- If I can't confirm a logo, the card will show a clean text placeholder with the company name in the site's style. I won't make up or generate any logos.

## Card look and hover animation
- Cards all the same height, with a soft border and the logo centred.
- On hover or keyboard focus: the card lifts slightly with a soft shadow, a thin green accent line slides in along the bottom, the logo grows a little, and the company name turns brand green.
- Cards fade in one after another when the page loads.
- Reduced-motion mode switches all animation off.

## Technical details
- Edit the `clients` array in `src/components/our-clients-page.tsx`. Entries without a logo render a text placeholder.
- New logos go in `src/assets/clients/`, with the source address of each one recorded.
- The card styles are in the `.our-client-card` rules in `src/styles.css`.
- Afterwards, check the page with a browser screenshot on desktop and mobile.
