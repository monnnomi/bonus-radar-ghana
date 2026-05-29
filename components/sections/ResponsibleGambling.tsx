import { Eyebrow } from "@/components/ui/SectionHead";

export default function ResponsibleGambling() {
  return (
    <section className="py-[72px]">
      <div className="mx-auto max-w-site px-5">
        <div
          className="rounded-[28px] border border-white/10 bg-surface p-9 grid gap-7 lg:grid-cols-[1.4fr_0.9fr] lg:items-start"
          style={{
            background:
              "radial-gradient(700px 300px at 90% 10%, rgba(77,157,255,0.08), transparent 60%), #10161f",
          }}
        >
          <div>
            <div className="flex items-center gap-5">
              <div className="grid place-items-center w-[84px] h-[84px] rounded-full border-2 border-brand font-display font-bold text-[26px] text-brand flex-none">
                18+
              </div>
              <div>
                <Eyebrow>Play it safe</Eyebrow>
                <h2 className="font-display font-semibold tracking-[-0.02em] text-[clamp(22px,3.2vw,30px)]">
                  Gambling is for adults only.
                </h2>
              </div>
            </div>
            <p className="mt-3.5 text-muted text-[16px] max-w-[520px] [text-wrap:pretty]">
              Play responsibly. Never gamble with money you cannot afford to lose. Bonuses are entertainment, not income.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-5">
              {["18+", "Terms apply", "Availability may change", "Check local laws & operator terms"].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center text-[13px] font-semibold px-3.5 py-2.5 rounded-full border border-white/10 bg-surface2"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="p-[18px] rounded-[14px] border border-white/[0.07] bg-ink2">
              <div className="font-semibold text-[14px] mb-1.5">Set limits before you start</div>
              <p className="text-[13px] text-muted">
                Decide a deposit and time budget in advance. Use operator tools to set deposit, loss and session limits.
              </p>
            </div>
            <div className="p-[18px] rounded-[14px] border border-white/[0.07] bg-ink2">
              <div className="font-semibold text-[14px] mb-1.5">Need support?</div>
              <p className="text-[13px] text-muted">
                If gambling stops being fun, take a break. Self-exclusion and cooling-off tools are available with every licensed operator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
