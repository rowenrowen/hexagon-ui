import { permanentRedirect } from "next/navigation";

/** Old gallery URL — consolidated under `/blocks` with category IA. */
export default function PreviewRedirectPage() {
  permanentRedirect("/blocks");
}
