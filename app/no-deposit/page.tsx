import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { CATEGORIES } from "@/data/categories";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: CATEGORIES["no-deposit"].metaTitle,
  description: CATEGORIES["no-deposit"].metaDescription,
  path: "/no-deposit",
});

export default function Page() {
  return <CategoryPage k="no-deposit" />;
}
