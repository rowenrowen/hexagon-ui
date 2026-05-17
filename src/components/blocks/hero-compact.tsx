import { KIT_PRIMARY_PILL } from "@/lib/kit-button-classes";
import { MarketingLink } from "./marketing-link";

export type HeroCompactProps = {
  headline: string;
  sub: string;
  cta: { href: string; label: string };
  className?: string;
};

export const heroCompactDefaults: HeroCompactProps = {
  headline: "Above-the-fold clarity",
  sub: "Minimal centered hero for launches that already have brand heat — pair with a bold stats row below.",
  cta: { href: "#", label: "Primary action" },
};

export function HeroCompact(props: Partial<HeroCompactProps> = {}) {
  const p = { ...heroCompactDefaults, ...props };
  return (
    <section className={`border-b border-border bg-muted/20 py-14 sm:py-20 ${p.className ?? ""}`}>
      <div className="site-grid text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{p.headline}</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{p.sub}</p>
        <MarketingLink
          href={p.cta.href}
          className={`mt-8 ${KIT_PRIMARY_PILL} px-6 py-3`}
        >
          {p.cta.label}
        </MarketingLink>
      </div>
    </section>
  );
}
