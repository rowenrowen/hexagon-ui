import { redirect } from "next/navigation";
import { BLOCK_SECTIONS } from "@/content/blocks-catalog";

/**
 * `/blocks` always opens with a category selected so the sidebar layout is
 * never empty. First category in the catalog is the default landing.
 */
export default function BlocksIndexPage(): never {
  const first = BLOCK_SECTIONS[0];
  redirect(`/blocks/${first.slug}`);
}
