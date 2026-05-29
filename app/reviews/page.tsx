import type { Metadata } from "next";
import Link from "next/link";
import { BONUSES } from "@/data/bonuses";
import { sortBonuses } from "@/lib/score";
import { pageMetadata, siteUrl } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import ReviewCard from "@/components/ReviewCard";
import ComplianceNote from "@/components/ComplianceNote";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Casino Reviews for Ghana",
  description:
    "Independent reviews of casino and betting operators serving Ghana — what each is best for, how you pay in and out, and where the bonus stands today.",
  path: "/reviews",
});

export default function Page() {
  const list = [...BONUSES].sort(sortBonuses);
  return (
    <section className="py-[56px]">
      <div className="mx-auto max-w-site px-5">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }]} />
        <div className="mt-6 mb-9">
          <PageHeader
            eyebrow="Operator reviews"
            title="Casino reviews for Ghana"
            sub="What each operator is best for, how you pay in and out, and where the bonus stands today. Scored on real withdrawable value."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {list.map((b) => (
            <ReviewCard key={b.id} b={b} />
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
          <Link href="/bonuses" className="text-brand font-semibold transition hover:brightness-110">
            Compare all bonuses →
          </Link>
          <Link href="/guides" className="text-brand font-semibold transition hover:brightness-110">
            Browse bonus guides →
          </Link>
        </div>

        <ComplianceNote className="mt-8" />
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Casino reviews for Ghana",
          itemListElement: list.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${siteUrl}/reviews/${b.id}`,
            name: b.name,
          })),
        }}
      />
    </section>
  );
}
