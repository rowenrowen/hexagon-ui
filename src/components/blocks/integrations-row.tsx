"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plug } from "lucide-react";
import { BlockReveal } from "./block-reveal";
import { MarketingTabList, MarketingTabPanel } from "./marketing-tab-controls";

export type IntegrationItem = { name: string };

export type IntegrationGroup = {
  id: string;
  label: string;
  items: IntegrationItem[];
};

export const integrationsRowDefaults = {
  title: "Plays with your stack",
  subtitle: "Category tabs keep long integration lists scannable — swap groups for your real vendors.",
  groups: [
    {
      id: "dev",
      label: "Developer",
      items: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "GitHub" }, { name: "Vercel" }],
    },
    {
      id: "data",
      label: "Data",
      items: [{ name: "Snowflake" }, { name: "BigQuery" }, { name: "dbt" }, { name: "Fivetran" }],
    },
    {
      id: "gtm",
      label: "GTM",
      items: [{ name: "Salesforce" }, { name: "HubSpot" }, { name: "Slack" }, { name: "Segment" }],
    },
  ] satisfies IntegrationGroup[],
};

export type IntegrationsRowProps = {
  title?: string;
  subtitle?: string;
  groups?: IntegrationGroup[];
  id?: string;
  className?: string;
};

export function IntegrationsRow({
  title = integrationsRowDefaults.title,
  subtitle = integrationsRowDefaults.subtitle,
  groups = integrationsRowDefaults.groups,
  id,
  className,
}: IntegrationsRowProps) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [active, setActive] = useState(groups[0]?.id ?? "");
  const activeGroup = groups.find((g) => g.id === active) ?? groups[0];

  return (
    <section id={id} className={`border-y border-border bg-card/40 px-4 py-16 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <BlockReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.div
              className="flex items-center gap-2 text-primary"
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Plug className="size-5" strokeWidth={1.75} aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-widest">Integrations</span>
            </motion.div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </BlockReveal>

        <div className="mt-10 rounded-2xl border border-border bg-card p-2 shadow-sm">
          <MarketingTabList
            tabs={groups.map((g) => ({ id: g.id, label: g.label }))}
            active={active}
            onChange={setActive}
            layoutId={`${baseId}-integrations-pill`}
            ariaLabel="Integration categories"
          />
          <MarketingTabPanel panelKey={activeGroup?.id ?? "empty"} className="mt-2 border-0 bg-transparent">
            <ul className="flex list-none flex-wrap gap-3">
              {activeGroup?.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ delay: reduceMotion ? 0 : i * 0.04, duration: 0.22 }}
                  className="rounded-md border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-primary/30 hover:bg-primary/8"
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </MarketingTabPanel>
        </div>
      </div>
    </section>
  );
}
