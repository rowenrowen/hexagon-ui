/**
 * Aurora-style mesh (inspired by Magic UI / common gradient-orbit patterns).
 * CSS-only animation — no extra runtime deps.
 */
export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-background/30 dark:bg-background/40" />
      <div className="absolute -left-[15%] -top-[35%] size-[min(110vw,620px)] rounded-full bg-[oklch(0.42_0.22_285)] opacity-25 blur-[110px] motion-safe:animate-[hexagon-aurora-a_24s_ease-in-out_infinite] dark:opacity-45" />
      <div className="absolute -right-[20%] top-[5%] size-[min(95vw,520px)] rounded-full bg-[oklch(0.48_0.16_195)] opacity-25 blur-[100px] motion-safe:animate-[hexagon-aurora-b_28s_ease-in-out_infinite] dark:opacity-40" />
      <div className="absolute bottom-[-25%] left-[15%] size-[min(90vw,480px)] rounded-full bg-[oklch(0.42_0.14_230)] opacity-20 blur-[115px] motion-safe:animate-[hexagon-aurora-c_26s_ease-in-out_infinite] dark:opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_-10%,oklch(0.52_0.14_195/0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_65%_55%_at_50%_-10%,oklch(0.72_0.14_195/0.18),transparent_55%)]" />
    </div>
  );
}
