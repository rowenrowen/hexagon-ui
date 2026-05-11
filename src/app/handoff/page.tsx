import { permanentRedirect } from "next/navigation";

/**
 * Legacy route: `/handoff` is now `/docs`. Permanent redirect preserves any
 * external links (receipts, emails, social posts) shared before the rename.
 */
export default function HandoffPage(): never {
  permanentRedirect("/docs");
}
