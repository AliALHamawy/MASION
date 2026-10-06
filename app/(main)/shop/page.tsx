import ShopHero from "@/components/MyComponents/Shop/Hero";
import Products from "@/components/MyComponents/Shop/Products";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <ShopHero />
        <Products />
      </div>
    </>
  )
}

export default page