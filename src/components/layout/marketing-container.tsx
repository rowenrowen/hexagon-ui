import type { ReactNode } from "react";

/** Locked to `.site-grid` in globals.css — same left/right edges as `SiteHeader`. */
export function MarketingContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`site-grid ${className}`.trim()}>{children}</div>;
}
