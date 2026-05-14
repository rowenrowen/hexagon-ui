const CARDS = [
  { title: "Week 1 · Discovery", body: "Align on success metrics, current tooling, and who signs off on go-live — no surprises in week four." },
  { title: "Week 2 · Pilot cohort", body: "Stand up a single team on production-like data with weekly office hours and shared Slack triage." },
  { title: "Week 3 · Scale plan", body: "Document training, rollout waves, and support coverage so expansion does not depend on one hero engineer." },
];

export type CardStackMiniProps = { className?: string };

export function CardStackMini({ className }: CardStackMiniProps = {}) {
  return (
    <section className={`py-16 ${className ?? ""}`}>
      <div className="site-grid">
        <h2 className="text-xl font-semibold text-foreground">How teams roll out</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          A simple three-step narrative buyers recognize — swap titles for your onboarding story.
        </p>
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
