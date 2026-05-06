/**
 * Neutral copy for `/blocks` previews only — avoids Hexagon sales language so buyers
 * aren’t confused between “our pricing” and “the block template”.
 */
import type { FaqItem, FeatureGridItem, FooterLink, HeroMarketingProps, NavMarketingLink } from "@/components/blocks";

export const showcaseNavLinks: NavMarketingLink[] = [
  {
    label: "Product",
    items: [
      { href: "#", label: "Overview", description: "Positioning and screenshots stakeholders expect." },
      { href: "#", label: "Integrations", description: "Warehouse exports, CRM sync, and alerting." },
      { href: "#", label: "Security", description: "SOC2-ready proof density before procurement." },
    ],
  },
  { href: "#", label: "Solutions" },
  { href: "#", label: "Pricing" },
  {
    label: "Docs",
    items: [
      { href: "#", label: "Getting started", description: "Install, auth, and first deployment." },
      { href: "#", label: "API reference", description: "REST, events, and webhooks." },
      { href: "#", label: "Changelog", description: "Ship notes and migrations." },
    ],
  },
];

export const showcaseAnnouncement = {
  message: "New: analytics dashboards now export to Parquet.",
  href: "#",
  linkLabel: "Learn more",
};

export const showcaseHero: HeroMarketingProps = {
  eyebrow: "Product marketing",
  headline: "Operational intelligence without the busywork.",
  description:
    "A generic hero layout—swap headline, proof, and CTAs. This preview is not live pricing for Hexagon UI.",
  primaryCta: { href: "#", label: "Request demo" },
  secondaryCta: { href: "#", label: "View docs" },
};

export const showcaseFeatures: FeatureGridItem[] = [
  {
    icon: "boxes",
    title: "Composable sections",
    body: "Reorder blocks without breaking rhythm—tokens keep contrast and spacing consistent.",
  },
  {
    icon: "shield",
    title: "Enterprise-ready patterns",
    body: "Layouts that read well for security, compliance, and procurement storylines.",
  },
  {
    icon: "zap",
    title: "Motion where it helps",
    body: "Entrance and disclosure animations that respect reduced motion preferences.",
  },
  {
    icon: "barChart3",
    title: "Instrumented by default",
    body: "Hook analytics on CTAs and forms with your own providers.",
  },
];

export const showcaseFaq: FaqItem[] = [
  {
    question: "Is this a live checkout?",
    answer:
      "No — previews use neutral fictional pricing so buyers aren’t confused between Hexagon UI’s Gumroad SKU and template numbers. After purchase, swap `checkoutHref` on `PricingSingle` to your live URL and replace bullets with your real entitlements.",
  },
  {
    question: "How do I connect forms?",
    answer:
      "Set `action` to your API route, Server Action, or a form SaaS endpoint (Tally, Basin, ConvertKit). Keep labels accessible; this kit doesn’t ship backend code — only structured markup that passes audits faster than ad-hoc HTML.",
  },
  {
    question: "Does motion work without JavaScript?",
    answer:
      "Interactive patterns (tabs, spring disclosure, hover lifts) expect JS + Framer Motion. Provide `<noscript>` summaries or server-rendered alternatives if your compliance policy requires zero-JS disclosure.",
  },
  {
    question: "Can we theme without touching every block?",
    answer:
      "Yes — merge `tokens/hexagon-ui-variables.css` once. Blocks reference semantic Tailwind tokens (`bg-background`, `text-primary`, …) so a generator export or hand-tuned palette propagates everywhere.",
  },
  {
    question: "How do previews map to ZIP filenames?",
    answer:
      "Each preview toolbar lists `blocks/<file>.tsx`. Run `npm run kit:zip` to mirror the gallery into `dist/hexagon-ui-kit.zip` — procurement can grep filenames against this hub before checkout.",
  },
];

export const showcasePricing = {
  eyebrow: "Plans",
  title: "Transparent tiers",
  priceLabel: "From $29/mo",
  priceHint: "Sample numbers for layout only — not Hexagon UI pricing.",
};

export const showcasePricingBullets = [
  "Up to 10 seats included",
  "SSO via SAML (on Enterprise)",
  "99.9% uptime SLA add-on",
  "Dedicated success manager",
];

export const showcaseFooterLinks: FooterLink[] = [
  { href: "#", label: "Status" },
  { href: "#", label: "Security" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Contact" },
];

export const showcaseStats = [
  { value: "120+", label: "Integration connectors" },
  { value: "40ms", label: "Median API latency" },
  { value: "SOC 2", label: "Type II in progress" },
  { value: "24/7", label: "Support on Business tier" },
];
