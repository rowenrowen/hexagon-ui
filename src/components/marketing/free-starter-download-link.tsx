import Link from "next/link";
import { FREE_STARTER_DOWNLOAD_URL } from "@/lib/checkout-url";

type FreeStarterDownloadLinkProps = {
  className: string;
  children: React.ReactNode;
};

/** Same-origin ZIP uses `download`; absolute URLs (CDN) open in a new tab. */
export function FreeStarterDownloadLink({ className, children }: FreeStarterDownloadLinkProps) {
  const href = FREE_STARTER_DOWNLOAD_URL;
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} prefetch={false} className={className} download>
      {children}
    </Link>
  );
}
