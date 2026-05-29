import { BONUSES } from "@/data/bonuses";
import type { Bonus } from "@/data/types";
import { scoreColor, sortByScore } from "@/lib/score";
import SectionHead from "@/components/ui/SectionHead";
import Logo from "@/components/ui/Logo";

function ReviewCard({ b }: { b: Bonus }) {
  const full = Math.round(b.score / 2);
  return (
    <article className="flex flex-col p-5 rounded-[20px] border border-white/10 bg-surface transition hover:-translate-y-0.5 hover:border-brand/30">
      <div className="flex items-center gap-3.5">
        <Logo b={b} cls="w-[50px] h-[50px] text-[16px]" />
        <div>
          <div className="font-display font-semibold text-[16px]">{b.name}</div>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="inline-flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} style={{ color: i < full ? "#efc15c" : "#1d2835" }}>
                  ★
                </span>
              ))}
            </span>
            <span className="font-mono font-bold text-[15px]" style={{ color: scoreColor(b.score) }}>
              {b.score}
            </span>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-col gap-2.5">
        {(
          [
            ["Best for", b.bestFor],
            ["Payments", b.payments],
            ["Bonus", b.avail],
          ] as const
        ).map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 text-[13px]">
            <span className="text-dim">{k}</span>
            <span className="text-txt font-medium text-right">{v}</span>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="mt-auto inline-flex items-center justify-center min-h-[44px] rounded-[11px] border border-white/10 bg-surface font-semibold text-[14px] text-txt transition hover:bg-surface2 hover:border-brand/30"
      >
        Read Full Review
      </a>
    </article>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-[72px]">
      <div className="mx-auto max-w-site px-5">
        <SectionHead
          eyebrow="Operator reviews"
          title="Casino reviews for Ghana"
          sub="What each operator is best for, how you pay in and out, and where the bonus stands today."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...BONUSES].sort(sortByScore).map((b) => (
            <ReviewCard key={b.id} b={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
