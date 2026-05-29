import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/data/guides";
import { pageMetadata, siteUrl } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import GuideCard from "@/components/GuideCard";
import ComplianceNote from "@/components/ComplianceNote";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Casino Bonus Guides for Ghana",
  description:
    "Plain-English guides to wagering requirements, no-deposit offers, free spins and promo codes for players in Ghana.",
  path: "/guides",
});

export default function Page() {
  return (
    <section className="py-[56px]">
      <div className="mx-auto max-w-site px-5">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
        <div className="mt-6 mb-9">
          <PageHeader
            eyebrow="Guides & insights"
            title="Understand bonuses before you claim"
            sub="Plain-English guides to wagering, no-deposit offers, free spins and promo codes for players in Ghana."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUIDES.map((p) => (
            <GuideCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
          <Link href="/bonuses" className="text-brand font-semibold transition hover:brightness-110">
            Compare all bonuses →
          </Link>
          <Link href="/reviews" className="text-brand font-semibold transition hover:brightness-110">
            Read operator reviews →
          </Link>
        </div>

        <ComplianceNote className="mt-8" />
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Casino bonus guides for Ghana",
          itemListElement: GUIDES.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${siteUrl}/guides/${g.slug}`,
            name: g.title,
          })),
        }}
      />
    </section>
  );
}
