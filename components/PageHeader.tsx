import { Eyebrow } from "@/components/ui/SectionHead";

export default function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-[760px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[clamp(30px,5.2vw,48px)]">
        {title}
      </h1>
      {sub && <p className="mt-4 text-muted text-[clamp(15px,2vw,18px)] [text-wrap:pretty]">{sub}</p>}
    </div>
  );
}
