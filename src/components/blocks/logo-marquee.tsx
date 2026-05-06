const DEFAULT_LABELS = ["Northwind", "Contoso", "Fabrikam", "Tailspin", "Wide World", "Adventure", "Litware"];

export type LogoMarqueeProps = {
  labels?: string[];
  className?: string;
};

/** Infinite row — uses `.preview-marquee-track` in globals (respects reduced motion). */
export function LogoMarquee({ labels = DEFAULT_LABELS, className }: LogoMarqueeProps) {
  const doubled = [...labels, ...labels];
  return (
    <section className={`border-y border-border bg-card/30 py-10 ${className ?? ""}`}>
      <div className="site-grid">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by teams shipping weekly
        </p>
      </div>
      <div className="relative overflow-hidden border-y border-border/60 bg-muted/20">
        <div className="preview-marquee-track gap-16 px-8 py-6">
          {doubled.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="flex shrink-0 items-center text-sm font-semibold tracking-tight text-muted-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
