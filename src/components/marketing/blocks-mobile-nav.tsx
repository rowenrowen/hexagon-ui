"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { PreviewAppearancePanel } from "@/components/marketing/preview-controls";
import { HUB_BLOCK_SECTIONS } from "@/content/blocks-catalog";

/**
 * Mobile `/blocks/*`: one horizontal row of category pills; preview tuning lives in a collapsible panel.
 */
export function BlocksMobileNav() {
  const pathname = usePathname();
  const activeSlug = pathname.startsWith("/blocks/")
    ? pathname.replace(/^\/blocks\//, "").split("/")[0]
    : null;

  return (
    <div className="sticky top-14 z-20 border-b border-border/70 bg-background/95 backdrop-blur-lg lg:hidden">
      <nav aria-label="Categories" className="px-3 pt-2">
        <div className="flex gap-2 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {HUB_BLOCK_SECTIONS.map((section) => {
            const active = activeSlug === section.slug;
            return (
              <Link
                key={section.slug}
                href={`/blocks/${section.slug}`}
                scroll={false}
                className={
                  active
                    ? "inline-flex h-11 shrink-0 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                    : "inline-flex h-11 shrink-0 items-center rounded-full border border-border/80 bg-card px-5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground active:bg-muted/40"
                }
              >
                {section.title}
              </Link>
            );
          })}
        </div>
      </nav>
      <details className="group border-t border-border/50">
        <summary className="flex h-12 cursor-pointer list-none items-center justify-between gap-2 px-3 text-sm font-medium text-muted-foreground marker:hidden [&::-webkit-details-marker]:hidden">
          <span className="inline-flex items-center gap-2">
            <SlidersHorizontal className="size-4" strokeWidth={2} aria-hidden />
            Customize preview
          </span>
          <ChevronDown
            className="size-4 shrink-0 text-muted-foreground/80 transition-transform duration-200 group-open:rotate-180"
            aria-hidden
          />
        </summary>
        <PreviewAppearancePanel layout="mobile" />
      </details>
    </div>
  );
}
