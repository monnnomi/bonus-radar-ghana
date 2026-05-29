import { GUIDES } from "@/data/guides";
import type { Guide } from "@/data/types";
import SectionHead from "@/components/ui/SectionHead";

function GuideCard({ p }: { p: Guide }) {
  return (
    <article className="flex flex-col rounded-[20px] border border-white/10 bg-surface overflow-hidden transition hover:-translate-y-0.5 hover:border-brand/30">
      <div className="thumb-bg aspect-video relative grid place-items-center border-b border-white/10">
        <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-md bg-ink/70 backdrop-blur border border-white/10 text-brand">
          {p.cat}
        </span>
        <span className="font-mono text-[11px] text-dim tracking-[0.08em]">[ article image ]</span>
      </div>
      <div className="p-[18px] flex flex-col flex-1">
        <h3 className="font-display font-semibold text-[17px] leading-tight tracking-[-0.01em]">{p.title}</h3>
        <p className="mt-2 text-[13.5px] text-muted flex-1 [text-wrap:pretty]">{p.excerpt}</p>
        <div className="mt-4 flex items-center gap-2.5 text-[12px] text-dim font-mono">
          <span>{p.date}</span>
          <span>·</span>
          <span>{p.read} read</span>
          <a href="#" className="ml-auto text-brand font-semibold">
            Read →
          </a>
        </div>
      </div>
    </article>
  );
}

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
            <GuideCard key={p.title} p={p} />
          ))}
        </div>
        <div className="flex justify-center mt-[34px]">
          <a
            href="#"
            className="inline-flex items-center justify-center font-semibold text-[14px] min-h-[44px] px-5 rounded-[11px] border border-white/10 bg-surface transition hover:border-brand/30 hover:bg-surface2"
          >
            Browse all guides
          </a>
        </div>
      </div>
    </section>
  );
}
