import type { LucideIcon } from "lucide-react";
import { Boxes, Palette, Sparkles, Zap } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { BlockRevealSpan } from "./block-reveal";

export type TrustStripItem = { icon: LucideIcon; label: string };

export const trustStripDefaults: TrustStripItem[] = [
  { icon: Boxes, label: "Composable sections" },
  { icon: Palette, label: "Theme-ready tokens" },
  { icon: Sparkles, label: "Lucide icons" },
  { icon: Zap, label: "Motion where it counts" },
];

export type TrustStripProps = {
  items?: TrustStripItem[];
  className?: string;
};

export function TrustStrip({ items = trustStripDefaults, className }: TrustStripProps) {
  return (
    <section className={`border-b border-border bg-card/40 py-10 ${className ?? ""}`}>
      <MarketingContainer className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground sm:gap-x-10 sm:gap-y-4">
        {items.map(({ icon: Icon, label }, i) => (
          <BlockRevealSpan
            key={label}
            delay={i * 0.05}
            className="flex items-center gap-2 font-medium"
          >
            <Icon className="size-4 text-primary" strokeWidth={1.75} aria-hidden />
            {label}
          </BlockRevealSpan>
        ))}
      </MarketingContainer>
    </section>
  );
}
