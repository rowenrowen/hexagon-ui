"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { PREVIEW_THEME_DEFAULT_ID } from "@/content/preview-themes";

type PreviewThemeContextValue = {
  themeId: string;
  setThemeId: (id: string) => void;
};

const PreviewThemeContext = createContext<PreviewThemeContextValue | null>(null);

export function PreviewThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState(PREVIEW_THEME_DEFAULT_ID);

  const value = useMemo(() => ({ themeId, setThemeId }), [themeId]);

  return <PreviewThemeContext.Provider value={value}>{children}</PreviewThemeContext.Provider>;
}

export function usePreviewTheme() {
  const ctx = useContext(PreviewThemeContext);
  if (!ctx) {
    throw new Error("usePreviewTheme must be used within PreviewThemeProvider");
  }
  return ctx;
}
