import Link from "next/link";
import { GUIDES } from "@/data/guides";
import SectionHead from "@/components/ui/SectionHead";
import GuideCard from "@/components/GuideCard";

export default function Guides() {
  return (
    <section id="guides" className="py-[72px] bg-ink2 border-y border-white/[0.07]">
      <div className="mx-auto max-w-site px-5">
        <SectionHead
          eyebrow="Guides & insights"
          title="Understand bonuses before you claim"
          sub="Plain-English guides to wagering, no-deposit offers and promo codes for players in Ghana."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUIDES.map((p) => (
            <GuideCard key={p.slug} p={p} />
          ))}
        </div>
        <div className="flex justify-center mt-[34px]">
          <Link
            href="/guides"
            className="inline-flex items-center justify-center font-semibold text-[14px] min-h-[44px] px-5 rounded-[11px] border border-white/10 bg-surface transition hover:border-brand/30 hover:bg-surface2"
          >
            Browse all guides
          </Link>
        </div>
      </div>
    </section>
  );
}
