import { BONUSES } from "@/data/bonuses";
import { sortByScore } from "@/lib/score";
import SectionHead from "@/components/ui/SectionHead";
import ReviewCard from "@/components/ReviewCard";

export default function Reviews() {
  return (
    <section id="reviews" className="py-[72px]">
      <div className="mx-auto max-w-site px-5">
        <SectionHead
          eyebrow="Operator reviews"
          title="Casino reviews for Ghana"
          sub="What each operator is best for, how you pay in and out, and where the bonus stands today."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...BONUSES].sort(sortByScore).map((b) => (
            <ReviewCard key={b.id} b={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
