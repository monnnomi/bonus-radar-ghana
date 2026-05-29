import type { AwardPick, Criterion, HeroPick } from "./types";

// Operator-centric curation: category winners, the live hero ranking, and the
// scoring methodology used to rate every operator's bonus.

export const BEST_FOR: AwardPick[] = [
  { award: "Best No-Deposit Bonus", id: "sportybet", stat: "GHS 20 free bet · no deposit" },
  { award: "Best Free Spins", id: "msport", stat: "50 spins · selected slots" },
  { award: "Best Low Wagering", id: "betwinner", stat: "5× playthrough" },
  { award: "Best Mobile Money Casino", id: "betway", stat: "MTN MoMo · Vodafone Cash" },
  { award: "Best Fast Withdrawal", id: "betway", stat: "Same-day payouts" },
];

export const HERO_PICKS: HeroPick[] = [
  { label: "Best No Deposit", id: "sportybet" },
  { label: "Best Welcome Bonus", id: "betway" },
  { label: "Best Low Wagering", id: "betwinner" },
  { label: "Best Mobile Money", id: "msport" },
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
