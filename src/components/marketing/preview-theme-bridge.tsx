"use client";

import { useEffect } from "react";
import { PREVIEW_THEME_DEFAULT_ID } from "@/content/preview-themes";

/**
 * Inside the iframe document: listens for `hexagon:preview:appearance`
 * messages from the parent gallery and mutates the data-attributes on the
 * `#hexagon-preview-root` element live. This avoids reloading the iframe
 * (and the block) every time the theme or radius changes.
 */
export function PreviewThemeBridge() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    function applyAppearance(themeId: string | undefined, radiusId: string | undefined) {
      const root = document.getElementById("hexagon-preview-root");
      if (!root) return;
      if (typeof themeId === "string") {
        if (themeId === PREVIEW_THEME_DEFAULT_ID) {
          root.removeAttribute("data-preview-theme");
        } else {
          root.setAttribute("data-preview-theme", themeId);
        }
      }
      if (typeof radiusId === "string") {
        root.setAttribute("data-preview-radius", radiusId);
      }
    }

    function onMessage(e: MessageEvent) {
      if (!e.data || typeof e.data !== "object") return;
      const data = e.data as {
        type?: string;
        themeId?: string;
        radiusId?: string;
      };
      if (data.type !== "hexagon:preview:appearance") return;
      applyAppearance(data.themeId, data.radiusId);
    }

    window.addEventListener("message", onMessage);

    // Tell the parent we're ready to receive appearance updates — the parent
    // posts the current theme/radius back so we're always in sync even if
    // the iframe was created before the user changed appearance.
    if (window.parent !== window) {
      window.parent.postMessage({ type: "hexagon:preview:ready" }, "*");
    }

    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
