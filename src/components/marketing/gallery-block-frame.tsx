"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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

/** Preview chrome — toolbar stays on site tokens; palette applies only inside `preview-theme-scope`. */
export function GalleryBlockFrame({ path, name, id, children }: GalleryBlockFrameProps) {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const { themeId } = usePreviewTheme();
  const previewThemeAttr =
    themeId && themeId !== PREVIEW_THEME_DEFAULT_ID ? { "data-preview-theme": themeId as string } : {};

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
        <div className="overflow-visible rounded-2xl border border-border/90 bg-background shadow-[0_1px_0_oklch(0_0_0/0.04),0_12px_40px_-16px_oklch(0_0_0/0.18)] ring-1 ring-black/[0.04] dark:shadow-[0_1px_0_oklch(1_0_0/0.06),0_16px_48px_-18px_oklch(0_0_0/0.55)] dark:ring-white/[0.06]">
          <div className="flex min-h-11 shrink-0 flex-wrap items-center gap-2 overflow-hidden rounded-t-2xl border-b border-border bg-muted/40 px-3 py-2 backdrop-blur-sm sm:gap-3 sm:px-4">
            <div
              className="flex shrink-0 rounded-[10px] border border-border/90 bg-background/80 p-0.5 shadow-inner"
              role="tablist"
              aria-label="Block preview mode"
            >
              <button
                type="button"
                role="tab"
                aria-selected={tab === "preview"}
                onClick={() => setTab("preview")}
                className={`rounded-lg px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-colors sm:px-3 ${
                  tab === "preview"
                    ? "bg-muted text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Preview
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "code"}
                onClick={() => setTab("code")}
                className={`rounded-lg px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-colors sm:px-3 ${
                  tab === "code"
                    ? "bg-muted text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
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

          {tab === "preview" ? (
            <div className="preview-theme-scope min-h-0 overflow-hidden rounded-b-2xl bg-background text-foreground" {...previewThemeAttr}>
              {children}
            </div>
          ) : (
            <div className="overflow-hidden rounded-b-2xl">
              <LockedCodePanel path={path} />
            </div>
          )}
        </div>
      </MarketingContainer>
    </motion.section>
  );
}
