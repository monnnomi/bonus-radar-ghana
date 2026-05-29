import Link from "next/link";
import { BONUSES } from "@/data/bonuses";
import { CATEGORIES, type CategoryKey } from "@/data/categories";
import { sortBonuses } from "@/lib/score";
import { siteUrl } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import BonusGrid from "@/components/BonusGrid";
import ComplianceNote from "@/components/ComplianceNote";
import BetwinnerPromo from "@/components/BetwinnerPromo";
import JsonLd from "@/components/JsonLd";

export default function CategoryPage({ k, showPromo = false }: { k: CategoryKey; showPromo?: boolean }) {
  const cat = CATEGORIES[k];
  const list = [...BONUSES].filter(cat.filter).sort(sortBonuses);

  return (
    <section className="py-[56px]">
      <div className="mx-auto max-w-site px-5">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: cat.crumb, href: cat.path }]} />
        <div className="mt-6 mb-9">
          <PageHeader eyebrow={cat.eyebrow} title={cat.title} sub={cat.sub} />
        </div>

        {showPromo && <BetwinnerPromo variant="compact" className="mb-8" />}

        <BonusGrid bonuses={list} emptyText="No offers in this category right now. Check back soon." />

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
          <Link href="/reviews" className="text-brand font-semibold transition hover:brightness-110">
            Read operator reviews →
          </Link>
          <Link href="/guides" className="text-brand font-semibold transition hover:brightness-110">
            Browse bonus guides →
          </Link>
          <Link href="/#rate" className="text-brand font-semibold transition hover:brightness-110">
            How we rate bonuses →
          </Link>
        </div>

        <ComplianceNote className="mt-8" />
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: cat.title,
          itemListElement: list.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${siteUrl}/reviews/${b.id}`,
            name: `${b.name} — ${b.offer}`,
          })),
        }}
      />
    </section>
  );
}
