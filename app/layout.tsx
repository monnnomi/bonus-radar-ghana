import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://bonus-radar-ghana.vercel.app";
const title = "Bonus Radar Ghana — Compare the Best Casino Bonuses";
const description =
  "Compare casino bonuses, promo codes, free spins and no-deposit offers in Ghana. Wagering, KYC and bonus terms checked before you play.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Bonus Radar Ghana",
  },
  description,
  keywords: [
    "casino bonuses Ghana",
    "no deposit bonus Ghana",
    "free spins Ghana",
    "promo codes",
    "mobile money casino",
    "wagering requirements",
  ],
  applicationName: "Bonus Radar Ghana",
  category: "gambling information",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName: "Bonus Radar Ghana",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
