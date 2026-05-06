"use client";

import {
  BarChart3,
  Boxes,
  Layers,
  Package,
  Palette,
  Shield,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MarketingContainer } from "@/components/layout/marketing-container";

/** Preset Lucide icons so `items` stay serializable from React Server Components. Add keys here as needed. */
export const FEATURE_GRID_ICONS = {
  layers: Layers,
  palette: Palette,
  zap: Zap,
  package: Package,
  boxes: Boxes,
  shield: Shield,
  barChart3: BarChart3,
} as const;

export type FeatureGridIconId = keyof typeof FEATURE_GRID_ICONS;

export type FeatureGridItem = {
  icon: FeatureGridIconId;
  title: string;
  body: string;
};

export const featureGridDefaults = {
  title: "Built for clarity",
  subtitle:
    "Opinionated structure so marketing iterations stay fast—swap copy and tokens without touching layout internals.",
  items: [
    {
      icon: "layers",
      title: "Layered story",
      body: "Sections compose into one narrative: proof, capabilities, conversion, and support content.",
    },
    {
      icon: "palette",
      title: "Token-first",
      body: "CSS variables mirror common generator output—paste your palette instead of hunting hex values.",
    },
    {
      icon: "zap",
      title: "Predictable motion",
      body: "Motion lives behind explicit client islands; static shells stay easy to audit.",
    },
    {
      icon: "package",
      title: "ZIP-friendly",
      body: "Copy files into your app; align aliases and ship—no proprietary CLI required.",
    },
  ] satisfies FeatureGridItem[],
};

export type FeatureGridProps = {
  title?: string;
  subtitle?: string;
  items?: FeatureGridItem[];
  id?: string;
  className?: string;
};

export function FeatureGrid({
  title = featureGridDefaults.title,
  subtitle = featureGridDefaults.subtitle,
  items = featureGridDefaults.items,
  id = "features",
  className,
}: FeatureGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`scroll-mt-20 py-20 ${className ?? ""}`}>
      <MarketingContainer>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2">
          {items.map(({ icon: iconId, title: t, body }) => {
            const Icon = FEATURE_GRID_ICONS[iconId];
            return (
            <motion.li
              key={t}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                      transition: { type: "spring", stiffness: 320, damping: 24 },
                    }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.992 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm shadow-black/20"
            >
              <motion.span
                className="inline-flex"
                whileHover={reduceMotion ? undefined : { rotate: [0, -6, 0], scale: 1.05 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                <Icon className="size-8 text-primary" strokeWidth={1.5} aria-hidden />
              </motion.span>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </motion.li>
            );
          })}
        </ul>
      </MarketingContainer>
    </section>
  );
}
