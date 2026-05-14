import { ArrowRight } from "lucide-react";
import { KIT_PRIMARY_PILL, KIT_SECONDARY_PILL } from "@/lib/kit-button-classes";
import { MarketingLink } from "./marketing-link";

export type CtaSplitPanelProps = {
  title: string;
  description?: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
};

export const ctaSplitPanelDefaults: CtaSplitPanelProps = {
  title: "Align stakeholders before you ask for budget",
  description:
    "Use this band after pricing or security rows — one narrative column, one checklist your champion can forward.",
  primaryCta: { href: "#", label: "Download overview" },
  secondaryCta: { href: "#", label: "Talk to sales" },
};

export function CtaSplitPanel(props: Partial<CtaSplitPanelProps> = {}) {
  const p = { ...ctaSplitPanelDefaults, ...props };
  return (
    <section className={`px-4 py-16 sm:px-6 ${p.className ?? ""}`}>
      <div className="site-grid overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted/80 via-card to-card shadow-lg">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{p.title}</h2>
            {p.description ? <p className="mt-4 text-muted-foreground">{p.description}</p> : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingLink href={p.primaryCta.href} className={KIT_PRIMARY_PILL}>
                {p.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </MarketingLink>
              {p.secondaryCta ? (
                <MarketingLink href={p.secondaryCta.href} className={KIT_SECONDARY_PILL}>
                  {p.secondaryCta.label}
                </MarketingLink>
              ) : null}
            </div>
          </div>
          <ul className="space-y-3 rounded-xl border border-border bg-background/60 p-6 text-sm text-muted-foreground backdrop-blur-sm">
            <li className="font-medium text-foreground">What buyers forward internally</li>
            <li>Security posture summarized in one screen</li>
            <li>Integration surface (API + events) spelled out plainly</li>
            <li>Implementation window and owner roles</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
