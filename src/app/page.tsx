import { AuroraBackground } from "@/components/aurora-background";
import { SiteHeader } from "@/components/site-header";
import {
  HeroMarketing,
  TrustStrip,
  FeatureGrid,
  SocialProofQuote,
  PricingSingle,
  FaqAccordion,
  FooterSimple,
} from "@/components/blocks";
import { HomeNextSteps } from "@/components/marketing/home-next-steps";
import {
  hexagonFeatures,
  hexagonFooterLinks,
  hexagonHero,
  hexagonFaq,
  hexagonPricingBullets,
} from "@/content/hexagon-landing";
import { GUMROAD_CHECKOUT_URL } from "@/lib/checkout-url";

export default function Home() {
  return (
    <>
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(78vh,720px)] overflow-hidden">
          <AuroraBackground />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>
        <SiteHeader />
        <main className="flex flex-1 flex-col">
          <HeroMarketing {...hexagonHero} />
          <TrustStrip />
          <FeatureGrid
            title="Built for speed and clarity"
            subtitle="Opinionated enough to look finished on day one; structured so engineers aren't fighting ad-hoc markup."
            items={hexagonFeatures}
            id="product"
          />
          <SocialProofQuote />
          <PricingSingle
            checkoutHref={GUMROAD_CHECKOUT_URL}
            eyebrow="Hexagon UI · v1"
            title="Simple license, one download"
            priceLabel="$79"
            priceHint="One-time purchase · VAT handled at checkout"
            bullets={hexagonPricingBullets}
            checkoutLabel="Buy on Gumroad"
            id="pricing"
          />
          <FaqAccordion title="Frequently asked questions" items={hexagonFaq} id="faq" />
          <HomeNextSteps />
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
