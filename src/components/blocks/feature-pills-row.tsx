const PILLS = ["SOC 2 ready", "EU hosting", "99.9% SLA", "SSO / SCIM", "CSV & API export"];

export type FeaturePillsRowProps = { labels?: string[]; className?: string };

export function FeaturePillsRow({ labels = PILLS, className }: FeaturePillsRowProps = {}) {
  return (
    <section className={`py-10 ${className ?? ""}`}>
      <div className="site-grid">
        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-[background-color,border-color,color,transform] hover:border-primary/30 hover:bg-primary/8 hover:text-foreground active:scale-[0.98]"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
