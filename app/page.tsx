import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ComplianceStrip from "@/components/sections/ComplianceStrip";
import BestFor from "@/components/sections/BestFor";
import BonusesSection from "@/components/sections/BonusesSection";
import HowWeRate from "@/components/sections/HowWeRate";
import Reviews from "@/components/sections/Reviews";
import ResponsibleGambling from "@/components/sections/ResponsibleGambling";
import Guides from "@/components/sections/Guides";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ComplianceStrip />
        <BestFor />
        <BonusesSection />
        <HowWeRate />
        <Reviews />
        <ResponsibleGambling />
        <Guides />
      </main>
      <Footer />
    </>
  );
}
