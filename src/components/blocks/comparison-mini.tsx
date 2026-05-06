import { Check, X } from "lucide-react";

const ROWS = [
  { label: "Token bundle included", a: true, b: true },
  { label: "ZIP refreshed during v1.x", a: true, b: false },
  { label: "Commercial resale rights", a: true, b: false },
];

export type ComparisonMiniProps = { className?: string };

export function ComparisonMini({ className }: ComparisonMiniProps = {}) {
  return (
    <section className={`py-16 ${className ?? ""}`}>
      <div className="site-grid max-w-3xl">
        <h2 className="text-xl font-semibold text-foreground">Mini comparison</h2>
        <p className="mt-2 text-sm text-muted-foreground">Two-column matrix without sticky headers — great mid-page.</p>
        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-[1fr_5rem_5rem] gap-px bg-border text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <div className="bg-muted/50 px-4 py-3 text-left text-foreground">Capability</div>
            <div className="bg-muted/50 py-3 text-center">Kit</div>
            <div className="bg-muted/50 py-3 text-center">DIY</div>
          </div>
          {ROWS.map((row) => (
            <div key={row.label} className="grid grid-cols-[1fr_5rem_5rem] gap-px bg-border">
              <div className="bg-card px-4 py-3 text-sm text-card-foreground">{row.label}</div>
              <div className="flex items-center justify-center bg-card py-3">
                {row.a ? <Check className="size-4 text-primary" /> : <X className="size-4 text-muted-foreground" />}
              </div>
              <div className="flex items-center justify-center bg-card py-3">
                {row.b ? <Check className="size-4 text-primary" /> : <X className="size-4 text-muted-foreground" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
