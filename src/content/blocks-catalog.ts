/** Single-page `/blocks` IA: scroll sections (anchors) — curated groups without separate routes. */

export type BlockEntry = {
  slug: string;
  file: string;
  frameTitle: string;
  frameDescription: string;
  /**
   * Iframe height for `/blocks/*` previews, in pixels. Defaults to 480.
   * Set higher for blocks with menus/dropdowns/heroes that need vertical room.
   */
  previewHeight?: number;
};

export type BlockSectionMeta = {
  slug: string;
  title: string;
  description: string;
  blocks: BlockEntry[];
};

export const BLOCK_SECTIONS: BlockSectionMeta[] = [
  {
    slug: "navigation",
    title: "Navigation",
    description: "Marketing-site header patterns — four distinct layouts for classic, editorial, product-led, and docs-style shells.",
    blocks: [
      {
        slug: "nav-marketing",
        file: "nav-marketing.tsx",
        frameTitle: "NavMarketing",
        frameDescription: "Classic split bar with hover dropdowns and a primary CTA.",
        previewHeight: 460,
      },
      {
        slug: "nav-centered",
        file: "nav-centered.tsx",
        frameTitle: "NavCentered",
        frameDescription: "Centered wordmark flanked by split nav rails — editorial / brand-led.",
        previewHeight: 380,
      },
      {
        slug: "nav-pill",
        file: "nav-pill.tsx",
        frameTitle: "NavPill",
        frameDescription: "True floating capsule with hero backdrop — overlays product art.",
        previewHeight: 460,
      },
      {
        slug: "nav-search",
        file: "nav-search.tsx",
        frameTitle: "NavSearch",
        frameDescription: "Docs-style bar with a prominent ⌘K search input and dense actions.",
        previewHeight: 420,
      },
    ],
  },
  {
    slug: "announcement-hero",
    title: "Announcement & hero",
    description: "Top-of-funnel strips and hero variants — split layouts and compact launches.",
    blocks: [
      {
        slug: "announcement-bar",
        file: "announcement-bar.tsx",
        frameTitle: "AnnouncementBar",
        frameDescription: "Optional promo / launch strip above the hero.",
        previewHeight: 120,
      },
      {
        slug: "hero-marketing",
        file: "hero-marketing.tsx",
        frameTitle: "HeroMarketing",
        frameDescription: "Client component — headline, copy, dual CTAs, entrance motion.",
        previewHeight: 680,
      },
      {
        slug: "hero-split",
        file: "hero-split.tsx",
        frameTitle: "HeroSplit",
        frameDescription: "Split hero — copy lane + visual placeholder for screenshots or video.",
        previewHeight: 600,
      },
      {
        slug: "hero-compact",
        file: "hero-compact.tsx",
        frameTitle: "HeroCompact",
        frameDescription: "Minimal centered hero for tight launches above dense grids.",
        previewHeight: 520,
      },
    ],
  },
  {
    slug: "trust",
    title: "Trust & credibility",
    description: "Logos, metrics, press, security snapshots — the proof density buyers scan for.",
    blocks: [
      {
        slug: "trust-strip",
        file: "trust-strip.tsx",
        frameTitle: "TrustStrip",
        frameDescription: "Icon row with short credibility labels.",
        previewHeight: 220,
      },
      {
        slug: "logo-cloud",
        file: "logo-cloud.tsx",
        frameTitle: "LogoCloud",
        frameDescription: "Partner row — swap text placeholders for SVG marks.",
        previewHeight: 220,
      },
      {
        slug: "logo-marquee",
        file: "logo-marquee.tsx",
        frameTitle: "LogoMarquee",
        frameDescription: "Infinite marquee row — CSS animation with reduced-motion fallback.",
        previewHeight: 200,
      },
      {
        slug: "stats-strip",
        file: "stats-strip.tsx",
        frameTitle: "StatsStrip",
        frameDescription: "KPI row — client; stagger on scroll, respects reduced motion.",
        previewHeight: 260,
      },
      {
        slug: "metrics-highlight-row",
        file: "metrics-highlight-row.tsx",
        frameTitle: "MetricsHighlightRow",
        frameDescription: "Three-up metric cards with hints — procurement-friendly.",
        previewHeight: 320,
      },
      {
        slug: "stats-inline-row",
        file: "stats-inline-row.tsx",
        frameTitle: "StatsInlineRow",
        frameDescription: "Dense horizontal stats strip — fits between heroes and features.",
        previewHeight: 240,
      },
      {
        slug: "stats-big",
        file: "stats-big.tsx",
        frameTitle: "StatsBig",
        frameDescription: "Single oversized stat + supporting methodology line.",
        previewHeight: 380,
      },
      {
        slug: "press-strip",
        file: "press-strip.tsx",
        frameTitle: "PressStrip",
        frameDescription: "“As featured in” outlet row — swap text for publication SVGs.",
        previewHeight: 200,
      },
      {
        slug: "partner-logo-grid",
        file: "partner-logo-grid.tsx",
        frameTitle: "PartnerLogoGrid",
        frameDescription: "Six-cell grid for partner or certification marks.",
        previewHeight: 360,
      },
      {
        slug: "security-row",
        file: "security-row.tsx",
        frameTitle: "SecurityRow",
        frameDescription: "Compliance narrative trio — icons + factual clauses.",
        previewHeight: 320,
      },
    ],
  },
  {
    slug: "features",
    title: "Features & narrative",
    description: "Capability grids, alternating rows, integrations, video, and timelines.",
    blocks: [
      {
        slug: "feature-grid",
        file: "feature-grid.tsx",
        frameTitle: "FeatureGrid",
        frameDescription: "2×2 cards with Lucide icons and hover/tap motion.",
        previewHeight: 640,
      },
      {
        slug: "feature-alternating",
        file: "feature-alternating.tsx",
        frameTitle: "FeatureAlternating",
        frameDescription: "Editorial alternating rows — screenshot lane + copy.",
        previewHeight: 760,
      },
      {
        slug: "icon-list-features",
        file: "icon-list-features.tsx",
        frameTitle: "IconListFeatures",
        frameDescription: "Vertical icon list — mobile-first dense storytelling.",
        previewHeight: 620,
      },
      {
        slug: "feature-pills-row",
        file: "feature-pills-row.tsx",
        frameTitle: "FeaturePillsRow",
        frameDescription: "Pill cluster for tags, guarantees, or tech assertions.",
        previewHeight: 260,
      },
      {
        slug: "bento-showcase",
        file: "bento-showcase.tsx",
        frameTitle: "BentoShowcase",
        frameDescription: "Asymmetric bento grid for dense product storytelling.",
        previewHeight: 720,
      },
      {
        slug: "integrations-row",
        file: "integrations-row.tsx",
        frameTitle: "IntegrationsRow",
        frameDescription: "Stack / API pills for “works with” rows.",
        previewHeight: 260,
      },
      {
        slug: "integration-grid",
        file: "integration-grid.tsx",
        frameTitle: "IntegrationGrid",
        frameDescription: "Four-up vendor grid — swap Lucide icons for real marks.",
        previewHeight: 440,
      },
      {
        slug: "steps-timeline",
        file: "steps-timeline.tsx",
        frameTitle: "StepsTimeline",
        frameDescription: "Numbered rollout or how-it-works steps.",
        previewHeight: 520,
      },
      {
        slug: "timeline-vertical",
        file: "timeline-vertical.tsx",
        frameTitle: "TimelineVertical",
        frameDescription: "Border-left timeline — onboarding or launch phases.",
        previewHeight: 620,
      },
      {
        slug: "video-section",
        file: "video-section.tsx",
        frameTitle: "VideoSection",
        frameDescription: "16:9 media shell with ratio + caption spacing locked.",
        previewHeight: 620,
      },
    ],
  },
  {
    slug: "social-proof",
    title: "Social proof & team",
    description: "Quotes, grids, spotlight stories, stat-backed testimonials, and team intros.",
    blocks: [
      {
        slug: "social-proof-quote",
        file: "social-proof-quote.tsx",
        frameTitle: "SocialProofQuote",
        frameDescription: "Quote card with avatar pile and trust line.",
        previewHeight: 400,
      },
      {
        slug: "quote-split",
        file: "quote-split.tsx",
        frameTitle: "QuoteSplit",
        frameDescription: "Quote + attributed KPI mini-grid — board-deck friendly.",
        previewHeight: 500,
      },
      {
        slug: "testimonial-grid",
        file: "testimonial-grid.tsx",
        frameTitle: "TestimonialGrid",
        frameDescription: "Three-up cards — client motion on scroll.",
        previewHeight: 560,
      },
      {
        slug: "testimonial-spotlight",
        file: "testimonial-spotlight.tsx",
        frameTitle: "TestimonialSpotlight",
        frameDescription: "Single large quote — flagship social proof.",
        previewHeight: 480,
      },
      {
        slug: "team-grid",
        file: "team-grid.tsx",
        frameTitle: "TeamGrid",
        frameDescription: "Portrait grid — initials placeholders → photos.",
        previewHeight: 580,
      },
    ],
  },
  {
    slug: "forms-contact",
    title: "Forms & account",
    description: "Contact and sign-in shells you wire to real backends.",
    blocks: [
      {
        slug: "contact-section",
        file: "contact-section.tsx",
        frameTitle: "ContactSection",
        frameDescription: "Split layout — details + accessible form.",
        previewHeight: 700,
      },
      {
        slug: "auth-login-marketing",
        file: "auth-login-marketing.tsx",
        frameTitle: "AuthLoginMarketing",
        frameDescription: "Centered login card — connect to your auth SDK.",
        previewHeight: 640,
      },
      {
        slug: "signup-strip",
        file: "signup-strip.tsx",
        frameTitle: "SignupStrip",
        frameDescription: "Inline email + submit — wire action to your ESP or API.",
        previewHeight: 240,
      },
    ],
  },
  {
    slug: "pricing",
    title: "Pricing & comparison",
    description: "Single-SKU card, dual tiers, multi-tier SaaS, add-ons, and matrices.",
    blocks: [
      {
        slug: "pricing-single",
        file: "pricing-single.tsx",
        frameTitle: "PricingSingle",
        frameDescription: "One tier + checklist — wire checkoutHref (e.g. Gumroad).",
        previewHeight: 720,
      },
      {
        slug: "pricing-dual",
        file: "pricing-dual.tsx",
        frameTitle: "PricingDual",
        frameDescription: "Two-column SaaS-style comparison — emphasize featured tier.",
        previewHeight: 700,
      },
      {
        slug: "pricing-three-tier",
        file: "pricing-three-tier.tsx",
        frameTitle: "PricingThreeTier",
        frameDescription: "Three columns — default copy is fictional example pricing.",
        previewHeight: 760,
      },
      {
        slug: "pricing-addon-row",
        file: "pricing-addon-row.tsx",
        frameTitle: "PricingAddonRow",
        frameDescription: "Optional upsell ribbon — workshops, audits, priority support.",
        previewHeight: 380,
      },
      {
        slug: "feature-comparison",
        file: "feature-comparison.tsx",
        frameTitle: "FeatureComparison",
        frameDescription: "Boolean plan matrix — Hobby / Pro / Enterprise placeholders.",
        previewHeight: 720,
      },
      {
        slug: "comparison-mini",
        file: "comparison-mini.tsx",
        frameTitle: "ComparisonMini",
        frameDescription: "Compact two-plan check matrix — mid-page nudge.",
        previewHeight: 480,
      },
    ],
  },
  {
    slug: "conversion",
    title: "Conversion & editorial",
    description: "CTAs, capture, blog teasers, release history, roadmap, and tabs.",
    blocks: [
      {
        slug: "cta-band",
        file: "cta-band.tsx",
        frameTitle: "CtaBand",
        frameDescription: "Gradient panel with primary + secondary actions.",
        previewHeight: 360,
      },
      {
        slug: "cta-split-panel",
        file: "cta-split-panel.tsx",
        frameTitle: "CtaSplitPanel",
        frameDescription: "Split CTA + stakeholder checklist lane.",
        previewHeight: 480,
      },
      {
        slug: "cta-minimal-bar",
        file: "cta-minimal-bar.tsx",
        frameTitle: "CtaMinimalBar",
        frameDescription: "Thin conversion strip — headline + pill button.",
        previewHeight: 200,
      },
      {
        slug: "tabs-marketing",
        file: "tabs-marketing.tsx",
        frameTitle: "TabsMarketing",
        frameDescription: "Segmented tabs + spring pill + cross-fading panels — client motion.",
        previewHeight: 580,
      },
      {
        slug: "newsletter-inline",
        file: "newsletter-inline.tsx",
        frameTitle: "NewsletterInline",
        frameDescription: "Inline form — set formAction to your API.",
        previewHeight: 260,
      },
      {
        slug: "blog-teaser-row",
        file: "blog-teaser-row.tsx",
        frameTitle: "BlogTeaserRow",
        frameDescription: "Three-up cards for blog or changelog entries.",
        previewHeight: 560,
      },
      {
        slug: "changelog-section",
        file: "changelog-section.tsx",
        frameTitle: "ChangelogSection",
        frameDescription: "Vertical timeline of releases.",
        previewHeight: 620,
      },
      {
        slug: "roadmap-inline",
        file: "roadmap-inline.tsx",
        frameTitle: "RoadmapInline",
        frameDescription: "Three-phase horizontal roadmap strip.",
        previewHeight: 500,
      },
    ],
  },
  {
    slug: "faq-footer",
    title: "FAQ & footer",
    description: "Accordion objections, helpful voting patterns, section spines, and marketing footer.",
    blocks: [
      {
        slug: "faq-accordion",
        file: "faq-accordion.tsx",
        frameTitle: "FaqAccordion",
        frameDescription: "Spring-height disclosure + tap feedback — client Framer Motion.",
        previewHeight: 580,
      },
      {
        slug: "faq-rating",
        file: "faq-rating.tsx",
        frameTitle: "FaqRating",
        frameDescription: "Help-center FAQ with helpful %, response counts, thumb feedback — inspired by modern block labs.",
        previewHeight: 600,
      },
      {
        slug: "footer-simple",
        file: "footer-simple.tsx",
        frameTitle: "FooterSimple",
        frameDescription: "Copyright + link row — same pattern as this marketing site.",
        previewHeight: 280,
      },
    ],
  },
  {
    slug: "composition",
    title: "Composition utilities",
    description: "Micro sections that break up long scrolls — intros, card stacks, spacing rhythm.",
    blocks: [
      {
        slug: "section-intro",
        file: "section-intro.tsx",
        frameTitle: "SectionIntro",
        frameDescription: "Eyebrow + title + paragraph spine between heavy blocks.",
        previewHeight: 320,
      },
      {
        slug: "card-stack-mini",
        file: "card-stack-mini.tsx",
        frameTitle: "CardStackMini",
        frameDescription: "Three-card rollout pattern — milestones or phases.",
        previewHeight: 420,
      },
    ],
  },
];

export const BLOCK_COUNT = BLOCK_SECTIONS.reduce((n, s) => n + s.blocks.length, 0);

/** Legacy export name — sections are the canonical grouping. */
export const BLOCK_CATEGORIES = BLOCK_SECTIONS;

/** Designer-picked starter ZIP — subset of {@link BLOCK_SECTIONS} (single source of truth). */
export const FREE_STARTER_BLOCK_SLUGS = [
  "announcement-bar",
  "hero-marketing",
  "trust-strip",
  "feature-grid",
  "stats-strip",
  "social-proof-quote",
  "pricing-single",
  "faq-accordion",
  "cta-band",
  "footer-simple",
] as const;

export const FREE_STARTER_COUNT = FREE_STARTER_BLOCK_SLUGS.length;

export const FREE_BLOCK_SLUG_SET = new Set<string>(FREE_STARTER_BLOCK_SLUGS);

export function getFreeStarterBlocks(): BlockEntry[] {
  const bySlug = new Map(BLOCK_SECTIONS.flatMap((s) => s.blocks).map((b) => [b.slug, b]));
  return FREE_STARTER_BLOCK_SLUGS.map((slug) => bySlug.get(slug)).filter((b): b is BlockEntry => !!b);
}

export const FREE_STARTER_SECTION_SLUG = "free-starter";

/**
 * Hub browse order: free starter first (no duplicate rows below — those blocks are omitted from category sections).
 */
export function catalogSectionsForHub(): BlockSectionMeta[] {
  const freeBlocks = getFreeStarterBlocks();
  const paidSections = BLOCK_SECTIONS.map((s) => ({
    ...s,
    blocks: s.blocks.filter((b) => !FREE_BLOCK_SLUG_SET.has(b.slug)),
  })).filter((s) => s.blocks.length > 0);

  return [
    {
      slug: FREE_STARTER_SECTION_SLUG,
      title: "Free starter",
      description:
        "Ten pixel-tuned sections you can download and paste today — same tokens as the paid kit. Upgrade when you want the full curated family.",
      blocks: freeBlocks,
    },
    ...paidSections,
  ];
}
