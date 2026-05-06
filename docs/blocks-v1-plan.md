# Hexagon UI — block catalog & packaging

**Live product:** [Hexagon UI on Gumroad](https://hexagonui.gumroad.com/l/hexagon-ui-kit)

## v1 scope

- **25** curated marketing sections + `tokens/hexagon-ui-variables.css` + `index.ts` barrel.
- Grouping for buyers is **scroll sections on `/blocks`** (see `src/content/blocks-catalog.ts` — `BLOCK_SECTIONS`), not separate marketing routes per group.
- **Marketing site** uses dedicated pages: `/`, `/blocks`, `/kit`, `/pricing`, `/faq` so nav never depends on fragile one-page anchors.

## Preview themes (marketing site only)

On `/blocks`, dashed frames wrap a **`preview-canvas`** with `data-hexagon-preview-theme="mono|balanced|vivid"` — see `src/app/globals.css`. This is **not** shipped inside the ZIP; buyers theme with their own CSS variables.

## Tech

- React 19-friendly; `"use client"` only where needed (hero, stats, testimonial grid, nav marketing).
- Tailwind v4 semantic colors; Lucide icons.

## Ship checklist

1. `npm run kit:sync`
2. `npm run kit:zip` → upload `dist/hexagon-ui-kit.zip` to Gumroad.
