# Hexagon UI

Marketing site and ship-ready **Hexagon UI** kit—a code-first landing block pack for React teams. **Gumroad:** https://hexagonui.gumroad.com/l/hexagon-ui-kit

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Set `NEXT_PUBLIC_GUMROAD_PRODUCT_URL` in `.env.local` so the pricing button opens your Gumroad product.

### How to iterate

Use **`npm run dev`** for almost everything: Next.js **Fast Refresh** updates the browser when you save files, so this is the default workflow for layout, copy, components, and styles.

Also run **`npm run build`** before you ship or when something works in dev but might fail in production (stricter types, server/client boundaries). **`npm run start`** checks the production server locally after a build.

### Dev server looks stuck?

1. **Use the URL printed in the terminal.** If port `3000` is already taken (another app or an old Next process), Next silently picks **`3001`** (or higher). Opening `http://localhost:3000` then looks broken while the real server is on **`http://localhost:3001`**.
2. **Free port 3000** (macOS / Linux):  
   `lsof -nP -iTCP:3000 | grep LISTEN` → note the PID → `kill -9 <pid>`  
   Or quit whatever else is bound to that port, then run `npm run dev` again.
3. **Try Webpack instead of Turbopack** (if compile never finishes or Node is very new):  
   `npm run dev:webpack`
4. **Node version:** this repo expects **Node 20+**. If you’re on a bleeding-edge major (e.g. odd-number “current” releases), switch to **Node 22 LTS** with [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) and reinstall deps if dev still misbehaves.

## Scripts

- `npm run dev` — Next.js dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint
- `npm run kit:sync` — copy `src/components/blocks/` → `kit/blocks/` + refresh `kit/HANDOFF.md`
- `npm run kit:zip` — sync then create **`dist/hexagon-ui-kit.zip`** for Gumroad upload

## Docs

- [docs/research-from-rowen-chess-chat.md](docs/research-from-rowen-chess-chat.md) — strategy notes
- [docs/HANDOFF.md](docs/HANDOFF.md) — buyer-facing handoff copy (mirrors `/handoff`)
- [docs/blocks-v1-plan.md](docs/blocks-v1-plan.md) — v1 block catalog & packaging checklist
- **Gumroad artwork:** PNGs in [public/gumroad/](public/gumroad/). Replace `gumroad-master-source.png` if needed, then run **`npm run gumroad:images`** to regenerate exact **1280×720** and **600×600** exports ([scripts/export-gumroad-sizes.mjs](scripts/export-gumroad-sizes.mjs)).

## Purchasing flow & hosting

**Buyers do not need GitHub.** After checkout, Gumroad delivers the **ZIP** (source + README + license). Your marketing site only needs clear CTAs that open your Gumroad product URL (`NEXT_PUBLIC_GUMROAD_PRODUCT_URL`).

**Your workflow**

| Piece | Required? | Notes |
|--------|-----------|--------|
| **Git repo** | Strongly recommended for you | Private GitHub (or similar) for version control—not what purchasers clone unless you sell repo access separately. |
| **Railway** | Optional | Any host that runs Node works: **Vercel** and **Netlify** are common for Next.js; Railway is fine if you already use it. This app is a standard `next build` / `next start` or platform-managed build. |
| **Gumroad product** | Yes | Create the product, attach the ZIP as the digital good, set price and license text. |
| **Domain** | **hexagonui.com** | Point DNS at your host (see Railway below). |

**Inspect the buyer ZIP locally:** run `npm run kit:zip`, then double-click `dist/hexagon-ui-kit.zip` or run `unzip -l dist/hexagon-ui-kit.zip`. Same files ship as `src/components/blocks/` after `npm run kit:sync`.

**What I need from you when wiring checkout**

1. **Gumroad product link** — paste into `.env.local` as `NEXT_PUBLIC_GUMROAD_PRODUCT_URL` so nav command palette, pricing button, and “Open Gumroad checkout” stay in sync.  
2. **Hosting account** (only when deploying)—connect the repo or upload build per your provider’s Next.js guide.

Until Gumroad exists, the site still runs locally and builds without that env var; palette entries that depend on it simply omit the external checkout row.

### Deploy on Railway (Next.js)

1. **Create a service** from this GitHub repo (or connect the repo you push).
2. **Build command:** `npm run build` · **Start command:** `npm run start` · **Node:** 20+.
3. **Environment variables** (service settings):
   - `NEXT_PUBLIC_SITE_URL` = `https://hexagonui.com` (no trailing slash)
   - `NEXT_PUBLIC_GUMROAD_PRODUCT_URL` = your Gumroad product URL
4. **Domain:** In Railway → **Settings → Networking → Custom domain**, add `hexagonui.com` (and `www` if you want). Point DNS at the targets Railway shows (often **CNAME** for `www`, **A/ALIAS** for apex—follow their wizard).
5. **Smoke test:** open `/`, `/blocks`, a category such as `/blocks/pricing`, `/sitemap.xml`, `/robots.txt`, `/privacy`, `/terms` on the live host.

---

Bootstrapped with [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
