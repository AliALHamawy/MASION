import Filters from "@/components/MyComponents/Shop/Filters";
import { Product } from "@/types/product";
import ProductList from "@/components/MyComponents/Shop/ProductList";
import { ProductPage } from "@/lib/api";

const Products = ({ productPage, query }: { productPage: ProductPage; query: string }) => {
    return (
        <>
            <div className="max-w-7xl w-full mx-auto min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <div className="md:sticky md:top-26 md:self-start">
                    <Filters />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
                    <ProductList
                        products={productPage.products}
                        totalPages={productPage.totalPages}
                        page={productPage.page}
                        query={query}
                    />
                </div>
            </div>
        </>
    )
}

export default Products