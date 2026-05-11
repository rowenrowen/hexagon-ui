"use client";

import { usePreviewTheme } from "@/components/marketing/preview-theme-context";
import { PREVIEW_RADIUS_OPTIONS } from "@/content/preview-radius";
import { PREVIEW_THEMES } from "@/content/preview-themes";

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
      className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border/80 bg-muted/40 shadow-inner"
      aria-hidden
    >
      <span
        className="size-3.5 border border-muted-foreground/40 bg-background shadow-sm"
        style={{ borderRadius: r }}
      />
    </span>
  );
}

type PreviewAppearancePanelProps = {
  /**
   * `sidebar` — vertical stack for the desktop right rail on `/blocks/*`.
   * `mobile` — compact horizontal rows for small screens.
   */
  layout: "sidebar" | "mobile";
  className?: string;
};

/**
 * Theme + corner radius for block previews. Lives in the right sidebar on
 * desktop (`layout="sidebar"`) and in a slim strip on mobile (`layout="mobile"`).
 */
export function PreviewAppearancePanel({ layout, className }: PreviewAppearancePanelProps) {
  const { themeId, setThemeId, radiusId, setRadiusId } = usePreviewTheme();

  if (layout === "mobile") {
    return (
      <div className={`bg-muted/[0.06] px-3 pb-3 pt-1 ${className ?? ""}`}>
        <div
          role="radiogroup"
          aria-label="Theme"
          className="flex gap-2 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PREVIEW_THEMES.map((t) => {
            const active = themeId === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={active}
                aria-label={t.label}
                title={t.label}
                onClick={() => setThemeId(t.id)}
                className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors active:scale-[0.96] ${
                  active
                    ? "border-primary/45 bg-primary/12 ring-2 ring-primary/30"
                    : "border-border/80 bg-background/80 hover:border-border hover:bg-muted/50"
                }`}
              >
                <ThemeDots dots={t.dots} />
              </button>
            );
          })}
        </div>

        <div
          role="radiogroup"
          aria-label="Corner radius"
          className="flex flex-wrap gap-2 pt-1"
        >
          {PREVIEW_RADIUS_OPTIONS.map((r) => {
            const active = radiusId === r.id;
            return (
              <button
                key={r.id}
                type="button"
                role="radio"
                aria-checked={active}
                aria-label={r.label}
                title={r.hint}
                onClick={() => setRadiusId(r.id)}
                className={`inline-flex size-11 items-center justify-center rounded-xl border transition-colors active:scale-[0.96] ${
                  active
                    ? "border-primary/45 bg-primary/12 ring-2 ring-primary/30"
                    : "border-border/70 bg-background/80 hover:border-border hover:bg-muted/45"
                }`}
              >
                <RadiusGlyph id={r.id} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className ?? ""}`}>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Theme</p>
        <ul className="mt-2 space-y-1">
          {PREVIEW_THEMES.map((t) => {
            const active = themeId === t.id;
            return (
              <li key={t.id}>
                <button
                  type="button"
                  title={t.subtitle}
                  onClick={() => setThemeId(t.id)}
                  className={`flex w-full items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-xs font-semibold transition-colors ${
                    active
                      ? "border-primary/35 bg-primary/12 text-foreground ring-1 ring-primary/15"
                      : "border-border/70 bg-muted/20 text-muted-foreground hover:border-border hover:bg-muted/40 hover:text-foreground"
                  }`}
                >
                  <ThemeDots dots={t.dots} />
                  <span className="min-w-0 flex-1 truncate">{t.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Corner radius</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {PREVIEW_RADIUS_OPTIONS.map((r) => {
            const active = radiusId === r.id;
            return (
              <button
                key={r.id}
                type="button"
                title={r.hint}
                onClick={() => setRadiusId(r.id)}
                className={`flex items-center gap-1.5 rounded-lg border px-2 py-1.5 text-[11px] font-medium transition-colors ${
                  active
                    ? "border-primary/35 bg-primary/12 text-foreground ring-1 ring-primary/15"
                    : "border-border/70 bg-muted/20 text-muted-foreground hover:bg-muted/45 hover:text-foreground"
                }`}
              >
                <RadiusGlyph id={r.id} />
                <span className="truncate">{r.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
