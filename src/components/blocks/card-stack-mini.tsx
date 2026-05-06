const CARDS = [
  { title: "Week 1 · Audit", body: "Inventory routes + tokens before migrating hero." },
  { title: "Week 2 · Paste", body: "Drop blocks folder; fix imports for your alias strategy." },
  { title: "Week 3 · Theme", body: "Point variables at brand palette; QA contrast once." },
];

export type CardStackMiniProps = { className?: string };

export function CardStackMini({ className }: CardStackMiniProps = {}) {
  return (
    <section className={`py-16 ${className ?? ""}`}>
      <div className="site-grid">
        <h2 className="text-xl font-semibold text-foreground">Three-card rollout</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-semibold text-card-foreground">{c.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
