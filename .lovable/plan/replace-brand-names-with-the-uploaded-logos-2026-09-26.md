# Replace Brand Names with the Uploaded Logos

## What will change

- Extract the 26 supplied logos from `Brands.zip` and map them one-to-one, in filename order, to the existing 26-brand list.
- Replace every text-only brand card with its corresponding logo while retaining the brand name as accessible alternative text.
- Keep the existing Brands page heading, description, order, card layout, contact message, and Contact Us button unchanged.

## Logo quality and presentation

- Use the 22 SVG files directly so they remain crisp at every screen size.
- Use the three supplied PNG files for Cutler-Hammer, Altivar, and Baldor, and the 2000px-wide JPEG for Baumüller.
- Do not artificially enlarge or redraw raster logos because that would not create genuine detail and could distort official marks. Instead, preserve their source quality, crop only unnecessary transparent/blank margins if present, and size them within the cards so they remain sharp at their displayed dimensions.
- Preserve each brand’s official colors and proportions; remove the current grayscale treatment so the supplied logos display correctly from the start.

## Asset handling

- Upload each logo through the project’s managed asset storage and keep only lightweight asset references in the project.
- Connect those references from the central brand list so the page remains data-driven and each card renders the correct logo.
- Do not introduce replacement logos, generated imagery, or unapproved brand names.

## Verification

- Confirm all 26 cards render logos with no text-only fallbacks, broken images, duplicates, or ordering changes.
- Check desktop, tablet, and mobile layouts for consistent logo sizing, adequate whitespace, and no cropping or stretching.
- Confirm every logo request succeeds and the page remains keyboard-accessible.
