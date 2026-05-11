import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { FreeStarterDownloadLink } from "@/components/marketing/free-starter-download-link";
import { BLOCK_COUNT, FREE_STARTER_COUNT } from "@/content/blocks-catalog";
import { SITE_PRIMARY_PURCHASE_CLASSES, SITE_SECONDARY_OUTLINE_CLASSES } from "@/lib/site-cta";

const FREE_BULLETS = [
  `${FREE_STARTER_COUNT} curated sections — hero through conversion tail`,
  "Same shared CSS variables as the paid kit",
  "Drop-in React + Tailwind, no account required",
];

const FULL_BULLETS = [
  `All ${BLOCK_COUNT} curated sections as React + Tailwind sources`,
  "shadcn-compatible token file — theme everything in one pass",
  "README + HANDOFF docs for stakeholder review",
  "v1.x maintenance updates via Gumroad",
];

export function HomePricingSnapshot() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 border-t border-border/60 bg-muted/[0.08] py-20 sm:py-28 lg:py-32"
    >
      <MarketingContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Pricing</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Try free. Unlock the full library once.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Start with the free starter ZIP — same tokens as the paid kit. Upgrade for the full curated family with one
            negotiation-free checkout.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2 lg:gap-6">
          <article className="flex flex-col rounded-2xl border border-border/80 bg-card p-7 shadow-[0_1px_0_oklch(0_0_0/0.03)] sm:p-8 dark:shadow-[0_1px_0_oklch(1_0_0/0.04)]">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Free starter</p>
              <span className="rounded-full border border-border/70 bg-background px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                $0
              </span>
            </div>
            <p className="mt-5 flex items-baseline gap-2 text-foreground">
              <span className="text-4xl font-semibold tracking-tight sm:text-5xl">$0</span>
              <span className="text-sm text-muted-foreground">forever</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Hosted ZIP — no Gumroad needed until you upgrade.
            </p>

            <ul className="mt-7 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              {FREE_BULLETS.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.25} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-2 pt-8 sm:flex-row">
              <FreeStarterDownloadLink
                className={`${SITE_SECONDARY_OUTLINE_CLASSES} h-11 w-full justify-center px-5 text-[15px] sm:flex-1`}
              >
                Download free ZIP
              </FreeStarterDownloadLink>
              <Link
                href="/pricing"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg px-5 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex-1"
              >
                Compare plans
                <ArrowRight className="ml-1.5 size-4 opacity-70" strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/[0.07] via-card to-card p-7 shadow-[0_18px_44px_-22px_oklch(0_0_0/0.25)] ring-1 ring-primary/20 sm:p-8 dark:shadow-[0_22px_50px_-22px_oklch(0_0_0/0.7)]">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Full Hexagon UI kit</p>
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                Most popular
              </span>
            </div>
            <p className="mt-5 flex items-baseline gap-2 text-foreground">
              <span className="text-4xl font-semibold tracking-tight sm:text-5xl">$79</span>
              <span className="text-sm text-muted-foreground">one-time</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Lifetime download · VAT handled by Gumroad · v1.x updates included.
            </p>

            <ul className="mt-7 flex flex-col gap-3 text-sm leading-relaxed text-card-foreground">
              {FULL_BULLETS.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.25} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-2 pt-8 sm:flex-row">
              <Link
                href="/pricing"
                className={`${SITE_PRIMARY_PURCHASE_CLASSES} h-11 w-full justify-center px-5 text-[15px] sm:flex-1`}
              >
                Get full access
              </Link>
              <Link
                href="/blocks"
                className={`${SITE_SECONDARY_OUTLINE_CLASSES} h-11 w-full justify-center px-5 text-[15px] sm:flex-1`}
              >
                Browse blocks
                <ArrowRight className="size-4 opacity-70" strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </MarketingContainer>
    </section>
  );
}
