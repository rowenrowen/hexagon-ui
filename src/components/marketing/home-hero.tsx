"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { SITE_PRIMARY_PURCHASE_CLASSES, SITE_SECONDARY_OUTLINE_CLASSES } from "@/lib/site-cta";

export type HomeHeroProps = {
  announcement?: { label: string; href?: string };
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function HomeHero({
  announcement,
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
}: HomeHeroProps) {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  });

  return (
    <section className="relative isolate overflow-hidden">
      <MarketingContainer className="relative pb-16 pt-20 text-center sm:pb-24 sm:pt-28 lg:pb-32 lg:pt-36">
        {announcement ? (
          <motion.div {...fadeUp(0)} className="flex justify-center">
            {announcement.href ? (
              <Link
                href={announcement.href}
                className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-md transition-colors hover:border-primary/35 hover:text-foreground"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Sparkles className="size-3" strokeWidth={2.25} aria-hidden />
                </span>
                <span className="text-foreground/85">{announcement.label}</span>
                <ArrowRight
                  className="size-3.5 opacity-60 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                  aria-hidden
                />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-md">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Sparkles className="size-3" strokeWidth={2.25} aria-hidden />
                </span>
                <span className="text-foreground/85">{announcement.label}</span>
              </span>
            )}
          </motion.div>
        ) : null}

        <motion.p
          {...fadeUp(0.04)}
          className={`text-xs font-semibold uppercase tracking-[0.18em] text-primary ${
            announcement ? "mt-7" : ""
          }`}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4rem] lg:leading-[1.04]"
        >
          {headline}
        </motion.h1>

        <motion.p
          {...fadeUp(0.12)}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          {...fadeUp(0.16)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href={primaryCta.href}
            className={`${SITE_PRIMARY_PURCHASE_CLASSES} h-11 w-full justify-center px-5 text-[15px] sm:w-auto`}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className={`${SITE_SECONDARY_OUTLINE_CLASSES} h-11 w-full justify-center px-5 text-[15px] sm:w-auto`}
            >
              {secondaryCta.label}
              <ArrowRight className="size-4 opacity-70" strokeWidth={2} aria-hidden />
            </Link>
          ) : null}
        </motion.div>
      </MarketingContainer>
    </section>
  );
}
