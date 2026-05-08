import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Code2,
  Layers,
  Package,
  Palette,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { FooterSimple, PricingSingle, FaqAccordion } from "@/components/blocks";
import { BLOCK_COUNT } from "@/content/blocks-catalog";
import { hexagonFooterLinks, hexagonPricingBullets, hexagonPricingFaq } from "@/content/hexagon-landing";
import { GUMROAD_CHECKOUT_URL } from "@/lib/checkout-url";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Hexagon UI license: one-time purchase, ZIP download, README plus HANDOFF, commercial terms via Gumroad.",
};

const includedBodyForSections =
  "Heroes, proof strips, pricing patterns, FAQ, and motion polish, composed like a premium block library.";

function IncludedGrid({ sectionCount }: { sectionCount: number }) {
  const tiles = [
    {
      icon: Layers,
      title: `${sectionCount} curated sections`,
      body: includedBodyForSections,
    },
    {
      icon: Code2,
      title: "Paste-ready React + Tailwind",
      body: "Real components, not screenshots. Tune copy and tokens without fighting ad-hoc markup.",
    },
    {
      icon: Palette,
      title: "Token file included",
      body: "`hexagon-ui-variables.css` maps cleanly to shadcn-style workflows and brand generators.",
    },
    {
      icon: Package,
      title: "ZIP + Gumroad receipt",
      body: "Instant download link, VAT handled at checkout, perpetual entitlement per listing terms.",
    },
    {
      icon: RefreshCw,
      title: "v1.x maintenance drops",
      body: "Re-fetch the archive while v1.x is actively maintained. Major future packs may be separate SKUs.",
    },
    {
      icon: ShieldCheck,
      title: "Stakeholder handoff",
      body: "`HANDOFF.md` explains what engineering receives so procurement and devs stay aligned.",
    },
  ];

  return (
    <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tiles.map(({ icon: Icon, title, body }) => (
        <li
          key={title}
          className="flex flex-col rounded-2xl border border-border/90 bg-card p-6 shadow-[0_1px_0_oklch(0_0_0/0.03)] transition-[border-color,box-shadow] hover:border-border hover:shadow-md dark:shadow-[0_1px_0_oklch(1_0_0/0.04)]"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-5" strokeWidth={1.75} aria-hidden />
          </div>
          <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
        </li>
      ))}
    </ul>
  );
}

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <MarketingPageHero
          eyebrow="Pricing"
          title="Stop rebuilding the same marketing UI from scratch"
          description={
            <>
              One checkout unlocks production-ready sections your team can paste into Next.js or Vite. No subscription traps:
              just a ZIP, documentation, and clear commercial terms on Gumroad.
            </>
          }
          actions={
            <>
              <Link
                href="#checkout"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View license
              </Link>
              <Link
                href="/blocks"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/70"
              >
                Browse blocks
                <ArrowRight className="size-4 opacity-70" aria-hidden />
              </Link>
            </>
          }
        />

        <section className="border-b border-border/80 py-16 sm:py-20">
          <MarketingContainer>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                A deliberate trade for shipping teams
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                Hexagon UI isn&apos;t another abstract component kit. It&apos;s finished narrative density you can drop into a page,
                then refine. Compare the two paths your calendar actually feels.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em]">Without a block kit</span>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden />
                    Designers spec landing slices from scratch; engineers rebuild spacing and responsive breakpoints block by block.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden />
                    Motion and accessibility polish arrive late, if they arrive at all, because velocity eats runway.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden />
                    Every new section risks visual drift from the last ship unless you maintain an internal design system.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.06] via-card to-card p-8 shadow-sm ring-1 ring-primary/15 lg:p-10">
                <div className="flex items-center gap-3 text-primary">
                  <Sparkles className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em]">With Hexagon UI</span>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-card-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                    Drop curated sections that already read like a mature SaaS marketing site, then tune tokens once.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                    Motion defaults respect reduced-motion preferences; disclosure patterns behave like modern libraries.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                    Procurement sees a single SKU, engineers see filenames that match the `/blocks` hub: alignment without slack threads.
                  </li>
                </ul>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
              Illustrative comparison; your mileage varies by team size and design maturity. The license stays one-time regardless of how many sections you ultimately ship.
            </p>
          </MarketingContainer>
        </section>

        <section className="border-b border-border/80 bg-muted/10 py-16 sm:py-20">
          <MarketingContainer>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Everything in one archive</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                No tiers to negotiate. The checkout covers the sections we showcase publicly plus the shared token file and handoff docs.
              </p>
            </div>

            <IncludedGrid sectionCount={BLOCK_COUNT} />

            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-dashed border-border/90 bg-background/80 px-6 py-5 text-center text-sm leading-relaxed text-muted-foreground">
              Need a manifest before moving budget?{" "}
              <Link href="/kit" className="font-semibold text-foreground underline-offset-4 hover:underline">
                Open the kit index
              </Link>{" "}
              Filenames mirror each preview on `/blocks`.
            </div>
          </MarketingContainer>
        </section>

        <PricingSingle
          checkoutHref={GUMROAD_CHECKOUT_URL}
          eyebrow="Hexagon UI · v1"
          title="Checkout takes under a minute"
          priceLabel="$79"
          priceHint="One-time purchase · VAT handled by Gumroad · perpetual download link"
          bullets={hexagonPricingBullets}
          checkoutLabel="Buy on Gumroad"
          id="checkout"
          headingAlign="center"
          className="scroll-mt-24 border-t border-border/80 bg-background py-16 sm:py-24"
        />

        <FaqAccordion
          title="Billing & licensing"
          items={hexagonPricingFaq}
          id="pricing-faq"
          className="border-t border-border/80 bg-muted/[0.08] py-16 sm:py-24"
        />
      </main>
      <FooterSimple
        brandName="Hexagon UI"
        tagline="Built for teams shipping marketing pages fast."
        links={hexagonFooterLinks}
      />
    </>
  );
}
