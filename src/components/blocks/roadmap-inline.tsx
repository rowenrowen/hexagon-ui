import { Fragment } from "react";

export type RoadmapMilestone = { phase: string; title: string; window: string };

export type RoadmapInlineProps = {
  milestones?: RoadmapMilestone[];
  className?: string;
};

export const roadmapInlineDefaults: RoadmapMilestone[] = [
  { phase: "Now", title: "Guided onboarding", window: "Live" },
  { phase: "Next", title: "EU data residency", window: "Q3" },
  { phase: "Later", title: "Fine-tuned industry models", window: "Roadmap" },
];

export function RoadmapInline({
  milestones = roadmapInlineDefaults,
  className,
}: Partial<RoadmapInlineProps> = {}) {
  return (
    <section className={`border-y border-border bg-muted/10 py-14 ${className ?? ""}`}>
      <div className="site-grid">
        <h2 className="text-xl font-semibold text-foreground">Product roadmap</h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Lightweight timeline — swap milestones with your public changelog cadence.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-2">
          {milestones.map((m, i) => (
            <Fragment key={m.title}>
              <article className="min-w-0 flex-1 rounded-xl border border-border bg-card p-5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{m.phase}</span>
                <p className="mt-2 font-semibold text-card-foreground">{m.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{m.window}</p>
              </article>
              {i < milestones.length - 1 ? (
                <div
                  aria-hidden
                  className="flex shrink-0 items-center justify-center py-2 sm:w-12 sm:self-stretch sm:py-0"
                >
                  <div className="h-px w-full max-w-[5rem] rounded-full bg-gradient-to-r from-border via-primary/40 to-border sm:max-w-none" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
