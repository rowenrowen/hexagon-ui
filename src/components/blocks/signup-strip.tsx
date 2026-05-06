import { PreviewForm } from "./preview-form";

export type SignupStripProps = {
  title?: string;
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
};

export function SignupStrip({
  title = "Ship faster briefings — weekly layouts & changelog recap.",
  placeholder = "you@company.com",
  buttonLabel = "Subscribe",
  className,
}: Partial<SignupStripProps> = {}) {
  return (
    <section className={`border-y border-border bg-card/40 py-12 ${className ?? ""}`}>
      <div className="site-grid flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm font-medium text-foreground sm:text-base">{title}</p>
        <PreviewForm className="flex w-full max-w-md gap-2 sm:justify-end" action="#" method="post">
          <label htmlFor="signup-strip-email" className="sr-only">
            Email
          </label>
          <input
            id="signup-strip-email"
            name="email"
            type="email"
            placeholder={placeholder}
            className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none ring-ring focus-visible:ring-2"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            {buttonLabel}
          </button>
        </PreviewForm>
      </div>
    </section>
  );
}
