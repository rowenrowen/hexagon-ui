"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MarketingLink } from "./marketing-link";
import { MarketingContainer } from "@/components/layout/marketing-container";

export type HeroMarketingProps = {
  eyebrow?: string;
  headline: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
};

export const heroMarketingDefaults: HeroMarketingProps = {
  eyebrow: "React · Tailwind · Motion",
  headline: "Ship a credible marketing page this sprint.",
  description:
    "Composable sections, theme-ready tokens, and motion only where it earns attention—structured so your team edits copy, not markup archaeology.",
  primaryCta: { href: "/pricing", label: "View pricing" },
  secondaryCta: { href: "/blocks", label: "Browse blocks" },
};

const floatA = { duration: 15, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };
const floatB = { duration: 19, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };

export function HeroMarketing(props: Partial<HeroMarketingProps> = {}) {
  const p = { ...heroMarketingDefaults, ...props };
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={`relative overflow-hidden border-b border-border pb-20 pt-16 sm:pb-28 sm:pt-24 ${p.className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -left-24 -top-20 h-64 w-64 rounded-full bg-primary/18 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 36, -12], y: [0, 26, -8], opacity: [0.42, 0.62, 0.5] }}
          transition={floatA}
        />
        <motion.div
          className="absolute right-[-6rem] top-1/3 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -24, 20], y: [0, -30, 10], opacity: [0.36, 0.58, 0.42] }}
          transition={floatB}
        />
        <motion.div
          className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 24, -20], y: [0, -18, 12], opacity: [0.22, 0.44, 0.3] }}
          transition={{ ...floatA, duration: 22 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_38%),radial-gradient(circle_at_78%_30%,color-mix(in_oklab,var(--accent)_14%,transparent),transparent_40%)]" />
      </div>

      <MarketingContainer className="relative z-[1]">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.34, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
        >
          {p.eyebrow}
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.04, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:leading-tight"
        >
          {p.headline}
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {p.description}
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.985 }}>
            <MarketingLink
              href={p.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-shadow hover:shadow-md"
            >
              {p.primaryCta.label}
              <motion.span
                className="inline-flex"
                animate={reduceMotion ? undefined : { x: [0, 2, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
              >
                <ArrowRight className="size-4" aria-hidden />
              </motion.span>
            </MarketingLink>
          </motion.div>
          {p.secondaryCta ? (
            <motion.div whileHover={reduceMotion ? undefined : { y: -1 }} whileTap={reduceMotion ? undefined : { scale: 0.99 }}>
              <MarketingLink
                href={p.secondaryCta.href}
                className="inline-flex items-center rounded-full border border-border/80 bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur transition-colors hover:border-primary/35 hover:text-foreground"
              >
                {p.secondaryCta.label}
              </MarketingLink>
            </motion.div>
          ) : null}
        </motion.div>
      </MarketingContainer>
    </section>
  );
}
