"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lock, Monitor, Smartphone } from "lucide-react";
import { usePreviewTheme } from "@/components/marketing/preview-theme-context";
import { PREVIEW_THEME_DEFAULT_ID } from "@/content/preview-themes";
import {
  SITE_PRIMARY_PURCHASE_CLASSES_COMPACT,
  SITE_SECONDARY_OUTLINE_CLASSES_COMPACT,
} from "@/lib/site-cta";

type PreviewViewport = "desktop" | "mobile";

type GalleryBlockFrameProps = {
  slug: string;
  path: string;
  frameTitle: string;
  frameDescription: string;
  id?: string;
  includedInFreeStarter?: boolean;
  /** Fixed desktop preview viewport height (px). */
  previewHeight?: number;
  /** Fixed mobile preview viewport height (px). Defaults to a tuned value from desktop height. */
  previewHeightMobile?: number;
  /** Legacy floor — merged into desktop fixed height when larger. */
  minHeight?: number;
};

const MOBILE_PREVIEW_WIDTH = 390;

function defaultMobileHeight(desktop: number) {
  return Math.max(380, Math.min(Math.round(desktop * 0.95), 720));
}

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
 * Block showcase frame — fixed-height viewport (Tailark / shadcnblocks pattern).
 * Content scrolls inside the iframe; the outer chrome never jumps when nav menus open.
 */
export function GalleryBlockFrame({
  slug,
  path,
  frameTitle,
  frameDescription,
  id,
  includedInFreeStarter,
  previewHeight = 320,
  previewHeightMobile,
  minHeight,
}: GalleryBlockFrameProps) {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<PreviewViewport>("desktop");
  const { themeId, radiusId } = usePreviewTheme();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const [initialThemeRef, initialRadiusRef] = [useRef(themeId), useRef(radiusId)];
  const themeParam =
    initialThemeRef.current !== PREVIEW_THEME_DEFAULT_ID
      ? `&theme=${encodeURIComponent(initialThemeRef.current)}`
      : "";
  const iframeSrc = `/preview/blocks/${slug}?radius=${encodeURIComponent(initialRadiusRef.current)}${themeParam}`;

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.data || typeof e.data !== "object") return;
      if (e.source !== iframeRef.current?.contentWindow) return;
      if (e.data.type === "hexagon:preview:ready") {
        iframeRef.current?.contentWindow?.postMessage(
          { type: "hexagon:preview:appearance", themeId, radiusId },
          "*",
        );
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [slug, themeId, radiusId]);

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "hexagon:preview:appearance", themeId, radiusId },
      "*",
    );
  }, [themeId, radiusId]);

  const desktopHeight = Math.max(previewHeight, minHeight ?? 0);
  const mobileHeight = previewHeightMobile ?? defaultMobileHeight(desktopHeight);
  const frameHeight = viewport === "mobile" ? mobileHeight : desktopHeight;

  return (
    <motion.section
      id={id}
      className="scroll-mt-16 py-5 sm:py-7"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.8 }}
    >
      <div className="overflow-hidden rounded-2xl border border-border/90 bg-background shadow-[0_12px_40px_-16px_oklch(0_0_0/0.18)] dark:shadow-[0_16px_48px_-18px_oklch(0_0_0/0.55)]">
        <div className="border-b border-border bg-muted/40 backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4">
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

            {tab === "preview" ? (
              <div
                className="flex h-9 shrink-0 rounded-xl bg-muted/55 p-1 ring-1 ring-border/75 dark:bg-muted/35 dark:ring-border/60"
                role="group"
                aria-label="Preview viewport"
              >
                <button
                  type="button"
                  aria-pressed={viewport === "desktop"}
                  title="Desktop width"
                  onClick={() => setViewport("desktop")}
                  className={`inline-flex size-7 items-center justify-center rounded-lg transition-colors ${
                    viewport === "desktop"
                      ? "bg-background text-foreground shadow-sm ring-1 ring-border/80"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Monitor className="size-3.5" strokeWidth={2} aria-hidden />
                </button>
                <button
                  type="button"
                  aria-pressed={viewport === "mobile"}
                  title="Mobile width"
                  onClick={() => setViewport("mobile")}
                  className={`inline-flex size-7 items-center justify-center rounded-lg transition-colors ${
                    viewport === "mobile"
                      ? "bg-background text-foreground shadow-sm ring-1 ring-border/80"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Smartphone className="size-3.5" strokeWidth={2} aria-hidden />
                </button>
              </div>
            ) : null}

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
          </div>

          <div className="border-t border-border/60 px-3 pb-2.5 pt-2 sm:px-4 md:border-t-0 md:pb-0 md:pt-0">
            <div className="min-w-0 md:hidden">
              <div className="flex items-start gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug text-foreground">{frameTitle}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{frameDescription}</p>
                </div>
                {includedInFreeStarter ? (
                  <span className="shrink-0 rounded-md bg-primary/12 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    Starter
                  </span>
                ) : null}
              </div>
            </div>
            <p className="hidden truncate text-[11px] text-muted-foreground md:block">
              <span className="font-medium text-foreground/90">{frameTitle}</span>
              <span className="text-muted-foreground/70"> · </span>
              {frameDescription}
            </p>
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
              <div className="flex justify-center">
                <iframe
                  ref={iframeRef}
                  key={iframeSrc}
                  src={iframeSrc}
                  title={frameTitle}
                  loading="lazy"
                  scrolling="yes"
                  className={`block bg-background transition-[width] duration-200 ${
                    viewport === "mobile"
                      ? "mx-auto max-w-full border-x border-border/70 shadow-sm"
                      : "w-full"
                  }`}
                  style={{
                    width: viewport === "mobile" ? MOBILE_PREVIEW_WIDTH : "100%",
                    height: frameHeight,
                    colorScheme: "light dark",
                  }}
                />
              </div>
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
    </motion.section>
  );
}
