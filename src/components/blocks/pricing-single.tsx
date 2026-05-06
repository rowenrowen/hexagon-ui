"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { MarketingLink } from "./marketing-link";

export type PricingSingleProps = {
  eyebrow?: string;
  title?: string;
  priceLabel: string;
  priceHint?: string;
  bullets: string[];
  checkoutHref: string;
  checkoutLabel?: string;
  id?: string;
  className?: string;
  /** Center heading + hint above the card (pricing landing); homepage stays left by default. */
  headingAlign?: "left" | "center";
};

export const pricingSingleDefaults: Omit<PricingSingleProps, "checkoutHref"> = {
  eyebrow: "License",
  title: "Team kit",
  priceLabel: "$79",
  priceHint: "One-time · VAT handled at checkout",
  bullets: [
    "React section source (copy-paste)",
    "README + HANDOFF for stakeholders",
    "Commercial terms defined by seller license",
    "Support channel listed on receipt",
  ],
  checkoutLabel: "Checkout",
  id: "pricing",
};

export function PricingSingle(props: PricingSingleProps) {
  const p = { ...pricingSingleDefaults, ...props };
  const reduceMotion = useReducedMotion();
  const align = p.headingAlign ?? "left";

  return (
    <section id={p.id} className={`scroll-mt-20 py-20 ${p.className ?? ""}`}>
      <MarketingContainer>
        <h2
          className={`text-2xl font-semibold tracking-tight text-foreground sm:text-3xl ${align === "center" ? "text-center" : ""}`}
        >
          {p.title}
        </h2>
        <p
          className={`mt-3 max-w-xl text-muted-foreground ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {p.priceHint}
        </p>

        <motion.div
          className="mx-auto mt-10 w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl shadow-black/25"
          whileHover={reduceMotion ? undefined : { y: -4, transition: { type: "spring", stiffness: 260, damping: 22 } }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-primary">{p.eyebrow}</p>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-card-foreground">{p.priceLabel}</p>
          <ul className="mt-8 space-y-3">
            {p.bullets.map((line) => (
              <motion.li
                key={line}
                initial={false}
                whileHover={reduceMotion ? undefined : { x: 2 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className="flex gap-3 text-sm text-card-foreground"
              >
                <motion.span
                  className="inline-flex shrink-0"
                  whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  <Check className="size-5 text-primary" aria-hidden />
                </motion.span>
                {line}
              </motion.li>
            ))}
          </ul>
          <motion.div className="mt-10" whileTap={reduceMotion ? undefined : { scale: 0.99 }}>
            <MarketingLink
              href={p.checkoutHref}
              className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-shadow hover:shadow-md"
            >
              {p.checkoutLabel ?? "Checkout"}
            </MarketingLink>
          </motion.div>
        </motion.div>
      </MarketingContainer>
    </section>
  );
}
