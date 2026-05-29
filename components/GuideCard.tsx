import Link from "next/link";
import type { Guide } from "@/data/types";

export default function GuideCard({ p }: { p: Guide }) {
  const href = `/guides/${p.slug}`;
  return (
    <article className="flex flex-col rounded-[20px] border border-white/10 bg-surface overflow-hidden transition hover:-translate-y-0.5 hover:border-brand/30">
      <Link href={href} className="thumb-bg aspect-video relative grid place-items-center border-b border-white/10">
        <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-md bg-ink/70 backdrop-blur border border-white/10 text-brand">
          {p.cat}
        </span>
        <span className="font-mono text-[11px] text-dim tracking-[0.08em]">[ article image ]</span>
      </Link>
      <div className="p-[18px] flex flex-col flex-1">
        <h3 className="font-display font-semibold text-[17px] leading-tight tracking-[-0.01em]">
          <Link href={href} className="transition hover:text-brand">
            {p.title}
          </Link>
        </h3>
        <p className="mt-2 text-[13.5px] text-muted flex-1 [text-wrap:pretty]">{p.excerpt}</p>
        <div className="mt-4 flex items-center gap-2.5 text-[12px] text-dim font-mono">
          <span>{p.date}</span>
          <span>·</span>
          <span>{p.read} read</span>
          <Link href={href} className="ml-auto text-brand font-semibold">
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
