"use client";

import { useEffect } from "react";
import ProductCard from "@/components/MyComponents/Shop/ProductCard";
import { Product } from "@/types/product";
import { ShopPagination } from "./Pagination";
import { useAppdispatch, useAppSelector } from "@/redux/hooks";
import { setInitialProducts } from "@/redux/slices/productSlice";
import { useSyncFilters } from "@/hooks/useSyncFilters";

interface ProductListProps {
    initialProducts: Product[];
}

const ProductList = ({ initialProducts }: ProductListProps) => {
    const dispatch = useAppdispatch();

    useSyncFilters(); 

    const paginatedProducts = useAppSelector(
        (state) => state.products.paginatedItems
    );

    useEffect(() => {
        dispatch(setInitialProducts(initialProducts));
    }, [initialProducts, dispatch]);

    if (paginatedProducts.length === 0) {
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
                {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* مكون التنقل بين الصفحات */}
            <ShopPagination />
        </div>
    );
};

export default ProductList;