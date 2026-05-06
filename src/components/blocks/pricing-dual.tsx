import { Check } from "lucide-react";
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
    <section className={`py-20 ${className ?? ""}`}>
      <div className="site-grid">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 shadow-sm ${tier.emphasized ? "border-primary/45 bg-primary/5 shadow-md ring-1 ring-primary/15" : "border-border bg-card"}`}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{tier.name}</p>
              <p className="mt-3 text-4xl font-semibold text-card-foreground">{tier.price}</p>
              {tier.hint ? <p className="mt-1 text-sm text-muted-foreground">{tier.hint}</p> : null}
              <ul className="mt-8 space-y-3">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-card-foreground">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <MarketingLink
                href={tier.ctaHref}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold ${
                  tier.emphasized
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-background hover:bg-muted"
                }`}
              >
                {tier.ctaLabel}
              </MarketingLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
