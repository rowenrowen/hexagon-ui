"use client";

import type { FormHTMLAttributes, ReactNode } from "react";

/** Default-export forms in demos: blocks hub previews stay put on submit (no navigation flash). */
export function PreviewForm({
  children,
  onSubmit,
  ...rest
}: FormHTMLAttributes<HTMLFormElement> & { children?: ReactNode }) {
  return (
    <form
      {...rest}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e);
      }}
    >
      {children}
    </form>
  );
}
