/** Curated palettes for `/blocks` preview canvas — sidebar shows accent swatches like premium block libraries. */

export type PreviewThemeMeta = {
  id: string;
  label: string;
  hint: string;
  /** Accent dot(s) in theme picker — Tailwind utility */
  swatch: string;
};

export const PREVIEW_THEME_DEFAULT_ID = "default";

export const PREVIEW_THEMES: PreviewThemeMeta[] = [
  { id: "default", label: "Default", hint: "Site tokens", swatch: "bg-gradient-to-br from-muted-foreground to-foreground" },
  { id: "ocean", label: "Ocean", hint: "Cool teal", swatch: "bg-cyan-500" },
  { id: "violet", label: "Violet", hint: "Product purple", swatch: "bg-violet-500" },
  { id: "rose", label: "Rose", hint: "Warm accent", swatch: "bg-rose-500" },
  { id: "amber", label: "Amber", hint: "Bold CTA", swatch: "bg-amber-500" },
  { id: "forest", label: "Forest", hint: "Deep green", swatch: "bg-emerald-600" },
  { id: "slate", label: "Slate", hint: "Neutral SaaS", swatch: "bg-slate-500" },
  { id: "mono", label: "Ink", hint: "Monochrome", swatch: "bg-neutral-800 dark:bg-neutral-200" },
];
