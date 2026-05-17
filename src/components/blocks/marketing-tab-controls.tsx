"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type MarketingTabOption = { id: string; label: string };

type MarketingTabListProps = {
  tabs: MarketingTabOption[];
  active: string;
  onChange: (id: string) => void;
  /** Unique per instance — drives Framer `layoutId` for the sliding pill. */
  layoutId: string;
  ariaLabel: string;
  className?: string;
};

/** Segmented tab strip — spring pill, hover/tap micro-motion (shared across blocks). */
export function MarketingTabList({
  tabs,
  active,
  onChange,
  layoutId,
  ariaLabel,
  className = "",
}: MarketingTabListProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`flex flex-wrap gap-1 sm:flex-nowrap ${className}`.trim()}
      role="tablist"
      aria-label={ariaLabel}
    >
      {tabs.map((tab) => {
        const selected = active === tab.id;
        return (
          <motion.button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(tab.id)}
            whileHover={reduceMotion ? undefined : { scale: 1.015 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            className="relative isolate min-w-[5.5rem] flex-1 rounded-xl px-3 py-2.5 text-center text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card sm:min-w-[6.5rem]"
          >
            {selected ? (
              <motion.span
                layoutId={layoutId}
                className="pointer-events-none absolute inset-0 z-0 rounded-xl bg-muted shadow-sm ring-1 ring-border/60"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            ) : null}
            <span className={`relative z-10 ${selected ? "text-foreground" : "text-muted-foreground"}`}>{tab.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}

type MarketingTabPanelProps = {
  panelKey: string;
  children: ReactNode;
  className?: string;
  minHeight?: string;
};

/** Cross-fading panel wrapper — pair with {@link MarketingTabList}. */
export function MarketingTabPanel({
  panelKey,
  children,
  className = "",
  minHeight,
}: MarketingTabPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border/80 bg-muted/15 ${className}`.trim()}
      style={minHeight ? { minHeight } : undefined}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={panelKey}
          role="tabpanel"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  opacity: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                  y: { type: "spring", stiffness: 320, damping: 28 },
                }
          }
          className="px-5 py-5 sm:py-6"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
