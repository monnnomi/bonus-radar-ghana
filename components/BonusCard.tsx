"use client";

import { useState } from "react";
import type { Bonus } from "@/data/types";
import { KYC_DOT, KYC_LABEL, PAY_DOT, TYPE_CLS } from "@/data/bonuses";
import { bestId } from "@/lib/score";
import Logo from "@/components/ui/Logo";
import ScoreRing from "@/components/ui/ScoreRing";

function PayRow({ b }: { b: Bonus }) {
  return (
    <div className="mb-4">
      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mb-2.5">
        Pay in &amp; out
      </div>
      <div className="flex flex-wrap gap-[7px]">
        {b.pay.map((p) => (
          <span
            key={p}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-2.5 py-[5px] rounded-[7px] bg-surface3 border border-white/10"
          >
            <span
              className="w-[7px] h-[7px] rounded-full flex-none"
              style={{ background: PAY_DOT[p] || "#8aa0b8" }}
            />
            {p}
          </span>
        ))}
      </div>
      {(b.momo || b.fast) && (
        <div className="flex flex-wrap gap-[7px] mt-2">
          {b.momo && (
            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold px-2.5 py-[5px] rounded-[7px] text-brand bg-brand/10 border border-brand/30 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-current">
              Mobile Money supported
            </span>
          )}
          {b.fast && (
            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold px-2.5 py-[5px] rounded-[7px] text-blue bg-blue/10 border border-blue/30 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-current">
              Fast withdrawal
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function DataCell({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="bg-surface3 px-3.5 py-3">
      <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted flex items-center gap-1.5">
        {k}
      </div>
      <div className="font-bold text-[15.5px] text-txt mt-[5px] flex items-center gap-1.5 tracking-[-0.01em]">
        {children}
      </div>
    </div>
  );
}

export default function BonusCard({ b }: { b: Bonus }) {
  const [copied, setCopied] = useState(false);
  const isBest = b.id === bestId;

  const copy = () => {
    if (!b.code) return;
    navigator.clipboard?.writeText(b.code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <article
      className={
        "relative flex flex-col rounded-[20px] border bg-gradient-to-b from-surface2 to-surface p-[22px] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] transition hover:-translate-y-[3px] hover:shadow-[0_26px_50px_-28px_rgba(0,0,0,0.8)] " +
        (isBest ? "border-brand/30" : "border-white/10 hover:border-brand/30")
      }
    >
      {isBest && (
        <div className="absolute -top-px right-[18px] font-mono text-[10px] tracking-[0.14em] uppercase font-bold text-[#04140d] bg-gradient-to-b from-brand to-brand2 px-2.5 pt-[5px] pb-1 rounded-b-lg">
          Best value
        </div>
      )}
      <div className="flex items-start gap-3.5">
        <Logo b={b} />
        <div className="flex-1 min-w-0">
          <div className="font-display font-semibold text-[16.5px] tracking-[-0.01em]">{b.name}</div>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            <span className={"text-[11px] font-semibold px-2 py-[3px] rounded-md border " + TYPE_CLS[b.typeClass]}>
              {b.type}
            </span>
            <span className="text-[11px] font-semibold px-2 py-[3px] rounded-md border border-white/10 bg-surface3 text-muted">
              🇬🇭 Ghana
            </span>
          </div>
        </div>
        <ScoreRing score={b.score} />
      </div>

      <div className="mt-[18px] mb-1 font-display font-semibold text-[23px] tracking-[-0.02em] leading-[1.1]">
        {b.offer}
      </div>
      <div className="text-[13px] text-muted">{b.offerSub}</div>

      <div className="grid grid-cols-2 gap-px my-[18px] rounded-[14px] overflow-hidden border border-white/10 bg-white/10">
        <DataCell k="Wagering">
          <span className="font-mono">{b.wagering}</span>
        </DataCell>
        <DataCell k="Deposit req.">
          <span style={{ color: b.deposit ? "#f0d68a" : "#1fd98a" }}>{b.deposit ? "Yes" : "No"}</span>
        </DataCell>
        <DataCell k="KYC">
          <span className="w-2 h-2 rounded-full flex-none" style={{ background: KYC_DOT[b.kyc] }} />
          {KYC_LABEL[b.kyc]}
        </DataCell>
        <DataCell k="Max cashout">{b.maxCashout}</DataCell>
      </div>

      <PayRow b={b} />

      {b.code ? (
        <div className="promo-bg flex items-center justify-between gap-2.5 px-3.5 py-3 rounded-[14px] border border-dashed border-white/15 mb-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-dim">Promo code</div>
            <div className="font-mono font-bold text-[16px] tracking-[0.05em]">{b.code}</div>
          </div>
          <button
            onClick={copy}
            className={
              "inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold px-3 py-2 rounded-lg border min-h-[36px] transition " +
              (copied
                ? "bg-brand text-[#04140d] border-brand"
                : "bg-brand/10 text-brand border-brand/30 hover:bg-brand hover:text-[#04140d]")
            }
          >
            {copied ? "✓ COPIED" : "COPY"}
          </button>
        </div>
      ) : (
        <div className="promo-bg flex items-center px-3.5 py-3 rounded-[14px] border border-dashed border-white/15 mb-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-dim">Promo code</div>
            <div className="font-mono text-[13px] font-medium text-dim">No code needed — auto-applied</div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 mt-auto">
        <a
          href="#"
          className="flex-1 inline-flex items-center justify-center gap-2 font-bold text-[15px] min-h-[50px] rounded-[13px] text-[#04140d] bg-gradient-to-b from-brand to-brand2 shadow-[0_10px_26px_-10px_rgba(31,217,138,0.85)] transition hover:brightness-105 active:translate-y-px group"
        >
          Claim Bonus <span className="transition group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#reviews"
          className="inline-flex items-center min-h-[50px] px-3 rounded-[11px] border border-white/10 text-[13px] font-semibold text-muted transition hover:text-brand hover:border-brand/30 hover:bg-brand/10"
        >
          Read Review
        </a>
      </div>
      <p className="mt-[11px] text-center font-mono text-[10.5px] tracking-[0.04em] text-dim">
        18+ · Terms apply · Check operator rules
      </p>
    </article>
  );
}
