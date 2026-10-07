import Filters from "@/components/MyComponents/Shop/Filters";
import { Product } from "@/types/product";
import ProductList from "./ProductList";
const getProducts = async (): Promise<Product[]> => {
    const res = await fetch("https://dummyjson.com/products?limit=194",
        {
            next: { revalidate: 3600 }
        });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data.products;
}

const Products = async () => {
    const products = await getProducts();
    return (
        <>
            <div className="max-w-7xl w-full mx-auto min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <div>
                    <Filters />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <ProductList initialProducts={products} />
                </div>
            </div>
        </>
    )
}

export default Products