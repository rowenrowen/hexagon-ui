"use client";

import { useEffect, useRef } from "react";

/**
 * Reports the rendered content height of the iframe back to the gallery
 * parent so the frame can size itself exactly to the block.
 *
 * Mirrors how tailark / shadcnblocks size their showcase frames — iframes
 * are not allowed to scroll; the parent listens for height messages and
 * resizes the `<iframe>` element accordingly.
 *
 * Triggers:
 *  - ResizeObserver on `<html>` + `<body>` for inline layout changes
 *  - `document.fonts.ready` once webfonts settle
 *  - A few scheduled measurements after pointer / focus interactions to
 *    catch absolutely-positioned UI (e.g. nav hover dropdowns) that don't
 *    grow the body box but do extend `scrollHeight`.
 */
export function PreviewAutoHeight({ slug }: { slug: string }) {
  const lastReported = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.parent === window) return;

    const target = document.getElementById("hexagon-preview-content");
    if (!target) return;

    function measure() {
      if (!target) return 0;
      // scrollHeight catches absolutely-positioned descendants (e.g. open
      // hover dropdowns) that overflow their parent — offsetHeight wouldn't.
      return Math.ceil(
        Math.max(
          target.scrollHeight,
          target.getBoundingClientRect().height,
        ),
      );
    }

    function post() {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const h = measure();
        if (h <= 0) return;
        if (Math.abs(h - lastReported.current) < 1) return;
        lastReported.current = h;
        window.parent.postMessage(
          { type: "hexagon:preview:height", slug, height: h },
          "*",
        );
      });
    }

    const scheduled: number[] = [];
    function schedule() {
      [60, 220, 600].forEach((d) => {
        scheduled.push(window.setTimeout(post, d));
      });
    }

    post();
    const ro = new ResizeObserver(post);
    ro.observe(target);
    if (document.body) ro.observe(document.body);

    if (document.fonts?.ready) {
      document.fonts.ready.then(post).catch(() => {});
    }

    const evs: (keyof DocumentEventMap)[] = [
      "pointerdown",
      "pointerup",
      "mouseenter",
      "mouseleave",
      "focusin",
      "focusout",
      "transitionend",
      "animationend",
    ];
    const onEvent = () => schedule();
    evs.forEach((ev) =>
      document.addEventListener(ev, onEvent, { passive: true, capture: true }),
    );

    schedule();

    return () => {
      ro.disconnect();
      evs.forEach((ev) =>
        document.removeEventListener(ev, onEvent, { capture: true } as EventListenerOptions),
      );
      scheduled.forEach((id) => clearTimeout(id));
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [slug]);

  return null;
}
