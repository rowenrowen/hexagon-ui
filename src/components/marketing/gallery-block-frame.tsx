"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lock } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { usePreviewTheme } from "@/components/marketing/preview-theme-context";
import { PREVIEW_THEME_DEFAULT_ID } from "@/content/preview-themes";
import {
  SITE_PRIMARY_PURCHASE_CLASSES_COMPACT,
  SITE_SECONDARY_OUTLINE_CLASSES_COMPACT,
} from "@/lib/site-cta";

type GalleryBlockFrameProps = {
  /** Block slug — drives the iframe `src` (loads `/preview/blocks/<slug>`). */
  slug: string;
  /** Repo path shown in the toolbar (e.g. `nav-marketing.tsx`). */
  path: string;
  /** "<BlockName> · <one-liner>" shown in the toolbar's right column. */
  name: string;
  /** DOM anchor — used by per-category page TOC links. */
  id?: string;
  /** True when this block ships in the free starter ZIP — adds a "Starter" badge. */
  includedInFreeStarter?: boolean;
  /**
   * Initial iframe height in pixels, shown only until the iframe posts its
   * settled content height (typically 200–400ms). Used to avoid CLS, not as
   * a final size. Defaults to 320.
   */
  previewHeight?: number;
  /**
   * Optional **minimum** iframe height in pixels. The frame never shrinks
   * below this even after measurement — used for nav blocks where the bar
   * itself is short but the iframe needs room for open dropdowns / drawers
   * floating inside the viewport.
   */
  minHeight?: number;
};

/** Hard ceiling so a runaway message can never blow up the gallery. */
const MAX_FRAME_HEIGHT = 4000;

function LockedCodePanel({ path }: { path: string }) {
  const snippet = `"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Block(props: BlockProps) {
  return (
    <section className="relative overflow-hidden …">
      {/* …complete markup + motion —`;

  return (
    <div className="relative min-h-[min(320px,42vw)] overflow-hidden bg-muted/25">
      <pre className="pointer-events-none select-none whitespace-pre-wrap p-5 font-mono text-[11px] leading-relaxed text-muted-foreground/35 sm:text-xs">
        {snippet}
        {`\n      ships as blocks/${path} in the ZIP */}`}
      </pre>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/75 px-6 backdrop-blur-[10px]">
        <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
          <Lock className="size-5 text-muted-foreground" strokeWidth={1.75} aria-hidden />
        </div>
        <div className="max-w-sm text-center">
          <p className="text-sm font-semibold text-foreground">Source is included in the kit</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            Copy the React file from your ZIP or browse the manifest — previews stay read-only so the hub stays fast and honest.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link href="/pricing" className={SITE_PRIMARY_PURCHASE_CLASSES_COMPACT}>
            Get the kit
          </Link>
          <Link href="/kit" className={SITE_SECONDARY_OUTLINE_CLASSES_COMPACT}>
            View manifest
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Block showcase frame.
 *
 * Renders each block inside an `<iframe>` pointing at `/preview/blocks/<slug>`
 * — same isolation model as Tailark / shadcnblocks. Theme + radius are sent
 * live via `postMessage` so changing them never reloads the iframe. The
 * iframe reports its settled content height once; that becomes the frame
 * size (clamped to `minHeight` for blocks with floating overlays like navs).
 */
export function GalleryBlockFrame({
  slug,
  path,
  name,
  id,
  includedInFreeStarter,
  previewHeight = 320,
  minHeight,
}: GalleryBlockFrameProps) {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const { themeId, radiusId } = usePreviewTheme();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  // Build src once per slug; theme/radius are only used for first-paint
  // (initial URL params). After load we update them live via postMessage.
  const [initialThemeRef, initialRadiusRef] = [useRef(themeId), useRef(radiusId)];
  const themeParam =
    initialThemeRef.current !== PREVIEW_THEME_DEFAULT_ID
      ? `&theme=${encodeURIComponent(initialThemeRef.current)}`
      : "";
  const iframeSrc = `/preview/blocks/${slug}?radius=${encodeURIComponent(initialRadiusRef.current)}${themeParam}`;

  // Listen for height reports from this iframe.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.data || typeof e.data !== "object") return;
      if (e.source !== iframeRef.current?.contentWindow) return;
      const data = e.data as {
        type?: string;
        slug?: string;
        height?: number;
      };
      if (data.type === "hexagon:preview:ready") {
        // Iframe just mounted — push current theme/radius so it's in sync.
        sendAppearance();
        return;
      }
      if (data.type !== "hexagon:preview:height" || data.slug !== slug) return;
      if (typeof data.height !== "number" || !Number.isFinite(data.height) || data.height <= 0) return;
      setMeasuredHeight(Math.min(Math.ceil(data.height), MAX_FRAME_HEIGHT));
    }
    function sendAppearance() {
      iframeRef.current?.contentWindow?.postMessage(
        { type: "hexagon:preview:appearance", themeId, radiusId },
        "*",
      );
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
    // We re-create the listener whenever theme/radius change so `sendAppearance`
    // captures the latest values for the ready handshake. The dedicated
    // appearance-broadcast effect below covers post-mount updates.
  }, [slug, themeId, radiusId]);

  // When theme or radius changes after the iframe is loaded, broadcast the
  // new appearance — the bridge inside the iframe applies it live.
  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "hexagon:preview:appearance", themeId, radiusId },
      "*",
    );
  }, [themeId, radiusId]);

  const frameHeight = Math.max(measuredHeight ?? previewHeight, minHeight ?? 0);

  return (
    <motion.section
      id={id}
      className="scroll-mt-16 py-6 sm:py-8"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.8 }}
    >
      <MarketingContainer>
        <div className="overflow-hidden rounded-2xl border border-border/90 bg-background shadow-[0_12px_40px_-16px_oklch(0_0_0/0.18)] dark:shadow-[0_16px_48px_-18px_oklch(0_0_0/0.55)]">
          <div className="flex min-h-11 shrink-0 flex-wrap items-center gap-2 border-b border-border bg-muted/40 px-3 py-2 backdrop-blur-sm sm:gap-3 sm:px-4">
            <div
              className="relative flex h-9 min-w-[9.25rem] shrink-0 rounded-xl bg-muted/55 p-1 ring-1 ring-border/75 dark:bg-muted/35 dark:ring-border/60"
              role="tablist"
              aria-label="Block preview mode"
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-1 top-1 rounded-lg bg-background shadow-[0_1px_2px_oklch(0_0_0/0.05)] ring-1 ring-border/80 dark:bg-card dark:shadow-[0_1px_2px_oklch(0_0_0/0.45)] dark:ring-white/[0.08]"
                initial={false}
                animate={{
                  left: tab === "preview" ? 4 : "calc(50% + 2px)",
                  width: "calc(50% - 6px)",
                }}
                transition={
                  reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 460, damping: 34, mass: 0.85 }
                }
              />
              <button
                type="button"
                role="tab"
                aria-selected={tab === "preview"}
                onClick={() => setTab("preview")}
                className={`relative z-10 flex-1 rounded-lg px-2.5 py-1.5 text-center text-[11px] font-semibold tracking-wide transition-colors sm:px-3 ${
                  tab === "preview" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Preview
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "code"}
                onClick={() => setTab("code")}
                className={`relative z-10 flex-1 rounded-lg px-2.5 py-1.5 text-center text-[11px] font-semibold tracking-wide transition-colors sm:px-3 ${
                  tab === "code" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Code
              </button>
            </div>
            <div className="hidden min-w-0 flex-1 items-center gap-2 font-mono text-[11px] text-muted-foreground md:flex">
              <span className="min-w-0 truncate">
                <span className="text-muted-foreground/80">blocks/</span>
                <span className="text-foreground/90">{path}</span>
              </span>
              {includedInFreeStarter ? (
                <span className="shrink-0 rounded-md bg-primary/12 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                  Starter
                </span>
              ) : null}
            </div>
            <div className="flex min-w-0 max-w-[min(100%,16rem)] items-center justify-end gap-2 sm:max-w-[38%] md:justify-start">
              {includedInFreeStarter ? (
                <span className="shrink-0 rounded-md bg-primary/12 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary md:hidden">
                  Starter
                </span>
              ) : null}
              <p className="truncate text-right text-[11px] leading-snug text-muted-foreground md:text-left">{name}</p>
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {tab === "preview" ? (
              <motion.div
                key="preview"
                className="bg-muted/30 dark:bg-muted/15"
                initial={reduceMotion ? false : { opacity: 0.94, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0.94, y: -4 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <iframe
                  ref={iframeRef}
                  key={iframeSrc}
                  src={iframeSrc}
                  title={name}
                  loading="lazy"
                  scrolling="no"
                  className="block w-full bg-background"
                  style={{
                    height: frameHeight,
                    colorScheme: "light dark",
                    transition: "height 240ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="code"
                className="overflow-hidden"
                initial={reduceMotion ? false : { opacity: 0.94, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0.94, y: -4 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <LockedCodePanel path={path} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MarketingContainer>
    </motion.section>
  );
}
