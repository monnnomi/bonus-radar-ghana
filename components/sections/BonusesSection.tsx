"use client";

import { useMemo, useState } from "react";
import { BONUSES, FILTERS, KYC_DOT, KYC_LABEL, TYPE_CLS } from "@/data/bonuses";
import type { FilterId } from "@/data/types";
import { scoreColor, sortBonuses } from "@/lib/score";
import SectionHead from "@/components/ui/SectionHead";
import Logo from "@/components/ui/Logo";
import BonusCard from "@/components/BonusCard";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={
        "inline-flex items-center gap-2 whitespace-nowrap text-[13.5px] font-medium px-[15px] min-h-[42px] rounded-full border transition flex-none " +
        (active
          ? "bg-brand/10 border-brand text-brand"
          : "bg-surface border-white/10 text-muted hover:text-txt hover:border-brand/30")
      }
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {children}
    </button>
  );
}

export default function BonusesSection() {
  const [active, setActive] = useState<Set<FilterId>>(new Set());

  const toggle = (id: FilterId) => {
    const n = new Set(active);
    if (n.has(id)) n.delete(id);
    else n.add(id);
    setActive(n);
  };

  const list = useMemo(() => {
    let l = [...BONUSES].sort(sortBonuses);
    if (active.size) l = l.filter((b) => [...active].every((f) => b.tags.includes(f)));
    return l;
  }, [active]);

  const table = [...BONUSES].sort(sortBonuses);

  return (
    <>
      <div className="sticky top-[66px] z-30 bg-ink/80 backdrop-blur border-y border-white/[0.07] py-3.5">
        <div className="mx-auto max-w-site px-5">
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
            {FILTERS.map((f) => (
              <Chip key={f.id} active={active.has(f.id)} onClick={() => toggle(f.id)}>
                {f.label}
              </Chip>
            ))}
            <button
              onClick={() => setActive(new Set())}
              className="inline-flex items-center whitespace-nowrap text-[13.5px] font-medium px-[15px] min-h-[42px] rounded-full border border-white/10 bg-surface text-dim flex-none"
            >
              Clear all
            </button>
          </div>
        </div>
      </div>

      <section id="bonuses" className="py-[72px]">
        <div className="mx-auto max-w-site px-5">
          <SectionHead
            eyebrow="Bonus comparison"
            title="Today's casino bonuses, ranked by real value"
            sub="Every offer is scored on withdrawable value — not headline size. Tap a filter above to narrow the list."
          />
          {list.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[18px]">
              {list.map((b) => (
                <BonusCard key={b.id} b={b} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-5 text-muted border border-dashed border-white/15 rounded-[20px]">
              No bonuses match all selected filters. Try removing one.
            </div>
          )}

          <div className="mt-14">
            <SectionHead
              eyebrow="Full comparison"
              title="Side-by-side table"
              sub="The complete view — scroll horizontally on mobile to see every term."
            />
            <div className="border border-white/[0.07] rounded-[20px] overflow-hidden bg-surface">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[860px]">
                  <thead>
                    <tr>
                      {["Casino", "Bonus", "Type", "Code", "Wagering", "Deposit", "KYC", "Score", ""].map((h, i) => (
                        <th
                          key={i}
                          className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-dim text-left px-4 py-3.5 bg-ink2 border-b border-white/[0.07] whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.map((b) => (
                      <tr key={b.id} className="hover:bg-surface2">
                        <td className="px-4 py-4 border-b border-white/[0.07]">
                          <div className="flex items-center gap-2.5">
                            <Logo b={b} cls="w-[38px] h-[38px] text-[14px] rounded-[10px]" />
                            <span className="font-display font-semibold text-[14px]">{b.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 border-b border-white/[0.07] font-semibold text-[14px]">{b.offer}</td>
                        <td className="px-4 py-4 border-b border-white/[0.07]">
                          <span className={"text-[11px] font-semibold px-2 py-[3px] rounded-md border " + TYPE_CLS[b.typeClass]}>
                            {b.type}
                          </span>
                        </td>
                        <td className="px-4 py-4 border-b border-white/[0.07] font-mono text-[13px] text-brand">{b.code || "—"}</td>
                        <td className="px-4 py-4 border-b border-white/[0.07] font-mono text-[14px]">{b.wagering}</td>
                        <td
                          className="px-4 py-4 border-b border-white/[0.07] font-semibold text-[14px]"
                          style={{ color: b.deposit ? "#f0d68a" : "#1fd98a" }}
                        >
                          {b.deposit ? "Yes" : "No"}
                        </td>
                        <td className="px-4 py-4 border-b border-white/[0.07] text-[14px]">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ background: KYC_DOT[b.kyc] }} />
                            {KYC_LABEL[b.kyc]}
                          </span>
                        </td>
                        <td
                          className="px-4 py-4 border-b border-white/[0.07] font-mono font-bold text-[16px]"
                          style={{ color: scoreColor(b.score) }}
                        >
                          {b.score}
                        </td>
                        <td className="px-4 py-4 border-b border-white/[0.07]">
                          <a
                            href={b.claimUrl || "#"}
                            target={b.claimUrl ? "_blank" : undefined}
                            rel={b.claimUrl ? "nofollow sponsored noopener" : undefined}
                            className="inline-flex items-center justify-center font-bold text-[13px] min-h-[38px] px-3.5 rounded-[11px] text-[#04140d] bg-gradient-to-b from-brand to-brand2"
                          >
                            Claim
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3.5 font-mono text-[11px] tracking-[0.03em] text-dim">
              All offers: 18+ · Terms apply · Check operator rules · Availability may change
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
