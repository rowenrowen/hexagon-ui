import { KIT_PRIMARY_PILL } from "@/lib/kit-button-classes";
import { KIT_FIELD_INPUT } from "@/lib/kit-field-classes";
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
            className={KIT_FIELD_INPUT}
          />
          <button type="submit" className={`shrink-0 ${KIT_PRIMARY_PILL}`}>
            {buttonLabel}
          </button>
        </PreviewForm>
      </div>
    </section>
  );
}
