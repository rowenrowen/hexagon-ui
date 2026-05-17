import type { LucideIcon } from "lucide-react";
import { Boxes, Palette, Sparkles, Zap } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { BlockRevealSpan } from "./block-reveal";

export type TrustStripItem = { icon: LucideIcon; label: string };

export const trustStripDefaults: TrustStripItem[] = [
  { icon: Boxes, label: "Designer-curated block set" },
  { icon: Palette, label: "Theme-ready semantic tokens" },
  { icon: Sparkles, label: "Pixel-perfect visual QA" },
  { icon: Zap, label: "Motion with accessibility defaults" },
];

export type TrustStripProps = {
  items?: TrustStripItem[];
  className?: string;
};

export function TrustStrip({ items = trustStripDefaults, className }: TrustStripProps) {
  return (
    <section className={`border-b border-border bg-card/40 py-10 sm:py-12 ${className ?? ""}`}>
      <MarketingContainer>
        <ul className="mx-auto flex max-w-4xl flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5 lg:grid-cols-4">
          {items.map(({ icon: Icon, label }, i) => (
            <li key={label}>
              <BlockRevealSpan
                delay={i * 0.05}
                className="inline-flex w-full items-center gap-3 text-sm font-medium text-muted-foreground"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-primary shadow-sm">
                  <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-pretty leading-snug">{label}</span>
              </BlockRevealSpan>
            </li>
          ))}
        </ul>
      </MarketingContainer>
    </section>
  );
}
