import ProductCard from "@/components/MyComponents/Shop/ProductCard";
import { Product } from "@/types/product";
import { ShopPagination } from "@/components/MyComponents/Shop/Pagination";

interface ProductListProps {
    products: Product[];
    totalPages?: number;
    page?: number;
    query?: string;
}

const ProductList = ({ products, totalPages, page, query }: ProductListProps) => {
    if (products.length === 0) {
        return (
            <div className="col-span-full flex justify-center items-center py-20 text-muted-foreground">
                No products match your selected filters.
            </div>
        );
    }

    return (
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col gap-6">
            {/* شبكة المنتجات (9 كروت) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* مكون التنقل بين الصفحات */}
            <ShopPagination totalPages={totalPages} page={page} query={query} />
        </div>
    );
};

export default ProductList;