"use client";

import Link from "next/link";
import type { AriaRole, MouseEvent, MouseEventHandler, ReactNode } from "react";

export type MarketingLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  prefetch?: boolean;
  role?: AriaRole;
  /** Passed through for Radix/cmdk patterns and dropdown closes */
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

/**
 * Same visuals as Next `<Link>` but `/blocks` demos use `href="#"` — Next would scroll/jump.
 * `#` / empty → inert `<button>` with hover/focus styles preserved.
 */
export function MarketingLink({
  href,
  className,
  children,
  prefetch,
  onClick,
  role,
  onMouseEnter,
  onMouseLeave,
}: MarketingLinkProps) {
  const isDemo = href === "#" || href === "";

  if (isDemo) {
    return (
      <button
        type="button"
        className={className}
        role={role}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </button>
    );
  }

  const external = /^https?:\/\//.test(href) || href.startsWith("mailto:");
  if (external) {
    return (
      <a
        href={href}
        className={className}
        role={role}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      role={role}
      prefetch={prefetch}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  );
}
