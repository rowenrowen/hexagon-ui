const STEPS = [
  { title: "Purchase & receipt", body: "Gumroad emails the ZIP link instantly — forward to engineering." },
  { title: "Merge tokens", body: "Drop CSS variables next to your generator output; reconcile naming once." },
  { title: "Paste blocks", body: "Import paths align with Next.js defaults — swap aliases if you use Vite." },
  { title: "Ship", body: "Replace copy, wire analytics, publish — marketing edits stay inside JSX strings." },
];

export type TimelineVerticalProps = { className?: string };

export function TimelineVertical({ className }: TimelineVerticalProps = {}) {
  return (
    <section className={`py-16 ${className ?? ""}`}>
      <div className="site-grid max-w-2xl">
        <h2 className="text-xl font-semibold text-foreground">Vertical timeline</h2>
        <p className="mt-2 text-sm text-muted-foreground">Perfect for onboarding flows or launch sequences.</p>
        <ol className="mt-10 space-y-0">
          {STEPS.map((s, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <li key={s.title} className="flex gap-4">
                {/* Marker column: badge + connector line. The line lives
                    BETWEEN badges and stops at the last badge, so it never
                    bleeds past the final step. The line is positioned in
                    the same flex column as the badge so it stays perfectly
                    centered on the number marker. */}
                <div className="flex flex-col items-center">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  {isLast ? null : <span aria-hidden className="mt-1 w-px flex-1 bg-border" />}
                </div>
                <div className={isLast ? "pb-1" : "pb-8"}>
                  <p className="font-semibold leading-6 text-foreground">{s.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
