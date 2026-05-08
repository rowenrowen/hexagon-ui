import type { CSSProperties, ReactNode } from "react";

/** Locked to `.site-grid` in globals.css — same left/right edges as `SiteHeader`. */
export function MarketingContainer({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`site-grid ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
