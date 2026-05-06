export type MetricHighlight = { value: string; label: string; hint?: string };

export type MetricsHighlightRowProps = {
  items?: MetricHighlight[];
  className?: string;
};

export const metricsHighlightRowDefaults: MetricHighlight[] = [
  { value: "99.95%", label: "Measured uptime", hint: "rolling 90d" },
  { value: "<120ms", label: "p95 API latency", hint: "global edge" },
  { value: "4.8★", label: "Buyer satisfaction", hint: "post-release survey" },
];

export function MetricsHighlightRow({
  items = metricsHighlightRowDefaults,
  className,
}: MetricsHighlightRowProps) {
  return (
    <section className={`py-16 ${className ?? ""}`}>
      <div className="site-grid grid gap-6 sm:grid-cols-3">
        {items.map((m) => (
          <div key={m.label} className="rounded-xl border border-border bg-card px-5 py-6 shadow-sm">
            <p className="text-3xl font-semibold tracking-tight text-card-foreground">{m.value}</p>
            <p className="mt-2 text-sm font-medium text-card-foreground">{m.label}</p>
            {m.hint ? <p className="mt-1 text-xs text-muted-foreground">{m.hint}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
