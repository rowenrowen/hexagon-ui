/**
 * Shared site chrome CTAs — keep nav, hubs, and marketing heroes visually aligned.
 * (Kit block internals intentionally stay unchanged.)
 */

/** Primary commerce actions: Buy, Get the kit, View license, Open Gumroad (marketing chrome only). */
export const SITE_PRIMARY_PURCHASE_CLASSES =
  "inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-primary px-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-[opacity,transform] hover:opacity-92 active:scale-[0.97] sm:px-4";

/** Secondary outline actions: Manifest, Browse blocks, Kit hub, etc. */
export const SITE_SECONDARY_OUTLINE_CLASSES =
  "inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3.5 text-sm font-medium text-foreground shadow-sm transition-[opacity,transform] hover:bg-muted/70 active:scale-[0.97] sm:px-4";

/** Dense chrome (e.g. locked code panel inside block frames). */
export const SITE_PRIMARY_PURCHASE_CLASSES_COMPACT =
  "inline-flex h-8 items-center justify-center rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-92";

export const SITE_SECONDARY_OUTLINE_CLASSES_COMPACT =
  "inline-flex h-8 items-center justify-center rounded-lg border border-border bg-background px-3 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted/70";
