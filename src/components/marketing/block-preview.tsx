import {
  AnnouncementBar,
  AuthLoginMarketing,
  BlogTeaserRow,
  BentoShowcase,
  CardStackMini,
  ChangelogSection,
  ComparisonMini,
  ContactSection,
  CtaBand,
  CtaMinimalBar,
  CtaSplitPanel,
  FaqAccordion,
  FaqRating,
  FeatureAlternating,
  FeatureComparison,
  FeatureGrid,
  FeaturePillsRow,
  FooterSimple,
  HeroCompact,
  HeroMarketing,
  HeroSplit,
  IconListFeatures,
  IntegrationGrid,
  IntegrationsRow,
  LogoCloud,
  LogoMarquee,
  MetricsHighlightRow,
  NavCentered,
  NavMarketing,
  NavPill,
  NavSearch,
  NewsletterInline,
  PartnerLogoGrid,
  PricingAddonRow,
  PricingDual,
  PricingSingle,
  PricingThreeTier,
  PressStrip,
  QuoteSplit,
  RoadmapInline,
  SectionIntro,
  SecurityRow,
  SignupStrip,
  SocialProofQuote,
  StatsBig,
  StatsInlineRow,
  StatsStrip,
  StepsTimeline,
  TabsMarketing,
  TeamGrid,
  TestimonialGrid,
  TestimonialSpotlight,
  TimelineVertical,
  TrustStrip,
  VideoSection,
} from "@/components/blocks";
import {
  showcaseAnnouncement,
  showcaseFaq,
  showcaseFeatures,
  showcaseFooterLinks,
  showcaseHero,
  showcaseNavLinks,
  showcasePricing,
  showcasePricingBullets,
  showcaseStats,
} from "@/content/block-showcase-demos";

/** Renders one kit block by slug — used in `/blocks` previews. */
export function BlockPreview({ slug }: { slug: string }) {
  switch (slug) {
    case "nav-marketing":
      return (
        <NavMarketing
          brandLabel="Northwind"
          links={showcaseNavLinks}
          cta={{ href: "#", label: "Book demo" }}
        />
      );
    case "nav-centered":
      return <NavCentered brandLabel="Meridian" />;
    case "nav-pill":
      return (
        <div className="relative min-h-full bg-gradient-to-br from-primary/20 via-background to-background pb-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-primary/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-16 size-64 rounded-full bg-accent/15 blur-3xl"
          />
          <NavPill brandLabel="Halo" />
        </div>
      );
    case "nav-search":
      return <NavSearch brandLabel="Beacon" />;
    case "announcement-bar":
      return <AnnouncementBar {...showcaseAnnouncement} />;
    case "hero-marketing":
      return <HeroMarketing {...showcaseHero} />;
    case "hero-split":
      return <HeroSplit />;
    case "hero-compact":
      return <HeroCompact />;
    case "trust-strip":
      return <TrustStrip />;
    case "logo-cloud":
      return <LogoCloud />;
    case "logo-marquee":
      return <LogoMarquee />;
    case "stats-strip":
      return <StatsStrip items={showcaseStats} />;
    case "metrics-highlight-row":
      return <MetricsHighlightRow />;
    case "stats-inline-row":
      return <StatsInlineRow />;
    case "stats-big":
      return (
        <StatsBig
          value="99.95%"
          label="API success rate"
          supporting="Last 30 days, global edge regions."
          chips={[
            { label: "p99 latency", value: "120 ms" },
            { label: "Incidents", value: "0" },
          ]}
        />
      );
    case "press-strip":
      return <PressStrip />;
    case "partner-logo-grid":
      return <PartnerLogoGrid />;
    case "security-row":
      return <SecurityRow />;
    case "feature-grid":
      return (
        <FeatureGrid
          title="Built for speed and clarity"
          subtitle="Opinionated enough to look finished on day one; structured so engineers aren’t fighting ad-hoc markup."
          items={showcaseFeatures}
          id={`feature-grid-${slug}`}
        />
      );
    case "feature-alternating":
      return <FeatureAlternating />;
    case "icon-list-features":
      return <IconListFeatures />;
    case "feature-pills-row":
      return <FeaturePillsRow />;
    case "bento-showcase":
      return <BentoShowcase />;
    case "integrations-row":
      return <IntegrationsRow />;
    case "integration-grid":
      return <IntegrationGrid />;
    case "steps-timeline":
      return <StepsTimeline />;
    case "timeline-vertical":
      return <TimelineVertical />;
    case "video-section":
      return <VideoSection />;
    case "social-proof-quote":
      return <SocialProofQuote />;
    case "quote-split":
      return <QuoteSplit />;
    case "testimonial-grid":
      return <TestimonialGrid />;
    case "testimonial-spotlight":
      return <TestimonialSpotlight />;
    case "team-grid":
      return <TeamGrid />;
    case "contact-section":
      return <ContactSection />;
    case "auth-login-marketing":
      return <AuthLoginMarketing />;
    case "signup-strip":
      return <SignupStrip />;
    case "pricing-single":
      return (
        <PricingSingle
          checkoutHref="#"
          eyebrow={showcasePricing.eyebrow}
          title={showcasePricing.title}
          priceLabel={showcasePricing.priceLabel}
          priceHint={showcasePricing.priceHint}
          bullets={showcasePricingBullets}
          checkoutLabel="Start trial"
          id={`pricing-single-${slug}`}
        />
      );
    case "pricing-dual":
      return <PricingDual />;
    case "pricing-three-tier":
      return <PricingThreeTier />;
    case "pricing-addon-row":
      return <PricingAddonRow />;
    case "feature-comparison":
      return <FeatureComparison />;
    case "comparison-mini":
      return <ComparisonMini />;
    case "cta-band":
      return (
        <CtaBand
          primaryCta={{ href: "#", label: "Get started" }}
          secondaryCta={{ href: "#", label: "View docs" }}
        />
      );
    case "cta-split-panel":
      return <CtaSplitPanel />;
    case "cta-minimal-bar":
      return <CtaMinimalBar />;
    case "tabs-marketing":
      return <TabsMarketing id={`tabs-${slug}`} />;
    case "newsletter-inline":
      return <NewsletterInline />;
    case "blog-teaser-row":
      return <BlogTeaserRow />;
    case "changelog-section":
      return <ChangelogSection />;
    case "roadmap-inline":
      return <RoadmapInline />;
    case "faq-accordion":
      return <FaqAccordion title="Frequently asked" items={showcaseFaq} id={`faq-${slug}`} />;
    case "faq-rating":
      return <FaqRating id={`faq-rating-${slug}`} />;
    case "footer-simple":
      return <FooterSimple brandName="Northwind" links={showcaseFooterLinks} />;
    case "section-intro":
      return <SectionIntro />;
    case "card-stack-mini":
      return <CardStackMini />;
    default:
      return null;
  }
}
