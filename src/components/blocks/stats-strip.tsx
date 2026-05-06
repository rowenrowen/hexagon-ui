"use client";

import { motion, useReducedMotion } from "framer-motion";

export type StatsStripItem = { value: string; label: string };

export const statsStripDefaults = {
  items: [
    { value: "99.9%", label: "Uptime story" },
    { value: "25", label: "Curated marketing sections" },
    { value: "<200ms", label: "p95 marketing TTFB" },
    { value: "1 ZIP", label: "Handoff to engineering" },
  ] satisfies StatsStripItem[],
};

export type StatsStripProps = {
  items?: StatsStripItem[];
  id?: string;
  className?: string;
};

export function StatsStrip({ items = statsStripDefaults.items, id, className }: StatsStripProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`border-b border-border bg-muted/20 px-4 py-12 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ value, label }, i) => (
          <motion.div
            key={`${value}-${label}`}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : i * 0.05 }}
            className="text-center"
          >
            <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
