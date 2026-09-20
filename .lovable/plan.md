# Home “Our Services” Auto-Scrolling Carousel

## Scope
Update only the Home page “Our Services” section. Keep its existing heading, subtitle, card content, card visuals, links, and the separate “Our Solutions” section unchanged.

## Implementation
- Wrap the existing service cards in a dedicated carousel viewport and track.
- Render a second, accessibility-hidden copy of the same cards to create a continuous loop with no visible reset.
- Add slow, linear horizontal motion at a normal reading pace.
- Pause the motion while the carousel is hovered, focused, pressed, or touched.
- Preserve native horizontal scrolling, touch swiping, trackpad use, and scroll snapping.
- Resume from the current position after interaction rather than jumping back.
- Disable automatic motion when reduced motion is enabled, while retaining manual scrolling.
- Keep responsive card widths for desktop, tablet, and mobile.

## Validation
- Confirm the section scrolls continuously without a visible seam.
- Confirm hover and touch pause behavior and manual swipe/drag.
- Confirm card links remain usable and no other Home page section changes.
- Check desktop/mobile overflow, console errors, and the latest build result.
