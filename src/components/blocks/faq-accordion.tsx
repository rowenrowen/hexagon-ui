"use client";

import type { ReactNode } from "react";
import { useId, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { MarketingTabList, MarketingTabPanel } from "./marketing-tab-controls";

export type FaqItem = { question: string; answer: string };

export type FaqCategory = { id: string; label: string; items: FaqItem[] };

export const faqAccordionCategoryDefaults: FaqCategory[] = [
  {
    id: "product",
    label: "Product",
    items: [
      {
        question: "How do deployments work?",
        answer:
          "Replace this copy with your rollout story. Height is spring-animated from measured content with reduced-motion support.",
      },
      {
        question: "Can we self-host?",
        answer: "Describe VPC, on-prem, or hybrid options for your buyers.",
      },
    ],
  },
  {
    id: "billing",
    label: "Billing",
    items: [
      {
        question: "What payment methods do you accept?",
        answer: "Major cards and wallets where your processor supports them — wire your checkout URL on the pricing block.",
      },
      {
        question: "Can we cancel anytime?",
        answer: "One-time purchase copy here — no subscription to cancel unless you sell seats separately.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    items: [
      {
        question: "What about SLAs?",
        answer: "Link to your status page and support tiers from here.",
      },
      {
        question: "Where is API documentation?",
        answer: "Point to OpenAPI, Postman, or your developer portal.",
      },
    ],
  },
];

/** Flat list for simple call sites (e.g. pricing page with custom copy). */
export const faqAccordionDefaults: FaqItem[] = faqAccordionCategoryDefaults.flatMap((c) => c.items);

export type FaqAccordionProps = {
  title?: string;
  /** When set, renders a single list (no category tabs). */
  items?: FaqItem[];
  /** Category tabs + accordions per group — default when `items` is omitted. */
  categories?: FaqCategory[];
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

function FaqAccordionList({
  items,
  reduceMotion,
  openKey,
  setOpenKey,
  idPrefix,
}: {
  items: FaqItem[];
  reduceMotion: boolean | null;
  openKey: string | null;
  setOpenKey: (key: string | null) => void;
  idPrefix: string;
}) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const key = `${idPrefix}-${index}`;
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
  );
}

export function FaqAccordion({
  title = "Questions",
  items,
  categories = faqAccordionCategoryDefaults,
  id = "faq",
  className,
}: FaqAccordionProps) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const useFlat = Boolean(items?.length);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");

  const activeItems = useFlat
    ? (items ?? [])
    : (categories.find((c) => c.id === activeCategory) ?? categories[0])?.items ?? [];

  return (
    <section id={id} className={`scroll-mt-20 border-t border-border py-20 ${className ?? ""}`}>
      <MarketingContainer>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>

        {useFlat ? (
          <div className="mt-10">
            <FaqAccordionList
              items={activeItems}
              reduceMotion={reduceMotion}
              openKey={openKey}
              setOpenKey={setOpenKey}
              idPrefix={baseId}
            />
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-border bg-card p-2 shadow-sm">
            <MarketingTabList
              tabs={categories.map((c) => ({ id: c.id, label: c.label }))}
              active={activeCategory}
              onChange={(next) => {
                setActiveCategory(next);
                setOpenKey(null);
              }}
              layoutId={`${baseId}-faq-pill`}
              ariaLabel="FAQ categories"
            />
            <MarketingTabPanel panelKey={activeCategory} className="mt-2 border-0 bg-transparent">
              <FaqAccordionList
                items={activeItems}
                reduceMotion={reduceMotion}
                openKey={openKey}
                setOpenKey={setOpenKey}
                idPrefix={`${baseId}-${activeCategory}`}
              />
            </MarketingTabPanel>
          </div>
        )}
      </MarketingContainer>
    </section>
  );
}
