// Shared domain types for Bonus Radar Ghana.
// Keep these shapes stable when wiring to a CMS / DB / API later.

export type TypeClass = "emerald" | "gold" | "blue";
export type Kyc = "req" | "maybe" | "unclear";

export type FilterId =
  | "no-deposit"
  | "free-spins"
  | "low-wagering"
  | "mobile-money"
  | "new-players"
  | "existing-players"
  | "crypto"
  | "fast-withdrawal";

export type Bonus = {
  id: string;
  name: string; // "Betway Ghana"
  initials: string; // "BW" — used in logo placeholder
  logoBg: string; // CSS gradient for placeholder logo
  logoColor: string; // text color on the logo
  offer: string; // "100% up to GHS 1,000"
  offerSub: string; // "First deposit match"
  type: string; // "Welcome Match" | "No Deposit" | "Free Spins"
  typeClass: TypeClass; // tag color
  code: string | null; // promo code, or null = auto-applied
  deposit: boolean; // deposit required?
  wagering: string; // "8×"
  kyc: Kyc;
  maxCashout: string; // "GHS 5,000" | "No cap stated"
  expiry?: string; // "30 days"
  score: number; // 0–10, one decimal
  tags: FilterId[]; // filter ids this bonus matches
  pay: string[]; // payment method chips
  momo: boolean; // show "Mobile Money supported"
  fast: boolean; // show "Fast withdrawal"
  bestFor: string; // review card
  payments: string; // review card (human string)
  avail: string; // "Available now"
};

export type Filter = { id: FilterId; label: string };

export type AwardPick = { award: string; id: string; stat: string };
export type HeroPick = { label: string; id: string };
export type Criterion = { n: string; t: string; d: string; w: number };

export type GuideSection = { heading?: string; paragraphs: string[] };

export type Guide = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
  body: GuideSection[];
  related?: string[]; // bonus ids referenced for internal links
};
