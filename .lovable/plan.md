# TreeQ Power Homepage Plan

## Goal
Build one polished, responsive TreeQ Power homepage. The experience will borrow Superlógica’s clarity, pacing, layered storytelling, and interaction quality without copying its branding, content, imagery, statistics, or page structure.

## Homepage experience
- Create a sticky, compact header using the current public TreeQ Power logo.
- Reflect the approved TreeQ Power information architecture in a desktop mega-menu and accessible mobile menu, while avoiding links to pages not included in this first release.
- Lead with a strong TreeQ Power statement, concise approved capability summary, and clear enquiry action.
- Use image placeholders with specific photography guidance; no generated imagery will be used.
- Organize the page into a premium scroll narrative:
  1. Hero and core positioning
  2. Company overview
  3. Services grouped by Engineering, Field & Maintenance, Testing & Inspection, Sustainability, and Asset Integrity
  4. Solutions grouped by Power Systems, Automation & Control, Power Quality, and Building Technology
  5. Industries overview
  6. Engineering-to-maintenance delivery lifecycle
  7. Project portfolio placeholder area
  8. Selected homepage FAQs
  9. Contact details and designed enquiry form placeholder
  10. Full footer based on the approved IA
- Use restrained scroll reveals, section transitions, card interactions, and slide-based capability browsing, with reduced-motion support.

## Content handling
- Rewrite supplied TreeQ material for readability while preserving supported technical meaning.
- Clearly label newly written or unverified copy as draft for client/technical review.
- Exclude obvious legacy template material, copied third-party language, fake staff, generic testimonials, fake projects, unsupported statistics, and unsupported certifications or partnerships.
- Do not reuse Velosi names, software, claims, experience figures, or brochure language as TreeQ content.
- Treat brand/manufacturer names and approval claims as review-required unless independently approved by the client.
- Show projects only as explicit placeholders using the requested project fields.
- Use the supplied Dubai address, hours, phone number, and public email where appropriate, while flagging them for final client confirmation.

## Visual direction
- Establish an original industrial/electrical system derived from the current TreeQ Power logo, with strong typography, crisp technical grids, controlled contrast, and generous spacing.
- Avoid a generic software aesthetic and avoid copying Superlógica’s brand colors or proprietary artwork.
- Use semantic design tokens so future brand adjustments do not require rebuilding the page.
- Provide stable desktop and mobile layouts with accessible navigation, readable technical content, keyboard-friendly controls, and visible focus states.

## Form behavior
- Build the complete enquiry form interface and field validation states.
- Keep submission disabled with a clear pending-integration state until the matching Google Form URL and fields are supplied.
- Do not add a database or other backend in this phase.

## Technical implementation
- Replace the placeholder root page with the homepage at `/`.
- Create reusable header, mega-menu, content-section, capability-card, FAQ, form, and footer components.
- Use lightweight CSS and React interactions rather than heavy animation dependencies unless the existing project already provides a suitable option.
- Add homepage-specific title, description, Open Graph metadata, `og:type`, and Twitter card metadata.
- Keep non-home IA destinations out of active routing until their pages are approved for implementation.

## Verification
- Check desktop and mobile presentation, navigation, menus, accordion behavior, form states, text wrapping, animation fallbacks, and keyboard accessibility.
- Confirm the homepage contains no Superlógica content, fabricated TreeQ facts, fake projects, fake testimonials, unsupported credentials, or AI-generated imagery.
- Confirm the project compiles cleanly and the live homepage renders without console or runtime errors.

## Deferred
- All non-home pages in the approved IA.
- Google Forms submission integration.
- Final photography, project records, testimonials, certifications, client/partner approvals, downloadable brochure, and any claims awaiting client verification.
