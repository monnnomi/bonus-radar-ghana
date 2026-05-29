"use client";

import { useState } from "react";

const NAV = ["Casino Bonuses", "No Deposit", "Free Spins", "Promo Codes", "Reviews", "Guides"];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-ink/70 border-b border-white/[0.07]">
      <div className="mx-auto max-w-site px-5 flex items-center gap-5 h-[66px]">
        <a href="#" className="flex items-center gap-2.5 font-display font-semibold whitespace-nowrap">
          <span className="relative w-[34px] h-[34px] grid place-items-center rounded-[10px] bg-surface2 border border-brand/30 flex-none">
            <span className="w-[7px] h-[7px] rounded-full bg-brand shadow-[0_0_0_5px_rgba(31,217,138,0.18),0_0_0_10px_rgba(31,217,138,0.08)]" />
          </span>
          <span>
            <b className="text-[15.5px]">Bonus Radar</b>
            <small className="block text-[10px] text-dim font-mono tracking-[0.12em]">GHANA</small>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-1 ml-2">
          {NAV.map((n) => (
            <a
              key={n}
              href="#bonuses"
              className="text-[14px] text-muted px-3 py-2 rounded-lg transition hover:text-txt hover:bg-surface2"
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5 ml-auto">
          <div className="hidden lg:flex items-center gap-2 text-[13px] px-3 py-2 rounded-full border border-white/10 bg-surface">
            <span
              className="w-[18px] h-[13px] rounded-sm flex-none"
              style={{ background: "linear-gradient(180deg,#ce1126 33%,#fcd116 33% 66%,#006b3f 66%)" }}
            />
            Ghana
          </div>
          <a
            href="#bonuses"
            className="inline-flex items-center justify-center whitespace-nowrap font-bold text-[13px] min-h-[38px] px-3.5 rounded-[11px] text-[#04140d] bg-gradient-to-b from-brand to-brand2 shadow-[0_8px_22px_-10px_rgba(31,217,138,0.7)]"
          >
            View Bonuses
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid place-items-center w-11 h-11 rounded-[11px] border border-white/10 bg-surface"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden flex flex-col gap-0.5 px-5 pb-4 pt-2.5 border-b border-white/[0.07] bg-ink/95">
          {NAV.map((n) => (
            <a
              key={n}
              href="#bonuses"
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-[10px] text-[15px] text-muted hover:bg-surface2 hover:text-txt"
            >
              {n}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
