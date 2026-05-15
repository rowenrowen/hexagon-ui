"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { PreviewAppearancePanel } from "@/components/marketing/preview-controls";
import { HUB_BLOCK_SECTIONS } from "@/content/blocks-catalog";

/**
 * Mobile `/blocks/*`: horizontal section **tabs** (underline active) — visually
 * distinct from the main header’s pill buttons above.
 */
export function BlocksMobileNav() {
  const pathname = usePathname();
  const activeSlug = pathname.startsWith("/blocks/")
    ? pathname.replace(/^\/blocks\//, "").split("/")[0]
    : null;

  return (
    <div className="sticky top-14 z-20 border-b border-border/70 bg-background/95 backdrop-blur-lg lg:hidden">
      <nav aria-label="Block categories" className="px-1 pt-1">
        <div className="flex gap-0 overflow-x-auto border-b border-border/60 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {HUB_BLOCK_SECTIONS.map((section) => {
            const active = activeSlug === section.slug;
            return (
              <Link
                key={section.slug}
                href={`/blocks/${section.slug}`}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "-mb-px shrink-0 border-b-2 border-primary px-3 py-2.5 text-sm font-semibold text-foreground transition-colors"
                    : "-mb-px shrink-0 border-b-2 border-transparent px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
