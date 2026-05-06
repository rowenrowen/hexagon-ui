import { ArrowRight } from "lucide-react";
import { MarketingLink } from "./marketing-link";

export type CtaSplitPanelProps = {
  title: string;
  description?: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
};

export const ctaSplitPanelDefaults: CtaSplitPanelProps = {
  title: "Put procurement and engineering on the same page",
  description:
    "Split CTAs pair narrative copy with a checklist lane — ideal before pricing tables or FAQ objections.",
  primaryCta: { href: "#", label: "Download overview" },
  secondaryCta: { href: "#", label: "Talk to sales" },
};

export function CtaSplitPanel(props: Partial<CtaSplitPanelProps> = {}) {
  const p = { ...ctaSplitPanelDefaults, ...props };
  return (
    <section className={`py-16 ${p.className ?? ""}`}>
      <div className="site-grid overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted/80 via-card to-card shadow-lg">
        <div className="grid gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{p.title}</h2>
            {p.description ? <p className="mt-4 text-muted-foreground">{p.description}</p> : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingLink
                href={p.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                {p.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </MarketingLink>
              {p.secondaryCta ? (
                <MarketingLink
                  href={p.secondaryCta.href}
                  className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {p.secondaryCta.label}
                </MarketingLink>
              ) : null}
            </div>
          </div>
          <ul className="space-y-3 rounded-xl border border-border bg-background/60 p-6 text-sm text-muted-foreground backdrop-blur-sm">
            <li className="font-medium text-foreground">Stakeholder checklist</li>
            <li>ZIP filenames match `/blocks` preview toolbars</li>
            <li>Tokens isolated for generator workflows</li>
            <li>Motion respects prefers-reduced-motion</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
