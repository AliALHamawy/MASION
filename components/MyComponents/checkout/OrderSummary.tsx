"use client";

import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/redux/slices/cartSlice";
import { CurrencyCode } from "@/redux/slices/currencySlice";
import { formatPrice } from "@/utils/formatPrice";

interface OrderSummaryProps {
    items: CartItem[];
    currency: CurrencyCode;
    shipping: number;
}

export default function OrderSummary({
    items,
    currency,
    shipping,
}: OrderSummaryProps) {
    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );
    const total = subtotal + shipping;
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <aside className="h-fit rounded-lg border border-border/80 bg-card p-5 shadow-sm lg:sticky lg:top-24">
            <div className="flex items-center justify-between border-b border-border pb-4">
                <h2 className="font-heading text-lg font-semibold">Order summary</h2>
                <span className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                    {itemCount}
                </span>
            </div>

            <div className="divide-y divide-border/70">
                {items.map((item) => (
                    <div className="flex gap-3 py-4" key={item.id}>
                        <div className="relative size-16 shrink-0 rounded-lg bg-muted">
                            <div className="absolute inset-0 overflow-hidden rounded-lg">
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    fill
                                    sizes="64px"
                                    className="object-cover"
                                />
                            </div>
                            <span className="absolute -right-2 -top-2 z-10 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                                {item.quantity}
                            </span>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                                MAISON / REFINED LIVING
                            </p>
                            <p className="mt-1 line-clamp-2 text-sm font-medium leading-5">
                                {item.title}
                            </p>
                            <p className="mt-1 text-xs font-medium text-muted-foreground">
                                {formatPrice(item.price, currency)} each
                            </p>
                        </div>
                        <p className="text-sm font-medium">
                            {formatPrice(item.price * item.quantity, currency)}
                        </p>
                    </div>
                ))}
            </div>

            <div className="space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between font-medium text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal, currency)}</span>
                </div>
                <div className="flex justify-between font-medium text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping, currency)}</span>
                </div>
                <div className="flex justify-between font-medium text-muted-foreground">
                    <span>Taxes (est.)</span>
                    <span>{formatPrice(0, currency)}</span>
                </div>
            </div>

            <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                <span className="font-heading text-xl font-semibold">Total</span>
                <span className="font-heading text-xl font-semibold">
                    {formatPrice(total, currency)}
                </span>
            </div>

            <button
                type="submit"
                form="checkout-form"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-0"
            >
                Complete order <span aria-hidden="true">→</span>
            </button>

            <p className="mt-4 text-center text-xs font-medium leading-5 text-muted-foreground">
                By completing your order, you agree to our terms. Shipping updates will be sent to your email.
            </p>
            <Link
                href="/shop"
                className="mt-4 block border-t border-border pt-4 text-center text-xs font-medium text-muted-foreground underline-offset-4 hover:underline"
            >
                ← Return to shopping
            </Link>
        </aside>
    );
}
