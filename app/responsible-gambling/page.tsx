import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Responsible Gambling",
  description:
    "Gambling is for adults aged 18 and over. Play responsibly, set limits before you start, and find support if gambling stops being fun.",
  path: "/responsible-gambling",
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Play it safe"
      crumb="Responsible Gambling"
      path="/responsible-gambling"
      title="Gambling is for adults only."
      sub="Play responsibly. Never gamble with money you cannot afford to lose. Bonuses are entertainment, not income."
      sections={[
        {
          heading: "18+ only",
          paragraphs: [
            "Online gambling is restricted to adults aged 18 and over. Bonus Radar Ghana provides information only — we do not operate gambling services and we do not accept bets or deposits.",
          ],
        },
        {
          heading: "Set limits before you start",
          paragraphs: [
            "Decide a deposit and time budget in advance and stick to it. Licensed operators offer tools to set deposit, loss and session limits — use them. Treat any bonus as entertainment, not as a way to make money.",
          ],
        },
        {
          heading: "Know the warning signs",
          paragraphs: [
            "Chasing losses, gambling with money meant for essentials, or hiding how much you play are signs to stop. If gambling stops being fun, take a break.",
          ],
        },
        {
          heading: "Need support?",
          paragraphs: [
            "Self-exclusion and cooling-off tools are available with every licensed operator. If you or someone you know needs help, contact a local support service and consider self-excluding from gambling sites.",
            "Always confirm the current terms, country availability and the legal status of online gambling in your location before claiming any offer.",
          ],
        },
      ]}
    />
  );
}
