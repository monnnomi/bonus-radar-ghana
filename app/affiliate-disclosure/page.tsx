import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Affiliate Disclosure",
  description:
    "How Bonus Radar Ghana makes money: we may earn affiliate commissions from some links. This does not affect our ratings.",
  path: "/affiliate-disclosure",
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Transparency"
      crumb="Affiliate Disclosure"
      path="/affiliate-disclosure"
      title="Affiliate disclosure"
      sub="How we make money — and why it does not change how we rate bonuses."
      sections={[
        {
          heading: "How we earn",
          paragraphs: [
            "We may earn affiliate commissions from some of the links on this site. If you click through to an operator and sign up, we may receive a fee at no extra cost to you.",
          ],
        },
        {
          heading: "It does not affect our ratings",
          paragraphs: [
            "Our Bonus Value Score is calculated from the same weighted factors for every operator — wagering, deposit requirement, max cashout, KYC clarity, expiry, country availability and real bonus value. Commission arrangements do not change a score or a ranking.",
          ],
        },
        {
          heading: "Terms can change",
          paragraphs: [
            "Bonus availability can change and depends on operator terms, KYC, payment methods and local regulations. Always confirm the current terms directly with the operator before claiming any offer.",
          ],
        },
      ]}
    />
  );
}
