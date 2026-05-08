import { TrendingUp } from "lucide-react";

export type StatsBigProps = {
  value?: string;
  label?: string;
  supporting?: string;
  /** Short secondary metrics shown beside / under the hero stat */
  chips?: ReadonlyArray<{ label: string; value: string }>;
  className?: string;
};

const defaultChips: StatsBigProps["chips"] = [
  { label: "Time to credible LP", value: "Days, not sprints" },
  { label: "Motion defaults", value: "Reduced-motion safe" },
];

export function StatsBig({
  value = "12×",
  label = "Faster from blank repo to shippable marketing UI",
  supporting =
    "Pilot teams replaced one-off landing rebuilds with structured blocks, shared tokens, and motion only where it earns attention.",
  chips = defaultChips,
  className,
}: Partial<StatsBigProps> = {}) {
  return (
    <section
      className={`relative overflow-hidden border-y border-border bg-gradient-to-br from-primary/[0.09] via-background to-muted/30 py-16 sm:py-24 ${className ?? ""}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0_0_0/0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(0_0_0/0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 65% at 50% 35%, black 10%, transparent 70%)",
        }}
      />
      <div className="site-grid relative">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <TrendingUp className="size-3.5" strokeWidth={2} aria-hidden />
              Proof point
            </div>
            <p className="mt-6 font-mono text-5xl font-semibold tracking-tight text-primary sm:text-6xl lg:text-7xl">{value}</p>
            <p className="mt-4 text-pretty text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">{label}</p>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground lg:mx-0">
              {supporting}
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-md shrink-0 gap-3 sm:grid-cols-2 lg:mx-0 lg:max-w-sm lg:grid-cols-1">
            {chips?.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-border/90 bg-card/80 px-4 py-3 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card/60 dark:ring-white/[0.06]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
