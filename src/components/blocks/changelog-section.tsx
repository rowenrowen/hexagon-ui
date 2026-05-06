import { BlockReveal } from "./block-reveal";

export type ChangelogEntry = { version: string; date: string; title: string; body: string };

export const changelogSectionDefaults = {
  title: "Changelog",
  subtitle: "Pair with BlogTeaserRow or embed in /changelog route — copy is plain text for easy CMS swap.",
  entries: [
    {
      version: "0.3.0",
      date: "Template",
      title: "Replace with your ship train",
      body: "Wire this block to your changelog source (MDX, CMS, or static JSON).",
    },
    {
      version: "0.2.0",
      date: "Template",
      title: "Second release row",
      body: "Short description of what changed for customers.",
    },
    {
      version: "0.1.0",
      date: "Template",
      title: "Initial public notes",
      body: "First entry for early access or GA.",
    },
  ] satisfies ChangelogEntry[],
};

export type ChangelogSectionProps = {
  title?: string;
  subtitle?: string;
  entries?: ChangelogEntry[];
  id?: string;
  className?: string;
};

export function ChangelogSection({
  title = changelogSectionDefaults.title,
  subtitle = changelogSectionDefaults.subtitle,
  entries = changelogSectionDefaults.entries,
  id,
  className,
}: ChangelogSectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-20 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-3xl">
        <BlockReveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </BlockReveal>
        <ol className="mt-12 space-y-0">
          {entries.map((e, i) => (
            <li key={e.version} className="flex gap-5">
              <div className="relative flex w-3 shrink-0 flex-col items-center pt-2" aria-hidden>
                <span className="relative z-10 size-3 shrink-0 rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px] shadow-background" />
                {i < entries.length - 1 ? (
                  <span className="absolute left-1/2 top-[calc(0.5rem+6px)] h-[calc(100%-0.5rem)] w-px -translate-x-1/2 bg-border" />
                ) : null}
              </div>
              <BlockReveal className="min-w-0 flex-1" delay={i * 0.06} y={10}>
                <div className={i < entries.length - 1 ? "pb-12" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {e.version} · {e.date}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                </div>
              </BlockReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
