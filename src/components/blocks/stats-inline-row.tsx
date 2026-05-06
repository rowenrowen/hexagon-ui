export type StatInline = { value: string; label: string };

export type StatsInlineRowProps = { items?: StatInline[]; className?: string };

export const statsInlineRowDefaults: StatInline[] = [
  { value: "4.9★", label: "Avg satisfaction" },
  { value: "11k", label: "Weekly deploys" },
  { value: "52ms", label: "Median TTFB" },
  { value: "38", label: "Locales" },
];

export function StatsInlineRow({ items = statsInlineRowDefaults, className }: StatsInlineRowProps = {}) {
  return (
    <section className={`border-y border-border bg-card/30 py-8 ${className ?? ""}`}>
      <div className="site-grid">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((s) => (
            <div key={s.label}>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
