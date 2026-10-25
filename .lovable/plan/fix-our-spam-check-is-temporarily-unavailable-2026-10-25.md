# Fix "Our spam check is temporarily unavailable"

## What this message means
It only shows when the server cannot use the reCAPTCHA **secret key** — either it is missing where the form is running, or Google says it does not match the site key. My earlier test with the stored secret passed (score 0.9), so the secret is valid, but the place you are testing from is probably still using an old or missing copy. The server left no log entry, so this is not confirmed yet.

## Steps
1. **Re-save the secret** through the secure form (same secret key Google gave you for "treeqpower"), so every environment, including preview and live, gets the same value.
2. **Record the exact reason** — the server will log the case it hit (secret missing / secret rejected / Google unreachable) and Google's error codes. No visitor details get stored.
3. **Test the real form** with a labelled test enquiry, on the live site after publishing and in the preview if its address is allowed, then confirm it passes and lands in Google Forms.
4. If Google still rejects the secret, you create a fresh v3 key pair in the reCAPTCHA admin and I swap in both keys together.

## Technical details
- `src/lib/recaptcha.functions.ts`: log on the missing-secret path and the `invalid-input-secret` path, plus the response status and body when the call fails.
- Re-enter `RECAPTCHA_SECRET_KEY` through the secure secrets form.
