import { BONUSES } from "@/data/bonuses";
import type { Bonus } from "@/data/types";

// Bonus Value Score tier colors (see DESIGN-HANDOFF: Score gauge).
export function scoreColor(s: number): string {
  if (s >= 8) return "#1fd98a"; // emerald (high)
  if (s >= 6.5) return "#efc15c"; // gold (mid)
  return "#6f8aa3"; // muted (low)
}

export const sortByScore = (a: Bonus, b: Bonus) => b.score - a.score;

// Ranked display order: active (real) offers first, then featured, then score.
// Keeps Betwinner pinned at the top and pushes "SOON" placeholders below.
export const sortBonuses = (a: Bonus, b: Bonus) =>
  Number(Boolean(b.active)) - Number(Boolean(a.active)) ||
  Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
  b.score - a.score;

// The single active flagship offer (Betwinner). Used for the "Best value" ribbon
// and anywhere a single real recommendation is needed.
export const activeBonus = BONUSES.find((b) => b.active);
export const bestId = activeBonus?.id ?? [...BONUSES].sort(sortByScore)[0].id;
