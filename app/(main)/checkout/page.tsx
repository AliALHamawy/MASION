"use client";

import Link from "next/link";
import { useState } from "react";
import { useAppdispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/slices/cartSlice";
import CheckoutForm, {
    CheckoutFormData,
} from "@/components/MyComponents/CheckOut/CheckoutForm";
import OrderSummary from "@/components/MyComponents/CheckOut/OrderSummary";

const page = () => {
    const dispatch = useAppdispatch();
    const items = useAppSelector((state) => state.cart.items);
    const currency = useAppSelector((state) => state.currency.currentCurrency);
    const [completed, setCompleted] = useState(false);
    const [shippingMethod, setShippingMethod] =
        useState<CheckoutFormData["shippingMethod"]>("standard");

    const shipping = shippingMethod === "express" ? 15 : 0;
    const completeOrder = (_data?: CheckoutFormData) => {
        dispatch(clearCart());
        setCompleted(true);
    };

    if (items.length === 0 && !completed) {
        return (
            <main className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-5 pb-20 pt-32">
                <div className="max-w-md text-center">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                        MAISON / CHECKOUT
                    </p>
                    <h1 className="mt-4 font-heading text-3xl font-semibold">
                        Your bag is waiting.
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Add something considered to your cart before heading to checkout.
                    </p>
                    <Link
                        href="/shop"
                        className="mt-7 inline-flex rounded-md bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground"
                    >
                        Return to shop <span className="ml-2">→</span>
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <>
            <main className="mx-auto w-[calc(100%-40px)] max-w-6xl px-0 pb-20 pt-32 sm:pt-36">
                <header className="mb-10 max-w-2xl">
                    <p className="text-[10px] text-muted-foreground">
                        Shopping bag <span className="px-2">›</span> Checkout
                    </p>
                    <p className="mt-6 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                        MAISON / REFINED LIVING
                    </p>
                    <div className="mt-1 flex items-start justify-between gap-5">
                        <div>
                            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                Checkout
                            </h1>
                            <p className="mt-2 text-xs text-muted-foreground">
                                A few details. A little closer to home.
                            </p>
                        </div>
                        <span className="hidden rounded-md border border-border px-3 py-2 text-[9px] text-muted-foreground sm:block">
                            ⌾ Demo checkout
                        </span>
                    </div>
                </header>

                <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
                    <div className="lg:col-span-7">
                        <CheckoutForm
                            onSubmit={completeOrder}
                            onShippingMethodChange={setShippingMethod}
                        />
                    </div>
                    <div className="lg:col-span-5 lg:self-stretch">
                        <OrderSummary
                            items={items}
                            currency={currency}
                            shipping={shipping}
                        />
                    </div>
                </div>
            </main>
            {completed && <SuccessDialog onClose={() => setCompleted(false)} />}
        </>
    );
};

function SuccessDialog({ onClose }: { onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/30 p-5 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-success-title"
        >
            <div className="w-full max-w-sm rounded-lg bg-card p-7 text-center shadow-2xl">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
                    ✓
                </div>
                <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Order received
                </p>
                <h2
                    id="order-success-title"
                    className="mt-2 font-heading text-2xl font-semibold"
                >
                    Thank you for your order.
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Your demo order has been placed. We’ll send shipping updates to your inbox.
                </p>
                <Link
                    href="/shop"
                    onClick={onClose}
                    className="mt-6 inline-flex rounded-md bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground"
                >
                    Return to shop <span className="ml-2">→</span>
                </Link>
            </div>
        </div>
    );
}

export default page;
