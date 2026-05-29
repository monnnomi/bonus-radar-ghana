import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBonus } from "@/data/bonuses";
import { GUIDES } from "@/data/guides";
import { scoreColor } from "@/lib/score";
import { pageMetadata, siteName, siteUrl } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import Logo from "@/components/ui/Logo";
import ScoreRing from "@/components/ui/ScoreRing";
import { Eyebrow } from "@/components/ui/SectionHead";
import BonusCard from "@/components/BonusCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Betwinner Ghana Review: 100% Bonus, World Cup Betting & Casino",
  description:
    "Betwinner Ghana offers a 100% first deposit bonus up to €100, football betting, casino games and mobile access. Check terms, KYC and availability before claiming.",
  path: "/reviews/betwinner-ghana",
});

const AFF_REL = "nofollow sponsored noopener";
const btnPrimary =
  "inline-flex items-center justify-center gap-2 font-bold text-[15px] min-h-[50px] px-6 rounded-[12px] text-[#04140d] bg-gradient-to-b from-brand to-brand2 shadow-[0_10px_26px_-10px_rgba(31,217,138,0.85)] transition hover:brightness-105";
const btnGhost =
  "inline-flex items-center justify-center gap-2 font-semibold text-[15px] min-h-[50px] px-6 rounded-[12px] border border-white/10 bg-surface transition hover:border-brand/30 hover:bg-surface2";

function Aff({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  return (
    <a href={href} target="_blank" rel={AFF_REL} className={variant === "primary" ? btnPrimary : btnGhost}>
      {children}
    </a>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[14.5px] text-muted">
      <svg viewBox="0 0 24 24" className="w-4 h-4 mt-[3px] flex-none text-brand" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 12l5 5L20 6" />
      </svg>
      <span className="[text-wrap:pretty]">{children}</span>
    </li>
  );
}

function ConItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[14.5px] text-muted">
      <svg viewBox="0 0 24 24" className="w-4 h-4 mt-[3px] flex-none text-gold" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="6" y1="18" x2="18" y2="6" />
      </svg>
      <span className="[text-wrap:pretty]">{children}</span>
    </li>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-surface3 px-3.5 py-3 rounded-[12px] border border-white/[0.07]">
      <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">{k}</div>
      <div className="font-semibold text-[14px] text-txt mt-[5px] [text-wrap:pretty]">{v}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display font-semibold text-[clamp(22px,3.4vw,28px)] tracking-[-0.01em] mb-3">{children}</h2>;
}

const FOOTBALL_MARKETS = [
  "Match winner",
  "Total goals",
  "Handicap",
  "Correct score",
  "Both teams to score",
  "Live betting",
  "Tournament specials",
];

const STANDOUT = [
  "Sportsbook and casino in one account",
  "Strong football betting focus",
  "Useful through the 2026 World Cup cycle",
  "Promo codes and welcome offers",
  "Slots, live casino and table games",
  "Esports and live betting available",
  "One platform instead of switching between sites",
];

const CHECK_BEFORE = [
  "Minimum deposit",
  "Wagering requirements",
  "Bonus expiry",
  "Eligible games",
  "Max cashout",
  "KYC rules",
  "Withdrawal limits",
];

const PROS = [
  "Sportsbook and casino in one account",
  "Strong fit for football and World Cup traffic",
  "Promo codes and welcome offers",
  "Slots, live casino and card games",
  "Mobile betting option",
  "Esports and live betting available",
];

const CONS = [
  "Bonus terms can change",
  "KYC may be required",
  "Check payment options before you deposit",
  "Not every promo is available in every country",
];

export default function Page() {
  const b = getBonus("betwinner-ghana");
  if (!b) notFound();

  const aff = b.affiliateUrl || "#";
  const bonus = b.bonusUrl || b.claimUrl || "#"; // promoted 100% bonus page
  const register = b.claimUrl || "#";
  const mobile = b.mobileUrl || "#";
  const casino = b.casinoUrl || "#";
  const related = GUIDES.filter((g) => g.related?.includes(b.id));
  const full = Math.round(b.score / 2);

  return (
    <section className="py-[56px]">
      <article className="mx-auto max-w-site px-5">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Reviews", href: "/reviews" },
            { name: b.name, href: `/reviews/${b.id}` },
          ]}
        />

        {/* Header */}
        <header className="mt-6 flex items-start gap-4 flex-wrap">
          <Logo b={b} cls="w-[64px] h-[64px] text-[22px] rounded-[16px]" />
          <div className="flex-1 min-w-[220px]">
            <Eyebrow>Operator review</Eyebrow>
            <h1 className="font-display font-semibold tracking-[-0.02em] leading-[1.04] text-[clamp(28px,5vw,46px)]">
              Betwinner Ghana review
            </h1>
            <p className="mt-3 text-muted text-[clamp(15px,2vw,18px)] max-w-[640px] [text-wrap:pretty]">
              {b.tagline} — a sportsbook and online casino in one account for Ghana players.
            </p>
            <div className="flex items-center gap-2 mt-3.5 flex-wrap">
              <span className="text-[11px] font-semibold px-2 py-[3px] rounded-md border border-brand/30 bg-brand/10 text-brand">
                {b.type}
              </span>
              <span className="text-[11px] font-semibold px-2 py-[3px] rounded-md border border-white/10 bg-surface3 text-muted">
                🇬🇭 Ghana
              </span>
              <span className="text-[11px] font-semibold px-2 py-[3px] rounded-md border border-gold/30 bg-gold/10 text-gold">
                Best World Cup Betting + Casino Combo
              </span>
              <span className="inline-flex gap-0.5" aria-label={`${b.score} out of 10`}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} style={{ color: i < full ? "#efc15c" : "#1d2835" }}>
                    ★
                  </span>
                ))}
              </span>
            </div>
          </div>
          <ScoreRing score={b.score} size={72} />
        </header>

        {/* Primary CTAs */}
        <div className="mt-7 flex flex-wrap gap-3">
          <Aff href={bonus}>Claim Betwinner Bonus →</Aff>
          <Aff href={aff} variant="ghost">
            Visit Betwinner
          </Aff>
        </div>

        {/* Intro + offer card */}
        <div className="mt-12 grid gap-9 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <SectionTitle>Overview</SectionTitle>
            <p className="text-muted text-[15.5px] leading-relaxed [text-wrap:pretty]">
              Betwinner Ghana is a sportsbook and online casino in one account. New players can claim a{" "}
              <strong className="text-txt font-semibold">100% first deposit bonus up to €100</strong> through the current
              promo page, then use one account for World Cup betting, sportsbook markets, casino games and promo bonuses.
            </p>
            <p className="mt-3.5 text-muted text-[15.5px] leading-relaxed [text-wrap:pretty]">
              For Ghana users, the strongest angle is football: Ghana is playing at the 2026 World Cup, so World Cup
              betting, live football markets and tournament promos should be a major hook. Betwinner works well as a
              simple all-in-one option — bet on football, claim the bonus, and explore casino games from the same
              account.
            </p>

            <h3 className="font-display font-semibold text-[18px] mt-7 mb-3">Why Betwinner stands out</h3>
            <ul className="flex flex-col gap-2.5">
              {STANDOUT.map((s) => (
                <CheckItem key={s}>{s}</CheckItem>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-7">
              <Fact k="Best for" v="World Cup betting + casino bonus" />
              <Fact k="Bonus" v="100% first deposit bonus up to €100" />
              <Fact k="Main sports" v="Football, basketball, tennis, esports" />
              <Fact k="Casino" v="Slots, live casino, roulette, card games" />
              <Fact k="Promo code" v={b.code || "No code required — check promo page"} />
              <Fact k="Availability" v="Terms and country access may vary" />
            </div>
          </div>

          <div>
            <h2 className="font-display font-semibold text-[20px] tracking-[-0.01em] mb-3">The bonus</h2>
            <BonusCard b={b} />
          </div>
        </div>

        {/* Sports betting */}
        <div className="mt-14 p-6 sm:p-8 rounded-[24px] border border-white/10 bg-gradient-to-b from-surface2 to-surface">
          <SectionTitle>Sports betting &amp; the 2026 World Cup</SectionTitle>
          <p className="text-muted text-[15.5px] leading-relaxed max-w-[760px] [text-wrap:pretty]">
            Betwinner is especially interesting for football fans. During the 2026 World Cup — with Ghana in the
            tournament — players may want quick access to match odds, live betting and tournament markets.
          </p>
          <h3 className="font-mono text-[11px] tracking-[0.12em] uppercase text-dim mt-6 mb-3">Popular football markets</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 max-w-[640px]">
            {FOOTBALL_MARKETS.map((m) => (
              <CheckItem key={m}>{m}</CheckItem>
            ))}
          </ul>
          <p className="mt-5 text-muted text-[14px] [text-wrap:pretty]">
            The sportsbook also covers other sports, but for Ghana players the focus stays on football, Ghana matches and
            World Cup betting.
          </p>
          <div className="mt-6">
            <Aff href={aff}>Open Sportsbook →</Aff>
          </div>
        </div>

        {/* Casino + Mobile + Registration */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="p-6 rounded-[20px] border border-white/10 bg-surface flex flex-col">
            <SectionTitle>Casino &amp; slots</SectionTitle>
            <p className="text-muted text-[14.5px] leading-relaxed [text-wrap:pretty]">
              From the same account you can explore slots, live casino, roulette, blackjack, card games and free-spin
              offers. Register once, then access sports betting, casino games and promo bonuses together. Always check
              wagering, max cashout, eligible games, KYC and withdrawal rules before claiming a casino bonus.
            </p>
            <div className="mt-5">
              <Aff href={casino} variant="ghost">
                Open Casino →
              </Aff>
            </div>
          </div>

          <div className="p-6 rounded-[20px] border border-white/10 bg-surface flex flex-col">
            <SectionTitle>Mobile app</SectionTitle>
            <p className="text-muted text-[14.5px] leading-relaxed [text-wrap:pretty]">
              Prefer betting from your phone? The Betwinner mobile version is handy for live football betting, checking
              World Cup odds and claiming promos faster.
            </p>
            <div className="mt-auto pt-5">
              <Aff href={mobile} variant="ghost">
                Get Mobile App →
              </Aff>
            </div>
          </div>

          <div className="p-6 rounded-[20px] border border-white/10 bg-surface flex flex-col">
            <SectionTitle>Registration</SectionTitle>
            <p className="text-muted text-[14.5px] leading-relaxed [text-wrap:pretty]">
              Sign-up is quick: open the registration page, choose your country, select a currency, add a promo code if
              available and activate the current offer. Create one account before the World Cup action starts to unlock
              sports betting, casino games and bonus offers.
            </p>
            <div className="mt-auto pt-5">
              <Aff href={register} variant="ghost">
                Register Now →
              </Aff>
            </div>
          </div>
        </div>

        {/* Bonus notes */}
        <div className="mt-14">
          <SectionTitle>Bonus notes</SectionTitle>
          <p className="text-muted text-[15.5px] leading-relaxed max-w-[760px] [text-wrap:pretty]">
            Betwinner&rsquo;s current promoted offer is a 100% first deposit bonus up to €100. Check the promo page before
            depositing, because wagering, expiry, eligible games, KYC and withdrawal rules may change. Things to confirm:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-4 max-w-[640px]">
            {CHECK_BEFORE.map((c) => (
              <CheckItem key={c}>{c}</CheckItem>
            ))}
          </ul>
        </div>

        {/* Pros / Cons */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="p-6 rounded-[20px] border border-brand/20 bg-brand/[0.04]">
            <h3 className="font-display font-semibold text-[18px] mb-4">Pros</h3>
            <ul className="flex flex-col gap-2.5">
              {PROS.map((p) => (
                <CheckItem key={p}>{p}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-[20px] border border-white/10 bg-surface">
            <h3 className="font-display font-semibold text-[18px] mb-4">Cons</h3>
            <ul className="flex flex-col gap-2.5">
              {CONS.map((c) => (
                <ConItem key={c}>{c}</ConItem>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict */}
        <div className="mt-12 p-6 sm:p-8 rounded-[24px] border border-white/10 bg-surface">
          <Eyebrow>Verdict</Eyebrow>
          <SectionTitle>Best World Cup betting + casino combo</SectionTitle>
          <p className="text-muted text-[15.5px] leading-relaxed max-w-[760px] [text-wrap:pretty]">
            Betwinner Ghana is a strong first operator for Bonus Radar Ghana because it connects three high-interest
            angles: World Cup betting, football markets and casino bonuses. It is a sportsbook and casino option for
            Ghana players who want football betting, promo codes and casino bonuses in one account — not a guaranteed or
            risk-free way to make money.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Aff href={bonus}>Claim Betwinner Bonus →</Aff>
            <Aff href={aff} variant="ghost">
              Visit Betwinner
            </Aff>
          </div>
          <p className="mt-5 font-mono text-[11px] tracking-[0.04em] text-dim [text-wrap:pretty]">
            {b.complianceNote}
          </p>
        </div>

        {/* Related guides */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display font-semibold text-[20px] tracking-[-0.01em] mb-4">Related guides</h2>
            <ul className="flex flex-col gap-2">
              {related.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="text-brand font-semibold text-[14px] transition hover:brightness-110">
                    {g.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Internal links */}
        <nav className="mt-10 pt-7 border-t border-white/[0.07] flex flex-wrap gap-x-6 gap-y-2.5 text-[14px]" aria-label="More on Bonus Radar Ghana">
          <Link href="/bonuses" className="text-brand font-semibold transition hover:brightness-110">All bonuses</Link>
          <Link href="/promo-codes" className="text-brand font-semibold transition hover:brightness-110">Promo codes</Link>
          <Link href="/free-spins" className="text-brand font-semibold transition hover:brightness-110">Free spins</Link>
          <Link href="/reviews" className="text-brand font-semibold transition hover:brightness-110">All reviews</Link>
          <Link href="/guides" className="text-brand font-semibold transition hover:brightness-110">Guides</Link>
          <Link href="/responsible-gambling" className="text-brand font-semibold transition hover:brightness-110">Responsible gambling</Link>
        </nav>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          name: "Betwinner Ghana review",
          url: `${siteUrl}/reviews/${b.id}`,
          itemReviewed: {
            "@type": "Organization",
            name: b.name,
            url: b.affiliateUrl,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: b.score,
            bestRating: 10,
            worstRating: 0,
          },
          author: { "@type": "Organization", name: siteName },
          publisher: { "@type": "Organization", name: siteName },
          positiveNotes: {
            "@type": "ItemList",
            itemListElement: PROS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })),
          },
          negativeNotes: {
            "@type": "ItemList",
            itemListElement: CONS.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c })),
          },
        }}
      />
    </section>
  );
}
