import Hero from "@/components/sections/Hero";
import ComplianceStrip from "@/components/sections/ComplianceStrip";
import BestFor from "@/components/sections/BestFor";
import BonusesSection from "@/components/sections/BonusesSection";
import HowWeRate from "@/components/sections/HowWeRate";
import Reviews from "@/components/sections/Reviews";
import ResponsibleGambling from "@/components/sections/ResponsibleGambling";
import Guides from "@/components/sections/Guides";
import JsonLd from "@/components/JsonLd";
import { siteName, siteUrl } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <ComplianceStrip />
      <BestFor />
      <BonusesSection />
      <HowWeRate />
      <Reviews />
      <ResponsibleGambling />
      <Guides />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName,
          url: siteUrl,
          description:
            "Compare casino bonuses, promo codes, free spins and no-deposit offers in Ghana, ranked by real withdrawable value.",
          inLanguage: "en-GH",
        }}
      />
    </>
  );
}
