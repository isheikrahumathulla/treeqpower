# Make sure every Contact enquiry reaches Google Forms

## What I checked
- The website fields still match your Google Form exactly (Full Name, Phone, Email ID, Subject, Message, same field IDs), and the form posts to the correct Google address.
- So the connection to Google Forms is fine. Data stops **before** it is sent: the site runs the spam check first, and only sends to Google if the check passes. Your recent attempts got the "could not verify" or "spam check unavailable" message, so nothing went to Google.
- Google adds the date and time to each response itself (the "Timestamp" column), so once a submission gets through, the date will show too.

## Changes
1. **Don't lose real enquiries when the spam check itself breaks.** If Google's check is down or misconfigured (wrong key, address not allowed, Google unreachable), the enquiry still goes to Google Forms. It is only blocked when Google actively flags it as spam (low score) or the hidden spam-trap field is filled in.
2. **Clear status for you**: each case gets recorded in the server logs, so we can see whether the spam check passed or was skipped.
3. **End-to-end test**: send one labelled test enquiry through the real form, check that it lands in your Google Form responses, and check that the collaborator email workflow fires.

## What you need to do
- Publish the site after this change, then test from https://treeqpower.lovable.app/contact.
- Optional: add `lovable.app` and `lovableproject.com` to the reCAPTCHA domain list so the editor preview passes the spam check too.

## Technical details
- `src/components/contact-page.tsx`: when `verifyRecaptcha` returns `reason` of `invalid-key` or `unknown`, or `grecaptcha` fails to load or execute (catch branch), keep going to `form.submit()` and don't show an error. Still block on `low-score`, `wrong-action` and `invalid-token`.
- Treat `invalid-token` with the error code `browser-error` or a hostname mismatch (domain not allowed) as a configuration problem, not spam: `recaptcha.functions.ts` returns `reason: "config"` and the form submits.
- No change to the field mapping or to `FORM_ACTION`.
