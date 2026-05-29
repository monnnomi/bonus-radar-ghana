import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Bonus Radar Ghana handles data: what we collect, how we use it, and the choices you have.",
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      crumb="Privacy Policy"
      path="/privacy-policy"
      title="Privacy policy"
      sub="What we collect, how we use it, and the choices you have."
      updated="May 2026"
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "Bonus Radar Ghana is an information site and does not require you to create an account. We may collect anonymous, aggregated analytics — such as which pages are viewed and which links are clicked — to improve the site.",
          ],
        },
        {
          heading: "How we use information",
          paragraphs: [
            "Aggregated analytics help us understand which bonuses and guides are useful so we can improve our content. We do not sell personal information.",
          ],
        },
        {
          heading: "Cookies and third parties",
          paragraphs: [
            "We may use cookies for analytics and to measure affiliate referrals. When you click through to an operator, that operator's own privacy policy and terms apply to any information you provide to them.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For any privacy question, contact us through the channels listed on the site. This policy may be updated from time to time; the date above reflects the latest revision.",
          ],
        },
      ]}
    />
  );
}
