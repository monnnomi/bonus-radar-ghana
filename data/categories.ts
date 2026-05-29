import type { Bonus } from "./types";

export type CategoryKey = "bonuses" | "no-deposit" | "free-spins" | "promo-codes";

export type Category = {
  path: string;
  crumb: string;
  eyebrow: string;
  title: string;
  sub: string;
  metaTitle: string;
  metaDescription: string;
  filter: (b: Bonus) => boolean;
};

export const CATEGORIES: Record<CategoryKey, Category> = {
  bonuses: {
    path: "/bonuses",
    crumb: "Casino Bonuses",
    eyebrow: "All bonuses",
    title: "All casino bonuses in Ghana",
    sub: "Every offer we track, ranked by real withdrawable value — not headline size. Terms apply.",
    metaTitle: "Casino Bonuses in Ghana",
    metaDescription:
      "Compare every casino bonus we track for Ghana, ranked by real withdrawable value. Wagering, KYC and payment terms checked.",
    filter: () => true,
  },
  "no-deposit": {
    path: "/no-deposit",
    crumb: "No Deposit",
    eyebrow: "No deposit",
    title: "No-deposit bonuses in Ghana",
    sub: "Free bets and spins you can claim without funding your account first. Maximum cashout caps usually apply.",
    metaTitle: "No-Deposit Bonuses in Ghana",
    metaDescription:
      "The best no-deposit casino and betting bonuses in Ghana — claim free bets and spins without a deposit. Terms and cashout caps checked.",
    filter: (b) => b.tags.includes("no-deposit"),
  },
  "free-spins": {
    path: "/free-spins",
    crumb: "Free Spins",
    eyebrow: "Free spins",
    title: "Free spins offers in Ghana",
    sub: "Spins on selected slots, scored on fair wagering and real value rather than spin count alone.",
    metaTitle: "Free Spins Offers in Ghana",
    metaDescription:
      "Compare free spins casino offers for Ghana, scored on wagering, qualifying slots and withdrawable value. 18+, terms apply.",
    filter: (b) => b.tags.includes("free-spins"),
  },
  "promo-codes": {
    path: "/promo-codes",
    crumb: "Promo Codes",
    eyebrow: "Promo codes",
    title: "Casino promo codes for Ghana",
    sub: "Current bonus codes you can copy and apply at sign-up or deposit. Codes are time-limited — claim while live.",
    metaTitle: "Casino Promo Codes for Ghana",
    metaDescription:
      "Working casino and betting promo codes for Ghana, with the bonus each one unlocks. Copy the code and check the terms before you claim.",
    filter: (b) => b.code !== null,
  },
};
