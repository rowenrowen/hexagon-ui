"use client";

import type { ReactNode } from "react";
import { useId, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import type { HexagonFaqGroup } from "@/content/hexagon-landing";

type HomeFaqProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  groups: HexagonFaqGroup[];
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
      className="border-t border-border/70"
    >
      <div ref={innerRef}>
        <p className="px-5 pb-4 pt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </motion.div>
  );
}

export function HomeFaq({
  eyebrow = "FAQ",
  title = "Common questions",
  description = "Everything teams ask before pasting Hexagon UI into a real launch — short answers grouped by intent.",
  groups,
  id = "faq",
  className,
}: HomeFaqProps) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section
      id={id}
      className={`relative scroll-mt-20 border-t border-border/60 py-20 sm:py-28 lg:py-32 ${className ?? ""}`}
    >
      <MarketingContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">{description}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {groups.map((group, gi) => (
            <div key={group.id} className={gi === 0 ? "" : "mt-10"}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item, index) => {
                  const key = `${baseId}-${group.id}-${index}`;
                  const isOpen = openKey === key;
                  return (
                    <li
                      key={`${item.question}-${index}`}
                      className={`overflow-hidden rounded-xl border bg-card transition-colors ${
                        isOpen
                          ? "border-primary/35 shadow-sm ring-1 ring-primary/15"
                          : "border-border/80"
                      }`}
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
                        <span className="min-w-0 flex-1 pr-2">{item.question}</span>
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
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </MarketingContainer>
    </section>
  );
}
