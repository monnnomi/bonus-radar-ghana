import Image from "next/image";

const PROMO_URL = "https://4phntam.top/bonus-100-01/?lang=en&id=2XkE";
const AFF_REL = "nofollow sponsored noopener";

// Promo image lives at public/images/betwinner-100-bonus.jpg.
// If the file is missing the banner still renders (text + CTA); only the image
// area 404s until the asset is added. Rendered w-full h-auto so it is never
// stretched or distorted (intrinsic ratio preserved).
const IMG_SRC = "/images/betwinner-100-bonus.jpg";
const IMG_W = 2000;
const IMG_H = 1132;

const COMPLIANCE = "18+ only. Terms apply. Gamble responsibly. Bonus availability may change.";

/**
 * Betwinner 100% first-deposit promo banner.
 * variant="full"    — homepage / review page (image + copy + CTA + compliance)
 * variant="compact" — /bonuses (slimmer block that still fits the grid flow)
 */
export default function BetwinnerPromo({
  variant = "full",
  className,
}: {
  variant?: "full" | "compact";
  className?: string;
}) {
  const compact = variant === "compact";

  return (
    <section
      aria-label="Betwinner 100% first deposit bonus"
      className={
        "relative overflow-hidden rounded-[24px] border border-brand/30 bg-gradient-to-b from-surface2 to-surface shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] " +
        (className || "")
      }
    >
      {/* emerald ambient glow, consistent with the site */}
      <div
        className="pointer-events-none absolute -right-[120px] -top-[120px] w-[360px] h-[360px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(31,217,138,0.16), transparent 65%)" }}
      />

      <div className={"relative grid items-center gap-6 " + (compact ? "md:grid-cols-2 p-5" : "lg:grid-cols-[1.1fr_0.9fr] p-6 sm:p-8")}>
        {/* Image — clickable, links to the promo page */}
        <a
          href={PROMO_URL}
          target="_blank"
          rel={AFF_REL}
          className="group block rounded-[16px] overflow-hidden border border-white/10 bg-ink2"
          aria-label="Betwinner 100% first deposit bonus up to €100 — get bonus"
        >
          <Image
            src={IMG_SRC}
            width={IMG_W}
            height={IMG_H}
            alt="Betwinner 100% bonus on the first deposit up to €100"
            sizes={compact ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 1024px) 100vw, 55vw"}
            className="w-full h-auto transition duration-300 group-hover:scale-[1.02]"
            priority={!compact}
          />
        </a>

        {/* Copy + CTA */}
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-brand mb-3">
            <span className="w-[7px] h-[7px] rounded-full bg-brand" />
            Featured offer · Betwinner Ghana
          </span>
          <h2 className={"font-display font-semibold tracking-[-0.02em] leading-[1.1] " + (compact ? "text-[20px]" : "text-[clamp(22px,3.4vw,30px)]")}>
            Betwinner 100% first deposit bonus up to €100
          </h2>
          <p className="mt-3 text-muted text-[14.5px] leading-relaxed [text-wrap:pretty]">
            For Ghana players looking at World Cup betting, sportsbook markets and casino bonuses.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={PROMO_URL}
              target="_blank"
              rel={AFF_REL}
              className="inline-flex items-center justify-center gap-2 font-bold text-[15px] min-h-[50px] px-6 rounded-[12px] text-[#04140d] bg-gradient-to-b from-brand to-brand2 shadow-[0_10px_26px_-10px_rgba(31,217,138,0.85)] transition hover:brightness-105 active:translate-y-px group"
            >
              Get Bonus <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
          <p className="mt-4 font-mono text-[10.5px] tracking-[0.04em] text-dim [text-wrap:pretty]">{COMPLIANCE}</p>
        </div>
      </div>
    </section>
  );
}
