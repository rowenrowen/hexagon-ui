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
    <section className={`border-b border-border bg-card/40 py-10 ${className ?? ""}`}>
      <MarketingContainer>
        <ul
          className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-4 text-sm text-muted-foreground sm:grid-cols-4 sm:gap-x-8"
        >
          {items.map(({ icon: Icon, label }, i) => (
            <li key={label} className="flex items-center justify-center sm:justify-start">
              <BlockRevealSpan
                delay={i * 0.05}
                className="inline-flex items-center gap-2 text-center font-medium sm:text-left"
              >
                <Icon className="size-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden />
                <span>{label}</span>
              </BlockRevealSpan>
            </li>
          ))}
        </ul>
      </MarketingContainer>
    </section>
  );
}
