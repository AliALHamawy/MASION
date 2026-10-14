"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice"; 
import { Product } from "@/types/product";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingCartAdd02Icon } from "@hugeicons/core-free-icons";

interface AddToCartButtonProps {
    product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToCart({ product, quantity: 1 }));
    };

    return (
        <button 
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className="w-11 text-white font-medium p-3 rounded-full transition-colors flex items-center justify-center bg-foreground text-xl duration-300 cursor-pointer hover:bg-foreground/90 shrink-0"
        >
            <HugeiconsIcon
                icon={ShoppingCartAdd02Icon}
                size={20}
                color="currentColor"
                strokeWidth={1.5}
            />
        </button>
    );
};

export default AddToCartButton;