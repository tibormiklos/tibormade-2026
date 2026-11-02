# tibormade-2026 — Context

Personal portfolio site (tibormade.com). Next.js 15 static export (`output: 'export'`, `trailingSlash: true`), deployed by copying `out/` to the IONOS webspace via Transmit.

## Shape (redesign-list branch, Nov 2026)
- One long list of projects on a yellow background, modelled on the MUDE Lisbon newsletter. Bio is the first item. Every item is a closed drawer.
- Each entry is a markdown file in `content/entries/` — frontmatter (`title`, `kind`, `date`, `images`, `links`) plus body text. Filename = URL slug. List order = `date` descending; `pinned: true` sits on top.
- An entry with no body, image or links renders as a plain row; adding any of them turns it into a drawer with its own URL (`/slug/`), generated at build time.
- Opening a drawer rewrites the URL and tab title in place; loading `/slug/` directly opens that drawer.
- Type: titles in system Helvetica Neue Medium (Arimo fallback), labels and body in Newsreader. Tokens in `app/globals.css` match Figma frame 452:583.
- Images: `images:` list in frontmatter (`src`, `alt`), stacked in the right-hand column.

## Files
- `lib/entries.ts` — reads and renders the markdown
- `components/EntryList.tsx`, `components/Drawer.tsx`
- `app/page.tsx` (list), `app/[slug]/page.tsx` (per-entry pages + metadata)
- `public/tibor.md` — markdown summary for AI agents, linked from `<head>` only

## Related
- Vault project hub: `vault/projects/tibormade-2026/_index.md`
- Figma: https://www.figma.com/design/J4SERehfVlI6YC17u9nl8T/Tibormade-2026?node-id=452-583
