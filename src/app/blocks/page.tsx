import { redirect } from "next/navigation";
import { HUB_BLOCK_SECTIONS } from "@/content/blocks-catalog";

/**
 * `/blocks` always opens with a category selected so the sidebar layout is
 * never empty. First hub section is the free starter row.
 */
export default function BlocksIndexPage(): never {
  const first = HUB_BLOCK_SECTIONS[0];
  redirect(`/blocks/${first.slug}`);
}
