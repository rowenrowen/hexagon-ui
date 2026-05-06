const OUTLETS = ["TechFrontier", "BuildWeekly", "SaaS Journal", "UI Bulletin", "Product Pulse"];

export type PressStripProps = {
  headline?: string;
  outlets?: string[];
  className?: string;
};

export function PressStrip({
  headline = "As featured in",
  outlets = OUTLETS,
  className,
}: Partial<PressStripProps> = {}) {
  return (
    <section className={`border-y border-border bg-muted/15 py-10 ${className ?? ""}`}>
      <div className="site-grid">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">{headline}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {outlets.map((o) => (
            <span key={o} className="text-sm font-semibold text-muted-foreground">
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
