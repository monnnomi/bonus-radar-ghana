import type { Metadata } from "next";

export const siteUrl = "https://bonus-radar-ghana.vercel.app";
export const siteName = "Bonus Radar Ghana";

// Per-route metadata helper. The bare `title` is combined with the
// "%s · Bonus Radar Ghana" template defined in app/layout.tsx.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GH",
      url,
      siteName,
      title: `${title} · ${siteName}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${siteName}`,
      description,
    },
  };
}
