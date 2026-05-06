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
  title: "Proof that survives procurement reviews",
  subtitle:
    "Dense alternating rows — pair narrative copy with dashboard-grade visuals. Swap screenshots later; the rhythm stays.",
  rows: [
    {
      title: "Instrument everything once",
      body: "Wire analytics on CTAs, accordions, and pricing buttons using the same callback props pattern across blocks. Event names stay boring so dashboards stay legible.",
      align: "left" as const,
      visual: "metrics" as const,
    },
    {
      title: "Motion where it earns attention",
      body: "Disclosure, tabs, and hovers run on Framer Motion with reduced-motion branches — ship polish without failing accessibility audits.",
      align: "right" as const,
      visual: "pipeline" as const,
    },
    {
      title: "ZIP-first handoff",
      body: "Every toolbar path maps 1:1 to blocks/*.tsx in the archive — procurement sees filenames before engineers unzip; engineers grep instead of screenshot archaeology.",
      align: "left" as const,
      visual: "terminal" as const,
    },
  ],
};

function MetricsVisual({ reduced }: { reduced: boolean }) {
  const bars = [42, 68, 55, 82, 61, 74];
  return (
    <div className="relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/40 p-5 shadow-inner ring-1 ring-black/[0.03] dark:ring-white/[0.05]">
      <div className="flex items-center justify-between gap-2 border-b border-border/80 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
          <Activity className="size-3.5 text-primary" aria-hidden />
          Activation funnel
        </div>
        <span className="rounded-full bg-primary/12 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">Live</span>
      </div>
      <div className="mt-4 flex min-h-[128px] flex-1 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-md bg-gradient-to-t from-primary/25 to-primary/70"
            initial={reduced ? { height: `${h}%` } : { height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 26, delay: reduced ? 0 : i * 0.05 }}
            style={{ minHeight: 28 }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/70 pt-3">
        {[
          { k: "MRR", v: "$842k" },
          { k: "Trial→Paid", v: "18.4%" },
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
      <div className="relative mx-auto flex w-full max-w-[280px] items-center justify-between gap-2 pt-2">
        <div className="absolute left-[12%] right-[12%] top-[42%] h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden />
        {stages.map((label, i) => (
          <motion.div
            key={label}
            className="relative z-10 flex flex-col items-center gap-2"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-muted/50 shadow-sm">
              {i === 0 ? <Layers className="size-5 text-muted-foreground" /> : null}
              {i === 1 ? <BarChart3 className="size-5 text-muted-foreground" /> : null}
              {i === 2 ? <Sparkles className="size-5 text-primary" /> : null}
            </div>
            <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
          </motion.div>
        ))}
      </div>
      <div className="rounded-xl border border-border/80 bg-muted/25 px-3 py-2.5 text-[11px] leading-snug text-muted-foreground">
        <ShieldCheck className="mb-1 inline size-3.5 text-primary" aria-hidden /> SOC2 controls referenced in copy blocks — swap for your auditor language.
      </div>
    </div>
  );
}

function TerminalVisual({ reduced }: { reduced: boolean }) {
  const lines = [
    { p: "$ ", t: "pnpm install hexagon-ui-kit", d: false },
    { p: "✔ ", t: "Copied blocks/nav-marketing.tsx", d: true },
    { p: "✔ ", t: "Merged tokens/hexagon-ui-variables.css", d: true },
    { p: "→ ", t: "Ready — swap brand tokens & ship.", d: false },
  ];
  return (
    <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-border bg-[oklch(0.15_0.02_260)] text-[oklch(0.93_0.02_260)] shadow-inner ring-1 ring-white/10 dark:bg-[oklch(0.13_0.025_260)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <Terminal className="size-3.5 opacity-70" aria-hidden />
        <span className="font-mono text-[10px] uppercase tracking-wider opacity-70">handoff.log</span>
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
        Manifest parity
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
