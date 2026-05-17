/**
 * Shared pill CTAs inside marketing blocks — keep hover / focus behavior
 * consistent across the kit (iframes and full pages).
 */

const primaryTransition =
  "transition-[background-color,box-shadow,transform,filter] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** Stronger hover: brightness + shadow so primary CTAs read clearly on every theme. */
const primaryHover =
  "hover:brightness-[0.82] hover:shadow-lg dark:hover:brightness-[1.14] active:scale-[0.98]";

const secondaryTransition =
  "transition-[background-color,color,border-color,box-shadow,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const secondaryHover =
  "hover:border-primary/35 hover:bg-muted hover:text-foreground hover:shadow-sm active:scale-[0.98]";

export const KIT_PRIMARY_PILL = `inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm ${primaryTransition} ${primaryHover}`;

export const KIT_PRIMARY_PILL_BLOCK = `block w-full rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm ${primaryTransition} ${primaryHover} active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`;

export const KIT_SECONDARY_PILL = `inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-sm ${secondaryTransition} ${secondaryHover}`;

/** Full-width secondary CTA on pricing cards, etc. */
export const KIT_SECONDARY_PILL_BLOCK = `inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm ${secondaryTransition} ${secondaryHover}`;

/** Compact nav / toolbar primary (same hover language, tighter padding). */
export const KIT_PRIMARY_PILL_COMPACT = `inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm ${primaryTransition} ${primaryHover}`;
