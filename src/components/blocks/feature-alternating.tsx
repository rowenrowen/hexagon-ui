"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  GitBranch,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

export type AlternatingFeatureVisual = "metrics" | "pipeline" | "terminal";

export type AlternatingFeature = {
  title: string;
  body: string;
  align?: "left" | "right";
  visual?: AlternatingFeatureVisual;
};

export type FeatureAlternatingProps = {
  title?: string;
  subtitle?: string;
  rows?: AlternatingFeature[];
  className?: string;
};

export const featureAlternatingDefaults = {
  title: "See the whole journey, not a single screen",
  subtitle:
    "Alternating rows buyers actually scan — outcomes first, then how your product backs them up. Drop in real product shots when you are ready.",
  rows: [
    {
      title: "Know which campaigns actually convert",
      body: "Tag every touchpoint once, then watch cohorts move from first click to renewal without exporting five spreadsheets. Your GTM lead gets one funnel view; finance gets reconciled numbers.",
      align: "left" as const,
      visual: "metrics" as const,
    },
    {
      title: "Ship changes without the Friday-night drama",
      body: "Model → validate → release with approvals and rollbacks your team can explain to customers. No more “we think it is live” — you see exactly what stage each change is in.",
      align: "right" as const,
      visual: "pipeline" as const,
    },
    {
      title: "Hand off to engineering in minutes, not meetings",
      body: "Export a clean integration bundle: typed webhooks, example payloads, and sandbox keys your API consumers can paste into Postman. Less back-and-forth in Slack; faster time-to-first-200.",
      align: "left" as const,
      visual: "terminal" as const,
    },
  ],
};

function MetricsVisual({ reduced }: { reduced: boolean }) {
  // Real funnel: monotonically descending stages with absolute counts +
  // conversion %. Each row is a horizontal bar whose width represents the
  // share of the top-of-funnel cohort that reached it.
  const stages = [
    { label: "Visits", count: 24800, share: 1.0 },
    { label: "Sign-ups", count: 8920, share: 8920 / 24800 },
    { label: "Activated", count: 4310, share: 4310 / 24800 },
    { label: "Paid", count: 1860, share: 1860 / 24800 },
  ];
  return (
    <div className="relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/40 p-5 shadow-inner ring-1 ring-black/[0.03] dark:ring-white/[0.05]">
      <div className="flex items-center justify-between gap-2 border-b border-border/80 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
          <Activity className="size-3.5 text-primary" aria-hidden />
          Activation funnel
        </div>
        <span className="rounded-full bg-primary/12 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
          Last 30d
        </span>
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-2.5">
        {stages.map((s, i) => {
          const pct = Math.round(s.share * 100);
          return (
            <div key={s.label} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between text-[11px]">
                <span className="font-medium text-foreground">{s.label}</span>
                <span className="tabular-nums text-muted-foreground">
                  {s.count.toLocaleString()}{" "}
                  <span className="text-muted-foreground/70">·</span>{" "}
                  <span className="font-semibold text-foreground">{pct}%</span>
                </span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted/50">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary"
                  initial={reduced ? { width: `${s.share * 100}%` } : { width: 0 }}
                  whileInView={{ width: `${s.share * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 220, damping: 28, delay: reduced ? 0 : i * 0.08 }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/70 pt-3">
        {[
          { k: "Overall", v: "7.5%" },
          { k: "ARPU", v: "$48" },
          { k: "Latency", v: "124ms" },
        ].map((cell) => (
          <div key={cell.k} className="rounded-lg bg-muted/40 px-2 py-2">
            <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{cell.k}</p>
            <p className="mt-0.5 text-sm font-semibold tabular-nums text-foreground">{cell.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineVisual({ reduced }: { reduced: boolean }) {
  const stages = ["Ingest", "Model", "Ship"];
  return (
    <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-inner ring-1 ring-black/[0.03] dark:ring-white/[0.05]">
      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
        <GitBranch className="size-3.5 text-primary" aria-hidden />
        Release train
      </div>
      <div className="relative mx-auto flex w-full max-w-[280px] items-start justify-between gap-2 pt-2">
        {/* Connector sits BEHIND the icon tiles (z-0) and only spans the gap
            between first and last icon centers (~22px = half of size-11). */}
        <div
          className="pointer-events-none absolute left-[22px] right-[22px] top-[34px] z-0 h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-border via-primary/40 to-border"
          aria-hidden
        />
        {stages.map((label, i) => (
          <motion.div
            key={label}
            className="relative z-10 flex flex-col items-center gap-2"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
              {i === 0 ? <Layers className="size-5 text-muted-foreground" /> : null}
              {i === 1 ? <BarChart3 className="size-5 text-muted-foreground" /> : null}
              {i === 2 ? <Sparkles className="size-5 text-primary" /> : null}
            </div>
            <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
          </motion.div>
        ))}
      </div>
      <div className="rounded-xl border border-border/80 bg-muted/25 px-3 py-2.5 text-[11px] leading-snug text-muted-foreground">
        <ShieldCheck className="mb-1 inline size-3.5 text-primary" aria-hidden /> Change history is immutable and exportable — language your security reviewers expect.
      </div>
    </div>
  );
}

function TerminalVisual({ reduced }: { reduced: boolean }) {
  const lines = [
    { p: "$ ", t: "api export --env staging --format openapi3", d: false },
    { p: "✔ ", t: "Bundle ready · 14 routes · webhooks v2", d: true },
    { p: "✔ ", t: "Signed URL expires in 15m — sent to #integrations", d: true },
    { p: "→ ", t: "Partner downloaded spec + Postman collection.", d: false },
  ];
  return (
    <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-border bg-[oklch(0.15_0.02_260)] text-[oklch(0.93_0.02_260)] shadow-inner ring-1 ring-white/10 dark:bg-[oklch(0.13_0.025_260)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <Terminal className="size-3.5 opacity-70" aria-hidden />
        <span className="font-mono text-[10px] uppercase tracking-wider opacity-70">export.log</span>
      </div>
      <div className="space-y-2 p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={reduced ? false : { opacity: 0, x: -6 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduced ? 0 : i * 0.08 }}
            className={line.d ? "text-emerald-400/95" : "text-white/90"}
          >
            <span className="select-none text-white/40">{line.p}</span>
            {line.t}
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80">
        <ArrowRight className="size-3" aria-hidden />
        Schema verified
      </div>
    </div>
  );
}

function AlternatingVisual({ kind, reduced }: { kind: AlternatingFeatureVisual; reduced: boolean }) {
  switch (kind) {
    case "metrics":
      return <MetricsVisual reduced={reduced} />;
    case "pipeline":
      return <PipelineVisual reduced={reduced} />;
    case "terminal":
      return <TerminalVisual reduced={reduced} />;
    default:
      return <MetricsVisual reduced={reduced} />;
  }
}

export function FeatureAlternating(props: Partial<FeatureAlternatingProps> = {}) {
  const p = { ...featureAlternatingDefaults, ...props };
  const reduceMotion = useReducedMotion();

  return (
    <section className={`border-y border-border bg-muted/10 py-20 ${p.className ?? ""}`}>
      <div className="site-grid space-y-16">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{p.title}</h2>
          <p className="mt-3 text-muted-foreground">{p.subtitle}</p>
        </motion.div>
        {p.rows?.map((row, idx) => {
          const reverse = row.align === "right";
          const visual = row.visual ?? (idx % 3 === 0 ? "metrics" : idx % 3 === 1 ? "pipeline" : "terminal");
          return (
            <motion.div
              key={row.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30, delay: reduceMotion ? 0 : idx * 0.06 }}
            >
              <div className={`${reverse ? "lg:order-2" : ""}`}>
                <AlternatingVisual kind={visual} reduced={!!reduceMotion} />
              </div>
              <div className={reverse ? "lg:order-1" : ""}>
                <h3 className="text-lg font-semibold text-foreground">{row.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{row.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
