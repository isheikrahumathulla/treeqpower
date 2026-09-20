# Fix missing images on the Vercel deployment

## What is actually wrong

The site uses two kinds of images:

1. **Photo library** (`src/assets/library/*.webp`, 38 files) — real files inside the project. These are bundled by the build and work everywhere, including Vercel.
2. **16 images stored on Lovable's own image hosting** — the hero photo, five section photos, eight Home photos and three logo files. In the project these are stored only as small pointer files (`.asset.json`) whose address starts with `/__l5e/assets-v1/...`.

That second address is served only by Lovable's hosting. On `treeqpower.vercel.app` those requests return 404, so exactly those images (hero, section photos, Home photos, header logo, footer white logo, preloader logo) appear broken while the rest still show.

No path typo, casing mismatch, `/public/...` mistake or expired external URL is involved. There is no Next.js in this project, so no `next/image` configuration applies.

## The fix

Bring those 16 images into the project as real image files, so the build bundles them the same way the photo library is already bundled.

1. Download each of the 16 images from its current hosted address into the project's assets folder, keeping the same filenames (`hero.jpg`, `engineering.jpg`, `field.jpg`, `solar.jpg`, `industrial.jpg`, `powerlines.jpg`, the eight Home `.webp` photos, and the three logo PNGs).
2. Change the four files that reference them (`src/lib/site-data.ts`, `src/lib/home-images.ts`, `src/components/site-shell.tsx`, `src/components/preloader.tsx`) to import the image files directly instead of the pointer files — one-line import changes plus dropping the now-unneeded `.url` suffix.
3. Delete the 16 pointer files once nothing references them.

Same photos, same order, same placement. No section, layout, animation, styling or image selection changes. If any single file cannot be downloaded, that one gets replaced with the closest existing approved photo from the project library and I will name it explicitly.

## Verification

- Run a production build and confirm every one of the 16 images appears in the build output.
- Load the built production site locally and check the browser network log: zero 404s for images, and every `<img>` reports a real loaded size (no broken images) on Home, About Us, Services, Solutions, Industries, Resources/FAQs and Contact.
- Confirm the header, footer and preloader logos render.

## Technical notes

- Referencing bundled images via `import x from "@/assets/..."` yields hashed, cache-safe URLs under `/assets/` that any static host serves, including Vercel.
- Added weight is roughly 1-2 MB of images inside the repo, consistent with the existing library folder (3.6 MB).
- After this change the site is host-independent: it keeps working on Lovable preview, the Lovable published URL and Vercel.
