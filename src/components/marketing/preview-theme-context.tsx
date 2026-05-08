"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { PREVIEW_RADIUS_DEFAULT_ID } from "@/content/preview-radius";
import { PREVIEW_THEME_DEFAULT_ID } from "@/content/preview-themes";

type PreviewLabContextValue = {
  themeId: string;
  setThemeId: (id: string) => void;
  radiusId: string;
  setRadiusId: (id: string) => void;
};

const PreviewLabContext = createContext<PreviewLabContextValue | null>(null);

export function PreviewThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState(PREVIEW_THEME_DEFAULT_ID);
  const [radiusId, setRadiusId] = useState(PREVIEW_RADIUS_DEFAULT_ID);

  const value = useMemo(() => ({ themeId, setThemeId, radiusId, setRadiusId }), [themeId, radiusId]);

  return <PreviewLabContext.Provider value={value}>{children}</PreviewLabContext.Provider>;
}

export function usePreviewTheme() {
  const ctx = useContext(PreviewLabContext);
  if (!ctx) {
    throw new Error("usePreviewTheme must be used within PreviewThemeProvider");
  }
  return ctx;
}
