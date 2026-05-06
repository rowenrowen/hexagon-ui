"use client";

import type { ReactNode } from "react";
import { useId, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";

export type FaqItem = { question: string; answer: string };

export const faqAccordionDefaults: FaqItem[] = [
  {
    question: "How do deployments work?",
    answer:
      "Replace this copy with your rollout story. Height is spring-animated from measured content (Animate UI–style polish) with reduced-motion support.",
  },
  {
    question: "Can we self-host?",
    answer: "Template answer—describe VPC, on-prem, or hybrid options for your buyers.",
  },
  {
    question: "What about SLAs?",
    answer: "Template answer—link to your status page and support tiers from here.",
  },
  {
    question: "Where is API documentation?",
    answer: "Template answer—point to OpenAPI, Postman, or developer portal links.",
  },
];

export type FaqAccordionProps = {
  title?: string;
  items?: FaqItem[];
  id?: string;
  className?: string;
};

function FaqPanel({
  isOpen,
  reduceMotion,
  panelId,
  labelledBy,
  children,
}: {
  isOpen: boolean;
  reduceMotion: boolean | null;
  panelId: string;
  labelledBy: string;
  children: ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    if (!isOpen) {
      setHeight(0);
      return;
    }

    const measure = () => {
      if (!innerRef.current) return;
      setHeight(innerRef.current.scrollHeight);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen]);

  return (
    <motion.div
      id={panelId}
      role="region"
      aria-labelledby={labelledBy}
      style={{ overflow: "hidden" }}
      initial={false}
      animate={{
        height: reduceMotion ? (isOpen ? "auto" : 0) : height,
      }}
      transition={
        reduceMotion
          ? { duration: 0.18, ease: [0.4, 0, 0.2, 1] }
          : {
              height: { type: "spring", stiffness: 420, damping: 38, mass: 0.52 },
            }
      }
      className="border-t border-border/80"
    >
      <div ref={innerRef}>
        <p className="px-5 pb-4 pt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </motion.div>
  );
}

export function FaqAccordion({
  title = "Questions",
  items = faqAccordionDefaults,
  id = "faq",
  className,
}: FaqAccordionProps) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id={id} className={`scroll-mt-20 border-t border-border py-20 ${className ?? ""}`}>
      <MarketingContainer>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
        <div className="mt-10 space-y-3">
          {items.map((item, index) => {
            const key = `${baseId}-${index}`;
            const isOpen = openKey === key;
            return (
              <div
                key={`${item.question}-${index}`}
                className={`overflow-hidden rounded-xl border bg-card transition-colors ${isOpen ? "border-primary/35 shadow-sm ring-1 ring-primary/15" : "border-border"}`}
              >
                <motion.button
                  type="button"
                  id={`${key}-btn`}
                  aria-expanded={isOpen}
                  aria-controls={`${key}-panel`}
                  onClick={() => setOpenKey(isOpen ? null : key)}
                  whileTap={reduceMotion ? undefined : { scale: 0.995 }}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-card-foreground transition-colors hover:bg-muted/40"
                >
                  {item.question}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 28, mass: 0.35 }
                    }
                    className="inline-flex shrink-0"
                  >
                    <ChevronDown className="size-4 text-muted-foreground" aria-hidden />
                  </motion.span>
                </motion.button>
                <FaqPanel
                  isOpen={isOpen}
                  reduceMotion={reduceMotion}
                  panelId={`${key}-panel`}
                  labelledBy={`${key}-btn`}
                >
                  {item.answer}
                </FaqPanel>
              </div>
            );
          })}
        </div>
      </MarketingContainer>
    </section>
  );
}
