"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { MarketingLink } from "./marketing-link";

export type CtaBandProps = {
  title: string;
  description?: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  id?: string;
  className?: string;
};

export const ctaBandDefaults: CtaBandProps = {
  title: "Ready to replace placeholder marketing?",
  description: "Drop these sections into your Next.js or Vite app and map tokens once.",
  primaryCta: { href: "/pricing", label: "View pricing" },
  secondaryCta: { href: "/blocks", label: "Browse blocks" },
};

export function CtaBand(props: Partial<CtaBandProps> = {}) {
  const p = { ...ctaBandDefaults, ...props };
  const reduceMotion = useReducedMotion();

  return (
    <section id={p.id} className={`py-16 ${p.className ?? ""}`}>
      <MarketingContainer>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-card to-card px-6 py-12 shadow-lg shadow-black/15 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <motion.div
              className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
              animate={reduceMotion ? undefined : { opacity: [0.35, 0.55, 0.4], scale: [1, 1.08, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent/18 blur-3xl"
              animate={reduceMotion ? undefined : { opacity: [0.25, 0.45, 0.3], x: [0, 12, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-[1] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{p.title}</h2>
              {p.description ? <p className="mt-3 text-muted-foreground">{p.description}</p> : null}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.985 }}>
                <MarketingLink
                  href={p.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-[background-color,box-shadow,transform] hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
                >
                  {p.primaryCta.label}
                  <motion.span
                    className="inline-flex"
                    animate={reduceMotion ? undefined : { x: [0, 3, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
                  >
                    <ArrowRight className="size-4" aria-hidden />
                  </motion.span>
                </MarketingLink>
              </motion.div>
              {p.secondaryCta ? (
                <motion.div whileHover={reduceMotion ? undefined : { y: -1 }} whileTap={reduceMotion ? undefined : { scale: 0.99 }}>
                  <MarketingLink
                    href={p.secondaryCta.href}
                    className="rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted"
                  >
                    {p.secondaryCta.label}
                  </MarketingLink>
                </motion.div>
              ) : null}
            </div>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
