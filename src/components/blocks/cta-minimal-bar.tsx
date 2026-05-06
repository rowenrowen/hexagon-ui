import { MarketingLink } from "./marketing-link";

export type CtaMinimalBarProps = {
  text?: string;
  href?: string;
  label?: string;
  className?: string;
};

export function CtaMinimalBar({
  text = "Ready to paste sections into your repo?",
  href = "#",
  label = "Browse blocks",
  className,
}: Partial<CtaMinimalBarProps> = {}) {
  return (
    <section className={`border-y border-border bg-muted/25 py-6 ${className ?? ""}`}>
      <div className="site-grid flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm font-medium text-foreground">{text}</p>
        <MarketingLink href={href} className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90">
          {label}
        </MarketingLink>
      </div>
    </section>
  );
}
