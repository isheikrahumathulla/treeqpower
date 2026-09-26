# TreeQ Power — Services restructure plan (from client corrections workbook)

Sources read: the corrections spreadsheet (1 sheet, rows 1–247, every row), the Asset Integrity 2-page brochure PDF (text + 4 embedded photos), and the zip (TQP Correction Word document with 12 embedded images, plus 8 standalone images). Current site reviewed: header data, Services/Solutions menus, catch-all page routing, services content, image library.

## 1. What changes, in one view

Today the header has two menus: **Services** (14 items) and **Solutions** (9 items). The client wants one **Services** menu with exactly 4 groups. The Solutions menu goes away; its topics now sit under Electrical & Automation.

```text
Services ▾
 ├ Engineering & Technical Services   → landing page (17 services under 3 headings)
 ├ Inspection & Project Services      → landing page (11 services as cards)
 ├ Asset Integrity                    → landing page → subgroup pages
 └ Electrical & Automation            → landing page → 5 sub-service pages
```

Final header: Home, About Us, Services, More, Contact (Industries is already footer-only; Solutions removed).

## 2. Hierarchy and page mapping

### Group 1 — Engineering & Technical Services (new landing page)
Shows 17 services under the client's 3 headings. A service is clickable only if the spreadsheet gives a source page. The rest are shown as plain labels until content arrives.

| Heading | Service (exact name) | Current page | Action |
|---|---|---|---|
| Core Services | Design & Engineering | engineering-design | Keep page, rename to match |
| | Manufacturing & Assembly | – | Plain label (content needed) |
| | Supply & Trading | – | Plain label |
| | Installation | – | Plain label |
| | Testing & Commissioning | technical-field-services-electrical | Rename, content kept |
| | Operation & Maintenance | electronic-repair-maintenance | Rename, content kept |
| | Site Services | – | Plain label |
| | Consultancy Services | consultancy-services | Keep |
| Specialized Technical Solutions | Power Quality & Harmonics Studies | – | Plain label |
| | Thermography | – | Plain label |
| | Asset Management | asset-integrity-management | Link (see Q3) |
| | Energy Management | – | Plain label |
| | Sustainable Design | green-energy-sustainable-design | Rename, content kept |
| Field & Testing Services | Testing Equipment Rental | testing-equipment-rental | Keep |
| | Generator & Load Bank Services | generator-load-bank-services | Keep |
| | Cable Fault Location | cable-fault-location | Keep |
| | Earthing & Lightning Protection | earthing-lightning-protection | Keep |

### Group 2 — Inspection & Project Services (new landing page, no sub-pages)
11 cards, each with the client's short description, word for word, and its own photo: Independent Inspection Services, Expediting, Vendor Assessment, Provision of Project Resources, Management System Audit, Project QA-QC Management, Pre-Shipment Inspection, Design Review, Utility Equipment Inspection, Flange Management Inspection, Plant Asset Verification. The intro paragraph comes from the Word document ("independent, impartial and integrated…").
- Current "Third-Party Inspection" page: folded into this page and redirected here.

### Group 3 — Asset Integrity (landing page plus subgroup pages)
The client asked for "main group and sub group level only". Items appear as content inside each page, never as pages of their own.
- Landing: Asset Integrity, with the brochure strapline and cards for each group.
- Group pages: **RBI – Risk Based Inspection**, **CRAS – Corrosion Risk Assessment**, **NII – Non-Intrusive Inspection**, **FFS – Fitness-for-Service**, plus **Asset Integrity Management (Overall)**.
- Each page's subgroups (for example RBI – API RP 580 / 581, Risk Levels, RBI Deliverables) become headed sections, with the items listed as bullets, word for word from the spreadsheet.
- The current pages Risk-Based Inspection, Asset Integrity Assessment and Inspection Planning are replaced. The first redirects to RBI; the other two redirect to the landing page. The current Asset Integrity Management content is replaced with the spreadsheet content.

### Group 4 — Electrical & Automation (landing page plus 5 pages)
- Landing: the client's two description paragraphs word for word, then 5 cards (image, name, bullet sub-items).
- 5 pages: Electromechanical Solutions, Automation & Control, Power System Studies & Software Expertise, Engineering Services, Testing & Maintenance. Each shows its exact sub-items (1.1–5.4).
- All 9 current Solutions pages and the Solutions overview redirect to the closest Group 4 page:
  - HV/LV switchgear, Battery & UPS → Electromechanical Solutions
  - Industrial Automation, Instrumentation, HVAC → Automation & Control
  - Lighting, Building Technologies, Renewable Energy → Electrical & Automation landing page

### Other current Services pages
- Electrical Site Services, Electronics Repair & Maintenance and Green Energy are covered by the renames in Group 1.
- The current "Our Services" overview page becomes the Services hub, with the 4 group cards. The existing lifecycle strip and carousel stay, updated to the 4 groups.

## 3. Proposed web addresses

```text
/our-services                                   Services hub (kept)
/our-services/engineering-technical-services    Group 1
/our-services/<existing slugs>                  Group 1 detail pages (web addresses kept)
/our-services/inspection-project-services       Group 2
/our-services/asset-integrity                   Group 3 (kept)
/our-services/asset-integrity/rbi-risk-based-inspection
/our-services/asset-integrity/cras-corrosion-risk-assessment
/our-services/asset-integrity/nii-non-intrusive-inspection
/our-services/asset-integrity/ffs-fitness-for-service
/our-services/asset-integrity/asset-integrity-management (kept)
/our-services/electrical-automation             Group 4
/our-services/electrical-automation/<5 slugs>
```

Old addresses get permanent redirects: third-party-inspection, risk-based-inspection, asset-integrity-assessment, inspection-planning, and /solutions with all its sub-pages. Group 1 detail pages keep their current web addresses so existing links keep working; only their displayed names change. Breadcrumbs follow Home › Services › Group › Page. Footer links, the Home "What we do" links, FAQ internal links and the page list used for sharing previews are all updated to match.

## 4. Where the content comes from

| Page | Source |
|---|---|
| Group 1 landing, headings and names | Spreadsheet rows 26–50 |
| Group 1 detail pages | Current website content (per the spreadsheet's reference links) |
| Group 2 intro | Word document; cards from spreadsheet rows 59–70 |
| Group 3 pages | Spreadsheet rows 80–206, checked against the brochure PDF (the text matches) |
| Group 4 pages | Spreadsheet rows 213–247, identical to the Word document |
| Missing content | Shown as plain labels or "[CONTENT TO BE PROVIDED]". No text will be invented. |

## 5. Images

| Image | Where it goes |
|---|---|
| Brochure PDF, 4 photos | Used unchanged on the Asset Integrity pages (client: "exactly 100% as in the PDF"). Suggested: page 1 photos on AIM/RBI/CRAS, page 2 photos on NII/FFS. |
| High Volt Transform.png | Electromechanical Solutions |
| Panel Installation.png | Automation & Control |
| PQ.png | Power System Studies & Software Expertise |
| Thermography.png | Engineering Services |
| Cable Laying.png, Pump & Motors.jpeg | Testing & Maintenance (Pump & Motors is only 600px wide; it will be shown small) |
| Platform.png | Inspection & Project Services banner (to confirm) |
| Contact us.jpeg | Contact page (to confirm) |
| Word document's 12 images | Kept for reference only, unless you confirm otherwise |
| Group 2's 11 cards | New free-license photos from the Pexels/Unsplash links and keywords in the spreadsheet, none repeated anywhere on the site, credits recorded as before |
| Logos and client logos | Unchanged |

All supplied images will be placed as they are, with no AI changes.

## 6. Open questions and dependencies (implementation will pause on these)

1. **Provision of resources name:** the spreadsheet says "Provision of Project Resources"; the Word document says "Provision of Projects & Shut Down Resources". The plan uses the spreadsheet's name.
2. **Group 2 count:** the Word document lists 9 services; the spreadsheet adds Design Review and Utility Equipment Inspection ("9+2"). The plan shows all 11.
3. **Asset Management link:** the spreadsheet links "Asset Management" (Group 1) to the same Asset Integrity Management page used in Group 3. Is one shared page OK?
4. **Asset Integrity pages:** the spreadsheet says 4 subgroups, but its sitemap lists 4 plus "Asset Integrity Management (Overall)". The plan gives each of the 5 its own page.
5. **Group 4 pages:** "each are separate pages" and "show image and names under each" point in different directions. The plan builds a landing page plus 5 pages; the 5 pages will be short, because no extra text was supplied.
6. **Word document's About Us text:** it mentions "20+ years" and "internationally qualified and certified professionals". Should it update the About/Company Overview page? It is out of scope unless you confirm.
7. **Plain labels:** content is still needed for Manufacturing & Assembly, Supply & Trading, Installation, Site Services, Power Quality & Harmonics Studies, Thermography and Energy Management.

## 7. Implementation phases

1. Data: the new Services structure (4 groups, exact names) and the redirect list.
2. Navigation: the header Services menu with 4 groups, removing Solutions from the desktop and mobile menus, and updating the footer.
3. Landing pages for the 4 groups, reusing the existing page designs (same fonts, colors and scroll animations).
4. Asset Integrity and Electrical & Automation pages, with the text copied exactly.
5. Images: add the supplied images and source the Group 2 photos, checking none repeat.
6. Redirects, breadcrumbs, page titles and descriptions, sharing previews, and FAQ/internal link fixes.
7. Checks on phone and tablet, plus a final check that every new page loads, every old address redirects, no image repeats, no broken image paths, and the production build succeeds.
