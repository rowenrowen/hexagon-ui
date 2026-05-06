"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { BlockSectionMeta } from "@/content/blocks-catalog";
import { PREVIEW_THEMES } from "@/content/preview-themes";
import { usePreviewTheme } from "@/components/marketing/preview-theme-context";

type BlocksExploreLayoutProps = {
  sections: BlockSectionMeta[];
  children: ReactNode;
};

function useActiveBlockSlug(blockIds: string[]) {
  const key = useMemo(() => blockIds.join("|"), [blockIds]);
  const [active, setActive] = useState<string | null>(blockIds[0] ?? null);

  useEffect(() => {
    setActive((prev) => {
      if (prev && blockIds.includes(prev)) return prev;
      return blockIds[0] ?? null;
    });
  }, [key, blockIds]);

  useEffect(() => {
    const ids = key.split("|").filter(Boolean);
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.target.id)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const pick = visible[0]?.target.id;
        if (pick) setActive(pick);
      },
      {
        root: null,
        rootMargin: "-88px 0px -48% 0px",
        threshold: [0, 0.06, 0.12, 0.2, 0.35, 0.55, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}

function ThemeSwatch({ className }: { className: string }) {
  return (
    <span
      className={`size-2.5 shrink-0 rounded-full shadow-inner ring-1 ring-black/10 dark:ring-white/15 ${className}`}
      aria-hidden
    />
  );
}

function navLinkClass(active: boolean, dense?: boolean) {
  const base = dense ? "text-[12px] leading-snug" : "text-[13px]";
  return `${base} block rounded-md px-2.5 py-1.5 transition-colors ${
    active ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
  }`;
}

/** Browse + preview lab — categories expand to every block filename so anchors are obvious. */
export function BlocksExploreLayout({ sections, children }: BlocksExploreLayoutProps) {
  const blockIds = useMemo(() => sections.flatMap((s) => s.blocks.map((b) => b.slug)), [sections]);
  const activeBlockId = useActiveBlockSlug(blockIds);
  const { themeId, setThemeId } = usePreviewTheme();

  const activeSectionSlug = useMemo(() => {
    if (!activeBlockId) return sections[0]?.slug ?? null;
    const sec = sections.find((s) => s.blocks.some((b) => b.slug === activeBlockId));
    return sec?.slug ?? sections[0]?.slug ?? null;
  }, [activeBlockId, sections]);

  const scrollToHash = useCallback((hash: string) => {
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <div className="flex min-h-[calc(100dvh-3.5rem)] w-full flex-1 bg-background text-foreground">
      <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-[17.5rem] shrink-0 flex-col border-r border-border/80 bg-card/30 lg:flex">
        <nav className="min-h-0 flex-1 overflow-y-auto px-2 pb-4 pt-5" aria-label="Blocks catalog">
          <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Catalog</p>
          <ul className="space-y-4 px-1">
            {sections.map((s) => {
              const sectionHot = activeSectionSlug === s.slug;
              return (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash(`#${s.slug}`);
                    }}
                    className={`block rounded-md px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                      sectionHot ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.title}
                  </a>
                  <ul className="mt-1 space-y-0.5 border-l border-border/70 pl-2.5">
                    {s.blocks.map((b) => {
                      const hot = activeBlockId === b.slug;
                      return (
                        <li key={b.slug}>
                          <a
                            href={`#${b.slug}`}
                            title={b.frameDescription}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToHash(`#${b.slug}`);
                            }}
                            className={navLinkClass(hot, true)}
                          >
                            <span className="block truncate font-medium">{b.frameTitle}</span>
                            <span className="mt-0.5 block truncate font-mono text-[10px] font-normal text-muted-foreground/90">
                              {b.file}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="sticky top-14 z-20 border-b border-border/80 bg-background/90 px-4 py-3 backdrop-blur-xl lg:hidden">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Jump to block</p>
            <div className="max-h-[min(52vh,380px)] space-y-2 overflow-y-auto pr-1">
              {sections.map((s) => (
                <details key={s.slug} className="group rounded-lg border border-border bg-card shadow-sm">
                  <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-2">
                      {s.title}
                      <span className="text-[11px] font-normal text-muted-foreground">{s.blocks.length}</span>
                    </span>
                  </summary>
                  <div className="border-t border-border px-2 py-2">
                    <a
                      href={`#${s.slug}`}
                      className="mb-1 block rounded-md px-2 py-1.5 text-[11px] font-medium text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToHash(`#${s.slug}`);
                      }}
                    >
                      Section overview
                    </a>
                    <ul className="space-y-0.5">
                      {s.blocks.map((b) => {
                        const hot = activeBlockId === b.slug;
                        return (
                          <li key={b.slug}>
                            <a
                              href={`#${b.slug}`}
                              className={navLinkClass(hot, true)}
                              title={b.frameDescription}
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToHash(`#${b.slug}`);
                              }}
                            >
                              <span className="truncate">{b.frameTitle}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-3">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Color</p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {PREVIEW_THEMES.map((t) => {
                  const active = themeId === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setThemeId(t.id)}
                      className={`flex shrink-0 items-center gap-2 rounded-full border py-1.5 pl-2 pr-3 text-left text-xs font-medium transition-colors ${
                        active
                          ? "border-primary/40 bg-primary/10 text-foreground shadow-sm"
                          : "border-border bg-muted/30 text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground"
                      }`}
                    >
                      <ThemeSwatch className={t.swatch} />
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="preview-canvas relative min-w-0 flex-1 bg-gradient-to-b from-muted/30 via-background to-background text-foreground dark:from-muted/20">
            <div className="pb-28">{children}</div>
          </div>
        </div>

        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-[16rem] shrink-0 flex-col border-l border-border/80 bg-card/25 xl:flex">
          <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-4 pt-5">
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Color
            </p>
            <p className="px-3 pb-4 text-[12px] leading-snug text-muted-foreground">
              Recolors each block&apos;s preview body only — rails and chrome stay on the site theme so you see exactly what ships.
            </p>
            <ul className="space-y-1 px-1">
              {PREVIEW_THEMES.map((t) => {
                const active = themeId === t.id;
                return (
                  <li key={t.id}>
                    <motion.button
                      type="button"
                      layout
                      onClick={() => setThemeId(t.id)}
                      className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                        active
                          ? "bg-accent text-accent-foreground shadow-sm ring-1 ring-border/80"
                          : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                      }`}
                    >
                      <ThemeSwatch className={t.swatch} />
                      <span className="min-w-0">
                        <span className="block text-[13px] font-medium leading-tight text-foreground">{t.label}</span>
                        <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">{t.hint}</span>
                      </span>
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
