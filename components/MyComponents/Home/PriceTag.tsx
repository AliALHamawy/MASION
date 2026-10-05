"use client";

import { useAppSelector } from "@/redux/hooks";
import { formatPrice } from "@/utils/formatPrice";

interface PriceTagProps {
    priceInUSD: number;
    className?: string;
}

const PriceTag = ({ priceInUSD, className }: PriceTagProps) => {
    const currentCurrency = useAppSelector(
        (state) => state.currency.currentCurrency
    );

    return (
        <span className={className} suppressHydrationWarning>
            {formatPrice(priceInUSD, currentCurrency)}
        </span>
    );
};

export default PriceTag;
