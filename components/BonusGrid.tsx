import type { Bonus } from "@/data/types";
import BonusCard from "@/components/BonusCard";

export default function BonusGrid({
  bonuses,
  emptyText,
}: {
  bonuses: Bonus[];
  emptyText?: string;
}) {
  if (!bonuses.length) {
    return (
      <div className="text-center py-12 px-5 text-muted border border-dashed border-white/15 rounded-[20px]">
        {emptyText || "No bonuses found."}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[18px]">
      {bonuses.map((b) => (
        <BonusCard key={b.id} b={b} />
      ))}
    </div>
  );
}
