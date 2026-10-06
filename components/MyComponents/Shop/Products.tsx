import ProductCard from "@/components/MyComponents/Shop/ProductCard";
import Filters from "@/components/MyComponents/Shop/Filters";

const Products = () => {
    return (
        <>
            <div className="max-w-7xl w-full mx-auto min-h-screen grid grid-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                <div>
                    <Filters />
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default Products