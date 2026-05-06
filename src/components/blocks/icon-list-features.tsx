import { Cpu, Gauge, ShieldCheck } from "lucide-react";

const ROWS = [
  {
    icon: Cpu,
    title: "Composable pipelines",
    body: "Wire sections like Lego — reorder without orphan spacing because tokens anchor rhythm.",
  },
  {
    icon: Gauge,
    title: "Performance-minded defaults",
    body: "Motion is opt-in per component; static shells stay cheap for Lighthouse budgets.",
  },
  {
    icon: ShieldCheck,
    title: "Accessible disclosure",
    body: "FAQ + tabs keep keyboard paths explicit — swap colors, not behavior.",
  },
];

export type IconListFeaturesProps = { className?: string };

export function IconListFeatures({ className }: IconListFeaturesProps = {}) {
  return (
    <section className={`py-16 ${className ?? ""}`}>
      <div className="site-grid max-w-3xl space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Why teams adopt blocks</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Vertical list reads fast on mobile — pair with a screenshot on desktop by splitting layout upstream.
          </p>
        </div>
        <ul className="space-y-8">
          {ROWS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
