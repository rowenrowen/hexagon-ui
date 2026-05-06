export type QuoteSplitProps = {
  quote?: string;
  attribution?: string;
  stats?: { value: string; label: string }[];
  className?: string;
};

export const quoteSplitDefaults = {
  quote:
    "“We stopped rewriting hero spacing every campaign. Tokens + blocks meant marketing could swap copy without opening Figma for pixels.”",
  attribution: "Jamie Chen · VP Marketing, placeholder SaaS",
  stats: [
    { value: "-62%", label: "Time to publish" },
    { value: "+18pts", label: "Trial activation" },
  ],
};

export function QuoteSplit(props: Partial<QuoteSplitProps> = {}) {
  const p = { ...quoteSplitDefaults, ...props };
  return (
    <section className={`border-y border-border bg-muted/15 py-16 ${p.className ?? ""}`}>
      <div className="site-grid grid gap-10 lg:grid-cols-2 lg:items-center">
        <blockquote className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">{p.quote}</blockquote>
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">{p.attribution}</p>
          <dl className="grid grid-cols-2 gap-6">
            {p.stats?.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                <dd className="mt-1 text-3xl font-semibold text-primary">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
