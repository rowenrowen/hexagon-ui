import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Layers,
  Package,
  Palette,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { FooterSimple, FaqAccordion } from "@/components/blocks";
import { FreeStarterDownloadLink } from "@/components/marketing/free-starter-download-link";
import { BLOCK_COUNT, FREE_STARTER_COUNT } from "@/content/blocks-catalog";
import { hexagonFooterLinks, hexagonPricingFaq } from "@/content/hexagon-landing";
import { GUMROAD_CHECKOUT_URL } from "@/lib/checkout-url";
import { SITE_PRIMARY_PURCHASE_CLASSES, SITE_SECONDARY_OUTLINE_CLASSES } from "@/lib/site-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Hexagon UI pricing — free starter ZIP with 10 curated sections, or one-time $79 for the full library, README, HANDOFF, and v1.x updates.",
};

const FREE_BULLETS = [
  `${FREE_STARTER_COUNT} curated sections — hero through conversion tail`,
  "Same shared CSS variables as the paid kit",
  "Drop-in React + Tailwind, no account required",
  "Re-download anytime from the same hosted URL",
];

const FULL_BULLETS = [
  `All ${BLOCK_COUNT} curated sections as React + Tailwind sources`,
  "shadcn-compatible token file (`hexagon-ui-variables.css`)",
  "README + buyer-facing HANDOFF docs",
  "v1.x maintenance drops via Gumroad library",
  "Commercial license per Gumroad listing",
  "Lifetime download — VAT handled at checkout",
];

const INCLUDED_TILES = [
  {
    icon: Layers,
    title: `${BLOCK_COUNT} curated sections`,
    body: "Heroes, proof strips, pricing patterns, FAQ, and conversion polish — composed like a premium block library.",
  },
  {
    icon: Code2,
    title: "Paste-ready React + Tailwind",
    body: "Real components, not screenshots. Tune copy and tokens without fighting ad-hoc markup.",
  },
  {
    icon: Palette,
    title: "shadcn-compatible tokens",
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

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <MarketingPageHero
          eyebrow="Pricing"
          title="Try free. Unlock everything for $79."
          description={
            <>
              Start with <strong className="text-foreground">{FREE_STARTER_COUNT} curated sections</strong> on us — same tokens as
              the paid kit. When you&apos;re ready, one Gumroad checkout unlocks every remaining block, the shared token file, and
              stakeholder docs. No subscription, no negotiation.
            </>
          }
          actions={
            <>
              <Link href="#plans" className={SITE_PRIMARY_PURCHASE_CLASSES}>
                Compare plans
              </Link>
              <Link href="/blocks" className={SITE_SECONDARY_OUTLINE_CLASSES}>
                Browse blocks
                <ArrowRight className="size-4 opacity-70" aria-hidden />
              </Link>
            </>
          }
        />

        <section
          id="plans"
          className="scroll-mt-20 border-b border-border/70 bg-muted/[0.06] py-20 sm:py-28 lg:py-32"
        >
          <MarketingContainer>
            <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2 lg:gap-6">
              <article className="flex flex-col rounded-2xl border border-border/80 bg-card p-7 shadow-[0_1px_0_oklch(0_0_0/0.03)] sm:p-9 dark:shadow-[0_1px_0_oklch(1_0_0/0.04)]">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Free starter</p>
                  <span className="rounded-full border border-border/70 bg-background px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    Hosted ZIP
                  </span>
                </div>
                <p className="mt-6 flex items-baseline gap-2 text-foreground">
                  <span className="text-5xl font-semibold tracking-tight sm:text-6xl">$0</span>
                  <span className="text-sm text-muted-foreground">forever</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A strong starting point — no account, no Gumroad needed until you upgrade.
                </p>

                <ul className="mt-8 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                  {FREE_BULLETS.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.25} aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-2 pt-10 sm:flex-row">
                  <FreeStarterDownloadLink
                    className={`${SITE_SECONDARY_OUTLINE_CLASSES} h-11 w-full justify-center px-5 text-[15px] sm:flex-1`}
                  >
                    Download free ZIP
                  </FreeStarterDownloadLink>
                  <Link
                    href="/blocks"
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg px-5 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex-1"
                  >
                    Preview on blocks
                    <ArrowRight className="ml-1.5 size-4 opacity-70" strokeWidth={2} aria-hidden />
                  </Link>
                </div>
              </article>

              <article className="relative flex flex-col overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/[0.07] via-card to-card p-7 shadow-[0_18px_44px_-22px_oklch(0_0_0/0.25)] ring-1 ring-primary/20 sm:p-9 dark:shadow-[0_22px_50px_-22px_oklch(0_0_0/0.7)]">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Full Hexagon UI kit</p>
                  <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    Most popular
                  </span>
                </div>
                <p className="mt-6 flex items-baseline gap-2 text-foreground">
                  <span className="text-5xl font-semibold tracking-tight sm:text-6xl">$79</span>
                  <span className="text-sm text-muted-foreground">one-time</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Lifetime download · VAT handled by Gumroad · v1.x updates included.
                </p>

                <ul className="mt-8 flex flex-col gap-3 text-sm leading-relaxed text-card-foreground">
                  {FULL_BULLETS.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.25} aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-2 pt-10 sm:flex-row">
                  <Link
                    href={GUMROAD_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${SITE_PRIMARY_PURCHASE_CLASSES} h-11 w-full justify-center px-5 text-[15px] sm:flex-1`}
                  >
                    Buy on Gumroad
                  </Link>
                  <Link
                    href="/blocks"
                    className={`${SITE_SECONDARY_OUTLINE_CLASSES} h-11 w-full justify-center px-5 text-[15px] sm:flex-1`}
                  >
                    Browse blocks
                    <ArrowRight className="size-4 opacity-70" aria-hidden />
                  </Link>
                </div>
              </article>
            </div>
          </MarketingContainer>
        </section>

        <section className="border-b border-border/70 py-20 sm:py-28 lg:py-32">
          <MarketingContainer>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Included</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Everything in the paid kit
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
                One Gumroad SKU covers every section in the catalog beyond the free starter, plus the shared token file and
                stakeholder docs. Still one negotiation-free checkout.
              </p>
            </div>

            <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {INCLUDED_TILES.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-[0_1px_0_oklch(0_0_0/0.03)] transition-[border-color,box-shadow] hover:border-border hover:shadow-md sm:p-7 dark:shadow-[0_1px_0_oklch(1_0_0/0.04)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-dashed border-border/80 bg-background/80 px-6 py-5 text-center text-sm leading-relaxed text-muted-foreground">
              Need a manifest before moving budget?{" "}
              <Link href="/kit" className="font-semibold text-foreground underline-offset-4 hover:underline">
                Open the kit index
              </Link>{" "}
              — filenames mirror each preview on{" "}
              <Link href="/blocks" className="font-semibold text-foreground underline-offset-4 hover:underline">
                /blocks
              </Link>
              .
            </div>
          </MarketingContainer>
        </section>

        <FaqAccordion
          title="Billing & licensing"
          items={hexagonPricingFaq}
          id="pricing-faq"
          className="border-t border-border/70 bg-muted/[0.06]"
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
