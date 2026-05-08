"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** Shared with header icon controls (theme, menu) for identical hit targets and borders. */
export const HEADER_SURFACE_BTN_CLASSES =
  "inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-background text-muted-foreground shadow-sm transition-[color,background-color,transform] hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.97]";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = HEADER_SURFACE_BTN_CLASSES }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");
  const dark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={className}
      aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <Sun className="size-[18px]" strokeWidth={1.75} aria-hidden />
      ) : (
        <Moon className="size-[18px]" strokeWidth={1.75} aria-hidden />
      )}
    </button>
  );
}
