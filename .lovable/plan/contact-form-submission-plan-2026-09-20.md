# Contact Form Submission Plan

## Confirmed current setup

The supplied short link resolves to the same Google Form already configured on the Contact page:

`https://docs.google.com/forms/d/e/1FAIpQLSd0HaQiOFFyIdq2_LebYqpD_UYcGM2Bz_y0eUchuOjAs2Y3Ng/formResponse`

The verified field mapping is unchanged:

- Full Name → `entry.1169143568`
- Phone → `entry.68004886`
- Email ID → `entry.293598536`
- Subject → `entry.492696793`
- Message → `entry.133590711`

The website already sends submissions directly to this Google Form through a hidden response frame. It does not store enquiry data on the website.

## Implementation

1. Keep the verified Google Form action and field mappings unchanged.
2. Improve submission feedback so the button shows a submitting state and prevents duplicate clicks.
3. Show the success message only after the Google Form response frame finishes loading after submission, rather than immediately when the button is clicked.
4. Preserve browser-required validation for all five fields.
5. Keep “Send another enquiry” resetting the form and submission state.
6. Verify the request payload and destination without adding any database or email connector.

## Scope

Only the Contact page form behavior will change. Its layout, content, header, footer, map, and all other pages will remain unchanged.
