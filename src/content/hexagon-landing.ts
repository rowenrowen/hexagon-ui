import type { FaqItem, FeatureGridItem, FooterLink, HeroMarketingProps } from "@/components/blocks";
import type { SocialProofQuoteProps } from "@/components/blocks/social-proof-quote";

export const hexagonHero: HeroMarketingProps = {
  eyebrow: "React · Tailwind · Motion",
  headline: "Ship a credible marketing site without rebuilding every section from scratch.",
  description:
    "Hexagon UI is a library of production-ready sections—heroes, proof, features, pricing, FAQ, and more. Download the kit once, map CSS variables to your brand, and paste components into Next.js or Vite. Your team spends time on story and conversion, not boilerplate markup.",
  primaryCta: { href: "/pricing", label: "Get the kit" },
  secondaryCta: { href: "/blocks", label: "Browse blocks" },
};

/** Homepage social section: same block ships in the kit; copy explains why it sits after the featured list. */
export const hexagonHomeSocialProof: Pick<
  SocialProofQuoteProps,
  "eyebrow" | "title" | "intro" | "quote" | "trustLine"
> = {
  eyebrow: "Social proof",
  title: "This block is part of the kit",
  intro:
    "The quote card below is the SocialProofQuote section included in the download. Use it for customer stories, or replace it with another block from the hub. Nothing here is filler; it is a live preview of what you ship.",
  quote:
    "“We stopped treating the landing page as a side project. Sections were composable, tokens matched our stack, and we had something presentable in days, not weeks.”",
  trustLine: "Illustrative quote. Replace with your own customer evidence before launch.",
};

export const hexagonFeatures: FeatureGridItem[] = [
  {
    icon: "layers",
    title: "One coherent story",
    body: "Hero, proof, features, pricing, and FAQ are designed to read as one narrative. Drop in the sections you need and adjust copy, not layout primitives.",
  },
  {
    icon: "palette",
    title: "Shadcn-compatible tokens",
    body: "CSS variables for background, foreground, primary, and borders align with common theme generators, so your brand palette maps without a rewrite.",
  },
  {
    icon: "zap",
    title: "Motion where it helps",
    body: "Framer Motion on key moments; everything else stays plain React so edits and audits stay straightforward.",
  },
  {
    icon: "package",
    title: "ZIP your stakeholders can follow",
    body: "README plus HANDOFF for procurement and engineering. Unzip, align paths, and integrate on your timeline.",
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

export const hexagonFooterLinks: FooterLink[] = [
  { href: "/blocks", label: "Blocks" },
  { href: "/kit", label: "Kit" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/handoff", label: "Guide" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
