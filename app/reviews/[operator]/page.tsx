import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BONUSES, getBonus } from "@/data/bonuses";
import Logo from "@/components/ui/Logo";

export const dynamicParams = false;

export function generateStaticParams() {
  // Flagship operators with a bespoke static route (e.g. /reviews/betwinner-ghana)
  // are handled by their own page, so exclude them from the generic template.
  return BONUSES.filter((b) => !b.slug).map((b) => ({ operator: b.id }));
}

export function generateMetadata({ params }: { params: { operator: string } }): Metadata {
  const b = getBonus(params.operator);
  if (!b) return {};
  return {
    title: `${b.name} Review — Coming Soon | Bonus Radar Ghana`,
    description: `${b.name} is being reviewed for Ghana players. Check back soon.`,
    robots: { index: false, follow: false },
  };
}

export default function Page({ params }: { params: { operator: string } }) {
  const b = getBonus(params.operator);
  if (!b) notFound();

  return (
    <section className="py-[72px]">
      <div className="mx-auto max-w-site px-5">
        <div className="max-w-[480px] mx-auto text-center flex flex-col items-center gap-6">
          <Logo b={b} cls="w-[72px] h-[72px] text-[26px] rounded-[18px] opacity-60" />

          <div>
            <div className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-dim bg-surface3 border border-white/10 px-3 py-[5px] rounded-full mb-3">
              Review in progress
            </div>
            <h1 className="font-display font-semibold text-[28px] tracking-[-0.02em] text-muted">
              {b.name}
            </h1>
            <p className="mt-3 text-[15px] text-dim leading-relaxed">
              We&apos;re verifying this operator&apos;s bonus terms, payment methods, and withdrawal process for Ghana players. Check back soon.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center font-semibold text-[14px] min-h-[44px] px-5 rounded-[11px] border border-white/10 bg-surface text-txt transition hover:border-brand/30 hover:bg-surface2"
            >
              ← All reviews
            </Link>
            <Link
              href="/#bonuses"
              className="inline-flex items-center justify-center font-semibold text-[14px] min-h-[44px] px-5 rounded-[11px] border border-white/10 bg-surface text-txt transition hover:border-brand/30 hover:bg-surface2"
            >
              Compare bonuses →
            </Link>
          </div>

          <p className="font-mono text-[11px] text-dim">18+ · Terms apply · Gamble responsibly</p>
        </div>
      </div>
    </section>
  );
}
