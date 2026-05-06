export type StatsBigProps = {
  value?: string;
  label?: string;
  supporting?: string;
  className?: string;
};

export function StatsBig({
  value = "40×",
  label = "Faster iteration vs bespoke redesigns",
  supporting = "Measured across pilot teams replacing static landing placeholders with structured blocks + tokens.",
  className,
}: Partial<StatsBigProps> = {}) {
  return (
    <section className={`border-y border-border bg-primary/10 py-16 sm:py-24 ${className ?? ""}`}>
      <div className="site-grid text-center">
        <p className="text-5xl font-semibold tracking-tight text-primary sm:text-6xl">{value}</p>
        <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-foreground">{label}</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">{supporting}</p>
      </div>
    </section>
  );
}
