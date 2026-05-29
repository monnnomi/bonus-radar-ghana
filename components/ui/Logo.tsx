import type { Bonus } from "@/data/types";

// Styled-initials placeholder logo. Replace with licensed SVG/PNG in production.
export default function Logo({ b, cls }: { b: Bonus; cls?: string }) {
  return (
    <div
      className={
        "grid place-items-center font-display font-bold rounded-xl border border-white/10 " +
        (cls || "w-[46px] h-[46px] text-[17px]")
      }
      style={{ background: b.logoBg, color: b.logoColor }}
    >
      {b.initials}
    </div>
  );
}
