# Fix "We could not verify this submission" on the Contact form

## What is happening
Before sending an enquiry to Google Forms, the site asks Google reCAPTCHA "is this visitor a real person?". On the last attempt in the preview, Google answered **"not verified"**, so the form stopped and showed the error. Nothing reached Google Forms.

The site currently does not record *why* Google said no, so the exact reason is not confirmed yet. The usual reasons are:

1. **Website address not allowed** — the new reCAPTCHA key ("treeqpower") only accepts the domains listed in its Google admin settings. If `treeqpower.lovable.app`, the preview address (`lovableproject.com` / `lovable.app`) or the final custom domain are missing, every submission fails.
2. **Wrong key type** — the site uses reCAPTCHA **v3** (invisible, score-based). If the key was registered as v2 ("I'm not a robot" checkbox), verification always fails.
3. **Site key and secret key do not belong together**, or the new secret is not yet picked up by the server.
4. **Low score** — Google rated the visitor below 0.5 (common on new keys, VPNs, or automated testing).

## Steps
1. **Find the real reason** — make the verification step record Google's answer (error codes, domain, score, action) in the server logs, without storing any visitor details. Then send one test submission and read the reason.
2. **Fix based on that reason**:
   - Domain issue: you add the missing domains in the reCAPTCHA admin page (I will list exactly which ones).
   - Key type issue: you create a v3 key, and I swap it in.
   - Key mismatch: re-enter the secret through the secure form.
   - Low score: lower the threshold slightly (e.g. 0.3) so real visitors are not blocked.
3. **Safety fallback** — if Google itself is unreachable or misconfigured, show a clearer message instead of blocking silently; real spam rejections still stay blocked.
4. **Confirm end to end** — submit a labelled test enquiry, confirm it passes verification and lands in Google Forms.

## What you may need to do
Open https://www.google.com/recaptcha/admin, select the "treeqpower" site and check:
- Type is **reCAPTCHA v3 (score based)**
- Domains include: `treeqpower.lovable.app`, `lovable.app`, `lovableproject.com`, and your final domain if you have one.

## Technical details
- `src/lib/recaptcha.functions.ts`: log `error-codes`, `hostname`, `score`, `action` from siteverify when `verified` is false; optionally return a non-sensitive `reason` to the client for a better message.
- Threshold `MIN_SCORE` adjustable only if the logs show score rejections.
- `src/components/contact-page.tsx`: map `reason` to friendlier message; no change to the Google Forms submit path.
