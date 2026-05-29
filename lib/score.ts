import { BONUSES } from "@/data/bonuses";
import type { Bonus } from "@/data/types";

// Bonus Value Score tier colors (see DESIGN-HANDOFF: Score gauge).
export function scoreColor(s: number): string {
  if (s >= 8) return "#1fd98a"; // emerald (high)
  if (s >= 6.5) return "#efc15c"; // gold (mid)
  return "#6f8aa3"; // muted (low)
}

export const sortByScore = (a: Bonus, b: Bonus) => b.score - a.score;

// Ranked display order: featured (flagship) operators first, then by score.
export const sortBonuses = (a: Bonus, b: Bonus) =>
  Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.score - a.score;

// The single highest-scoring bonus gets the "Best value" ribbon.
export const bestId = [...BONUSES].sort(sortByScore)[0].id;
