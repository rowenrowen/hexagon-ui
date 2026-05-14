/**
 * Shared pill CTAs inside marketing blocks — keep hover / focus behavior
 * consistent across the kit (iframes and full pages).
 */

export const KIT_PRIMARY_PILL =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-[background-color,box-shadow,transform,color] hover:bg-primary/90 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** Matches primary pill hover language for full-width mobile CTAs. */
export const KIT_PRIMARY_PILL_BLOCK =
  "block w-full rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-[background-color,box-shadow,transform] hover:bg-primary/90 hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const KIT_SECONDARY_PILL =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-[background-color,color,border-color,transform] hover:border-border hover:bg-muted/80 hover:text-foreground active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
