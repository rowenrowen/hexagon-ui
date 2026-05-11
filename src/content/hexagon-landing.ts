import type { FaqItem, FeatureGridItem, FooterLink, HeroMarketingProps } from "@/components/blocks";
import type { SocialProofQuoteProps } from "@/components/blocks/social-proof-quote";

export const hexagonHero: HeroMarketingProps = {
  eyebrow: "Designer-curated · React · Tailwind",
  headline: "Pixel-perfect marketing blocks, curated so your team ships faster.",
  description:
    "Hexagon UI is not an endless block dump. It is a tight set of high-impact sections designers actually use for modern SaaS pages. Map your tokens once, paste into Next.js or Vite, and spend your time on narrative and conversion.",
  primaryCta: { href: "/pricing", label: "Get the kit" },
  secondaryCta: { href: "/blocks", label: "Explore curated blocks" },
};

/** Homepage social section: same block ships in the kit; copy explains why it sits after the featured list. */
export const hexagonHomeSocialProof: Pick<
  SocialProofQuoteProps,
  "eyebrow" | "title" | "intro" | "quote" | "trustLine"
> = {
  eyebrow: "Social proof",
  title: "Used by lean teams that value design quality",
  intro:
    "The quote card below is the SocialProofQuote section included in the kit. Keep this pattern if testimonials matter to your funnel, or swap it for another curated block without rewriting page structure.",
  quote:
    "“We stopped treating the landing page as a side project. Sections were composable, tokens matched our stack, and we had something presentable in days, not weeks.”",
  trustLine: "Illustrative quote. Replace with your own customer evidence before launch.",
};

export const hexagonFeatures: FeatureGridItem[] = [
  {
    icon: "layers",
    title: "Curated, not cluttered",
    body: "You get the blocks teams actually need to launch: hero, proof, features, pricing, FAQ, and conversion sections without option overload.",
  },
  {
    icon: "palette",
    title: "Theme once, apply everywhere",
    body: "Semantic CSS variables map to shadcn-style workflows, so your color system and surface tones update the whole kit in one pass.",
  },
  {
    icon: "zap",
    title: "Production-grade polish",
    body: "Motion is used intentionally, accessibility is respected, and components remain plain React so teams can iterate quickly.",
  },
  {
    icon: "package",
    title: "Built for real handoffs",
    body: "The ZIP includes README and HANDOFF docs so design, engineering, and procurement can review the same artifact with clear filenames.",
  },
];

export const hexagonPricingBullets = [
  "Full `/blocks` catalog as `.tsx` sources plus shared token file",
  "README and HANDOFF for stakeholders",
  "Commercial license per Gumroad listing",
  "Updates while v1.x is actively maintained",
];

/** Pricing page FAQ — licensing, checkout, and what ships (distinct from homepage product FAQ). */
export const hexagonPricingFaq: FaqItem[] = [
  {
    question: "What do I receive immediately after checkout?",
    answer:
      "Gumroad provides a perpetual download link for `hexagon-ui-kit.zip` and a receipt. The archive includes React blocks under `blocks/`, `tokens/hexagon-ui-variables.css`, `README.md`, and buyer-facing `HANDOFF.md`. Wire import paths to your app layout as documented.",
  },
  {
    question: "How does licensing work?",
    answer:
      "Commercial terms are defined on the Gumroad product page at the time you purchase (seat scope, redistribution limits, and so on). Keep your receipt as proof of entitlement. If procurement needs a summary, forward the listing URL and receipt.",
  },
  {
    question: "Can my whole team use one purchase?",
    answer:
      "Coverage follows the Gumroad listing language. Typically one organization license covers internal use for sites you operate. Agencies should confirm multi-client terms on the listing or contact support using the receipt.",
  },
  {
    question: "Are refunds available?",
    answer:
      "Digital goods follow Gumroad buyer policies. Open a request through Gumroad for refunds or invoice formatting for accounts payable.",
  },
  {
    question: "Will I get updates?",
    answer:
      "While Hexagon UI v1.x is actively maintained, refreshed ZIPs ship through the same Gumroad library entry. Re-download when release notes change. Major future packs may be listed as separate products.",
  },
  {
    question: "Is this the same as shadcn/ui or shadcn.io?",
    answer:
      "No. Hexagon UI is an independent marketing-blocks kit with shadcn-compatible CSS variables so your theme tooling feels familiar. You are not buying registry access to another storefront.",
  },
];

export const hexagonFaq: FaqItem[] = [
  {
    question: "Do you offer free blocks before purchase?",
    answer:
      "Yes. Download the free starter ZIP from this site (10 curated blocks plus the shared token approach). Use it to validate code quality and theming before you buy the full kit on Gumroad.",
  },
  {
    question: "What stack does this target?",
    answer:
      "React function components, Tailwind CSS v4-style tokens in globals, Lucide icons, and Framer Motion on the hero and select scroll-polish sections (see README). You can add Animate UI primitives via the shadcn registry if you want more component-level motion. Next.js App Router is the best fit; Vite works with path adjustments.",
  },
  {
    question: "Is this a Figma kit?",
    answer:
      "Not at launch. v1 is code-first so teams ship immediately. A blocks-only Figma library may arrive later as a separate product.",
  },
  {
    question: "Can I theme it to our brand?",
    answer:
      "Yes. Tokens follow a shadcn-compatible model: swap CSS variables or paste output from your theme generator.",
  },
  {
    question: "What about updates?",
    answer:
      "Early buyers receive ZIP refreshes while v1.x is actively maintained. Major future packs may be separate products.",
  },
];

/** Robust grouped FAQ for the homepage — modeled on tailark's "Common questions" segmentation. */
export type HexagonFaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const hexagonHomeFaqGroups: HexagonFaqGroup[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        question: "What is Hexagon UI?",
        answer:
          "A finite, designer-curated library of pixel-tuned React + Tailwind marketing blocks. Targeted at startups, AI hackers, and fintech teams who need a credible landing site without rebuilding the same hero, pricing, and FAQ from scratch every sprint.",
      },
      {
        question: "How is this different from shadcn/ui?",
        answer:
          "shadcn/ui is a primitive component library you install and compose. Hexagon UI is a marketing-blocks kit on top of those primitives — full sections (hero, features, pricing, social proof, FAQ) you paste into a page. The CSS variables are shadcn-compatible so existing theme tooling works.",
      },
      {
        question: "Do you offer free blocks before purchase?",
        answer:
          "Yes. The free starter ZIP includes 10 curated sections covering hero through conversion tail — same shared tokens as the paid kit. Validate code quality and theming before you buy the full library on Gumroad.",
      },
      {
        question: "Will the catalog keep growing?",
        answer:
          "Yes. v1.x ships maintenance updates through the same Gumroad library entry. Major future packs (e.g. Figma kits, marketing pages, dashboard blocks) may be released as separate SKUs.",
      },
    ],
  },
  {
    id: "billing",
    title: "Billing & licensing",
    items: [
      {
        question: "What do I receive immediately after checkout?",
        answer:
          "Gumroad delivers a perpetual download link for hexagon-ui-kit.zip plus a receipt. The archive includes React blocks under blocks/, tokens/hexagon-ui-variables.css, README.md, and buyer-facing HANDOFF.md. Drop the files into your app and theme via the shared token file.",
      },
      {
        question: "How does licensing work?",
        answer:
          "Commercial terms are defined on the Gumroad product page at the time you purchase (seat scope, redistribution limits, and so on). Keep your receipt as proof of entitlement. Forward the listing URL and receipt to procurement when needed.",
      },
      {
        question: "Can my whole team use one purchase?",
        answer:
          "Coverage follows the Gumroad listing language. Typically one organization license covers internal use for sites you operate. Agencies should confirm multi-client terms on the listing or contact support using the receipt.",
      },
      {
        question: "Are refunds available?",
        answer:
          "Digital goods follow Gumroad buyer policies. Open a refund or invoice request through Gumroad — they handle accounts payable formatting and dispute flow.",
      },
      {
        question: "Do you offer team or agency discounts?",
        answer:
          "Not at launch. The single $79 price is intentionally low to make procurement frictionless. Reach out via the Gumroad listing if your team needs invoicing for a multi-seat purchase.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical",
    items: [
      {
        question: "What stack does this target?",
        answer:
          "React function components, Tailwind CSS v4-style tokens in globals, Lucide icons, and Framer Motion on the hero and select scroll-polish sections. Next.js App Router is the best fit; Vite works with path adjustments. shadcn-compatible CSS variables let your theme tooling feel familiar.",
      },
      {
        question: "Can I theme it to our brand?",
        answer:
          "Yes. Tokens follow a shadcn-compatible model: swap CSS variables in tokens/hexagon-ui-variables.css or paste output from your theme generator. The /blocks page has a live theme + radius editor so you can audition palettes against the catalog before committing.",
      },
      {
        question: "Is this a Figma kit?",
        answer:
          "Not at launch. v1 is code-first so teams ship immediately. A blocks-only Figma library may arrive later as a separate product.",
      },
      {
        question: "Can I use this with TypeScript?",
        answer:
          "Yes. All blocks ship as .tsx files with full prop types. Drop them into a TypeScript Next.js or Vite app and your editor lights up immediately.",
      },
      {
        question: "Where is the documentation?",
        answer:
          "The Docs page summarizes the same content as HANDOFF.md in the ZIP — installation, token mapping, and an integration checklist optimized for forwarding to engineering or procurement.",
      },
    ],
  },
];

export const hexagonFooterLinks: FooterLink[] = [
  { href: "/blocks", label: "Blocks" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/#faq", label: "FAQ" },
  { href: "/kit", label: "Kit manifest" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
