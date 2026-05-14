import { KIT_PRIMARY_PILL } from "@/lib/kit-button-classes";
import { MarketingLink } from "./marketing-link";

export type PricingAddonRowProps = {
  title?: string;
  price?: string;
  body?: string;
  ctaLabel?: string;
  href?: string;
  className?: string;
};

export function PricingAddonRow({
  title = "Priority onboarding workshop",
  price = "+$2.5k flat",
  body = "Half-day working session to map tokens, imports, and analytics events — optional upsell copy.",
  ctaLabel = "Add to quote",
  href = "#",
  className,
}: Partial<PricingAddonRowProps> = {}) {
  return (
    <section className={`px-4 py-10 sm:px-6 ${className ?? ""}`}>
      <div className="site-grid flex flex-col gap-4 rounded-xl border border-dashed border-primary/35 bg-primary/5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-lg font-semibold text-primary">{price}</span>
          <MarketingLink href={href} className={`${KIT_PRIMARY_PILL} px-4 py-2`}>
            {ctaLabel}
          </MarketingLink>
        </div>
      </div>
    </section>
  );
}
