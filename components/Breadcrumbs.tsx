import Link from "next/link";
import { siteUrl } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.08em] uppercase text-dim">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {last ? (
                  <span className="text-muted">{c.name}</span>
                ) : (
                  <Link href={c.href} className="transition hover:text-brand">
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${siteUrl}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
    </>
  );
}
