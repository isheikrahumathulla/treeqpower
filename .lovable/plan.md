# Header search: icon + popup, and a dedicated results page

## 1. Desktop header
- Replace the full search field with a single small magnifier icon button (same subtle hover elevation as other header controls).
- Clicking it opens a compact popup search bar anchored under the icon: text input (auto-focused), a "Search" / Enter button, and a close (X). Esc or clicking outside closes it.
- Pressing Enter or clicking the button takes the user to the results page. No live suggestions dropdown.

## 2. Tablet / mobile (hamburger menu)
- Keep the same full search bar inside the menu as now, but remove the live suggestions. Enter (or a small arrow button) goes to the results page and closes the menu.

## 3. Search results page — `/search?q=...`
- Heading: "Search results for "query"" with the result count, plus a search field at the top to refine the query.
- Each result: title (link to the page), group label (Services, About Us, Blogs, FAQ · category, etc.) and a short text snippet with the matched words highlighted.
- Pagination: 10 results per page, Previous / numbered pages / Next, page number kept in the address (`&page=2`), scroll to top on page change.
- Empty query: prompt to type something. No matches: friendly message with links to Services, FAQs and Contact.
- Page title/description metadata set; marked noindex so search pages are not indexed.

## Technical details
- Reuse `src/lib/search-index.ts`; add an unlimited search (no 8-item cap) and a snippet helper.
- `src/components/site-search.tsx`: drop the suggestions panel; submitting navigates to `/search` with `q`. Add a `SearchIconPopup` variant for desktop.
- New route `src/routes/search.tsx` with validated search params (`q`, `page`) and its own head().
- `src/components/site-shell.tsx`: swap desktop field for the icon popup; mobile keeps the field.
- Styles added to `src/styles.css` using existing tokens; remove unused suggestion-panel styles.
