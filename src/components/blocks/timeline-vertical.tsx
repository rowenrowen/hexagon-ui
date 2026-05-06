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
        <ol className="relative mt-10 space-y-8 border-l border-border pl-8">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[39px] flex size-6 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-primary">
                {i + 1}
              </span>
              <p className="font-semibold text-foreground">{s.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
