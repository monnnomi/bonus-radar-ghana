import type { Guide } from "./types";

// SEO guides / blog articles. Replace placeholder thumbnails with real images.
export const GUIDES: Guide[] = [
  {
    slug: "best-casino-bonuses-ghana",
    cat: "Guide",
    title: "Best Casino Bonuses in Ghana",
    excerpt: "Our current top-rated welcome offers, ranked by real withdrawable value.",
    read: "8 min",
    date: "May 2026",
    related: ["betwinner", "betway", "jackpotcity"],
    body: [
      {
        paragraphs: [
          "A big headline percentage does not make a bonus good. What matters is how much of it you can actually withdraw after wagering, cashout caps and verification. We rank every offer on that real, withdrawable value — not on how large the number looks.",
        ],
      },
      {
        heading: "What makes a welcome bonus worth claiming",
        paragraphs: [
          "Look first at the wagering requirement: a 100% match at 8× playthrough is far stronger than a 200% match at 50×. Then check whether a maximum cashout caps your winnings, and whether the payment method you use in Ghana — usually mobile money — is supported for both deposits and withdrawals.",
          "Clear, upfront KYC rules also matter. Vague verification terms are the most common reason payouts get delayed, so we score operators higher when their requirements are stated plainly.",
        ],
      },
      {
        heading: "Our current top picks",
        paragraphs: [
          "The highest-scoring welcome offers right now combine low wagering, confirmed Ghana availability and mobile money support. Compare them side by side on the bonuses page, and read the full operator review before you claim.",
        ],
      },
    ],
  },
  {
    slug: "best-no-deposit-bonuses-ghana",
    cat: "No Deposit",
    title: "Best No-Deposit Bonuses in Ghana",
    excerpt: "Claim free bets and spins without funding your account first.",
    read: "6 min",
    date: "May 2026",
    related: ["sportybet"],
    body: [
      {
        paragraphs: [
          "A no-deposit bonus lets you try an operator without putting your own money in first. It is the lowest-risk way to test how a site handles sign-up, verification and withdrawals before you commit a deposit.",
        ],
      },
      {
        heading: "The catch to watch for",
        paragraphs: [
          "No-deposit offers almost always carry a maximum cashout — the most you can withdraw from any winnings. A GHS 20 free bet might cap winnings at GHS 200, so read that line before you start.",
          "Verification is usually required before a withdrawal, even when it was not required to claim. Complete KYC early so a payout is not held up later.",
        ],
      },
    ],
  },
  {
    slug: "best-free-spins-offers",
    cat: "Free Spins",
    title: "Best Free Spins Offers",
    excerpt: "Where to find spins with fair wagering and slots that actually pay.",
    read: "5 min",
    date: "Apr 2026",
    related: ["msport"],
    body: [
      {
        paragraphs: [
          "Free spins are only as good as the slot they run on and the wagering attached to the winnings. Fifty spins at 35× on a low-RTP slot can be worth less than ten spins at fair terms.",
        ],
      },
      {
        heading: "How to judge a spins offer",
        paragraphs: [
          "Check the per-spin value, which slots qualify, and the wagering multiplier on anything you win. Also confirm any maximum cashout — caps quietly limit what an attractive-looking spins package is really worth.",
        ],
      },
    ],
  },
  {
    slug: "how-wagering-requirements-work",
    cat: "Explained",
    title: "How Wagering Requirements Work",
    excerpt: "What 35× really means — and how to calculate it before you claim.",
    read: "7 min",
    date: "Apr 2026",
    related: ["betwinner", "sportybet"],
    body: [
      {
        paragraphs: [
          "A wagering requirement is how many times you must bet a bonus before you can withdraw it. It is the single biggest factor in whether a bonus has real value, which is why we weight it most heavily in our score.",
        ],
      },
      {
        heading: "The simple math",
        paragraphs: [
          "If you receive a GHS 100 bonus at 8× wagering, you must place GHS 800 in bets before withdrawing. At 35× that becomes GHS 3,500 — the same headline bonus, but far harder to clear.",
          "Lower is better. Anything at or below 10× is genuinely player-friendly; 35× and above usually means the bonus is more marketing than money.",
        ],
      },
    ],
  },
  {
    slug: "how-to-use-casino-promo-codes",
    cat: "How-to",
    title: "How to Use Casino Promo Codes",
    excerpt: "Step-by-step: where to enter codes and avoid the common mistakes.",
    read: "4 min",
    date: "Mar 2026",
    related: ["betway", "jackpotcity"],
    body: [
      {
        paragraphs: [
          "A promo code unlocks a specific offer at sign-up or deposit. Some bonuses apply automatically with no code at all — the offer page will say which.",
        ],
      },
      {
        heading: "Getting it right",
        paragraphs: [
          "Enter the code exactly as shown, in the promo field during registration or your first deposit. Codes are case-sensitive and time-limited, so claim while the offer is live. If there is no code, do not look for one — the bonus is auto-applied when you meet the terms.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
