"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hexagon, Search } from "lucide-react";
import { useState } from "react";
import { CommandMenu } from "@/components/command-menu";
import { MobileNav } from "@/components/mobile-nav";
import { HEADER_SURFACE_BTN_CLASSES, ThemeToggle } from "@/components/theme-toggle";
import { SITE_PRIMARY_NAV } from "@/content/site-nav";
import { SITE_PRIMARY_PURCHASE_CLASSES } from "@/lib/site-cta";

function linkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active: boolean) {
  return active
    ? "rounded-md px-3 py-2 text-sm font-medium text-foreground"
    : "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [commandOpen, setCommandOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/65 backdrop-blur-xl backdrop-saturate-150">
        <div className="site-grid flex h-14 items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2 font-semibold tracking-tight text-foreground"
          >
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Hexagon className="size-4" strokeWidth={2} aria-hidden />
            </span>
            <span className="truncate">Hexagon UI</span>
          </Link>

          <nav className="hidden flex-1 items-center gap-0.5 pl-2 md:flex" aria-label="Primary">
            {SITE_PRIMARY_NAV.map((item) => {
              const active = linkActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(active)}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setCommandOpen(true)}
              className="hidden h-9 min-w-0 items-center gap-2 rounded-lg border border-border/70 bg-muted/20 px-2.5 text-sm text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:bg-muted/55 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:inline-flex lg:min-w-[220px] lg:justify-between"
              aria-label="Open command menu"
            >
              <span className="flex min-w-0 items-center gap-2">
                <Search className="size-4 shrink-0 opacity-65" strokeWidth={1.75} aria-hidden />
                <span className="hidden truncate text-[13px] lg:inline">Search documentation…</span>
              </span>
              <kbd
                className="pointer-events-none hidden select-none items-center gap-1 rounded-md border border-border/60 bg-background/90 px-2 py-0.5 font-sans text-[11px] font-medium tabular-nums text-muted-foreground dark:bg-muted/60 lg:inline-flex"
                aria-hidden
              >
                <span className="opacity-90">⌘</span>
                <span>K</span>
              </kbd>
            </button>

            <ThemeToggle />

            <Link href="/pricing" className={SITE_PRIMARY_PURCHASE_CLASSES}>
              Buy
            </Link>

            <MobileNav
              open={mobileOpen}
              onOpenChange={setMobileOpen}
              onOpenSearch={() => setCommandOpen(true)}
              triggerClassName={HEADER_SURFACE_BTN_CLASSES}
            />
          </div>
        </div>
      </header>
    </>
  );
}
