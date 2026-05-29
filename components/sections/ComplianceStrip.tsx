import type { ReactNode } from "react";

const COMPLIANCE: { t: string; icon: ReactNode; gold?: boolean }[] = [
  {
    t: "Ghana availability checked",
    icon: (
      <g>
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z" />
      </g>
    ),
  },
  {
    t: "Bonus terms reviewed",
    icon: (
      <g>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 14l2 2 4-4" />
      </g>
    ),
  },
  {
    t: "Payment methods checked",
    icon: (
      <g>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </g>
    ),
  },
  {
    t: "18+ only",
    icon: (
      <g>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </g>
    ),
  },
  {
    t: "Affiliate disclosure",
    gold: true,
    icon: (
      <g>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </g>
    ),
  },
];

export default function ComplianceStrip() {
  return (
    <section className="border-y border-white/[0.07] bg-ink2">
      <div className="mx-auto max-w-site px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-7 py-4">
        {COMPLIANCE.map((x) => (
          <div
            key={x.t}
            className={"flex items-center gap-2.5 py-2.5 text-[13px] font-medium " + (x.gold ? "text-muted" : "text-txt")}
          >
            <span
              className={
                "w-7 h-7 flex-none grid place-items-center rounded-lg " +
                (x.gold ? "bg-gold/10 text-gold" : "bg-brand/10 text-brand")
              }
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="2">
                {x.icon}
              </svg>
            </span>
            {x.t}
          </div>
        ))}
      </div>
    </section>
  );
}
