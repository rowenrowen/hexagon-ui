const CELLS = ["Stripe", "Slack", "Notion", "Vercel", "Linear", "Datadog"];

export type PartnerLogoGridProps = { className?: string };

export function PartnerLogoGrid({ className }: PartnerLogoGridProps = {}) {
  return (
    <section className={`py-12 ${className ?? ""}`}>
      <div className="site-grid">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Partners</p>
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {CELLS.map((name) => (
            <div key={name} className="flex min-h-[5rem] items-center justify-center bg-card text-sm font-semibold text-muted-foreground">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
