"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type MarketingTabItem = { id: string; label: string; body: string };

export const tabsMarketingDefaults = {
  title: "Interactive tabs",
  subtitle:
    "Segmented control with spring-selected pill and cross-fading panels — swap strings from your CMS or MDX.",
  tabs: [
    {
      id: "account",
      label: "Account",
      body: "Update profile, billing email, and workspace seats from one panel.",
    },
    {
      id: "security",
      label: "Security",
      body: "Wire SSO, SCIM, and session policies — tokens stay shadcn-compatible.",
    },
    {
      id: "api",
      label: "API",
      body: "Drop in rate limits, keys, and webhook URLs without restructuring the section.",
    },
  ] satisfies MarketingTabItem[],
};

export type TabsMarketingProps = {
  title?: string;
  subtitle?: string;
  tabs?: MarketingTabItem[];
  id?: string;
  className?: string;
};

export function TabsMarketing(props: Partial<TabsMarketingProps> = {}) {
  const p = { ...tabsMarketingDefaults, ...props };
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const tabs = p.tabs ?? tabsMarketingDefaults.tabs;
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id={p.id} className={`scroll-mt-20 px-4 py-20 sm:px-6 ${p.className ?? ""}`}>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{p.title}</h2>
        <p className="mt-3 text-muted-foreground">{p.subtitle}</p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-2 shadow-sm">
          <div className="flex flex-wrap gap-1 sm:flex-nowrap" role="tablist" aria-label={p.title}>
            {tabs.map((tab) => {
              const selected = active === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-${tab.id}-tab`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-${tab.id}-panel`}
                  onClick={() => setActive(tab.id)}
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="relative min-w-[7rem] flex-1 rounded-xl px-4 py-2.5 text-center text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {selected ? (
                    <motion.span
                      layoutId={`${baseId}-tab-pill`}
                      className="absolute inset-0 -z-10 rounded-xl bg-muted shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  ) : null}
                  <span className={`relative z-10 ${selected ? "text-foreground" : "text-muted-foreground"}`}>
                    {tab.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="relative mt-4 min-h-[7.5rem] overflow-hidden rounded-xl border border-border/80 bg-muted/15 px-5 py-5">
            <AnimatePresence mode="wait" initial={false}>
              {activeTab ? (
                <motion.div
                  key={activeTab.id}
                  role="tabpanel"
                  id={`${baseId}-${activeTab.id}-panel`}
                  aria-labelledby={`${baseId}-${activeTab.id}-tab`}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          opacity: { duration: 0.18, ease: [0.4, 0, 0.2, 1] },
                          y: { type: "spring", stiffness: 320, damping: 28 },
                        }
                  }
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {activeTab.body}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
