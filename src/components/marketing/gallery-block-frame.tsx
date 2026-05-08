"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lock } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { usePreviewTheme } from "@/components/marketing/preview-theme-context";
import { PREVIEW_THEME_DEFAULT_ID } from "@/content/preview-themes";

type GalleryBlockFrameProps = {
  path: string;
  name: string;
  id?: string;
  children: ReactNode;
};

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
          <Link
            href="/pricing"
            className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get the kit
          </Link>
          <Link
            href="/kit"
            className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted/70"
          >
            View manifest
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Block hub chrome: toolbar uses site tokens; preview sits on a neutral canvas so blocks read as embedded like shadcn.io. */
export function GalleryBlockFrame({ path, name, id, children }: GalleryBlockFrameProps) {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const { themeId, radiusId } = usePreviewTheme();

  const previewAttrs = {
    ...(themeId !== PREVIEW_THEME_DEFAULT_ID ? { "data-preview-theme": themeId as string } : {}),
    "data-preview-radius": radiusId,
  } as const;

  return (
    <motion.section
      id={id}
      className="scroll-mt-16 py-10 sm:py-12"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.8 }}
    >
      <MarketingContainer>
        <div className="overflow-visible rounded-2xl border border-border/90 bg-background shadow-[0_12px_40px_-16px_oklch(0_0_0/0.18)] dark:shadow-[0_16px_48px_-18px_oklch(0_0_0/0.55)]">
          <div className="flex min-h-11 shrink-0 flex-wrap items-center gap-2 overflow-hidden rounded-t-2xl border-b border-border bg-muted/40 px-3 py-2 backdrop-blur-sm sm:gap-3 sm:px-4">
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
            <div className="hidden min-w-0 flex-1 font-mono text-[11px] text-muted-foreground md:block">
              <span className="text-muted-foreground/80">blocks/</span>
              <span className="text-foreground/90">{path}</span>
            </div>
            <p className="max-w-[min(100%,16rem)] truncate text-right text-[11px] leading-snug text-muted-foreground sm:max-w-[38%] md:text-left">
              {name}
            </p>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {tab === "preview" ? (
              <motion.div
                key="preview"
                className="rounded-b-2xl bg-muted/35 dark:bg-muted/15"
                initial={reduceMotion ? false : { opacity: 0.94, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0.94, y: -4 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="p-3 sm:p-5 md:p-6">
                  <div
                    className="preview-theme-scope min-h-0 w-full overflow-hidden rounded-xl border border-border/90 bg-background text-foreground dark:bg-background"
                    {...previewAttrs}
                  >
                    {children}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="code"
                className="overflow-hidden rounded-b-2xl"
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
