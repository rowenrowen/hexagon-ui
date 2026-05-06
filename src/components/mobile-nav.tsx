"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/blocks", label: "Blocks" },
  { href: "/kit", label: "Kit" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/handoff", label: "Guide" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenSearch: () => void;
};

export function MobileNav({ open, onOpenChange, onOpenSearch }: MobileNavProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        className="inline-flex size-9 items-center justify-center rounded-lg border border-border/80 bg-background/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        aria-label="Open menu"
      >
        <Menu className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[90] md:hidden" id="mobile-nav-drawer">
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => onOpenChange(false)}
          />
          <nav
            className="absolute right-0 top-0 flex h-full w-[min(100vw-3rem,320px)] flex-col border-l border-border bg-card shadow-2xl"
            aria-label="Mobile"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-sm font-semibold text-foreground">Menu</span>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="size-[18px]" strokeWidth={1.75} aria-hidden />
              </button>
            </div>
            <div className="flex flex-col gap-1 p-3">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => onOpenChange(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/pricing"
                onClick={() => onOpenChange(false)}
                className="mt-2 rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Buy
              </Link>
            </div>
            <div className="mt-auto flex flex-col gap-2 border-t border-border p-3">
              <button
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  onOpenSearch();
                }}
                className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-left text-sm font-medium text-foreground"
              >
                <Search className="size-4 text-muted-foreground" aria-hidden />
                Search…
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">⌘K</span>
              </button>
              <div className="flex items-center justify-between rounded-lg border border-border bg-muted/25 px-3 py-2">
                <span className="text-xs text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
