"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Hexagon, Menu, X } from "lucide-react";
import { KIT_PRIMARY_PILL, KIT_PRIMARY_PILL_BLOCK } from "@/lib/kit-button-classes";
import { MarketingLink } from "./marketing-link";

export type NavPillLink = { href: string; label: string };

export const navPillDefaults = {
  brandLabel: "Halo",
  links: [
    { href: "#", label: "Product" },
    { href: "#", label: "Customers" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Changelog" },
  ] satisfies NavPillLink[],
  cta: { href: "#", label: "Start free" },
};

export type NavPillProps = {
  brandLabel?: string;
  links?: NavPillLink[];
  cta?: { href: string; label: string };
  className?: string;
};

/**
 * Truly floating capsule nav for product-led / hero-overlay layouts.
 *
 * Distinct from the standard horizontal bar:
 *  - Sits inset from every edge (`mt-4 mx-4 sm:mt-5 sm:mx-6`) so it's
 *    visibly DETACHED, not glued to the viewport.
 *  - Backdrop-blurred translucent card riding on top of hero art / gradient.
 *  - Compact 48px pill (vs. 56px full bar) — reads as "overlay UI".
 *  - Mobile keeps the pill (no full-width bar collapse) and opens a popover-style
 *    floating card BELOW the pill, not an inline drawer.
 */
export function NavPill({
  brandLabel = navPillDefaults.brandLabel,
  links = navPillDefaults.links,
  cta = navPillDefaults.cta,
  className,
}: NavPillProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative z-10 px-4 pt-4 sm:px-6 sm:pt-5 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="relative flex h-12 items-center justify-between gap-2 rounded-full border border-border/60 bg-card/70 pl-3 pr-1.5 shadow-[0_10px_36px_-14px_oklch(0_0_0/0.22),_inset_0_1px_0_oklch(1_0_0/0.5)] backdrop-blur-xl backdrop-saturate-150 dark:bg-card/40 dark:shadow-[0_14px_40px_-16px_oklch(0_0_0/0.6),_inset_0_1px_0_oklch(1_0_0/0.06)]"
        >
          <motion.div whileHover={reduceMotion ? undefined : { y: -1 }}>
            <MarketingLink href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
              <motion.span
                className="inline-flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary"
                whileHover={reduceMotion ? undefined : { rotate: -10, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 360, damping: 20 }}
              >
                <Hexagon className="size-3.5" strokeWidth={2.25} aria-hidden />
              </motion.span>
              {brandLabel}
            </MarketingLink>
          </motion.div>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {links.map((link) => (
              <MarketingLink
                key={link.label}
                href={link.href}
                className="rounded-full px-2.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
              >
                {link.label}
              </MarketingLink>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <motion.div
              className="hidden md:block"
              whileHover={reduceMotion ? undefined : { y: -1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            >
              <MarketingLink
                href={cta.href}
                className={`${KIT_PRIMARY_PILL} h-9 gap-1.5 px-3.5 text-[13px] shadow-[0_4px_14px_-6px_oklch(var(--primary)/0.6)]`}
              >
                {cta.label}
                <ArrowRight className="size-3.5" strokeWidth={2.5} aria-hidden />
              </MarketingLink>
            </motion.div>

            <motion.button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground transition-colors hover:bg-foreground/[0.1] md:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            >
              <motion.span
                animate={mobileOpen && !reduceMotion ? { rotate: 90 } : { rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {mobileOpen ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence initial={false}>
          {mobileOpen ? (
            <motion.div
              key="nav-pill-mobile"
              initial={reduceMotion ? false : { opacity: 0, y: -6, scale: 0.97 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-4 right-4 top-full mt-2 origin-top overflow-hidden rounded-3xl border border-border/60 bg-card/90 p-2 shadow-[0_18px_56px_-16px_oklch(0_0_0/0.3)] backdrop-blur-xl sm:left-6 sm:right-6 md:hidden dark:bg-card/70 dark:shadow-[0_20px_60px_-16px_oklch(0_0_0/0.7)]"
            >
              <nav className="flex flex-col gap-0.5" aria-label="Mobile primary">
                {links.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.22, delay: i * 0.04 }}
                  >
                    <MarketingLink
                      href={link.href}
                      className="block h-11 rounded-2xl px-3 text-sm font-medium leading-[2.75rem] text-foreground transition-colors hover:bg-muted/80"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </MarketingLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, delay: 0.18 }}
                  className="pt-1.5"
                >
                  <MarketingLink
                    href={cta.href}
                    className={`flex h-11 items-center justify-center gap-1.5 ${KIT_PRIMARY_PILL_BLOCK}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {cta.label}
                    <ArrowRight className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </MarketingLink>
                </motion.div>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
