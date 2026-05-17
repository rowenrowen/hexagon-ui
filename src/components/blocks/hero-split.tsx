"use client";

import { motion, useReducedMotion } from "framer-motion";
import { KIT_PRIMARY_PILL, KIT_SECONDARY_PILL } from "@/lib/kit-button-classes";
import { MarketingLink } from "./marketing-link";
import { ArrowRight, Bell, LayoutDashboard, Search } from "lucide-react";

export type HeroSplitProps = {
  eyebrow?: string;
  headline: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
};

export const heroSplitDefaults: HeroSplitProps = {
  eyebrow: "Launch narrative",
  headline: "Ship the whole story — hero through FAQ — without rebuilding spacing each sprint.",
  description:
    "Split heroes pair dense copy with a visual lane for product UI, dashboard chrome, or illustration. Swap the gradient panel for video or a screenshot strip.",
  primaryCta: { href: "#", label: "View blocks" },
  secondaryCta: { href: "#", label: "Read manifest" },
};

export function HeroSplit(props: Partial<HeroSplitProps> = {}) {
  const p = { ...heroSplitDefaults, ...props };
  const reduceMotion = useReducedMotion();

  return (
    <section className={`border-b border-border py-16 sm:py-24 ${p.className ?? ""}`}>
      <div className="site-grid grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {p.headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{p.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MarketingLink
              href={p.primaryCta.href}
              className={KIT_PRIMARY_PILL}
            >
              {p.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </MarketingLink>
            {p.secondaryCta ? (
              <MarketingLink
                href={p.secondaryCta.href}
                className={KIT_SECONDARY_PILL}
              >
                {p.secondaryCta.label}
              </MarketingLink>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[280px] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/25 via-card to-muted shadow-lg shadow-black/15 ring-1 ring-black/[0.04] sm:aspect-[4/3] sm:min-h-0 dark:shadow-black/40 dark:ring-white/[0.06]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 28, delay: reduceMotion ? 0 : 0.06 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_42%),radial-gradient(circle_at_85%_25%,color-mix(in_oklab,var(--accent)_14%,transparent),transparent_48%)]" />

          <div className="absolute inset-3 flex flex-col overflow-hidden rounded-xl border border-border/90 bg-background/92 shadow-inner backdrop-blur-sm sm:inset-4 dark:bg-card/95">
            <div className="flex flex-col gap-2 border-b border-border/80 px-3 py-2 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-center gap-2">
                <LayoutDashboard className="size-4 shrink-0 text-primary" aria-hidden />
                <span className="truncate text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Northwind · Ops
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:ml-auto sm:shrink-0">
                <div className="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-lg border border-border bg-muted/40 px-2 text-muted-foreground sm:max-w-[9rem]">
                  <Search className="size-3.5 shrink-0 opacity-70" aria-hidden />
                  <span className="truncate text-[11px]">Search…</span>
                </div>
                <button
                  type="button"
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground"
                  aria-label="Notifications"
                >
                  <Bell className="size-4" aria-hidden />
                </button>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-2 p-3 min-[420px]:grid-cols-[1fr_38%]">
              <div className="flex flex-col gap-2 rounded-lg border border-border/80 bg-muted/20 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Throughput</p>
                <div className="mt-1 flex min-h-[88px] sm:min-h-[100px] flex-1 items-end gap-1">
                  {[35, 52, 44, 61, 48, 70, 56].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary"
                      initial={reduceMotion ? { height: `${h}%` } : { height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ type: "spring", stiffness: 320, damping: 24, delay: reduceMotion ? 0 : 0.08 + i * 0.04 }}
                      style={{ minHeight: 12 }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { t: "Deploy pipeline", s: "Healthy · 3m ago" },
                  { t: "Error budget", s: "84% remaining" },
                  { t: "Regions", s: "US · EU · APAC" },
                ].map((row, i) => (
                  <motion.div
                    key={row.t}
                    className="rounded-lg border border-border/80 bg-background/90 px-2.5 py-2 shadow-sm"
                    initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduceMotion ? 0 : 0.15 + i * 0.06 }}
                  >
                    <p className="text-[11px] font-medium text-foreground">{row.t}</p>
                    <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">{row.s}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <p className="absolute bottom-2 left-3 right-3 hidden text-center text-[11px] text-muted-foreground sm:block sm:bottom-3 sm:left-4 sm:right-4">
            Replace with your product capture — structure and motion hooks stay intact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
