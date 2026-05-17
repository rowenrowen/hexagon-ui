"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Hexagon, Menu, X } from "lucide-react";
import { KIT_PRIMARY_PILL_COMPACT, KIT_PRIMARY_PILL_BLOCK } from "@/lib/kit-button-classes";
import { MarketingLink } from "./marketing-link";

export type NavMarketingDropdownItem = {
  href: string;
  label: string;
  description?: string;
};

export type NavMarketingLink =
  | { label: string; href: string }
  | { label: string; items: NavMarketingDropdownItem[] };

export const navMarketingDefaults = {
  brandLabel: "Acme",
  links: [
    {
      label: "Product",
      items: [
        { href: "#", label: "Overview", description: "Positioning, screenshots, and rollout narrative." },
        { href: "#", label: "Integrations", description: "CRM, warehouse exports, and alerting hooks." },
        { href: "#", label: "Security", description: "SOC2-ready proof density procurement expects." },
      ],
    },
    { href: "#", label: "Solutions" },
    { href: "#", label: "Pricing" },
    {
      label: "Docs",
      items: [
        { href: "#", label: "Getting started", description: "Install, auth, and first deployment paths." },
        { href: "#", label: "API reference", description: "REST endpoints, events, and webhooks." },
        { href: "#", label: "Changelog", description: "Ship notes and migration guides." },
      ],
    },
  ] satisfies NavMarketingLink[],
  cta: { href: "#", label: "Book demo" },
};

export type NavMarketingProps = {
  brandLabel?: string;
  links?: NavMarketingLink[];
  cta?: { href: string; label: string };
  /** Delay before a hover-opened menu auto-closes when the pointer leaves trigger + panel. */
  hoverCloseDelayMs?: number;
  className?: string;
};

function isMenu(link: NavMarketingLink): link is { label: string; items: NavMarketingDropdownItem[] } {
  return "items" in link;
}

export function NavMarketing({
  brandLabel = navMarketingDefaults.brandLabel,
  links = navMarketingDefaults.links,
  cta = navMarketingDefaults.cta,
  hoverCloseDelayMs = 140,
  className,
}: NavMarketingProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), hoverCloseDelayMs);
  };

  useEffect(() => {
    if (!openMenu) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("keydown", onEscape);
    };
  }, [openMenu]);

  useEffect(() => () => cancelClose(), []);

  return (
    <header
      ref={headerRef}
      className={`relative z-20 border-b border-border bg-card/90 backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <motion.div whileHover={reduceMotion ? undefined : { y: -1 }}>
          <MarketingLink href="#" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
            <motion.span
              className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary"
              whileHover={reduceMotion ? undefined : { rotate: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 360, damping: 20 }}
            >
              <Hexagon className="size-4" strokeWidth={2} aria-hidden />
            </motion.span>
            {brandLabel}
          </MarketingLink>
        </motion.div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Marketing">
          {links.map((entry) => {
            if (isMenu(entry)) {
              const open = openMenu === entry.label;
              return (
                <div
                  key={entry.label}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(entry.label);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="menu"
                    onClick={() => {
                      cancelClose();
                      setOpenMenu(open ? null : entry.label);
                    }}
                    onFocus={() => {
                      cancelClose();
                      setOpenMenu(entry.label);
                    }}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                      open ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {entry.label}
                    <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="size-3.5 opacity-70" aria-hidden />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {open ? (
                      <motion.div
                        role="menu"
                        aria-label={`${entry.label} navigation`}
                        initial={reduceMotion ? false : { opacity: 0, y: -6, scale: 0.98 }}
                        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute left-1/2 top-full z-30 mt-2 w-72 -translate-x-1/2 rounded-xl border border-border bg-card p-1.5 shadow-xl shadow-black/15 ring-1 ring-black/[0.05] dark:shadow-black/50 dark:ring-white/[0.07]"
                      >
                        {entry.items.map((item) => (
                          <MarketingLink
                            key={item.label}
                            href={item.href}
                            role="menuitem"
                            className="block w-full rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-muted/80 focus-visible:bg-muted/80 focus-visible:outline-none"
                            onClick={() => setOpenMenu(null)}
                          >
                            <span className="block text-sm font-medium text-foreground">{item.label}</span>
                            {item.description ? (
                              <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </span>
                            ) : null}
                          </MarketingLink>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <MarketingLink
                key={entry.label}
                href={entry.href}
                onMouseEnter={cancelClose}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
              >
                {entry.label}
              </MarketingLink>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
          >
            <MarketingLink
              href={cta.href}
              className={KIT_PRIMARY_PILL_COMPACT}
            >
              {cta.label}
            </MarketingLink>
          </motion.div>
        </div>

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

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            key="nav-mobile"
            initial={reduceMotion ? false : { opacity: 0, maxHeight: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, maxHeight: 520 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-border bg-card md:hidden"
          >
            <nav className="flex max-h-[min(70vh,520px)] flex-col gap-1 overflow-y-auto px-4 py-4" aria-label="Marketing mobile">
              {links.map((entry, i) => {
                if (isMenu(entry)) {
                  return (
                    <details
                      key={entry.label}
                      className="group rounded-lg border border-transparent open:border-border open:bg-muted/30"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 text-sm font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                        {entry.label}
                        <ChevronDown
                          className="size-4 text-muted-foreground transition-transform group-open:rotate-180"
                          aria-hidden
                        />
                      </summary>
                      <div className="flex flex-col gap-0.5 border-t border-border/80 px-2 py-2">
                        {entry.items.map((item) => (
                          <MarketingLink
                            key={item.label}
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="font-medium text-foreground">{item.label}</span>
                            {item.description ? (
                              <span className="mt-0.5 block text-xs leading-snug">{item.description}</span>
                            ) : null}
                          </MarketingLink>
                        ))}
                      </div>
                    </details>
                  );
                }
                return (
                  <motion.div
                    key={entry.label}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.22, delay: i * 0.04 }}
                  >
                    <MarketingLink
                      href={entry.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/80"
                      onClick={() => setMobileOpen(false)}
                    >
                      {entry.label}
                    </MarketingLink>
                  </motion.div>
                );
              })}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.18 }}
              >
                <MarketingLink
                  href={cta.href}
                  className={`mt-2 ${KIT_PRIMARY_PILL_BLOCK}`}
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
