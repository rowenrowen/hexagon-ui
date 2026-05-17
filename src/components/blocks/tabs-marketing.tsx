"use client";

import { MarketingTabsShell, type MarketingTabItem } from "./marketing-tabs-shell";

export type { MarketingTabItem };

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
  return (
    <MarketingTabsShell
      id={p.id}
      className={p.className}
      title={p.title ?? tabsMarketingDefaults.title}
      subtitle={p.subtitle ?? tabsMarketingDefaults.subtitle}
      tabs={p.tabs ?? tabsMarketingDefaults.tabs}
    />
  );
}
