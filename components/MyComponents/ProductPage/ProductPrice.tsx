"use client";

import { Product } from "@/types/product";
import { useAppSelector } from "@/redux/hooks";
import { formatPrice } from "@/utils/formatPrice";

const ProductPrice = ({ product }: { product: Product }) => {
    const currentCurrency = useAppSelector(
        (state) => state.currency.currentCurrency
    );

    return (
        <div className="flex items-center gap-4 order-4">
            <div className="bg-primary text-2xl p-3 px-5 rounded-2xl text-white font-bold">
                {formatPrice(product.price, currentCurrency)}
            </div>
        </div>
    );
};

export default ProductPrice;
