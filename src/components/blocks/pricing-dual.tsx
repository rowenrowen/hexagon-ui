import { Check } from "lucide-react";
import { KIT_PRIMARY_PILL_BLOCK, KIT_SECONDARY_PILL_BLOCK } from "@/lib/kit-button-classes";
import { MarketingLink } from "./marketing-link";

export type PricingDualTier = {
  name: string;
  price: string;
  hint?: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  emphasized?: boolean;
};

export type PricingDualProps = {
  title?: string;
  subtitle?: string;
  tiers?: PricingDualTier[];
  className?: string;
};

export const pricingDualDefaults: PricingDualTier[] = [
  {
    name: "Teams",
    price: "$49",
    hint: "per seat / mo · example",
    bullets: ["Shared blocks library", "Design token sync", "Slack support"],
    ctaLabel: "Start pilot",
    ctaHref: "#",
  },
  {
    name: "Business",
    price: "$129",
    hint: "per seat / mo · example",
    bullets: ["SOC2 narrative pack", "Quarterly reviews", "Dedicated CSM"],
    ctaLabel: "Talk to us",
    ctaHref: "#",
    emphasized: true,
  },
];

export function PricingDual({
  title = "Two-click decision matrix",
  subtitle = "Dual cards keep procurement conversations honest — replace numbers with your SKUs.",
  tiers = pricingDualDefaults,
  className,
}: Partial<PricingDualProps> = {}) {
  return (
    <section className={`py-16 sm:py-20 ${className ?? ""}`}>
      <div className="site-grid">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-4xl list-none gap-5 sm:grid-cols-2">
          {tiers.map((tier) => (
            <li
              key={tier.name}
              className={`flex flex-col rounded-xl border p-6 shadow-sm ${
                tier.emphasized ? "border-primary/45 bg-primary/5 shadow-md ring-1 ring-primary/15" : "border-border bg-card"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{tier.name}</p>
              <p className="mt-3 text-3xl font-semibold text-card-foreground">{tier.price}</p>
              {tier.hint ? <p className="mt-1 text-sm text-muted-foreground">{tier.hint}</p> : null}
              <ul className="mt-6 space-y-2.5">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-card-foreground">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <MarketingLink
                href={tier.ctaHref}
                className={`mt-8 ${tier.emphasized ? KIT_PRIMARY_PILL_BLOCK : KIT_SECONDARY_PILL_BLOCK}`}
              >
                {tier.ctaLabel}
              </MarketingLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
