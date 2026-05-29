import { CRITERIA } from "@/data/operators";
import SectionHead from "@/components/ui/SectionHead";

export default function HowWeRate() {
  return (
    <section id="rate" className="py-[72px] bg-ink2 border-y border-white/[0.07]">
      <div className="mx-auto max-w-site px-5">
        <SectionHead
          eyebrow="Methodology"
          title="How we rate bonuses"
          sub="A Bonus Value Score of 0–10 is built from seven weighted factors. The bars show how much each one moves the score."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {CRITERIA.map((c) => (
            <div
              key={c.n}
              className="p-[22px] rounded-[20px] border border-white/[0.07] bg-surface transition hover:-translate-y-0.5 hover:border-brand/30"
            >
              <div className="font-mono text-[12px] text-brand mb-3.5">{c.n}</div>
              <h3 className="font-display font-semibold text-[17px]">{c.t}</h3>
              <p className="mt-2 text-muted text-[14px] [text-wrap:pretty]">{c.d}</p>
              <div className="mt-3.5 h-[5px] rounded-full bg-surface3 overflow-hidden">
                <i className="block h-full rounded-full bg-gradient-to-r from-brand to-brand2" style={{ width: c.w + "%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
