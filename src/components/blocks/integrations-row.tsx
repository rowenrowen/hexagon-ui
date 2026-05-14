import { Plug } from "lucide-react";
import { BlockReveal, BlockRevealLi } from "./block-reveal";

export type IntegrationItem = { name: string };

export const integrationsRowDefaults = {
  title: "Plays with your stack",
  subtitle: "Swap labels for real product icons — keep a single stroke weight for polish.",
  items: [
    { name: "Next.js" },
    { name: "Tailwind" },
    { name: "Vercel" },
    { name: "GitHub" },
    { name: "Slack" },
  ] satisfies IntegrationItem[],
};

export type IntegrationsRowProps = {
  title?: string;
  subtitle?: string;
  items?: IntegrationItem[];
  id?: string;
  className?: string;
};

export function IntegrationsRow({
  title = integrationsRowDefaults.title,
  subtitle = integrationsRowDefaults.subtitle,
  items = integrationsRowDefaults.items,
  id,
  className,
}: IntegrationsRowProps) {
  return (
    <section id={id} className={`border-y border-border bg-card/40 px-4 py-16 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <BlockReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <Plug className="size-5" strokeWidth={1.75} aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-widest">Integrations</span>
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </BlockReveal>
        <ul className="mt-10 flex list-none flex-wrap gap-3">
          {items.map(({ name }, i) => (
            <BlockRevealLi
              key={name}
              delay={i * 0.05}
              hoverLift
              className="rounded-md border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-card-foreground"
            >
              {name}
            </BlockRevealLi>
          ))}
        </ul>
      </div>
    </section>
  );
}
