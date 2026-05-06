const PILLS = ["Audit-ready", "WCAG-minded", "ZIP parity", "Motion-safe", "Token-first"];

export type FeaturePillsRowProps = { labels?: string[]; className?: string };

export function FeaturePillsRow({ labels = PILLS, className }: FeaturePillsRowProps = {}) {
  return (
    <section className={`py-10 ${className ?? ""}`}>
      <div className="site-grid">
        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
