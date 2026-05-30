import type { ReactNode } from "react";
import { getBonus } from "@/data/bonuses";
import { HERO_PICKS } from "@/data/operators";
import { scoreColor } from "@/lib/score";
import Logo from "@/components/ui/Logo";

const TRUST_BADGES: { t: string; icon: ReactNode }[] = [
  {
    t: "18+ Only",
    icon: (
      <g>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </g>
    ),
  },
  { t: "Gamble Responsibly", icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /> },
  { t: "Bonus Terms Checked", icon: <path d="M4 12l5 5L20 6" /> },
  {
    t: "Ghana-Focused Offers",
    icon: (
      <g>
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z" />
      </g>
    ),
  },
];

export default function Hero() {
  return (
    <section className="pt-[54px] pb-10">
      <div className="mx-auto max-w-site px-5 grid gap-9 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-[12px] text-muted px-3.5 py-[7px] rounded-full border border-white/[0.07] bg-surface mb-[22px]">
            <span className="dot-live w-[7px] h-[7px] rounded-full bg-brand" />
            Bonus terms checked · Updated May 2026
          </span>
          <h1 className="font-display font-semibold leading-[1.02] tracking-[-0.03em] text-[clamp(34px,7.4vw,60px)]">
            Find{" "}
            <span className="bg-gradient-to-r from-brand to-[#f5d66e] bg-clip-text text-transparent">Real</span>{" "}
            Casino Bonuses in Ghana — Ranked by Value, Not Hype
          </h1>
          <p className="mt-5 text-muted text-[clamp(16px,2.2vw,19px)] max-w-[540px] [text-wrap:pretty]">
            Compare free spins, no-deposit offers, promo codes, wagering terms and mobile money support before you claim.
          </p>
          <div className="flex flex-wrap gap-3 mt-[30px]">
            <a
              href="#bonuses"
              className="inline-flex items-center justify-center font-bold text-[15px] min-h-[52px] px-6 rounded-[11px] text-[#04140d] bg-gradient-to-b from-brand to-brand2 shadow-[0_10px_26px_-10px_rgba(31,217,138,0.85)] transition hover:brightness-105"
            >
              View Today&rsquo;s Bonuses
            </a>
            <a
              href="#rate"
              className="inline-flex items-center justify-center font-semibold text-[15px] min-h-[52px] px-6 rounded-[11px] border border-white/10 bg-surface transition hover:border-brand/30 hover:bg-surface2"
            >
              How We Rate Bonuses
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2.5 mt-[34px] max-w-[540px]">
            {TRUST_BADGES.map((x) => (
              <div
                key={x.t}
                className="flex items-center gap-2.5 px-3.5 py-3 rounded-[14px] border border-white/[0.07] bg-surface text-[13px] font-medium"
              >
                <span className="w-[26px] h-[26px] flex-none grid place-items-center rounded-lg bg-brand/10 text-brand">
                  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="2">
                    {x.icon}
                  </svg>
                </span>
                {x.t}
              </div>
            ))}
          </div>
        </div>

        <aside className="relative rounded-[28px] border border-white/10 bg-surface p-5 overflow-hidden shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)]">
          <div
            className="absolute w-[360px] h-[360px] -right-[120px] -top-[120px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(31,217,138,0.16), transparent 65%)" }}
          />
          <div className="flex items-center justify-between mb-4 relative">
            <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-dim">Top value today</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-brand">
              <span className="dot-live w-[7px] h-[7px] rounded-full bg-brand" />
              Live ranking
            </span>
          </div>
          <div className="flex flex-col gap-2.5 relative">
            {HERO_PICKS.map((p) => {
              const b = getBonus(p.id);
              if (!b) return null;
              if (!b.active) {
                // Placeholder row — keeps the ranking balanced without a fake pick.
                return (
                  <div
                    key={p.id}
                    className="grid grid-cols-[34px_1fr_auto] items-center gap-3 p-3.5 rounded-[14px] bg-surface2 border border-white/[0.07]"
                  >
                    <Logo b={b} cls="w-[34px] h-[34px] text-[14px] rounded-[9px] opacity-50" />
                    <div className="min-w-0">
                      <div className="font-mono text-[9.5px] tracking-[0.1em] uppercase text-dim mb-[3px]">{p.label}</div>
                      <div className="font-semibold text-[14px] text-muted">{b.name}</div>
                      <div className="font-mono text-[12px] text-dim">Coming soon</div>
                    </div>
                    <div className="font-mono font-bold text-[13px] px-2.5 py-1 rounded-lg text-dim bg-surface3">SOON</div>
                  </div>
                );
              }
              return (
                <div
                  key={p.id}
                  className="grid grid-cols-[34px_1fr_auto] items-center gap-3 p-3.5 rounded-[14px] bg-surface2 border border-white/[0.07]"
                >
                  <Logo b={b} cls="w-[34px] h-[34px] text-[14px] rounded-[9px]" />
                  <div className="min-w-0">
                    <div className="font-mono text-[9.5px] tracking-[0.1em] uppercase text-brand mb-[3px]">{p.label}</div>
                    <div className="font-semibold text-[14px]">{b.name}</div>
                    <div className="font-mono text-[12px] text-muted">{b.offer}</div>
                  </div>
                  <div
                    className="font-mono font-bold text-[15px] px-2.5 py-1 rounded-lg"
                    style={{ color: scoreColor(b.score), background: scoreColor(b.score) + "1f" }}
                  >
                    {b.score}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}
