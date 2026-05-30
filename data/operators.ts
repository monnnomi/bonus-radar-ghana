import type { AwardPick, Criterion, HeroPick } from "./types";

// Operator-centric curation: category winners, the live hero ranking, and the
// scoring methodology used to rate every operator's bonus.

// Betwinner is the only active pick; the remaining categories render as "SOON"
// placeholders (no fake operator is shown as a real recommendation).
export const BEST_FOR: AwardPick[] = [
  { award: "Best World Cup Betting + Casino", id: "betwinner-ghana", stat: "Sportsbook + casino · 2026 World Cup" },
  { award: "Best No-Deposit Bonus", id: "casino-1", stat: "Coming soon" },
  { award: "Best Free Spins", id: "casino-3", stat: "Coming soon" },
  { award: "Best Mobile Money Casino", id: "casino-2", stat: "Coming soon" },
  { award: "Best Fast Withdrawal", id: "casino-4", stat: "Coming soon" },
];

export const HERO_PICKS: HeroPick[] = [
  { label: "World Cup + Casino", id: "betwinner-ghana" },
  { label: "More offers", id: "casino-1" },
  { label: "More offers", id: "casino-2" },
  { label: "More offers", id: "casino-3" },
];

export const CRITERIA: Criterion[] = [
  { n: "01", t: "Wagering Requirements", d: "Lower playthrough means real, withdrawable value. We weight this heavily.", w: 92 },
  { n: "02", t: "Deposit Requirement", d: "No-deposit and low-deposit offers score higher for accessibility.", w: 78 },
  { n: "03", t: "Max Cashout", d: "Caps that limit winnings reduce the practical value of an offer.", w: 70 },
  { n: "04", t: "KYC Clarity", d: "Clear, upfront verification rules beat vague terms that delay payouts.", w: 65 },
  { n: "05", t: "Expiry Date", d: "Realistic time windows to clear the bonus before it disappears.", w: 58 },
  { n: "06", t: "Country Availability", d: "Confirmed availability and payment support for players in Ghana.", w: 84 },
  { n: "07", t: "Real Bonus Value", d: "The net of all terms combined — what you can actually take home.", w: 96 },
];
