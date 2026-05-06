import { BlockReveal, BlockRevealLi } from "./block-reveal";

export type LogoCloudItem = { name: string };

export const logoCloudDefaults = {
  title: "Trusted by teams who ship",
  subtitle: "Swap these placeholders for SVG logos — keep height consistent for a clean row.",
  items: [
    { name: "Northwind" },
    { name: "Acme" },
    { name: "Globex" },
    { name: "Umbrella" },
    { name: "Stark" },
    { name: "Wayne" },
  ] satisfies LogoCloudItem[],
};

export type LogoCloudProps = {
  title?: string;
  subtitle?: string;
  items?: LogoCloudItem[];
  id?: string;
  className?: string;
};

export function LogoCloud({
  title = logoCloudDefaults.title,
  subtitle = logoCloudDefaults.subtitle,
  items = logoCloudDefaults.items,
  id,
  className,
}: LogoCloudProps) {
  return (
    <section id={id} className={`border-b border-border bg-card/30 px-4 py-14 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl text-center">
        <BlockReveal>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
        </BlockReveal>
        <ul className="mt-10 flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {items.map(({ name }, i) => (
            <BlockRevealLi key={name} delay={i * 0.05}>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
                {name}
              </span>
            </BlockRevealLi>
          ))}
        </ul>
      </div>
    </section>
  );
}
