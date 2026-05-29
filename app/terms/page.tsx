import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms that govern use of Bonus Radar Ghana. Information only — operators set the actual bonus terms.",
  path: "/terms",
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      crumb="Terms"
      path="/terms"
      title="Terms of use"
      sub="The terms that govern your use of this site."
      updated="May 2026"
      sections={[
        {
          heading: "Information only",
          paragraphs: [
            "Bonus Radar Ghana provides information for adults aged 18 and over. We do not operate gambling services, accept bets or process deposits. Content is for general information and does not constitute advice.",
          ],
        },
        {
          heading: "Operator terms prevail",
          paragraphs: [
            "All bonus terms — including wagering, maximum cashout, KYC and expiry — are set by the operators and can change at any time. The figures shown here are illustrative and may not reflect the current offer. Always confirm the live terms directly with the operator before claiming.",
          ],
        },
        {
          heading: "No warranty",
          paragraphs: [
            "We work to keep information accurate but make no warranty that it is complete or current. Availability and the legal status of online gambling vary by location — it is your responsibility to confirm both before playing.",
          ],
        },
        {
          heading: "Affiliate links",
          paragraphs: [
            "Some links are affiliate links from which we may earn a commission. This does not affect our ratings. See our affiliate disclosure for details.",
          ],
        },
      ]}
    />
  );
}
