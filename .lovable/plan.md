# Synchronize Our Clients cards and logo slider

## Changes

1. **Update the approved client list**
   - Remove **Energy Engineering, UAE** and **KTI** completely, including their text placeholders.
   - Rename **Omaniyat** to **Omniyat** and use the first uploaded image as its logo.
   - Use the second uploaded logo for **Bureau Veritas Oman**.
   - Keep the remaining clients in their current approved order, with each client shown once.

2. **Keep the page and slider synchronized**
   - Move the client names and logo references into one shared list used by both the **Our Clients** page and the site-wide logo slider.
   - The resulting shared list will contain 15 clients, so additions, removals, names, order, and accessible image labels remain identical in both locations.
   - Keep the slider hidden on the dedicated **Our Clients** page and unchanged on all other pages.

3. **Refine the Our Clients cards**
   - Show three equal-width cards per row on desktop.
   - Reduce to two columns on tablet and one column on narrow phones so logos remain readable.
   - Replace the decorative animated treatment with normal solid-background cards, a clear border, and a restrained soft shadow.
   - Remove the staggered entrance animation, sliding green underline, logo zoom, and pronounced hover lift. Keep only a subtle shadow/background response for hover and keyboard focus.
   - Preserve every logo’s proportions without cropping or distortion.

4. **Add the uploaded assets**
   - Store the Omniyat JPEG and Bureau Veritas Oman SVG through the project’s asset system.
   - Use descriptive alternative text for both logos.

## Verification

- Confirm the Our Clients page contains exactly 15 clients, in the approved order, with no Energy Engineering or KTI entries.
- Confirm Omniyat and Bureau Veritas Oman show their uploaded logos rather than placeholders.
- Confirm the global slider contains the same 15 logos in the same order.
- Check the three-column desktop layout and readable tablet/mobile layouts.
- Confirm hover/focus styling is restrained, both uploaded assets load, slider pause/drag behavior remains intact, and the site has no errors.

## Technical details

- Introduce one client-data module imported by both the card page and slider instead of the slider’s current automatic PNG-folder scan.
- Asset pointers will allow the uploaded JPEG and SVG to work alongside the existing local client images.
- Reduced-motion behavior will remain supported.
