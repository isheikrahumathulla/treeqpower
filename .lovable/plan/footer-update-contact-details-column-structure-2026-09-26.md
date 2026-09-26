# Footer Update — Contact Details & Column Structure

## Summary
Update the global footer in `src/components/site-shell.tsx` (plus its styles in `src/styles.css` if needed) to add the new contact details and restructure the columns exactly as requested.

## Current state
- 5 columns: Logo | Company | Resources | Capabilities | Contact (plain text: `+971 55 948 9080`, `raj@treeqpower.com`, `Dubai, UAE`).

## New footer structure

```text
Column 1            Column 2              Column 3                 Column 4 (Contact)
Logo + tagline      Services              Resources                [white phone icon] Tel: +971 2 6224499
Home                Engineering &         Blogs                    [white mobile icon] +971 55 948 9080
About Us            Technical Services    Downloads                info@treeqpower.com
                    Inspection &          FAQs                     raj@treeqpower.com
                    Project Services                               [map pin icon] Dubai, UAE
                    Asset Integrity                                [map pin icon] Tamilnadu, India
                    Electrical & Automation
```

## Changes

1. **Contact column (last)**
   - Two phone lines, each with a white lucide icon:
     - `Phone` icon → "Tel: +971 2 6224499" — clickable `tel:+9726224499` link.
     - `Smartphone` icon → "+971 55 948 9080" (mobile, kept as is) — clickable `tel:+971559489080`.
   - Two emails with a white `Mail` icon: `info@treeqpower.com` (`mailto:` link, new) and `raj@treeqpower.com` (kept).
   - Two locations with a white `MapPin` icon: "Dubai, UAE" and "Tamilnadu, India".
   - Icons rendered in white so they stay visible on the dark footer background.

2. **Column 1** — keep the logo and tagline; add links "Home" and "About Us" below them.

3. **Column 2** — heading "Services" with exactly the 4 service groups:
   - Engineering & Technical Services → /our-services/engineering-technical-services
   - Inspection & Project Services → /our-services/inspection-project-services
   - Asset Integrity → /our-services/asset-integrity
   - Electrical & Automation → /our-services/electrical-automation

4. **Column 3** — Resources stays as is (Blogs, Downloads, FAQs).

5. **Remove the "Capabilities" column** entirely (including its Industries link — Industries remains reachable from the header navigation).

6. **Layout** — the grid becomes 4 columns; adjust the `.zoho-footer-grid` CSS so the columns stay balanced on desktop and stack cleanly on mobile/tablet. The "Home" / "About Us" links in column 1 get the same styling as the other footer links.

## Verification
- Playwright on the preview: confirm both phone icons/numbers, both emails, both locations, 4-column structure, no Capabilities heading; test a phone and email link; check mobile stacking.
- Confirm no console errors and a clean production build.
