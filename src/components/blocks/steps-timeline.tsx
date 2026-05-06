import { BlockReveal, BlockRevealLi } from "./block-reveal";

export type StepItem = { title: string; description: string };

export const stepsTimelineDefaults = {
  title: "How teams roll it out",
  subtitle: "Four clear steps — tune labels for onboarding, migration, or enterprise sales.",
  steps: [
    { title: "Map tokens", description: "Merge CSS variables with your theme generator output." },
    { title: "Paste blocks", description: "Copy files; fix import aliases and next/link vs anchors." },
    { title: "Swap copy", description: "Replace defaults with product-specific messaging." },
    { title: "Ship", description: "Connect checkout, analytics, and legal in your layout shell." },
  ] satisfies StepItem[],
};

export type StepsTimelineProps = {
  title?: string;
  subtitle?: string;
  steps?: StepItem[];
  id?: string;
  className?: string;
};

export function StepsTimeline({
  title = stepsTimelineDefaults.title,
  subtitle = stepsTimelineDefaults.subtitle,
  steps = stepsTimelineDefaults.steps,
  id,
  className,
}: StepsTimelineProps) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <BlockReveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        </BlockReveal>
        <ol className="mt-14 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <BlockRevealLi
              key={step.title}
              delay={index * 0.08}
              hoverLift
              className="relative rounded-xl border border-border bg-card p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
            </BlockRevealLi>
          ))}
        </ol>
      </div>
    </section>
  );
}
