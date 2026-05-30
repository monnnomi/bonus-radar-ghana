"use client";

import { useState } from "react";
import Link from "next/link";
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

// Placeholder card for operators that are not live yet. Keeps the exact card
// shell, logo and Ghana tag so the grid stays balanced, but shows "SOON" and
// disabled controls — no fake bonus, code, score or external links.
function ComingSoonCard({ b }: { b: Bonus }) {
  return (
    <article className="relative flex flex-col rounded-[20px] border border-white/10 bg-gradient-to-b from-surface2 to-surface p-[22px] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)]">
      <div className="absolute -top-px right-[18px] font-mono text-[10px] tracking-[0.14em] uppercase font-bold text-dim bg-surface3 border border-white/10 px-2.5 pt-[5px] pb-1 rounded-b-lg">
        Soon
      </div>
      <div className="flex items-start gap-3.5">
        <Logo b={b} cls="w-[46px] h-[46px] text-[17px] opacity-60" />
        <div className="flex-1 min-w-0">
          <div className="font-display font-semibold text-[16.5px] tracking-[-0.01em] text-muted">{b.name}</div>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            <span className="text-[11px] font-semibold px-2 py-[3px] rounded-md border border-white/10 bg-surface3 text-dim">
              Coming soon
            </span>
            <span className="text-[11px] font-semibold px-2 py-[3px] rounded-md border border-white/10 bg-surface3 text-muted">
              🇬🇭 Ghana
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[18px] mb-1 font-display font-semibold text-[23px] tracking-[-0.02em] leading-[1.1] text-muted">
        SOON
      </div>
      <div className="text-[13px] text-dim">New offer being verified</div>

      <div className="grid grid-cols-2 gap-px my-[18px] rounded-[14px] overflow-hidden border border-white/10 bg-white/10">
        {["Wagering", "Deposit req.", "KYC", "Max cashout"].map((k) => (
          <div key={k} className="bg-surface3 px-3.5 py-3">
            <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">{k}</div>
            <div className="font-bold text-[15.5px] text-dim mt-[5px]">—</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <span
          aria-disabled="true"
          className="flex-1 inline-flex items-center justify-center gap-2 font-bold text-[15px] min-h-[50px] rounded-[13px] text-dim bg-surface3 border border-white/10 cursor-not-allowed select-none"
        >
          Coming soon
        </span>
      </div>
      <p className="mt-[11px] text-center font-mono text-[10.5px] tracking-[0.04em] text-dim [text-wrap:pretty]">
        18+ · Terms apply · Gamble responsibly
      </p>
    </article>
  );
}

export default function BonusCard({ b }: { b: Bonus }) {
  const [copied, setCopied] = useState(false);

  // Inactive operators render as clean "SOON" placeholders (no fake data/links).
  if (!b.active) return <ComingSoonCard b={b} />;

  const isBest = b.id === bestId;
  const highlight = b.featured || isBest;
  const ribbon = b.award ?? (isBest ? "Best value" : null);

  const copy = () => {
    if (!b.code) return;
    navigator.clipboard?.writeText(b.code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Bonus CTA prefers the promoted offer page, falling back to the claim link.
  const bonusHref = b.bonusUrl || b.claimUrl;

  return (
    <article
      className={
        "relative flex flex-col rounded-[20px] border bg-gradient-to-b from-surface2 to-surface p-[22px] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] transition hover:-translate-y-[3px] hover:shadow-[0_26px_50px_-28px_rgba(0,0,0,0.8)] " +
        (highlight ? "border-brand/30" : "border-white/10 hover:border-brand/30")
      }
    >
      {ribbon && (
        <div className="absolute -top-px right-[18px] font-mono text-[10px] tracking-[0.14em] uppercase font-bold text-[#04140d] bg-gradient-to-b from-brand to-brand2 px-2.5 pt-[5px] pb-1 rounded-b-lg">
          {ribbon}
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
            <div className="font-mono text-[13px] font-medium text-dim">
              {b.bonusUrl ? "No code required — claim on the promo page" : "No code needed — auto-applied"}
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 mt-auto">
        <a
          href={bonusHref || "#"}
          target={bonusHref ? "_blank" : undefined}
          rel={bonusHref ? "nofollow sponsored noopener" : undefined}
          className="flex-1 inline-flex items-center justify-center gap-2 font-bold text-[15px] min-h-[50px] rounded-[13px] text-[#04140d] bg-gradient-to-b from-brand to-brand2 shadow-[0_10px_26px_-10px_rgba(31,217,138,0.85)] transition hover:brightness-105 active:translate-y-px group"
        >
          {b.bonusUrl ? "Get Bonus" : "Claim Bonus"} <span className="transition group-hover:translate-x-1">→</span>
        </a>
        <Link
          href={`/reviews/${b.id}`}
          className="inline-flex items-center min-h-[50px] px-3 rounded-[11px] border border-white/10 text-[13px] font-semibold text-muted transition hover:text-brand hover:border-brand/30 hover:bg-brand/10"
        >
          Read Review
        </Link>
      </div>
      <p className="mt-[11px] text-center font-mono text-[10.5px] tracking-[0.04em] text-dim [text-wrap:pretty]">
        {b.complianceNote || "18+ · Terms apply · Check operator rules"}
      </p>
    </article>
  );
}
