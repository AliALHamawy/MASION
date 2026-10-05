"use client";
import Link from "next/link";

import { HugeiconsIcon } from '@hugeicons/react';
import { Globe02Icon } from '@hugeicons/core-free-icons';
import { useAppdispatch, useAppSelector } from "@/redux/hooks";
import { CURRENCIES, setCurrency } from "@/redux/slices/currencySlice";

const Footer = () => {
    const dispatch = useAppdispatch();
    const currentCurrency = useAppSelector((state) => state.currency.currentCurrency);
    
    const currencyList = Object.values(CURRENCIES)

    return (
        <>
            <footer className="bg-muted text-muted-foreground py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="container mx-auto w-full sm:px-0 grid grid-col-2 md:grid-col-3 lg:grid-cols-6 justify-between items-start gap-4">
                        <div className="flex flex-col gap-2 items-start col-span-2">
                            <span className="text-primary text-2xl font-bold tracking-tight">MAISON</span>
                            <p className="text-sm text-muted-foreground max-w-xs">Curated essentials for the modern connoisseur. Timeless craft meets contemporary vision.</p>
                        </div>
                        <div className="flex flex-col gap-4 items-start col-span">
                            <span className="text-primary text-lg font-bold tracking-tight">Shop</span>
                            <div className="flex flex-col gap-3">
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">New Arrivals</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Best Sellers</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Sale</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Gift Cards</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start col-span">
                            <span className="text-primary text-lg font-bold tracking-tight">About</span>
                            <div className="flex flex-col gap-3">
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Our Story</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Sustainability</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Careers</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Press</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start col-span">
                            <span className="text-primary text-lg font-bold tracking-tight">Help</span>
                            <div className="flex flex-col gap-3">
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">FAQ</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Shipping</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Returns</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Size Guide</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start col-span">
                            <span className="text-primary text-lg font-bold tracking-tight">Legal</span>
                            <div className="flex flex-col gap-3">
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Terms of Service</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Privacy Policy</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Cookie Policy</Link>
                                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Accessibility</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full justify-between border-t-1 border-border mt-10 pt-8 items-start sm:items-center gap-4">
                        <div className="flex gap-5 items-center">
                            <HugeiconsIcon
                                icon={Globe02Icon}
                                size={20}
                            />
                            <div className="flex gap-4 items-center">
                                {currencyList.map((item) => {
                                    const isActive = currentCurrency === item.code;
                                    return (
                                        <button
                                            key={item.code}
                                            onClick={() => dispatch(setCurrency(item.code))}
                                            className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all duration-300 active:scale-95 cursor-pointer select-none ${isActive
                                                    ? "bg-black text-white shadow-md"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-black/10"
                                                }`}
                                        >
                                            {item.code} {item.symbol}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">© 2026 MAISON. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer