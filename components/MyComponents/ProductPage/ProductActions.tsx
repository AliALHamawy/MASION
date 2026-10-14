"use client";

import { useState } from "react";
import { ArrowRight02Icon, ShoppingCartAdd02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Product } from "@/types/product";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/slices/cartSlice";

const ProductActions = ({ product }: { product: Product }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const dispatch = useDispatch();
    const router = useRouter();

    const maxStock = product.stock || 10;

    const handleIncrement = () => {
        setQuantity(prevQuantity => (prevQuantity < maxStock ? prevQuantity + 1 : maxStock));
    }

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    }

    const handleAddToCart = () => {
        dispatch(addToCart({ product, quantity }));
    }

    const handleBuyNow = () => {
        dispatch(addToCart({ product, quantity }));
        router.push("/checkout");
    }

    return (
        <div className="border-y border-border pt-10 pb-6 flex w-full flex-col gap-8 order-7">
            <div className="w-full flex justify-between items-center">
                <span className="text-primary font-medium">Quantity</span>
                <div className="flex bg-white text-md rounded-lg items-center over-flow-hidden gap-3 font-medium border border-border">
                    <button className="text-gray-500 p-2 rounded-l-lg hover:bg-muted-foreground/30" onClick={handleDecrement}>-</button>
                    <span className="text-primary">{quantity}</span>
                    <button className="text-gray-500 p-2 rounded-r-lg hover:bg-muted-foreground/30" onClick={handleIncrement}>+</button>
                </div>
            </div>
            <div className="w-full flex items-center gap-3 sm:gap-5">
                <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary/90 w-full flex items-center text-center justify-center gap-2" onClick={handleAddToCart}>
                    <HugeiconsIcon icon={ShoppingCartAdd02Icon} size={18} /> Add to Cart</button>
                <button className="bg-muted-foreground text-white p-3 rounded-xl hover:bg-muted-foreground/90 w-full flex items-center text-center justify-center gap-2 group" onClick={handleBuyNow}>
                    Buy Now <HugeiconsIcon icon={ArrowRight02Icon} size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default ProductActions;
