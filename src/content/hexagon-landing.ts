import type { FaqItem, FeatureGridItem, FooterLink, HeroMarketingProps } from "@/components/blocks";

export const hexagonHero: HeroMarketingProps = {
  eyebrow: "React · Tailwind · Motion",
  headline: "Production marketing sections — paste in, theme once, ship.",
  description:
    "52+ curated blocks (heroes, pricing, FAQ patterns, motion). One ZIP, README + HANDOFF for stakeholders, CSS variables compatible with shadcn-style workflows.",
  primaryCta: { href: "/pricing", label: "Get the kit" },
  secondaryCta: { href: "/blocks", label: "Browse blocks" },
};

export const hexagonFeatures: FeatureGridItem[] = [
  {
    icon: "layers",
    title: "One landing narrative",
    body: "Hero, proof, features, pricing, and FAQ wired as a single story—drop sections where you need them.",
  },
  {
    icon: "palette",
    title: "shadcn-shaped tokens",
    body: "CSS variables for background, foreground, primary, and borders so your theme generator output maps cleanly.",
  },
  {
    icon: "zap",
    title: "Motion without mystery",
    body: "Framer Motion on the pieces that benefit from it; keep the rest plain React for easy edits.",
  },
  {
    icon: "package",
    title: "ZIP handoff",
    body: "Purchase on Gumroad, unzip, read HANDOFF.md, paste into your Next.js or Vite app—your call.",
  },
];

export const hexagonPricingBullets = [
  "Full catalog from `/blocks` as `.tsx` sources plus shared tokens",
  "README + HANDOFF for stakeholders",
  "Commercial license per Gumroad listing",
  "Updates during active v1.x maintenance",
];

/** Pricing page FAQ — licensing, checkout, and what ships (distinct from homepage product FAQ). */
export const hexagonPricingFaq: FaqItem[] = [
  {
    question: "What do I receive immediately after checkout?",
    answer:
      "Gumroad serves a perpetual download link for `hexagon-ui-kit.zip` plus a receipt. The archive contains React blocks under `blocks/`, `tokens/hexagon-ui-variables.css`, `README.md`, and buyer-facing `HANDOFF.md`. Wire import paths to your app layout as documented.",
  },
  {
    question: "How does licensing work?",
    answer:
      "Commercial terms are defined on the Gumroad product page at the time you purchase (seat scope, redistribution limits, etc.). Keep your receipt—it's your proof of entitlement. If procurement needs a PDF summary, forward the listing URL and receipt.",
  },
  {
    question: "Can my whole team use one purchase?",
    answer:
      "Coverage follows the Gumroad listing language—typically one org license covers internal use for shipping sites you operate. Agencies delivering client work should confirm multi-client terms on the listing or email support from the receipt.",
  },
  {
    question: "Are refunds available?",
    answer:
      "Digital goods follow Gumroad's buyer policies. Open a request through Gumroad if you need a refund or invoice formatting for accounts payable.",
  },
  {
    question: "Will I get updates?",
    answer:
      "While Hexagon UI v1.x is actively maintained, refreshed ZIPs ship through the same Gumroad library entry—re-download when release notes move. Major future packs may be listed as separate products.",
  },
  {
    question: "Is this the same as shadcn/ui or shadcn.io?",
    answer:
      "No. Hexagon UI is an independent marketing-blocks kit with shadcn-compatible CSS variables so your theme tooling feels familiar. You are not buying registry access to another storefront.",
  },
];

export const hexagonFaq: FaqItem[] = [
  {
    question: "What stack does this target?",
    answer:
      "React function components, Tailwind CSS v4-style tokens in globals, Lucide throughout, and Framer Motion on the hero plus a few scroll-polish sections (see README). Optional: add Animate UI primitives via the shadcn registry for extra component-level motion. Works best in Next.js App Router; adaptable to Vite.",
  },
  {
    question: "Is this a Figma kit?",
    answer:
      "Not at launch—v1 is code-first so teams ship immediately. A blocks-only Figma library may arrive later as a separate upsell.",
  },
  {
    question: "Can I theme it to our brand?",
    answer:
      "Yes. Tokens follow a shadcn-compatible mental model—swap CSS variables or paste output from your theme generator.",
  },
  {
    question: "What about updates?",
    answer:
      "Early buyers receive ZIP refreshes while v1.x is actively maintained. Major future packs may be separate products.",
  },
];

export const hexagonFooterLinks: FooterLink[] = [
  { href: "/blocks", label: "Blocks" },
  { href: "/kit", label: "Kit" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/handoff", label: "Guide" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
