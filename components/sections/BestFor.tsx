import { getBonus } from "@/data/bonuses";
import { BEST_FOR } from "@/data/operators";
import type { AwardPick } from "@/data/types";
import { scoreColor } from "@/lib/score";
import SectionHead from "@/components/ui/SectionHead";
import Logo from "@/components/ui/Logo";

function AwardCard({ x }: { x: AwardPick }) {
  const b = getBonus(x.id);
  if (!b) return null;
  return (
    <a
      href="#bonuses"
      className="flex flex-col gap-3.5 p-[18px] rounded-[20px] border border-white/10 bg-gradient-to-b from-surface2 to-surface transition hover:-translate-y-[3px] hover:border-brand/30 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)]"
    >
      <div className="font-display font-semibold text-[14.5px] leading-tight tracking-[-0.01em] min-h-[2.4em]">
        {x.award}
      </div>
      <div className="flex items-center gap-2.5">
        <Logo b={b} cls="w-10 h-10 text-[14px] rounded-[10px]" />
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-semibold text-[14px] truncate">{b.name}</span>
          <span className="font-mono text-[11px] text-muted">{x.stat}</span>
        </div>
        <span className="font-mono font-bold text-[17px] flex-none" style={{ color: scoreColor(b.score) }}>
          {b.score}
        </span>
      </div>
    </a>
  );
}

export default function BestFor() {
  return (
    <section id="best-for" className="pt-[72px] pb-10">
      <div className="mx-auto max-w-site px-5">
        <SectionHead
          eyebrow="Category winners"
          title="Best for what you came for"
          sub="Top pick in each category, scored on real withdrawable value. Terms apply."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {BEST_FOR.map((x) => (
            <AwardCard key={x.award} x={x} />
          ))}
        </div>
      </div>
    </section>
  );
}
