export type VideoSectionProps = {
  title?: string;
  caption?: string;
  className?: string;
};

export function VideoSection({
  title = "See the workflow in sixty seconds",
  caption = "Drop in a hosted MP4, Mux player, or YouTube iframe — this shell handles ratio, radius, and caption spacing.",
  className,
}: Partial<VideoSectionProps> = {}) {
  return (
    <section className={`py-20 ${className ?? ""}`}>
      <div className="site-grid">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{caption}</p>
        <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
          <div className="flex h-full items-center justify-center text-sm font-medium text-muted-foreground">
            16:9 media slot
          </div>
        </div>
      </div>
    </section>
  );
}
