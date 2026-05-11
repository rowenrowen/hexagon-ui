"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect } from "react";
import { SITE_PRIMARY_NAV } from "@/content/site-nav";
import { SITE_PRIMARY_PURCHASE_CLASSES } from "@/lib/site-cta";
import { HEADER_SURFACE_BTN_CLASSES } from "@/components/theme-toggle";

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenSearch: () => void;
  triggerClassName?: string;
};

export function MobileNav({
  open,
  onOpenChange,
  onOpenSearch,
  triggerClassName = HEADER_SURFACE_BTN_CLASSES,
}: MobileNavProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        className={`${triggerClassName} md:hidden`}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-haspopup="dialog"
        aria-label="Open menu"
      >
        <Menu className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[220] md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-black/65"
            aria-label="Close menu"
            onClick={() => onOpenChange(false)}
          />
          <nav
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-x-4 top-4 flex max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-sm font-semibold tracking-tight text-foreground">Navigation</span>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className={HEADER_SURFACE_BTN_CLASSES}
                aria-label="Close menu"
              >
                <X className="size-[18px]" strokeWidth={1.75} aria-hidden />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-3">
              <ul className="space-y-1">
                {SITE_PRIMARY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => onOpenChange(false)}
                      className="block rounded-lg px-3 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-muted active:bg-muted/80"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border p-3">
              <button
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  onOpenSearch();
                }}
                className="flex w-full items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-left text-sm font-medium text-foreground"
              >
                <Search className="size-4 text-muted-foreground" strokeWidth={1.75} aria-hidden />
                Search
                <span className="ml-auto font-mono text-[10px] text-muted-foreground">⌘K</span>
              </button>
              <Link
                href="/pricing"
                onClick={() => onOpenChange(false)}
                className={`${SITE_PRIMARY_PURCHASE_CLASSES} mt-2 w-full`}
              >
                Buy
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
