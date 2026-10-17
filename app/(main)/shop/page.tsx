import type { Metadata } from "next";
import { Suspense } from "react";
import ShopHero from "@/components/MyComponents/Shop/Hero";
import Products from "@/components/MyComponents/Shop/Products";

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

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <ShopHero />
        <Suspense fallback={<div className="min-h-screen w-full" />}>
          <Products />
        </Suspense>
      </div>
    </>
  )
}

export default page