"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Hexagon, Menu, X } from "lucide-react";
import { MarketingLink } from "./marketing-link";

export type NavCenteredLink = { href: string; label: string };

export const navCenteredDefaults = {
  brandLabel: "Acme",
  leftLinks: [
    { href: "#", label: "Product" },
    { href: "#", label: "Customers" },
  ] satisfies NavCenteredLink[],
  rightLinks: [
    { href: "#", label: "Pricing" },
    { href: "#", label: "Docs" },
  ] satisfies NavCenteredLink[],
  cta: { href: "#", label: "Sign in" },
};

export type NavCenteredProps = {
  brandLabel?: string;
  leftLinks?: NavCenteredLink[];
  rightLinks?: NavCenteredLink[];
  cta?: { href: string; label: string };
  className?: string;
};

/**
 * Centered-brand marketing nav: split link rails flanking a center logo.
 * Pairs best with editorial / brand-led marketing sites. Mobile collapses
 * to a hamburger drawer that lists every link in source order.
 */
export function NavCentered({
  brandLabel = navCenteredDefaults.brandLabel,
  leftLinks = navCenteredDefaults.leftLinks,
  rightLinks = navCenteredDefaults.rightLinks,
  cta = navCenteredDefaults.cta,
  className,
}: NavCenteredProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const linkClass =
    "relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";

  return (
    <header className={`relative z-10 border-b border-border bg-card/90 backdrop-blur-sm ${className ?? ""}`}>
      <div className="mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
        <nav className="hidden items-center justify-start gap-1 md:flex" aria-label="Primary left">
          {leftLinks.map((link) => (
            <MarketingLink key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </MarketingLink>
          ))}
        </nav>

        <motion.div
          className="flex items-center justify-center"
          whileHover={reduceMotion ? undefined : { y: -1 }}
          transition={{ type: "spring", stiffness: 360, damping: 20 }}
        >
          <MarketingLink href="#" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
            <motion.span
              className="inline-flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary"
              whileHover={reduceMotion ? undefined : { rotate: -10, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 360, damping: 20 }}
            >
              <Hexagon className="size-4" strokeWidth={2} aria-hidden />
            </motion.span>
            <span className="text-base">{brandLabel}</span>
          </MarketingLink>
        </motion.div>

        <div className="flex items-center justify-end gap-1 md:gap-2">
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary right">
            {rightLinks.map((link) => (
              <MarketingLink key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </MarketingLink>
            ))}
          </nav>
          <motion.div
            className="hidden md:block"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
          >
            <MarketingLink
              href={cta.href}
              className="ml-2 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-shadow hover:shadow-md"
            >
              {cta.label}
            </MarketingLink>
          </motion.div>

          <motion.button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          >
            <motion.span
              animate={mobileOpen && !reduceMotion ? { rotate: 90 } : { rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            key="nav-centered-mobile"
            initial={reduceMotion ? false : { opacity: 0, maxHeight: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, maxHeight: 520 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-border bg-card md:hidden"
          >
            <nav className="flex max-h-[min(70vh,520px)] flex-col gap-1 overflow-y-auto px-4 py-4" aria-label="Mobile primary">
              {[...leftLinks, ...rightLinks].map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.04 }}
                >
                  <MarketingLink
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/80"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </MarketingLink>
                </motion.div>
              ))}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.18 }}
              >
                <MarketingLink
                  href={cta.href}
                  className="mt-2 block rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {cta.label}
                </MarketingLink>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
