export type RoadmapMilestone = { phase: string; title: string; window: string };

export type RoadmapInlineProps = {
  milestones?: RoadmapMilestone[];
  className?: string;
};

export const roadmapInlineDefaults: RoadmapMilestone[] = [
  { phase: "Now", title: "ZIP + README parity", window: "Shipped" },
  { phase: "Next", title: "Motion polish pack", window: "Q3" },
  { phase: "Later", title: "Figma companion", window: "Research" },
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
        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {milestones.map((m, i) => (
            <li key={m.title} className="relative rounded-xl border border-border bg-card p-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{m.phase}</span>
              <p className="mt-2 font-semibold text-card-foreground">{m.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.window}</p>
              {i < milestones.length - 1 ? (
                <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border sm:block" aria-hidden />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
