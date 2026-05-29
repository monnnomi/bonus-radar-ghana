import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { CATEGORIES } from "@/data/categories";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: CATEGORIES["promo-codes"].metaTitle,
  description: CATEGORIES["promo-codes"].metaDescription,
  path: "/promo-codes",
});

export default function Page() {
  return <CategoryPage k="promo-codes" />;
}
