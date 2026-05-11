import { AuroraBackground } from "@/components/aurora-background";
import { SiteHeader } from "@/components/site-header";
import { FooterSimple } from "@/components/blocks";
import { HomeHero } from "@/components/marketing/home-hero";
import { HomeFrameworkMarquee } from "@/components/marketing/home-framework-marquee";
import { HomeBlockPreviews } from "@/components/marketing/home-block-previews";
import { HomePricingSnapshot } from "@/components/marketing/home-pricing-snapshot";
import { HomeFaq } from "@/components/marketing/home-faq";
import { hexagonFooterLinks, hexagonHomeFaqGroups } from "@/content/hexagon-landing";
import { BLOCK_COUNT, FREE_STARTER_COUNT } from "@/content/blocks-catalog";

export default function Home() {
  return (
    <>
      <div className="relative isolate">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(82vh,820px)] overflow-hidden"
          aria-hidden
        >
          <AuroraBackground />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>
        <SiteHeader />
        <main className="flex flex-1 flex-col">
          <HomeHero
            announcement={{ label: `${BLOCK_COUNT} blocks shipped — ${FREE_STARTER_COUNT} free`, href: "/blocks" }}
            eyebrow="React · Tailwind · Motion"
            headline="Pixel-perfect marketing blocks for the teams shipping this week."
            description="A finite, designer-curated React + Tailwind library for startups, AI hackers, and fintech teams. Drop sections, theme once, and spend your time on narrative and conversion — not markup archaeology."
            primaryCta={{ href: "/pricing", label: "Get full access" }}
            secondaryCta={{ href: "/blocks", label: "Explore blocks" }}
          />
          <HomeFrameworkMarquee />
          <HomeBlockPreviews />
          <HomePricingSnapshot />
          <HomeFaq groups={hexagonHomeFaqGroups} />
        </main>
      </div>
      <FooterSimple
        brandName="Hexagon UI"
        tagline="Built for teams shipping marketing pages fast."
        links={hexagonFooterLinks}
      />
    </>
  );
}
