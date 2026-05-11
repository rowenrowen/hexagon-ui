/**
 * Preview palettes for the `/blocks` canvas.
 *
 * Each palette is grounded in a real, widely-recognized design system so the
 * options feel like familiar territory ("oh, that's Linear/Stripe/Nord") rather
 * than generic color tones. Names are evocative — usually a product or feature
 * the source is known for — so the swatch stays useful at a glance.
 *
 * Source palettes:
 *  - Edge        → Vercel (pure mono, sharp)
 *  - Triage      → Linear (soft lavender violet)
 *  - Checkout    → Stripe (deep payments purple)
 *  - Primer      → GitHub Primer (slate + blue + amber)
 *  - Notebook    → Notion (warm paper, ink, terracotta)
 *  - Latte       → Catppuccin Latte (pastel mauve + flamingo)
 *  - Frostpane   → Nord (Snow Storm + Frost)
 *  - Daybreak    → Solarized Light (Schoonover, cream + cyan + yellow)
 *  - Postgres    → Supabase (Postgres emerald)
 *  - Dracula     → Dracula (purple + pink + cyan on charcoal)
 *  - Skyline     → Tokyo Night (deep navy + violet + cyan)
 *  - Greenroom   → Spotify (bold emerald on near-black)
 */

export type PreviewThemeMeta = {
  id: string;
  /** Short editorial name (clever, source-evocative). */
  label: string;
  /** One-line attribution / vibe. */
  subtitle: string;
  /** Three Tailwind `bg-*` classes representing the palette's signature colors (low → primary → deep). */
  dots: [string, string, string];
};

export const PREVIEW_THEME_DEFAULT_ID = "default";

export const PREVIEW_THEMES: PreviewThemeMeta[] = [
  {
    id: "default",
    label: "Hexagon",
    subtitle: "Our house cyan and slate.",
    dots: ["bg-slate-200", "bg-teal-500", "bg-slate-900"],
  },
  {
    id: "vercel",
    label: "Edge",
    subtitle: "Vercel-style pure mono.",
    dots: ["bg-zinc-100", "bg-zinc-500", "bg-zinc-950"],
  },
  {
    id: "linear",
    label: "Triage",
    subtitle: "Linear lavender focus.",
    dots: ["bg-violet-200", "bg-violet-500", "bg-slate-900"],
  },
  {
    id: "stripe",
    label: "Checkout",
    subtitle: "Stripe payments purple.",
    dots: ["bg-indigo-200", "bg-indigo-600", "bg-slate-950"],
  },
  {
    id: "github",
    label: "Primer",
    subtitle: "GitHub Primer slate and blue.",
    dots: ["bg-slate-200", "bg-blue-600", "bg-slate-900"],
  },
  {
    id: "supabase",
    label: "Postgres",
    subtitle: "Supabase emerald on warm canvas.",
    dots: ["bg-emerald-200", "bg-emerald-500", "bg-slate-900"],
  },
  {
    id: "notion",
    label: "Notebook",
    subtitle: "Notion warm paper and ink.",
    dots: ["bg-stone-200", "bg-amber-700", "bg-stone-900"],
  },
  {
    id: "catppuccin",
    label: "Latte",
    subtitle: "Catppuccin Latte pastels.",
    dots: ["bg-rose-200", "bg-fuchsia-500", "bg-violet-950"],
  },
  {
    id: "nord",
    label: "Frostpane",
    subtitle: "Nord arctic Snow Storm and Frost.",
    dots: ["bg-slate-200", "bg-sky-400", "bg-slate-700"],
  },
  {
    id: "solarized",
    label: "Daybreak",
    subtitle: "Solarized Light — cream, teal, yellow.",
    dots: ["bg-amber-100", "bg-cyan-700", "bg-slate-800"],
  },
  {
    id: "dracula",
    label: "Dracula",
    subtitle: "Dracula — purple, pink, cyan on charcoal.",
    dots: ["bg-purple-300", "bg-pink-500", "bg-slate-900"],
  },
  {
    id: "tokyo",
    label: "Skyline",
    subtitle: "Tokyo Night — deep navy and neon violet.",
    dots: ["bg-violet-300", "bg-blue-700", "bg-slate-950"],
  },
  {
    id: "spotify",
    label: "Greenroom",
    subtitle: "Spotify — bold emerald on near-black.",
    dots: ["bg-emerald-300", "bg-emerald-500", "bg-zinc-950"],
  },
];
