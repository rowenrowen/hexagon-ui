"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BLOCK_SECTIONS } from "@/content/blocks-catalog";

/**
 * Desktop left rail: category links only — browsing stays obvious without extra cards.
 */
export function BlocksSidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const activeSlug = pathname.startsWith("/blocks/")
    ? pathname.replace(/^\/blocks\//, "").split("/")[0]
    : null;

  return (
    <nav aria-label="Block categories" className={className}>
      <p className="px-2 pb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Sections</p>
      <ul className="space-y-0.5">
        {BLOCK_SECTIONS.map((section) => {
          const active = activeSlug === section.slug;
          return (
            <li key={section.slug}>
              <Link
                href={`/blocks/${section.slug}`}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "flex items-center justify-between gap-2 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-2 text-sm font-semibold text-foreground"
                    : "flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                }
              >
                <span className="min-w-0 truncate">{section.title}</span>
                <span
                  className={
                    active
                      ? "shrink-0 rounded-md bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary"
                      : "shrink-0 rounded-md bg-muted/60 px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground"
                  }
                  aria-hidden
                >
                  {section.blocks.length}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
