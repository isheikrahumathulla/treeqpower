# Footer: replace first-column links with a "Company" column

## Requested correction
The previous footer change added Home and About Us under the logo. The client instead wants a dedicated "Company" column placed between the logo column and the Services column.

## Target footer layout (desktop, 5 columns)

```text
| Col 1 (logo) | Col 2 "Company"  | Col 3 "Services"     | Col 4 "Resources" | Col 5 "Contact"      |
|--------------|------------------|----------------------|-------------------|----------------------|
| Logo         | Home             | Engineering &        | Blogs             | Tel: +971 2 6224499  |
| Description  | Company Overview | Inspection & Project | Downloads         | +971 55 948 9080     |
|              | Our Clients      | Asset Integrity      | FAQs              | info@treeqpower.com  |
|              | Contact          | Electrical &         |                   | raj@treeqpower.com   |
|              |                  | Automation           |                   | Dubai, UAE           |
|              |                  |                      |                   | Tamilnadu, India     |
```

## Changes — src/components/site-shell.tsx (footer only)

1. **First column (logo):** remove the existing `<ul>` containing the Home and About Us links. The logo and the short description line stay.
2. **New second column "Company"** inserted immediately after the logo column, before Services:
   - Home → `/`
   - Company Overview → `/about-us/company-overview`
   - Our Clients → `/about-us/our-clients`
   - Contact → `/contact`
3. **Services column:** unchanged (the 4 service groups).
4. **Resources column:** unchanged (Blogs, Downloads, FAQs).
5. **Contact column:** unchanged — both phone numbers with white telephone/mobile icons, both emails, Dubai UAE and Tamilnadu India locations, all as links.

## Styling — src/styles.css

- The footer grid becomes a 5-column layout on desktop (adjust the existing `.zoho-footer-grid` template and its tablet/mobile breakpoints so the new column wraps cleanly, matching current column behaviour).

## Verification

- Playwright check on desktop and mobile: Company column shows the four links, first column has no Home/About Us links, all links navigate, icons and contact rows intact, no console errors.
- Typecheck and production build clean.
