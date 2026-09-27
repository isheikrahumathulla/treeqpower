# Fix the new logo overflowing the header

## Problem
The new logo is taller than the old one (it now includes the Arabic text line, ratio ~3:1 instead of ~4:1). The header is a fixed 72px bar and the logo is sized by width only (192px), so the logo now fills/overflows the header and looks cut off.

## Fix
1. Size the header logo by height instead of width: cap it at about 48–52px tall with automatic width, so it always fits inside the 72px header with breathing room, no matter the logo's proportions.
2. Slightly increase the header height if needed (to ~80px) so the logo reads clearly — will confirm visually and pick the cleanest combination.
3. Apply the same height-based sizing to the logo in the mobile slide-out menu, which uses the same image.
4. Footer logo stays as is (it already sits in its own white card and fits fine).

## Technical details
- Files: `src/components/site-shell.tsx` (logo `className` changes from `w-48` to a height-capped class) and possibly `src/styles.css` (`.zoho-header` height).
- No content, navigation, or other pages affected.

## Verification
- Screenshot the header on desktop and mobile widths to confirm the logo sits fully inside the bar with even spacing.
- Confirm the build stays clean.
