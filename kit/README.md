# Hexagon UI — buyer README

**Product:** [Hexagon UI on Gumroad](https://hexagonui.gumroad.com/l/hexagon-ui-kit)

## Requirements

- **React** 18+ or 19+
- **Tailwind CSS** v4 with semantic colors mapped to CSS variables (see `blocks/tokens/hexagon-ui-variables.css`)
- **next/link** (replace with `<a>` if you use Vite + React Router)
- **lucide-react**
- **framer-motion** (blocks that include `"use client"` — hero, stats strip, testimonial grid, nav marketing)

## Install deps (example)

```bash
npm install lucide-react framer-motion
```

## Wire tokens

1. Copy `blocks/tokens/hexagon-ui-variables.css` into your project (e.g. import from `globals.css` after Tailwind).
2. Ensure Tailwind maps utilities like `bg-background`, `text-primary`, etc. to `var(--background)`, `var(--primary)`, … (Mirror the `@theme inline` section from the Hexagon UI reference repo if needed.)

## Optional: Animate UI (component-level motion)

Hexagon ships **marketing sections** with tasteful **Framer Motion** where files are marked `"use client"`.

For smaller animated primitives (accordions, tabs, buttons, backgrounds), add **[Animate UI](https://animate-ui.com/docs/components)** alongside this kit — it follows the **shadcn registry** model (copy/install per component), not a single global npm library. See [Animate UI installation](https://animate-ui.com/docs/installation). Stack mental model: **Tailwind + React + Hexagon sections (+ optional Animate UI primitives)**.

## Use blocks

Import from `./blocks` (see `blocks/index.ts` for the full export list). Example:

```tsx
import {
  NavMarketing,
  AnnouncementBar,
  HeroMarketing,
  ContactSection,
  AuthLoginMarketing,
  TestimonialSpotlight,
  ChangelogSection,
  PricingSingle,
  FaqAccordion,
  FooterSimple,
} from "./blocks";

<PricingSingle checkoutHref="https://your-checkout-url" />;
```

Each component accepts optional props; defaults ship neutral template copy—replace with your product.

## Suggested compose order (full marketing site)

1. `NavMarketing` (optional shell)
2. `AnnouncementBar` (optional)
3. `HeroMarketing`
4. `TrustStrip` → `LogoCloud` → `StatsStrip`
5. `FeatureGrid` → `BentoShowcase` → `IntegrationsRow` → `StepsTimeline`
6. `SocialProofQuote` → `TestimonialGrid` / `TestimonialSpotlight` → `TeamGrid`
7. `ContactSection` / `AuthLoginMarketing` as needed
8. `PricingSingle` **or** `PricingThreeTier` + `FeatureComparison`
9. `CtaBand` → `NewsletterInline` → `BlogTeaserRow` → `ChangelogSection` (pick what you need)
10. `FaqAccordion` → `FooterSimple`

Pick only the sections your page needs—the Hexagon marketing site shows every file on **`/blocks`** with scroll sections; **`/kit`** lists the same paths for the ZIP.

## Questions?

See **HANDOFF.md** for stakeholder-facing steps.
