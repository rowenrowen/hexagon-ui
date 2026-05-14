"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

export type MarketingTabItem = {
  id: string;
  label: string;
  headline: string;
  sub: string;
  bullets: string[];
  foot?: string;
};

export const tabsMarketingDefaults = {
  title: "Everything buyers ask before a pilot",
  subtitle:
    "Segmented tabs keep dense answers scannable — wire labels and copy from your CMS; the interaction pattern stays familiar.",
  tabs: [
    {
      id: "rollout",
      label: "Rollout",
      headline: "From signed order to first value in weeks, not quarters",
      sub: "Most teams run a guided pilot on a single workspace, expand teams after week three, then wire SSO before company-wide launch.",
      bullets: [
        "Dedicated solutions engineer through first production workflow",
        "Sandbox data generators so you are not testing on customers",
        "Weekly checkpoint deck your executive sponsor can forward as-is",
      ],
      foot: "Typical enterprise pilot: 30–45 days to measurable usage.",
    },
    {
      id: "security",
      label: "Security",
      headline: "Controls procurement can verify without a custom questionnaire",
      sub: "Ship with the evidence pack security teams expect — encryption defaults, access logging, and vendor subprocessors in one place.",
      bullets: [
        "SOC 2 Type II and ISO 27001 reports under NDA in the trust center",
        "Row-level permissions mapped to your IdP groups and SCIM seats",
        "Immutable audit trail on exports, API keys, and admin changes",
      ],
      foot: "Need a SIG or CAIQ? Start from our filled baseline and diff your deltas.",
    },
    {
      id: "integrations",
      label: "Integrations",
      headline: "Meet teams where they already work",
      sub: "Bi-directional sync with the CRM, data warehouse, and chat tools your revops team already chose — no rip-and-replace narrative.",
      bullets: [
        "First-class connectors for Salesforce, HubSpot, Snowflake, and BigQuery",
        "Webhooks with signed payloads and automatic retries with backoff",
        "CSV and Parquet bulk export for ad-hoc finance reconciliations",
      ],
      foot: "Average time-to-first-event from empty tenant: under a day with our field kit.",
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
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{p.title}</h2>
          <p className="mt-3 text-muted-foreground">{p.subtitle}</p>
        </motion.div>

        <div className="mt-10 isolate rounded-2xl border border-border bg-card p-2 shadow-sm">
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
                  whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                  className="relative isolate min-w-[6.5rem] flex-1 rounded-xl px-3 py-2.5 text-center text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card sm:min-w-[7.25rem]"
                >
                  {selected ? (
                    <motion.span
                      layoutId={`${baseId}-tab-pill`}
                      className="pointer-events-none absolute inset-0 z-0 rounded-xl bg-muted shadow-sm ring-1 ring-border/60"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  ) : null}
                  <span className={`relative z-10 ${selected ? "text-foreground" : "text-muted-foreground"}`}>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="relative mt-3 min-h-[14rem] overflow-hidden rounded-xl border border-border/80 bg-muted/15 px-5 py-6 sm:min-h-[12.5rem]">
            <AnimatePresence mode="wait" initial={false}>
              {activeTab ? (
                <motion.div
                  key={activeTab.id}
                  role="tabpanel"
                  id={`${baseId}-${activeTab.id}-panel`}
                  aria-labelledby={`${baseId}-${activeTab.id}-tab`}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          opacity: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                          y: { type: "spring", stiffness: 320, damping: 28 },
                        }
                  }
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">{activeTab.headline}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeTab.sub}</p>
                  </div>
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
                    <motion.p
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={reduceMotion ? undefined : { opacity: 1 }}
                      transition={{ delay: reduceMotion ? 0 : 0.22 }}
                      className="border-t border-border/70 pt-4 text-xs leading-relaxed text-muted-foreground"
                    >
                      {activeTab.foot}
                    </motion.p>
                  ) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
