/** Curated palettes for `/blocks` preview canvas — multi-dot swatches similar to premium block hubs. */

export type PreviewThemeMeta = {
  id: string;
  /** Short editorial name */
  label: string;
  subtitle: string;
  /** Three Tailwind `bg-*` classes for picker dots (foreground-ish hues). */
  dots: [string, string, string];
};

export const PREVIEW_THEME_DEFAULT_ID = "default";

export const PREVIEW_THEMES: PreviewThemeMeta[] = [
  {
    id: "default",
    label: "Studio Default",
    subtitle: "Matches this marketing site.",
    dots: ["bg-slate-400", "bg-teal-600", "bg-slate-900"],
  },
  {
    id: "ocean",
    label: "Harbor Glass",
    subtitle: "Cool teal chrome, calm canvas.",
    dots: ["bg-sky-400", "bg-cyan-600", "bg-teal-700"],
  },
  {
    id: "violet",
    label: "Signal Bloom",
    subtitle: "Confident violet rails.",
    dots: ["bg-violet-300", "bg-violet-600", "bg-indigo-800"],
  },
  {
    id: "rose",
    label: "Clay Editorial",
    subtitle: "Warm blush accent bands.",
    dots: ["bg-rose-200", "bg-rose-500", "bg-rose-950"],
  },
  {
    id: "amber",
    label: "Honey CTA",
    subtitle: "High-energy funnel accents.",
    dots: ["bg-amber-200", "bg-amber-500", "bg-orange-900"],
  },
  {
    id: "forest",
    label: "Evergreen Ops",
    subtitle: "Grounded green UI chrome.",
    dots: ["bg-emerald-300", "bg-emerald-600", "bg-green-950"],
  },
  {
    id: "slate",
    label: "Carbon SaaS",
    subtitle: "Neutral rails, crisp type.",
    dots: ["bg-slate-300", "bg-slate-500", "bg-slate-900"],
  },
  {
    id: "mono",
    label: "Ink & Paper",
    subtitle: "Strict monochrome discipline.",
    dots: ["bg-zinc-300", "bg-zinc-600", "bg-black"],
  },
  {
    id: "indigo",
    label: "Midnight Canvas",
    subtitle: "Deep indigo depth.",
    dots: ["bg-indigo-300", "bg-indigo-600", "bg-indigo-950"],
  },
  {
    id: "sky",
    label: "Daybreak UI",
    subtitle: "Bright sky clarity.",
    dots: ["bg-sky-200", "bg-sky-500", "bg-blue-900"],
  },
  {
    id: "mint",
    label: "Seafoam Dev",
    subtitle: "Fresh mint supportive tones.",
    dots: ["bg-teal-200", "bg-teal-500", "bg-teal-950"],
  },
];
