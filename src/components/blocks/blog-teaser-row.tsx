import { ArrowUpRight, Calendar } from "lucide-react";
import { BlockReveal, BlockRevealLi } from "./block-reveal";
import { MarketingLink } from "./marketing-link";

export type BlogTeaser = {
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

export const blogTeaserRowDefaults = {
  title: "From the journal",
  subtitle: "Wire href to MDX routes or your CMS — cards stay layout-only.",
  posts: [
    {
      title: "Theming Hexagon blocks with your generator",
      excerpt: "Map CSS variables once; avoid duplicating :root blocks across apps.",
      date: "Apr 2026",
      href: "#",
    },
    {
      title: "When to reach for Framer Motion vs CSS",
      excerpt: "Keep motion in client islands; prefer transitions for hovers.",
      date: "Mar 2026",
      href: "#",
    },
    {
      title: "Handing ZIPs to enterprise procurement",
      excerpt: "What to attach beyond the README so security review stays painless.",
      date: "Feb 2026",
      href: "#",
    },
  ] satisfies BlogTeaser[],
};

export type BlogTeaserRowProps = {
  title?: string;
  subtitle?: string;
  posts?: BlogTeaser[];
  id?: string;
  className?: string;
};

export function BlogTeaserRow({
  title = blogTeaserRowDefaults.title,
  subtitle = blogTeaserRowDefaults.subtitle,
  posts = blogTeaserRowDefaults.posts,
  id,
  className,
}: BlogTeaserRowProps) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <BlockReveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        </BlockReveal>
        <ul className="mt-12 grid list-none gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <BlockRevealLi key={post.title} delay={i * 0.08} hoverLift>
              <MarketingLink
                href={post.href}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 text-left shadow-sm shadow-black/10 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3.5" aria-hidden />
                  {post.date}
                </div>
                <h3 className="mt-3 flex items-start justify-between gap-2 text-lg font-semibold text-card-foreground group-hover:text-primary">
                  <span>{post.title}</span>
                  <ArrowUpRight
                    className="mt-1 size-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="mt-4 text-sm font-medium text-primary">Read more</span>
              </MarketingLink>
            </BlockRevealLi>
          ))}
        </ul>
      </div>
    </section>
  );
}
