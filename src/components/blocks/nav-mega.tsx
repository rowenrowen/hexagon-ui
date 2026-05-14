"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Boxes,
  ChevronDown,
  Code2,
  FileText,
  Hexagon,
  Layers,
  Menu,
  Shield,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { MarketingLink } from "./marketing-link";
import { KIT_PRIMARY_PILL, KIT_SECONDARY_PILL } from "@/lib/kit-button-classes";

const iconMap = {
  layers: Layers,
  chart: BarChart3,
  shield: Shield,
  code: Code2,
  book: BookOpen,
  users: Users,
  spark: Sparkles,
  boxes: Boxes,
  file: FileText,
} as const;

export type NavMegaLink = {
  label: string;
  href: string;
  description?: string;
  icon?: keyof typeof iconMap;
};

export type NavMegaMenu = {
  label: string;
  featuredTitle?: string;
  featuredBody?: string;
  featuredHref?: string;
  columns: { heading: string; links: NavMegaLink[] }[];
};

export const navMegaDefaults = {
  brandLabel: "Meridian",
  menus: [
    {
      label: "Product",
      featuredTitle: "See Meridian in 6 minutes",
      featuredBody: "Guided tour of pipelines, permissions, and exports — no signup wall.",
      featuredHref: "#",
      columns: [
        {
          heading: "Platform",
          links: [
            { label: "Overview", href: "#", description: "Positioning and core workflows.", icon: "layers" },
            { label: "Analytics", href: "#", description: "Funnels, cohorts, and boards.", icon: "chart" },
            { label: "Automation", href: "#", description: "Triggers, playbooks, approvals.", icon: "spark" },
          ],
        },
        {
          heading: "Depth",
          links: [
            { label: "Security", href: "#", description: "Encryption, SSO, audit trail.", icon: "shield" },
            { label: "API & events", href: "#", description: "REST, webhooks, rate limits.", icon: "code" },
            { label: "Integrations", href: "#", description: "CRM, warehouse, chat.", icon: "boxes" },
          ],
        },
      ],
    },
    {
      label: "Solutions",
      columns: [
        {
          heading: "By team",
          links: [
            { label: "RevOps", href: "#", description: "Forecasting and handoffs.", icon: "chart" },
            { label: "Engineering", href: "#", description: "Ship with guardrails.", icon: "code" },
            { label: "Customer success", href: "#", description: "Health scores and QBRs.", icon: "users" },
          ],
        },
        {
          heading: "By industry",
          links: [
            { label: "Fintech", href: "#", description: "Controls buyers expect.", icon: "shield" },
            { label: "B2B SaaS", href: "#", description: "Self-serve plus sales assist.", icon: "layers" },
            { label: "Marketplaces", href: "#", description: "Disputes and payouts visibility.", icon: "boxes" },
          ],
        },
      ],
    },
    {
      label: "Resources",
      columns: [
        {
          heading: "Learn",
          links: [
            { label: "Docs", href: "#", description: "Install to first API call.", icon: "book" },
            { label: "Guides", href: "#", description: "Playbooks and checklists.", icon: "file" },
            { label: "Changelog", href: "#", description: "Ship notes and migrations.", icon: "spark" },
          ],
        },
      ],
    },
  ] satisfies NavMegaMenu[],
  flatLinks: [{ label: "Pricing", href: "#" }] as { label: string; href: string }[],
  signIn: { label: "Sign in", href: "#" },
  cta: { label: "Book a demo", href: "#" },
};

export type NavMegaProps = {
  brandLabel?: string;
  menus?: NavMegaMenu[];
  flatLinks?: { label: string; href: string }[];
  signIn?: { label: string; href: string };
  cta?: { label: string; href: string };
  className?: string;
};

export function NavMega(props: Partial<NavMegaProps> = {}) {
  const p = { ...navMegaDefaults, ...props };
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverCloseDelayMs = 160;

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

  function MegaPanel({ menu }: { menu: NavMegaMenu }) {
    return (
      <div
        className={`grid gap-6 p-4 sm:p-5 ${menu.featuredTitle ? "sm:grid-cols-[minmax(0,13rem)_1fr]" : ""}`}
      >
        {menu.featuredTitle ? (
          <MarketingLink
            href={menu.featuredHref ?? "#"}
            className="hidden rounded-xl border border-border/80 bg-muted/30 p-4 text-left transition-colors hover:bg-muted/50 sm:block"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Featured</p>
            <p className="mt-2 text-sm font-semibold text-foreground">{menu.featuredTitle}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{menu.featuredBody}</p>
          </MarketingLink>
        ) : null}
        <div className={`grid min-w-0 gap-6 ${menu.columns.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {menu.columns.map((col) => (
            <div key={col.heading}>
              <p className="px-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{col.heading}</p>
              <ul className="mt-2 space-y-0.5">
                {col.links.map((link) => {
                  const Icon = link.icon ? iconMap[link.icon] ?? Layers : Layers;
                  return (
                    <li key={link.label}>
                      <MarketingLink
                        href={link.href}
                        className="flex gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-muted/80"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-border/80 bg-card text-primary">
                          <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-foreground">{link.label}</span>
                          {link.description ? (
                            <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{link.description}</span>
                          ) : null}
                        </span>
                      </MarketingLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <header
      ref={headerRef}
      className={`relative z-20 border-b border-border bg-card/95 backdrop-blur-md ${p.className ?? ""}`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <MarketingLink href="#" className="flex min-w-0 items-center gap-2 font-semibold tracking-tight text-foreground">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
            <Hexagon className="size-4" strokeWidth={2} aria-hidden />
          </span>
          <span className="truncate">{p.brandLabel}</span>
        </MarketingLink>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {p.menus.map((menu) => {
            const open = openMenu === menu.label;
            return (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(menu.label);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="dialog"
                  onClick={() => {
                    cancelClose();
                    setOpenMenu(open ? null : menu.label);
                  }}
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring ${
                    open ? "text-foreground" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  {menu.label}
                  <ChevronDown className={`size-3.5 opacity-70 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
                </button>
                <AnimatePresence>
                  {open ? (
                    <motion.div
                      key={menu.label}
                      initial={reduceMotion ? false : { opacity: 0, y: -4 }}
                      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute left-1/2 top-full z-40 mt-2 w-[min(calc(100vw-2rem),36rem)] -translate-x-1/2 rounded-2xl border border-border bg-card shadow-2xl shadow-black/15 ring-1 ring-black/[0.04] dark:shadow-black/50 dark:ring-white/[0.06]"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <MegaPanel menu={menu} />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
          {p.flatLinks.map((link) => (
            <MarketingLink
              key={link.label}
              href={link.href}
              onMouseEnter={cancelClose}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              {link.label}
            </MarketingLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <MarketingLink href={p.signIn.href} onMouseEnter={cancelClose} className={KIT_SECONDARY_PILL + " px-4 py-2"}>
            {p.signIn.label}
          </MarketingLink>
          <MarketingLink href={p.cta.href} onMouseEnter={cancelClose} className={KIT_PRIMARY_PILL + " px-4 py-2"}>
            {p.cta.label}
          </MarketingLink>
        </div>

        <motion.button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        >
          {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            key="mega-mobile"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            <div className="max-h-[min(78vh,560px)] overflow-y-auto px-4 py-4">
              {p.menus.map((menu) => (
                <details key={menu.label} className="group border-b border-border/70 py-1 last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                    {menu.label}
                    <ChevronDown className="size-4 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="pb-3 pt-1">
                    <MegaPanel menu={menu} />
                  </div>
                </details>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                {p.flatLinks.map((link) => (
                  <MarketingLink
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-2 py-2 text-sm font-medium text-foreground hover:bg-muted/70"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </MarketingLink>
                ))}
                <MarketingLink
                  href={p.signIn.href}
                  className={KIT_SECONDARY_PILL}
                  onClick={() => setMobileOpen(false)}
                >
                  {p.signIn.label}
                </MarketingLink>
                <MarketingLink href={p.cta.href} className={KIT_PRIMARY_PILL} onClick={() => setMobileOpen(false)}>
                  {p.cta.label}
                </MarketingLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
