const FOOT: Record<string, string[]> = {
  Company: ["About", "Contact", "Sitemap"],
  Bonuses: ["Casino Bonuses", "No Deposit", "Free Spins", "Promo Codes"],
  Resources: ["Reviews", "Guides", "How We Rate"],
  Legal: ["Responsible Gambling", "Affiliate Disclosure", "Privacy Policy", "Terms"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] pt-12 pb-10">
      <div className="mx-auto max-w-site px-5">
        <div className="flex items-start gap-3 p-4 rounded-[14px] border border-white/[0.07] bg-surface text-[13px] text-muted mb-10 [text-wrap:pretty]">
          <span className="text-gold flex-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
          <span>
            <b className="text-txt font-semibold">Affiliate disclosure.</b> We may earn affiliate commissions from some
            links. This does not affect our ratings. Bonus availability can change and depends on operator terms, KYC,
            payment methods and local regulations.
          </span>
        </div>
        <div className="grid gap-8 md:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5 font-display font-semibold">
              <span className="relative w-[34px] h-[34px] grid place-items-center rounded-[10px] bg-surface2 border border-brand/30">
                <span className="w-[7px] h-[7px] rounded-full bg-brand" />
              </span>
              <span>
                <b className="text-[15.5px]">Bonus Radar</b>
                <small className="block text-[10px] text-dim font-mono tracking-[0.12em]">GHANA</small>
              </span>
            </a>
            <p className="text-muted text-[14px] mt-3.5 max-w-[320px] [text-wrap:pretty]">
              Independent comparison of casino and betting bonuses for players in Ghana and English-speaking Africa.
              Terms checked, value scored.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-[18px]">
              {["18+", "Gamble Responsibly"].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center text-[13px] font-semibold px-3.5 py-2.5 rounded-full border border-white/10 bg-surface2"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(FOOT).map(([h, links]) => (
              <div key={h}>
                <h4 className="font-mono text-[11px] tracking-[0.12em] uppercase text-dim mb-3.5">{h}</h4>
                {links.map((l) => (
                  <a key={l} href="#" className="block py-1.5 text-muted text-[14px] transition hover:text-brand">
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-9 pt-[26px] border-t border-white/[0.07] text-[12.5px] text-dim leading-relaxed [text-wrap:pretty]">
          Gambling involves risk. Bonus Radar Ghana provides information for adults aged 18 and over. We do not operate
          gambling services. All bonus terms — including wagering, maximum cashout, KYC and expiry — are set by the
          operators and can change at any time. Always confirm the current terms, country availability and the legal
          status of online gambling in your location before claiming any offer.
        </p>
        <div className="mt-[22px] flex flex-wrap gap-3 items-center justify-between text-[12px] text-dim">
          <span>© 2026 Bonus Radar Ghana. All rights reserved.</span>
          <div className="flex gap-2 flex-wrap">
            {["18+ ONLY", "TERMS APPLY", "PLAY RESPONSIBLY"].map((b) => (
              <span
                key={b}
                className="font-mono text-[10px] tracking-[0.08em] px-2.5 py-[5px] rounded-md border border-white/10 bg-surface"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
