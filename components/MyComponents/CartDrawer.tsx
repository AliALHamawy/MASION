"use client";

import { useAppdispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart, updateQuantity } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";
import { ShoppingBag02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Trash2, ArrowRight, ArrowLeft } from "lucide-react";

const CartDrawer = () => {
    const dispatch = useAppdispatch();
    const cartItems = useAppSelector((state: RootState) => state.cart.items);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (!isMounted) {
        return (
            <button aria-label="Cart" className="p-1 rounded-full text-muted-foreground hover:text-foreground transition-colors hover:bg-background relative">
                <HugeiconsIcon icon={ShoppingBag02Icon} size={20} />
            </button>
        );
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button
                    aria-label="Cart"
                    className="p-1 rounded-full text-muted-foreground hover:text-foreground transition-colors hover:bg-background relative cursor-pointer"
                >
                    {totalItemsCount > 0 && (
                        <span className="absolute -top-1 -left-1 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
                            {totalItemsCount}
                        </span>
                    )}
                    <HugeiconsIcon icon={ShoppingBag02Icon} size={20} />
                </button>
            </SheetTrigger>

            <SheetContent className="flex flex-col h-full w-full sm:max-w-md bg-white text-black p-0 border-l border-gray-200">
                {/* Header */}
                <SheetHeader className="p-6 border-b border-gray-200 text-left space-y-1">
                    <p className="text-[10px] tracking-wider text-gray-500 uppercase font-medium">
                        MAISON / REFINED LIVING
                    </p>
                    <div className="flex items-center justify-between">
                        <SheetTitle className="text-2xl font-bold tracking-tight text-black flex items-center gap-2">
                            Your Shopping Bag
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                                {totalItemsCount}
                            </span>
                        </SheetTitle>
                    </div>
                </SheetHeader>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-gray-500">
                            <div className="p-5 bg-gray-50 rounded-full border border-gray-100">
                                <HugeiconsIcon icon={ShoppingBag02Icon} size={36} className="opacity-40" />
                            </div>
                            <p className="text-base font-medium text-black">Your bag is empty</p>
                            <SheetClose asChild>
                                <Link
                                    href="/shop"
                                    className="mt-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                                >
                                    Start Shopping
                                </Link>
                            </SheetClose>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4 items-start pb-6 border-b border-gray-100 last:border-0">
                                <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col gap-1">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">CHANEL</p>
                                    <h4 className="font-medium text-sm text-black line-clamp-1">{item.title}</h4>
                                    <span className="text-sm font-semibold text-black">${item.price}</span>

                                    <div className="flex items-center justify-between mt-3">
                                        {/* Quantity Selector */}
                                        <div className="flex items-center border border-gray-300 rounded-full bg-white px-3 py-1 gap-3">
                                            <button
                                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                                className="text-gray-400 hover:text-black text-xs cursor-pointer"
                                            >
                                                –
                                            </button>
                                            <span className="text-xs font-semibold text-black">{item.quantity}</span>
                                            <button
                                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                                disabled={item.quantity >= item.stock}
                                                className={`text-xs ${item.quantity >= item.stock ? "opacity-30 cursor-not-allowed" : "text-gray-400 hover:text-black cursor-pointer"}`}
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Delete Icon */}
                                        <button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
                                            aria-label="Remove item"
                                        >
                                            <Trash2 size={16} strokeWidth={1.5} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer / Summary */}
                {cartItems.length > 0 && (
                    <SheetFooter className="p-6 border-t border-gray-200 flex flex-col gap-4 bg-white sm:space-x-0">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-black font-normal text-lg">Subtotal</span>
                            <span className="text-black font-bold text-xl">${subtotal.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-400 text-left">
                            Shipping & taxes calculated at checkout.
                        </p>

                        <div className="flex flex-col gap-3 w-full">
                            <SheetClose asChild>
                                <Link
                                    href="/checkout"
                                    className="w-full bg-black text-white py-3.5 rounded-full font-medium text-center hover:bg-gray-900 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                                >
                                    Proceed to Checkout <ArrowRight size={16} />
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <button className="w-full text-xs text-gray-500 hover:text-black py-2 transition-colors cursor-pointer flex items-center justify-center gap-1 font-medium">
                                    <ArrowLeft size={14} /> Continue Shopping
                                </button>
                            </SheetClose>
                        </div>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;