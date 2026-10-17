import type { Metadata } from "next";
import BrandStory from "@/components/MyComponents/Home/BrandStory";
import Hero from "@/components/MyComponents/Home/Hero";
import NewArrivals from "@/components/MyComponents/Home/NewArrivals";

export const metadata: Metadata = {
  title: "Refined Living",
  description:
    "Explore MAISON's curated essentials for the modern connoisseur, where timeless craft meets contemporary vision.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Refined Living",
    description:
      "Explore MAISON's curated essentials for the modern connoisseur.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
    <Hero />
    <NewArrivals />
    <BrandStory />
    </>
  );
}
