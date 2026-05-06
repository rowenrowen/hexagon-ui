import type { ReactNode } from "react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { AuroraBackground } from "@/components/aurora-background";

type MarketingPageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  /** Centered actions row (links/buttons) */
  actions?: ReactNode;
};

/** Shared hero band for Pricing, Blocks, Kit, Guide — aurora mesh + subtle grid (Magic-UI–adjacent polish, no extra deps). */
export function MarketingPageHero({ eyebrow, title, description, actions }: MarketingPageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/80 bg-muted/15">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 opacity-[0.55] dark:opacity-[0.45]">
          <AuroraBackground />
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0_0_0/0.045)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0/0.045)_1px,transparent_1px)] bg-[length:48px_48px] dark:bg-[linear-gradient(to_right,oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.06)_1px,transparent_1px)]"
          style={{ maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 18%, transparent 72%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/90 dark:via-background/25 dark:to-background" />
      </div>

      <MarketingContainer className="relative py-14 text-center sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
        <h1 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">{description}</p>
        {actions ? <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{actions}</div> : null}
      </MarketingContainer>
    </section>
  );
}
