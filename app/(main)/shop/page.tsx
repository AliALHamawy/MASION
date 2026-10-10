import { Suspense } from "react";
import ShopHero from "@/components/MyComponents/Shop/Hero";
import Products from "@/components/MyComponents/Shop/Products";

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