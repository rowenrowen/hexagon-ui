import { Film, Play } from "lucide-react";

export type VideoSectionProps = {
  title?: string;
  caption?: string;
  className?: string;
};

export function VideoSection({
  title = "Show the product in under a minute",
  caption = "Swap this shell for Mux, YouTube, or a hosted MP4. The layout handles headline rhythm, ratio lock, and caption spacing.",
  className,
}: Partial<VideoSectionProps> = {}) {
  return (
    <section className={`py-16 sm:py-24 ${className ?? ""}`}>
      <div className="site-grid">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Film className="size-3.5 text-primary" strokeWidth={2} aria-hidden />
              Video
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{caption}</p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                Locked 16:9 frame so your player never awkwardly reflows on mobile.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                Caption rail reads like a launch narrative, not an empty rectangle.
              </li>
            </ul>
          </div>

          <div className="relative min-w-0">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/10 blur-2xl dark:from-primary/20" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_60px_-28px_oklch(0_0_0/0.35)] ring-1 ring-black/[0.04] dark:shadow-black/50 dark:ring-white/[0.06]">
              <div className="flex items-center justify-between border-b border-border/80 bg-muted/30 px-4 py-2.5 text-[11px] font-medium text-muted-foreground">
                <span className="truncate">Product tour · preview</span>
                <span className="shrink-0 rounded-md bg-background/80 px-2 py-0.5 font-mono text-[10px] text-foreground/80 ring-1 ring-border/80">
                  16:9
                </span>
              </div>
              <div className="relative bg-gradient-to-br from-muted/80 via-background to-muted/40 p-4 sm:p-6">
                <div className="relative mx-auto max-w-lg overflow-hidden rounded-xl border border-border/90 bg-background shadow-inner ring-1 ring-black/[0.04] dark:bg-card dark:ring-white/[0.05]">
                  <div className="aspect-video w-full">
                    <button
                      type="button"
                      className="group relative flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-muted/50 to-muted/20 text-center transition-colors hover:from-muted/60 hover:to-muted/30"
                      aria-label="Play video placeholder"
                    >
                      {/* Modern player-style play button: opaque disc with a
                          single filled triangle, optical-shifted right so it
                          reads as centered. Backdrop blur + soft halo on
                          hover (matches Loom / YouTube hover treatment). */}
                      <span className="relative grid size-12 place-items-center">
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-primary/25 blur-lg transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <span className="relative flex size-11 items-center justify-center rounded-full border-2 border-primary/40 bg-background/95 text-primary shadow-sm ring-2 ring-primary/15 backdrop-blur-sm transition-[transform,background-color,border-color,box-shadow] duration-200 group-hover:scale-105 group-hover:border-primary/55 group-hover:bg-primary/10 group-hover:shadow-md group-active:scale-[0.97] dark:bg-card/95">
                          <Play
                            className="size-4 translate-x-[1px] fill-current"
                            strokeWidth={0}
                            aria-hidden
                          />
                        </span>
                      </span>
                      <span className="px-4 text-xs font-medium text-muted-foreground">
                        Drop your player here — this control is decorative for the kit preview.
                      </span>
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-center text-[11px] text-muted-foreground">
                  Tip: keep captions short; let the frame carry polish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
