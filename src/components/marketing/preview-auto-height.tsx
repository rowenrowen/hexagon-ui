"use client";

import { useEffect, useRef } from "react";

/**
 * Sends **one** height measurement to the gallery parent after layout has
 * settled (webfonts + window `load` + a couple animation frames).
 *
 * Showcase sites like Tailark keep the outer preview chrome **fixed** while
 * nav mega-menus and dropdowns float inside the iframe viewport. They do
 * **not** resize the outer frame when a menu opens — that would jitter the
 * whole `/blocks` page. We mirror that: no remeasuring on hover, pointer,
 * focus, or overlay open/close.
 *
 * ResizeObserver runs only until we finalize, so late images/fonts still
 * bump `maxH` during the settle window; after finalize we disconnect.
 */
export function PreviewAutoHeight({ slug }: { slug: string }) {
  const finalizedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.parent === window) return;

    const target = document.getElementById("hexagon-preview-content");
    if (!target) return;

    function measure() {
      return Math.ceil(Math.max(target!.scrollHeight, target!.getBoundingClientRect().height));
    }

    let maxH = 0;

    function record() {
      if (finalizedRef.current) return;
      const h = measure();
      if (h > maxH) maxH = h;
    }

    const ro = new ResizeObserver(() => {
      record();
    });

    function finalize() {
      if (finalizedRef.current) return;
      finalizedRef.current = true;
      ro.disconnect();
      if (maxH <= 0) return;
      window.parent.postMessage({ type: "hexagon:preview:height", slug, height: maxH }, "*");
    }

    record();
    ro.observe(target);

    const waitFonts = document.fonts?.ready ?? Promise.resolve();
    const waitLoad =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });

    void Promise.all([waitFonts, waitLoad]).then(() => {
      setTimeout(() => {
        record();
        requestAnimationFrame(() => {
          record();
          requestAnimationFrame(() => {
            record();
            finalize();
          });
        });
      }, 80);
    });

    const safety = window.setTimeout(() => finalize(), 4000);

    return () => {
      window.clearTimeout(safety);
      ro.disconnect();
    };
  }, [slug]);

  return null;
}
