<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Services structure (4 groups, pages, redirects) lives in src/lib/service-groups.ts and renders via src/components/service-group-page.tsx — single source for nav, pages and 301s from retired URLs.
- The approved client portfolio uses the 13 local assets in src/assets/clients; the dedicated Our Clients page presents them as cards while the shared shell slider appears on all other pages.
