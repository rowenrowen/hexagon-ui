"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { BlockSectionMeta } from "@/content/blocks-catalog";
import { PREVIEW_RADIUS_OPTIONS } from "@/content/preview-radius";
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

function ThemeDots({ dots }: { dots: readonly [string, string, string] }) {
  return (
    <span className="flex shrink-0 items-center gap-0.5" aria-hidden>
      {dots.map((c, i) => (
        <span
          key={`${c}-${i}`}
          className={`size-2 rounded-full shadow-inner ring-1 ring-black/12 dark:ring-white/18 ${c}`}
        />
      ))}
    </span>
  );
}

function RadiusGlyph({ id }: { id: string }) {
  const map: Record<string, string> = {
    none: "2px",
    sm: "5px",
    md: "10px",
    lg: "14px",
    xl: "18px",
  };
  const r = map[id] ?? "10px";
  return (
    <span
      className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/50 shadow-inner"
      aria-hidden
    >
      <span className="size-5 border border-muted-foreground/40 bg-background shadow-sm" style={{ borderRadius: r }} />
    </span>
  );
}

function navLinkClass(active: boolean, dense?: boolean) {
  const base = dense ? "text-[12px] leading-snug" : "text-[13px]";
  return `${base} block rounded-md px-2.5 py-1.5 transition-colors ${
    active
      ? "bg-primary/12 font-semibold text-foreground ring-1 ring-primary/25"
      : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
  }`;
}

function PreviewAppearancePanel({
  dense,
  onPick,
}: {
  dense?: boolean;
  /** Called after a theme/radius change (e.g. close mobile drawer). */
  onPick?: () => void;
}) {
  const { themeId, setThemeId, radiusId, setRadiusId } = usePreviewTheme();

  return (
    <div className={dense ? "space-y-5" : "space-y-6"}>
      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Color</p>
        <div className={`flex flex-wrap gap-2 ${dense ? "" : "flex-col sm:flex-row sm:flex-wrap"}`}>
          {PREVIEW_THEMES.map((t) => {
            const active = themeId === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setThemeId(t.id);
                  onPick?.();
                }}
                className={`flex min-w-0 items-center gap-2 rounded-full border py-1.5 pl-2 pr-3 text-left text-xs font-medium transition-colors ${
                  dense ? "shrink-0" : "w-full sm:w-auto"
                } ${
                  active
                    ? "border-primary/35 bg-primary/12 text-foreground shadow-sm ring-1 ring-primary/15"
                    : "border-border bg-muted/30 text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                <ThemeDots dots={t.dots} />
                <span className="truncate">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Radius</p>
        <div className="flex flex-wrap gap-2">
          {PREVIEW_RADIUS_OPTIONS.map((r) => {
            const active = radiusId === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => {
                  setRadiusId(r.id);
                  onPick?.();
                }}
                title={r.hint}
                className={`flex min-w-0 items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-xs font-medium transition-colors ${
                  active
                    ? "border-primary/35 bg-primary/12 text-foreground ring-1 ring-primary/15"
                    : "border-border bg-muted/30 text-muted-foreground hover:bg-muted/55 hover:text-foreground"
                }`}
              >
                <RadiusGlyph id={r.id} />
                <span className="min-w-0">
                  <span className="block truncate font-semibold leading-none">{r.label}</span>
                  {!dense ? (
                    <span className="mt-0.5 block truncate text-[10px] font-normal text-muted-foreground">{r.hint}</span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Browse + preview lab — categories expand to every block filename so anchors are obvious. */
export function BlocksExploreLayout({ sections, children }: BlocksExploreLayoutProps) {
  const blockIds = useMemo(() => sections.flatMap((s) => s.blocks.map((b) => b.slug)), [sections]);
  const activeBlockId = useActiveBlockSlug(blockIds);
  const { themeId, setThemeId, radiusId, setRadiusId } = usePreviewTheme();
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [mobileAppearanceOpen, setMobileAppearanceOpen] = useState(false);

  const activeSectionSlug = useMemo(() => {
    if (!activeBlockId) return sections[0]?.slug ?? null;
    const sec = sections.find((s) => s.blocks.some((b) => b.slug === activeBlockId));
    return sec?.slug ?? sections[0]?.slug ?? null;
  }, [activeBlockId, sections]);

  const activeBlockTitle = useMemo(() => {
    if (!activeBlockId) return null;
    for (const s of sections) {
      const b = s.blocks.find((x) => x.slug === activeBlockId);
      if (b) return b.frameTitle;
    }
    return null;
  }, [activeBlockId, sections]);

  const themeLabel = PREVIEW_THEMES.find((t) => t.id === themeId)?.label ?? "Theme";
  const radiusLabel = PREVIEW_RADIUS_OPTIONS.find((r) => r.id === radiusId)?.label ?? "Radius";

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
          <div className="sticky top-14 z-20 border-b border-border/80 bg-background/95 backdrop-blur-xl lg:hidden">
            <details
              className="group border-b border-border/70"
              open={mobileCatalogOpen}
              onToggle={(e) => setMobileCatalogOpen(e.currentTarget.open)}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">
                  Catalog
                  <span className="mt-0.5 block truncate text-xs font-normal text-muted-foreground">
                    {activeBlockTitle ? activeBlockTitle : "Choose a block"}
                  </span>
                </span>
                <ChevronDown
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </summary>
              <div className="max-h-[min(36vh,300px)] overflow-y-auto overscroll-contain border-t border-border/60 bg-muted/[0.14] px-2 py-2">
                {sections.map((s) => (
                  <details key={s.slug} className="mb-1 rounded-lg border border-border/80 bg-background">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-[13px] font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                      {s.title}
                      <span className="text-[11px] font-normal text-muted-foreground">{s.blocks.length}</span>
                    </summary>
                    <ul className="border-t border-border/70 px-2 py-2">
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
                                setMobileCatalogOpen(false);
                              }}
                            >
                              <span className="truncate">{b.frameTitle}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                ))}
              </div>
            </details>

            <details
              className="group"
              open={mobileAppearanceOpen}
              onToggle={(e) => setMobileAppearanceOpen(e.currentTarget.open)}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">
                  Appearance
                  <span className="mt-0.5 block truncate text-xs font-normal text-muted-foreground">
                    {themeLabel} · {radiusLabel}
                  </span>
                </span>
                <ChevronDown
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </summary>
              <div className="border-t border-border/60 bg-muted/[0.14] px-3 py-3">
                <PreviewAppearancePanel dense onPick={() => setMobileAppearanceOpen(false)} />
              </div>
            </details>
          </div>

          <div className="preview-canvas relative min-w-0 flex-1 bg-gradient-to-b from-muted/30 via-background to-background text-foreground dark:from-muted/20">
            <div className="pb-28">{children}</div>
          </div>
        </div>

        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-[16rem] shrink-0 flex-col border-l border-border/80 bg-card/25 xl:flex">
          <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-4 pt-5">
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Appearance
            </p>
            <p className="px-3 pb-4 text-[12px] leading-snug text-muted-foreground">
              Theme and radius apply inside each preview canvas only. Hub chrome stays locked to the marketing site.
            </p>
            <div className="space-y-4 px-1 pb-2">
              <div>
                <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Color
                </p>
                <ul className="space-y-1">
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
                              ? "bg-primary/12 text-foreground shadow-sm ring-1 ring-primary/25"
                              : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                          }`}
                        >
                          <ThemeDots dots={t.dots} />
                          <span className="min-w-0">
                            <span className="block text-[13px] font-semibold leading-tight">{t.label}</span>
                            <span
                              className={`mt-0.5 block text-[11px] leading-snug ${active ? "text-foreground/65" : "text-muted-foreground"}`}
                            >
                              {t.subtitle}
                            </span>
                          </span>
                        </motion.button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Radius
                </p>
                <ul className="space-y-1">
                  {PREVIEW_RADIUS_OPTIONS.map((r) => {
                    const active = radiusId === r.id;
                    return (
                      <li key={r.id}>
                        <button
                          type="button"
                          onClick={() => setRadiusId(r.id)}
                          title={r.hint}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] font-medium transition-colors ${
                            active
                              ? "bg-primary/12 text-foreground ring-1 ring-primary/25"
                              : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                          }`}
                        >
                          <RadiusGlyph id={r.id} />
                          <span className="min-w-0">
                            <span className="block leading-tight">{r.label}</span>
                            <span className="mt-0.5 block text-[11px] font-normal text-muted-foreground">{r.hint}</span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
