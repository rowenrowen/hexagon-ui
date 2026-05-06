"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ThumbsDown, ThumbsUp } from "lucide-react";

export type FaqRatingItem = {
  question: string;
  answer: string;
  helpfulPercent: number;
  responses: number;
};

export const faqRatingDefaults = {
  eyebrow: "Help center",
  title: "Did this answer help?",
  intro:
    "Tap thumbs after each answer so we know which docs to rewrite first. Feedback shapes next week’s content updates — same pattern as modern block libraries.",
  items: [
    {
      question: "How do I get started with the platform?",
      answer:
        "Sign up for a free account, browse the component library, and click Copy Code on any section. Paste into your React or Next.js project, install the listed dependencies (often Framer Motion + Lucide), and map CSS variables in globals. The Quick Start guide walks through theme tokens and dark mode in under ten minutes.",
      helpfulPercent: 95,
      responses: 245,
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept major cards, Apple Pay, and Google Pay where Gumroad enables them. VAT is calculated at checkout for EU buyers. You receive an instant receipt and perpetual download link for the ZIP — wire the same flow to Stripe or Paddle by swapping the checkout URL on the pricing block.",
      helpfulPercent: 92,
      responses: 189,
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Hexagon UI is a one-time purchase, not a subscription — there’s nothing to cancel. Major version ZIP refreshes ship while v1.x is maintained; download links stay on your marketplace receipt if you need to re-fetch.",
      helpfulPercent: 96,
      responses: 312,
    },
    {
      question: "How do I customize component styles?",
      answer:
        "Everything is plain Tailwind + CSS variables. Merge `tokens/hexagon-ui-variables.css` into your globals, then point `--primary`, `--radius`, and `--background` at your brand generator output. Blocks avoid inline hex so theme swaps stay predictable for design systems teams.",
      helpfulPercent: 88,
      responses: 156,
    },
  ] satisfies FaqRatingItem[],
};

export type FaqRatingProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items?: FaqRatingItem[];
  id?: string;
  className?: string;
};

export function FaqRating(props: Partial<FaqRatingProps> = {}) {
  const p = { ...faqRatingDefaults, ...props };
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [openKey, setOpenKey] = useState<string | null>(p.items[0] ? `${baseId}-0` : null);
  const [votes, setVotes] = useState<Record<string, "up" | "down" | null>>({});

  return (
    <section id={p.id} className={`scroll-mt-20 border-t border-border bg-muted/10 py-16 sm:py-20 ${p.className ?? ""}`}>
      <div className="site-grid">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.eyebrow}</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{p.title}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{p.intro}</p>

        <div className="mt-12 space-y-4">
          {p.items.map((item, index) => {
            const key = `${baseId}-${index}`;
            const open = openKey === key;
            const vote = votes[key] ?? null;
            return (
              <div
                key={key}
                className={`overflow-hidden rounded-xl border bg-card transition-shadow ${open ? "border-primary/35 shadow-md ring-1 ring-primary/15" : "border-border shadow-sm"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenKey(open ? null : key)}
                  className="flex w-full flex-col gap-1 px-5 py-4 text-left transition-colors hover:bg-muted/40 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                >
                  <span className="text-sm font-semibold text-card-foreground">{item.question}</span>
                  <span className="shrink-0 text-xs font-medium text-muted-foreground">
                    {item.helpfulPercent}% found this helpful · {item.responses.toLocaleString()} responses
                  </span>
                </button>
                {open ? (
                  <div className="border-t border-border px-5 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                      <span className="text-xs font-medium text-muted-foreground">Was this helpful?</span>
                      <div className="flex gap-2">
                        <motion.button
                          type="button"
                          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                          onClick={() => setVotes((prev) => ({ ...prev, [key]: prev[key] === "up" ? null : "up" }))}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                            vote === "up"
                              ? "border-primary bg-primary/15 text-foreground"
                              : "border-border bg-background text-muted-foreground hover:border-primary/35 hover:text-foreground"
                          }`}
                        >
                          <ThumbsUp className="size-3.5" aria-hidden />
                          Yes
                        </motion.button>
                        <motion.button
                          type="button"
                          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                          onClick={() => setVotes((prev) => ({ ...prev, [key]: prev[key] === "down" ? null : "down" }))}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                            vote === "down"
                              ? "border-orange-500/45 bg-orange-500/10 text-foreground"
                              : "border-border bg-background text-muted-foreground hover:border-orange-500/35 hover:text-foreground"
                          }`}
                        >
                          <ThumbsDown className="size-3.5" aria-hidden />
                          Not quite
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
