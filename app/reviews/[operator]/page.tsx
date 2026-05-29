import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BONUSES, getBonus, KYC_LABEL, TYPE_CLS } from "@/data/bonuses";
import { GUIDES } from "@/data/guides";
import { scoreColor } from "@/lib/score";
import { pageMetadata, siteName, siteUrl } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import BonusCard from "@/components/BonusCard";
import ComplianceNote from "@/components/ComplianceNote";
import Logo from "@/components/ui/Logo";
import ScoreRing from "@/components/ui/ScoreRing";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return BONUSES.map((b) => ({ operator: b.id }));
}

export function generateMetadata({ params }: { params: { operator: string } }): Metadata {
  const b = getBonus(params.operator);
  if (!b) return {};
  return pageMetadata({
    title: `${b.name} Review`,
    description: `${b.name} review for Ghana: ${b.offer} (${b.type}). Wagering ${b.wagering}, ${b.deposit ? "deposit required" : "no deposit"}, KYC ${KYC_LABEL[b.kyc].toLowerCase()}. Bonus Value Score ${b.score}/10.`,
    path: `/reviews/${b.id}`,
  });
}

function Stat({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="bg-surface3 px-3.5 py-3 rounded-[12px] border border-white/[0.07]">
      <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">{k}</div>
      <div className="font-bold text-[15.5px] text-txt mt-[5px]">{children}</div>
    </div>
  );
}

export default function Page({ params }: { params: { operator: string } }) {
  const b = getBonus(params.operator);
  if (!b) notFound();

  const related = GUIDES.filter((g) => g.related?.includes(b.id));
  const others = BONUSES.filter((o) => o.id !== b.id).slice(0, 3);
  const full = Math.round(b.score / 2);

  const verdict = `${b.name} is best for ${b.bestFor.toLowerCase()}. Its ${b.type.toLowerCase()} — ${b.offer} — carries ${b.wagering} wagering${
    b.deposit ? " and requires a deposit" : " with no deposit needed"
  }, with a maximum cashout of ${b.maxCashout.toLowerCase()}. Pay in and out via ${b.payments}.${
    b.momo ? " Mobile money is supported." : ""
  }${b.fast ? " Withdrawals are fast." : ""} Verification is ${KYC_LABEL[b.kyc].toLowerCase()}.`;

  return (
    <section className="py-[56px]">
      <div className="mx-auto max-w-site px-5">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Reviews", href: "/reviews" },
            { name: b.name, href: `/reviews/${b.id}` },
          ]}
        />

        <div className="mt-6 flex items-start gap-4 flex-wrap">
          <Logo b={b} cls="w-[64px] h-[64px] text-[22px] rounded-[16px]" />
          <div className="flex-1 min-w-[200px]">
            <PageHeader eyebrow="Operator review" title={`${b.name} review`} />
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <span className={"text-[11px] font-semibold px-2 py-[3px] rounded-md border " + TYPE_CLS[b.typeClass]}>
                {b.type}
              </span>
              <span className="text-[11px] font-semibold px-2 py-[3px] rounded-md border border-white/10 bg-surface3 text-muted">
                🇬🇭 Ghana
              </span>
              <span className="inline-flex gap-0.5" aria-label={`${b.score} out of 10`}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} style={{ color: i < full ? "#efc15c" : "#1d2835" }}>
                    ★
                  </span>
                ))}
              </span>
            </div>
          </div>
          <ScoreRing score={b.score} size={72} />
        </div>

        <div className="mt-10 grid gap-9 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <h2 className="font-display font-semibold text-[22px] tracking-[-0.01em] mb-3">Our verdict</h2>
            <p className="text-muted text-[15.5px] leading-relaxed [text-wrap:pretty]">{verdict}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-7">
              <Stat k="Wagering">
                <span className="font-mono">{b.wagering}</span>
              </Stat>
              <Stat k="Deposit req.">
                <span style={{ color: b.deposit ? "#f0d68a" : "#1fd98a" }}>{b.deposit ? "Yes" : "No"}</span>
              </Stat>
              <Stat k="KYC">{KYC_LABEL[b.kyc]}</Stat>
              <Stat k="Max cashout">{b.maxCashout}</Stat>
              {b.expiry && <Stat k="Expiry">{b.expiry}</Stat>}
              <Stat k="Score">
                <span className="font-mono" style={{ color: scoreColor(b.score) }}>
                  {b.score} / 10
                </span>
              </Stat>
            </div>

            {related.length > 0 && (
              <div className="mt-9">
                <h3 className="font-mono text-[11px] tracking-[0.12em] uppercase text-dim mb-3">Related guides</h3>
                <ul className="flex flex-col gap-2">
                  {related.map((g) => (
                    <li key={g.slug}>
                      <Link href={`/guides/${g.slug}`} className="text-brand font-semibold text-[14px] transition hover:brightness-110">
                        {g.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
              <Link href="/reviews" className="text-brand font-semibold transition hover:brightness-110">
                ← All reviews
              </Link>
              <Link href="/bonuses" className="text-brand font-semibold transition hover:brightness-110">
                Compare all bonuses →
              </Link>
            </div>

            <ComplianceNote className="mt-8" />
          </div>

          <div>
            <h2 className="font-display font-semibold text-[22px] tracking-[-0.01em] mb-3">The bonus</h2>
            <BonusCard b={b} />
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display font-semibold text-[22px] tracking-[-0.01em] mb-5">Other operators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {others.map((o) => (
              <Link
                key={o.id}
                href={`/reviews/${o.id}`}
                className="flex items-center gap-2.5 p-3.5 rounded-[14px] border border-white/10 bg-surface transition hover:-translate-y-0.5 hover:border-brand/30"
              >
                <Logo b={o} cls="w-10 h-10 text-[14px] rounded-[10px]" />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-semibold text-[14px] truncate">{o.name}</span>
                  <span className="font-mono text-[11px] text-muted">{o.offer}</span>
                </div>
                <span className="font-mono font-bold text-[15px] flex-none" style={{ color: scoreColor(o.score) }}>
                  {o.score}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          name: `${b.name} review`,
          url: `${siteUrl}/reviews/${b.id}`,
          itemReviewed: {
            "@type": "Organization",
            name: b.name,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: b.score,
            bestRating: 10,
            worstRating: 0,
          },
          author: { "@type": "Organization", name: siteName },
          publisher: { "@type": "Organization", name: siteName },
        }}
      />
    </section>
  );
}
