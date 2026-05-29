import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 font-mono text-[11.5px] tracking-[0.16em] uppercase text-brand mb-3.5
                 before:content-[''] before:w-[18px] before:h-px before:bg-brand/30"
    >
      {children}
    </span>
  );
}

export default function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-[620px] mb-9">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display font-semibold tracking-[-0.02em] leading-[1.08] text-[clamp(26px,4.6vw,40px)]">
        {title}
      </h2>
      {sub && <p className="mt-3.5 text-muted text-[16px] [text-wrap:pretty]">{sub}</p>}
    </div>
  );
}
