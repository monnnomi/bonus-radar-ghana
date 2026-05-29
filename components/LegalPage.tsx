import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import ComplianceNote from "@/components/ComplianceNote";
import JsonLd from "@/components/JsonLd";
import { siteUrl } from "@/lib/site";

export type LegalSection = { heading: string; paragraphs: string[] };

export default function LegalPage({
  eyebrow,
  title,
  sub,
  crumb,
  path,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  crumb: string;
  path: string;
  updated?: string;
  sections: LegalSection[];
}) {
  return (
    <section className="py-[56px]">
      <div className="mx-auto max-w-[820px] px-5">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: crumb, href: path }]} />
        <div className="mt-6 mb-8">
          <PageHeader eyebrow={eyebrow} title={title} sub={sub} />
        </div>
        {updated && <p className="font-mono text-[11px] tracking-[0.06em] text-dim mb-8">Last updated: {updated}</p>}

        <div className="flex flex-col gap-7">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display font-semibold text-[20px] tracking-[-0.01em] mb-2.5">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-muted text-[15px] leading-relaxed [text-wrap:pretty] mb-3">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <ComplianceNote className="mt-10" />
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description: sub,
          url: `${siteUrl}${path}`,
          inLanguage: "en-GH",
        }}
      />
    </section>
  );
}
