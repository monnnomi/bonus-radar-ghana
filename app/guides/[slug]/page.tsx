import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "@/data/guides";
import { getBonus } from "@/data/bonuses";
import { scoreColor } from "@/lib/score";
import { pageMetadata, siteName, siteUrl } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComplianceNote from "@/components/ComplianceNote";
import { Eyebrow } from "@/components/ui/SectionHead";
import Logo from "@/components/ui/Logo";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  return pageMetadata({
    title: g.title,
    description: g.excerpt,
    path: `/guides/${g.slug}`,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();

  const related = (g.related ?? []).map(getBonus).filter((b): b is NonNullable<typeof b> => Boolean(b));

  return (
    <section className="py-[56px]">
      <article className="mx-auto max-w-[820px] px-5">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: g.title, href: `/guides/${g.slug}` },
          ]}
        />

        <header className="mt-6 mb-9">
          <Eyebrow>{g.cat}</Eyebrow>
          <h1 className="font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[clamp(28px,4.8vw,44px)]">
            {g.title}
          </h1>
          <div className="mt-4 flex items-center gap-2.5 text-[12px] text-dim font-mono">
            <span>{g.date}</span>
            <span>·</span>
            <span>{g.read} read</span>
          </div>
        </header>

        <div className="flex flex-col gap-7">
          {g.body.map((s, i) => (
            <div key={i}>
              {s.heading && (
                <h2 className="font-display font-semibold text-[21px] tracking-[-0.01em] mb-3">{s.heading}</h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-muted text-[15.5px] leading-relaxed [text-wrap:pretty] mb-3.5">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-10 p-5 rounded-[20px] border border-white/10 bg-surface">
            <h3 className="font-mono text-[11px] tracking-[0.12em] uppercase text-dim mb-4">Bonuses mentioned</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((b) => (
                <Link
                  key={b.id}
                  href={`/reviews/${b.id}`}
                  className="flex items-center gap-2.5 p-3 rounded-[12px] border border-white/[0.07] bg-surface2 transition hover:border-brand/30"
                >
                  <Logo b={b} cls="w-9 h-9 text-[13px] rounded-[9px]" />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="font-semibold text-[13.5px] truncate">{b.name}</span>
                    <span className="font-mono text-[11px] text-muted">{b.offer}</span>
                  </div>
                  <span className="font-mono font-bold text-[14px] flex-none" style={{ color: scoreColor(b.score) }}>
                    {b.score}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
          <Link href="/guides" className="text-brand font-semibold transition hover:brightness-110">
            ← All guides
          </Link>
          <Link href="/bonuses" className="text-brand font-semibold transition hover:brightness-110">
            Compare all bonuses →
          </Link>
        </div>

        <ComplianceNote className="mt-8" />
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.title,
          description: g.excerpt,
          url: `${siteUrl}/guides/${g.slug}`,
          articleSection: g.cat,
          inLanguage: "en-GH",
          author: { "@type": "Organization", name: siteName },
          publisher: { "@type": "Organization", name: siteName },
        }}
      />
    </section>
  );
}
