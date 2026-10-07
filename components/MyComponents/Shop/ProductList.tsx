"use client";

import { useEffect } from "react";
import ProductCard from "@/components/MyComponents/Shop/ProductCard";
import { Product } from "@/types/product";
import { useAppdispatch, useAppSelector } from "@/redux/hooks";
import { setInitialProducts } from "@/redux/slices/productSlice";


interface ProductListProps {
    initialProducts: Product[];
}

const ProductList = ({ initialProducts }: ProductListProps) => {
    const dispatch = useAppdispatch();
    const filteredProducts = useAppSelector((state) => state.products.filteredItems);

    useEffect(() => {
        dispatch(setInitialProducts(initialProducts));
    }, [initialProducts, dispatch]);

    if (filteredProducts.length === 0) {
        return (
            <div className="col-span-full flex justify-center items-center py-20 text-muted-foreground">
                No products match your selected filters.
            </div>
        );
    }

    return (
        <>
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    );
};

export default ProductList;