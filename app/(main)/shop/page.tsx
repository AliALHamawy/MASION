import type { Metadata } from "next";
import ShopHero from "@/components/MyComponents/Shop/Hero";
import Products from "@/components/MyComponents/Shop/Products";
import { getProductPage } from "@/lib/api";

export const metadata: Metadata = {
  title: "Shop the Collection",
  description:
    "Browse MAISON's curated collection of refined essentials, contemporary fashion, and timeless pieces.",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Shop the Collection",
    description:
      "Browse MAISON's curated collection of refined essentials and timeless pieces.",
    url: "/shop",
  },
};

interface ShopPageProps {
  searchParams: Promise<{
    category?: string;
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
  }>;
}

const page = async ({ searchParams }: ShopPageProps) => {
  const params = await searchParams;
  const productPage = await getProductPage({
    category: params.category,
    sortBy: params.sort,
    minPrice: Number(params.minPrice) || 0,
    maxPrice: Number(params.maxPrice) || 20000,
    page: Number(params.page) || 1,
  });

  return (
    <>
      <div className="min-h-screen w-full">
        <ShopHero />
        <Products
          productPage={productPage}
          query={Object.entries(params)
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
            .join("&")}
        />
      </div>
    </>
  )
}

export default page