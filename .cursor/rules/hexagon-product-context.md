---
description: Product intent for Hexagon UI (premium niche UI pack business)
alwaysApply: true
---

# Hexagon UI — product context

This repo supports a **commercial niche UI pack**: React + Tailwind + Framer Motion **marketing sections**, sold as a **single SKU** (ZIP + README + license)—not an enterprise governance program.

## Priorities

1. **Low ongoing operational load** after launch (SEO + product quality over constant social).
2. **Employer-safe**: confirm moonlighting / IP / outside-business policy before public fintech positioning; pivot niche copy if needed.
3. **Scope discipline**: one polished default + **shadcn-compatible CSS variables** for theming; **Lucide** icons; no paid stock asset dependency.

## Architecture expectations

- **Blocks source:** `src/components/blocks/` — ship to buyers via **`npm run kit:sync`** then **`npm run kit:zip`** → `dist/hexagon-ui-kit.zip`. Gumroad product: https://hexagonui.gumroad.com/l/hexagon-ui-kit
- **Single** Next.js site: marketing pages (`/`, `/kit`, `/pricing`, `/faq`), **`/blocks`** one-page library with preview themes, purchase CTA. (`/preview` → `/blocks`.)
- **Checkout**: **Gumroad** (product link); deliverable is **ZIP** handed to the buyer’s dev.
- **Hosting**: Railway, Vercel, or similar—deploy from this repo.

## Positioning

- **v1**: Code-first **~25 curated marketing sections** + tokens in one ZIP (nav, forms, pricing, editorial, etc.), still one SKU—not a thousand-variant marketplace.
- **Later**: optional `.fig` blocks upsell; second niche pack only after first SKU validates.

## Do not assume

- Full Figma libraries or DS consulting unless explicitly scoped.
- Head-to-head replacement of shadcn; align token/CSS variable patterns instead.
