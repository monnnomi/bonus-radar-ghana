import { scoreColor } from "@/lib/score";

// Radial 0–10 Bonus Value Score gauge.
export default function ScoreRing({
  score,
  size = 58,
}: {
  score: number;
  size?: number;
}) {
  const r = size / 2 - 5;
  const c = 2 * Math.PI * r;
  const col = scoreColor(score);
  return (
    <div
      className="relative flex-none"
      style={{ width: size, height: size }}
      title={`Bonus Value Score ${score}/10`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1d2835" strokeWidth="5" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={col}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - score / 10)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <b className="font-mono font-bold text-[17px] leading-none" style={{ color: col }}>
          {score}
        </b>
        <small className="font-mono text-[8px] text-dim mt-[1px]">/ 10</small>
      </div>
    </div>
  );
}
