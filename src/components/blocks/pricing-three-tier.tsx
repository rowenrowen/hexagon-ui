"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { KIT_PRIMARY_PILL_BLOCK, KIT_SECONDARY_PILL_BLOCK } from "@/lib/kit-button-classes";
import { MarketingLink } from "./marketing-link";

export type PricingTier = {
  name: string;
  price: string;
  hint?: string;
  description?: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

/** Fictional SaaS example — prices are not Hexagon UI SKUs. Replace entirely in your app. */
export const pricingThreeTierDefaults: { tiers: PricingTier[] } = {
  tiers: [
    {
      name: "Hobby",
      price: "$12",
      hint: "per month · example",
      description: "Placeholder tier for solo builders validating an idea.",
      bullets: ["1 seat", "Basic analytics", "Community forum"],
      ctaLabel: "Start free",
      ctaHref: "#",
    },
    {
      name: "Pro",
      price: "$48",
      hint: "per month · example",
      description: "Placeholder featured tier — swap for your real middle plan.",
      bullets: ["5 seats", "SSO-ready hooks", "Priority email", "Audit log export"],
      ctaLabel: "Start trial",
      ctaHref: "#",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      hint: "annual · example",
      description: "Placeholder for procurement, SLA, and security questionnaires.",
      bullets: ["Unlimited seats", "Dedicated support", "Custom MSA", "VPC option"],
      ctaLabel: "Talk to sales",
      ctaHref: "#",
    },
  ],
};

export type PricingThreeTierProps = {
  title?: string;
  subtitle?: string;
  tiers?: PricingTier[];
  id?: string;
  className?: string;
};

const pricingThreeTierDefaultSubtitle =
  "Fictional tiers for layout only - not Hexagon UI Gumroad pricing. Replace names, prices, and CTAs in your product.";

export function PricingThreeTier({
  title = "Example SaaS pricing",
  subtitle = pricingThreeTierDefaultSubtitle,
  tiers = pricingThreeTierDefaults.tiers,
  id,
  className,
}: PricingThreeTierProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`scroll-mt-20 py-20 ${className ?? ""}`}>
      <MarketingContainer>
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        </div>
        <ul className="mt-14 grid list-none gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.li
              key={tier.name}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: { type: "spring", stiffness: 260, damping: 22 },
                    }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.995 }}
              className={`flex flex-col rounded-2xl border p-8 shadow-sm ${
                tier.featured
                  ? "border-primary/40 bg-gradient-to-b from-primary/10 to-card shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                  : "border-border bg-card shadow-black/10"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{tier.name}</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-card-foreground">{tier.price}</p>
              {tier.hint ? <p className="text-xs text-muted-foreground">{tier.hint}</p> : null}
              {tier.description ? <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p> : null}
              <ul className="mt-6 flex-1 space-y-3">
                {tier.bullets.map((line) => (
                  <li key={line} className="flex gap-2 text-sm text-card-foreground">
                    <motion.span
                      className="inline-flex shrink-0"
                      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                    >
                      <Check className="size-4 shrink-0 text-primary" aria-hidden />
                    </motion.span>
                    {line}
                  </li>
                ))}
              </ul>
              <motion.div className="mt-8" whileTap={reduceMotion ? undefined : { scale: 0.99 }}>
                <MarketingLink
                  href={tier.ctaHref}
                  className={tier.featured ? KIT_PRIMARY_PILL_BLOCK : KIT_SECONDARY_PILL_BLOCK}
                >
                  {tier.ctaLabel}
                </MarketingLink>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </MarketingContainer>
    </section>
  );
}
