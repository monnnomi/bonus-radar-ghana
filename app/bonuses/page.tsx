import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { CATEGORIES } from "@/data/categories";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: CATEGORIES.bonuses.metaTitle,
  description: CATEGORIES.bonuses.metaDescription,
  path: "/bonuses",
});

export default function Page() {
  return <CategoryPage k="bonuses" showPromo />;
}
