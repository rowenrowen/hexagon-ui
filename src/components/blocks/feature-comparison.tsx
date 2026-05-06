import { Check, Minus } from "lucide-react";
import { BlockReveal, BlockRevealTr } from "./block-reveal";

export type ComparisonRow = { feature: string; starter: boolean; growth: boolean; scale: boolean };

export const featureComparisonDefaults = {
  title: "Example plan matrix",
  subtitle:
    "Fictional Hobby / Pro / Enterprise — same pattern for your real plans. Extend with “partial” icons if you need nuance.",
  planNames: ["Hobby", "Pro", "Enterprise"] as const,
  rows: [
    { feature: "All marketing blocks", starter: false, growth: true, scale: true },
    { feature: "ZIP + README handoff", starter: true, growth: true, scale: true },
    { feature: "SSO & audit pack", starter: false, growth: false, scale: true },
    { feature: "Dedicated CSM", starter: false, growth: false, scale: true },
    { feature: "Community updates", starter: true, growth: true, scale: true },
  ] satisfies ComparisonRow[],
};

export type FeatureComparisonProps = {
  title?: string;
  subtitle?: string;
  planNames?: readonly [string, string, string];
  rows?: ComparisonRow[];
  id?: string;
  className?: string;
};

function Cell({ value }: { value: boolean }) {
  return (
    <div className="flex justify-center py-3">
      {value ? (
        <Check className="size-5 text-primary" strokeWidth={2} aria-label="Included" />
      ) : (
        <Minus className="size-5 text-muted-foreground/50" strokeWidth={1.5} aria-label="Not included" />
      )}
    </div>
  );
}

export function FeatureComparison({
  title = featureComparisonDefaults.title,
  subtitle = featureComparisonDefaults.subtitle,
  planNames = featureComparisonDefaults.planNames,
  rows = featureComparisonDefaults.rows,
  id,
  className,
}: FeatureComparisonProps) {
  const [a, b, c] = planNames;

  return (
    <section id={id} className={`border-y border-border bg-card/30 px-4 py-20 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-4xl">
        <BlockReveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        </BlockReveal>
        <BlockReveal className="mt-10 overflow-x-auto rounded-xl border border-border bg-card" delay={0.06} y={10}>
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-4 text-left font-semibold text-foreground">Capability</th>
                <th className="px-4 py-4 text-center font-semibold text-foreground">{a}</th>
                <th className="px-4 py-4 text-center font-semibold text-primary">{b}</th>
                <th className="px-4 py-4 text-center font-semibold text-foreground">{c}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <BlockRevealTr key={row.feature} delay={i * 0.04} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-muted-foreground">{row.feature}</td>
                  <td className="border-l border-border/80">
                    <Cell value={row.starter} />
                  </td>
                  <td className="border-l border-border/80 bg-primary/[0.04]">
                    <Cell value={row.growth} />
                  </td>
                  <td className="border-l border-border/80">
                    <Cell value={row.scale} />
                  </td>
                </BlockRevealTr>
              ))}
            </tbody>
          </table>
        </BlockReveal>
      </div>
    </section>
  );
}
