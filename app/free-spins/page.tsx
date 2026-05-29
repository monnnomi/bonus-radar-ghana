import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { CATEGORIES } from "@/data/categories";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: CATEGORIES["free-spins"].metaTitle,
  description: CATEGORIES["free-spins"].metaDescription,
  path: "/free-spins",
});

export default function Page() {
  return <CategoryPage k="free-spins" />;
}
