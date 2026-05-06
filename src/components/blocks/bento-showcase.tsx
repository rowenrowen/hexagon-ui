import type { LucideIcon } from "lucide-react";
import { Gauge, Lock, Sparkles, Workflow } from "lucide-react";
import { BlockReveal, BlockRevealLi } from "./block-reveal";

export type BentoCell = {
  title: string;
  body: string;
  icon: LucideIcon;
  className?: string;
};

export const bentoShowcaseDefaults = {
  title: "Everything in one pass",
  subtitle: "Asymmetric bento grid — pair with screenshots or charts in the large cell.",
  cells: [
    {
      icon: Workflow,
      title: "Composable flow",
      body: "Reorder sections without breaking rhythm; tokens keep contrast consistent.",
      className: "sm:col-span-2 min-h-[200px]",
    },
    {
      icon: Sparkles,
      title: "Motion on purpose",
      body: "Client islands only where animation earns attention.",
    },
    {
      icon: Lock,
      title: "Buyer-friendly",
      body: "Plain React + Tailwind — no proprietary runtime.",
    },
    {
      icon: Gauge,
      title: "Performance-aware",
      body: "Static shells by default; lazy-load heavy media from your CMS.",
      className: "sm:col-span-2",
    },
  ] satisfies BentoCell[],
};

export type BentoShowcaseProps = {
  title?: string;
  subtitle?: string;
  cells?: BentoCell[];
  id?: string;
  className?: string;
};

export function BentoShowcase({
  title = bentoShowcaseDefaults.title,
  subtitle = bentoShowcaseDefaults.subtitle,
  cells = bentoShowcaseDefaults.cells,
  id,
  className,
}: BentoShowcaseProps) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <BlockReveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        </BlockReveal>
        <ul className="mt-12 grid list-none gap-4 sm:grid-cols-2">
          {cells.map(({ icon: Icon, title: t, body, className: cellClass }, i) => (
            <BlockRevealLi
              key={t}
              delay={i * 0.08}
              hoverLift
              className={`rounded-2xl border border-border bg-card p-6 shadow-sm shadow-black/10 transition-shadow hover:shadow-md hover:shadow-black/15 ${cellClass ?? ""}`}
            >
              <Icon className="size-7 text-primary" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </BlockRevealLi>
          ))}
        </ul>
      </div>
    </section>
  );
}
