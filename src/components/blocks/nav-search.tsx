"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Hexagon, Menu, Search, X } from "lucide-react";
import { MarketingLink } from "./marketing-link";

export type NavSearchLink = { href: string; label: string };

export const navSearchDefaults = {
  brandLabel: "Beacon",
  links: [
    { href: "#", label: "Docs" },
    { href: "#", label: "Guides" },
    { href: "#", label: "API" },
    { href: "#", label: "Changelog" },
  ] satisfies NavSearchLink[],
  cta: { href: "#", label: "Sign in" },
  searchPlaceholder: "Search docs…",
};

export type NavSearchProps = {
  brandLabel?: string;
  links?: NavSearchLink[];
  cta?: { href: string; label: string };
  searchPlaceholder?: string;
  className?: string;
};

/**
 * Docs-style header with a prominent ⌘K search input — distinct from the
 * other navs by primary interaction (search-first, not link-first).
 *
 * Layout:
 *  - Desktop: logo · primary links · search input (flex-1) · CTA
 *  - Mobile:  logo · search field stays visible · hamburger
 *
 * The mobile differentiation matters: the search stays the dominant element,
 * not a hamburger drawer. Tapping the input would normally open a `cmdk`
 * palette — left as `onClick` plumbing for consumers.
 */
export function NavSearch({
  brandLabel = navSearchDefaults.brandLabel,
  links = navSearchDefaults.links,
  cta = navSearchDefaults.cta,
  searchPlaceholder = navSearchDefaults.searchPlaceholder,
  className,
}: NavSearchProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shortcut, setShortcut] = useState<"⌘" | "Ctrl">("⌘");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof navigator !== "undefined" && !/Mac|iPhone|iPad|iPod/i.test(navigator.platform)) {
      setShortcut("Ctrl");
    }
  }, []);

  return (
    <header className={`relative z-10 border-b border-border bg-card/95 backdrop-blur-sm ${className ?? ""}`}>
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-3 sm:gap-4 sm:px-4 md:gap-6">
        <motion.div whileHover={reduceMotion ? undefined : { y: -1 }} className="shrink-0">
          <MarketingLink href="#" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
            <motion.span
              className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary"
              whileHover={reduceMotion ? undefined : { rotate: -8, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 360, damping: 20 }}
            >
              <Hexagon className="size-4" strokeWidth={2} aria-hidden />
            </motion.span>
            <span className="hidden sm:inline">{brandLabel}</span>
          </MarketingLink>
        </motion.div>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {links.map((link) => (
            <MarketingLink
              key={link.label}
              href={link.href}
              className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              {link.label}
            </MarketingLink>
          ))}
        </nav>

        <button
          type="button"
          className="group/search relative flex h-9 min-w-0 flex-1 items-center gap-2 rounded-lg border border-border/80 bg-background/70 px-3 text-left text-sm text-muted-foreground transition-colors hover:border-border hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-label="Search"
        >
          <Search className="size-4 shrink-0 text-muted-foreground/80" strokeWidth={2} aria-hidden />
          <span className="min-w-0 flex-1 truncate font-normal">{searchPlaceholder}</span>
          <kbd className="ml-auto hidden shrink-0 items-center gap-0.5 rounded border border-border/70 bg-muted/60 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-muted-foreground sm:inline-flex">
            <span className="text-[11px] leading-none">{shortcut}</span>
            <span>K</span>
          </kbd>
        </button>

        <div className="hidden shrink-0 md:block">
          <motion.div whileHover={reduceMotion ? undefined : { y: -1 }} whileTap={reduceMotion ? undefined : { scale: 0.985 }}>
            <MarketingLink
              href={cta.href}
              className="inline-flex h-9 items-center rounded-lg bg-primary px-3.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-md"
            >
              {cta.label}
            </MarketingLink>
          </motion.div>
        </div>

        <motion.button
          type="button"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
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

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            key="nav-search-mobile"
            initial={reduceMotion ? false : { opacity: 0, maxHeight: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, maxHeight: 520 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-border bg-card md:hidden"
          >
            <nav className="flex flex-col gap-1 px-3 py-3" aria-label="Mobile primary">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.04 }}
                >
                  <MarketingLink
                    href={link.href}
                    className="flex h-11 items-center rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted/70"
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
                className="pt-1"
              >
                <MarketingLink
                  href={cta.href}
                  className="flex h-11 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
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
