import Link from "next/link";

// Compliance microcopy shown on every content page (18+, terms, responsible
// gambling, affiliate disclosure). Keep visible per regulatory expectations.
export default function ComplianceNote({ className }: { className?: string }) {
  return (
    <p className={"font-mono text-[11px] tracking-[0.04em] text-dim [text-wrap:pretty] " + (className || "")}>
      18+ · Terms apply · Gamble responsibly ·{" "}
      <Link href="/affiliate-disclosure" className="underline decoration-white/20 hover:text-brand">
        We may earn affiliate commissions from some links
      </Link>
      .
    </p>
  );
}
