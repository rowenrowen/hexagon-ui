"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { MarketingTabList, MarketingTabPanel } from "./marketing-tab-controls";

export type MarketingTabItem = {
  id: string;
  label: string;
  headline: string;
  sub: string;
  bullets: string[];
  foot?: string;
};

export type MarketingTabsShellProps = {
  title: string;
  subtitle: string;
  tabs: MarketingTabItem[];
  id?: string;
  className?: string;
  maxWidth?: "md" | "lg";
};

export function MarketingTabsShell({
  title,
  subtitle,
  tabs,
  id,
  className,
  maxWidth = "md",
}: MarketingTabsShellProps) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const pillLayoutId = `${baseId}-tab-pill`;
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];
  const maxClass = maxWidth === "lg" ? "max-w-4xl" : "max-w-3xl";

  return (
    <section id={id} className={`scroll-mt-20 px-4 py-20 sm:px-6 ${className ?? ""}`}>
      <motion.div
        className={`mx-auto ${maxClass}`}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ type: "spring", stiffness: 380, damping: 34 }}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
        <p className="mt-3 text-muted-foreground">{subtitle}</p>

        <div className="mt-10 isolate rounded-2xl border border-border bg-card p-2 shadow-sm">
          <MarketingTabList
            tabs={tabs}
            active={active}
            onChange={setActive}
            layoutId={pillLayoutId}
            ariaLabel={title}
          />
          <MarketingTabPanel panelKey={activeTab?.id ?? "empty"} className="mt-3" minHeight="14rem">
            {activeTab ? (
              <motion.div className="space-y-4" layout={false}>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">{activeTab.headline}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeTab.sub}</p>
                </motion.div>
                <ul className="space-y-2.5">
                  {activeTab.bullets.map((line, i) => (
                    <motion.li
                      key={line}
                      initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      transition={{ delay: reduceMotion ? 0 : 0.05 + i * 0.06, duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-primary/25 bg-primary/10 text-primary">
                        <Check className="size-3" strokeWidth={2.5} aria-hidden />
                      </span>
                      <span>{line}</span>
                    </motion.li>
                  ))}
                </ul>
                {activeTab.foot ? (
                  <p className="border-t border-border/70 pt-4 text-xs leading-relaxed text-muted-foreground">
                    {activeTab.foot}
                  </p>
                ) : null}
              </motion.div>
            ) : null}
          </MarketingTabPanel>
        </div>
      </motion.div>
    </section>
  );
}
