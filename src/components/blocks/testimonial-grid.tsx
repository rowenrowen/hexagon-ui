"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { BlockReveal } from "./block-reveal";

export type TestimonialCard = {
  quote: string;
  name: string;
  role: string;
};

export const testimonialGridDefaults = {
  title: "Loved by design engineers",
  subtitle: "Three-up cards — tighten copy per persona or swap for logos + pull quotes.",
  items: [
    {
      quote: "We stopped debating layout and shipped pricing + FAQ in the same sprint.",
      name: "Alex Rivera",
      role: "Staff frontend, B2B SaaS",
    },
    {
      quote: "Motion is restrained. We themed with our generator output in an afternoon.",
      name: "Jordan Lee",
      role: "Founding designer",
    },
    {
      quote: "ZIP handoff meant PM could share the gallery before we opened the repo.",
      name: "Sam Okonkwo",
      role: "Engineering manager",
    },
  ] satisfies TestimonialCard[],
};

export type TestimonialGridProps = {
  title?: string;
  subtitle?: string;
  items?: TestimonialCard[];
  id?: string;
  className?: string;
};

export function TestimonialGrid({
  title = testimonialGridDefaults.title,
  subtitle = testimonialGridDefaults.subtitle,
  items = testimonialGridDefaults.items,
  id,
  className,
}: TestimonialGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`border-y border-border bg-muted/10 px-4 py-20 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <BlockReveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        </BlockReveal>
        <ul className="mt-12 grid list-none gap-6 lg:grid-cols-3">
          {items.map((card, i) => (
            <motion.li
              key={card.name}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-24px" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.08 }}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm shadow-black/15"
            >
              <Quote className="size-6 text-primary/80" aria-hidden />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{card.quote}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-card-foreground">{card.name}</p>
                <p className="text-xs text-muted-foreground">{card.role}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
