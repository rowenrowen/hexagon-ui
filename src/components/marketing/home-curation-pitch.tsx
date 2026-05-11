import { CheckCircle2, Clock3, SearchX } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";

const endlessRepo = [
  "Dozens of near-duplicate sections to compare before you can decide.",
  "Inconsistent quality across blocks, so teams rework details anyway.",
  "More browsing time, less shipping time.",
];

const curatedKit = [
  "A deliberately small set of high-impact sections used on real SaaS pages.",
  "Consistent visual quality, spacing rhythm, and token structure.",
  "Faster selection, faster theming, faster launches.",
];

export function HomeCurationPitch() {
  return (
    <section className="border-y border-border bg-muted/[0.12] py-16 sm:py-20">
      <MarketingContainer>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Approach</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Curated blocks beat endless repositories
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            Hexagon UI is built for teams that want pixel-accurate sections quickly, not an all-day browsing session. We focus on
            the blocks that carry real marketing pages from first impression to conversion.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <SearchX className="size-4" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">Endless library problem</p>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {endlessRepo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.08] via-card to-card p-6 shadow-sm ring-1 ring-primary/15">
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="size-4" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">Hexagon UI model</p>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-card-foreground">
              {curatedKit.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
          <Clock3 className="size-4" aria-hidden />
          <p>Designed for speed: evaluate quickly, adapt tokens once, then ship.</p>
        </div>
      </MarketingContainer>
    </section>
  );
}
