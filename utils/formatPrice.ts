import { CURRENCIES, CurrencyCode } from "@/redux/slices/currencySlice";

export const formatPrice = (priceInUSD: number, currencyCode: CurrencyCode): string => {
    const config = CURRENCIES[currencyCode] || CURRENCIES.USD;
    const convertedAmount = priceInUSD * config.rate;

    return new Intl.NumberFormat(config.locale, {
        style: "currency",
        currency: config.code,
        minimumFractionDigits: config.code === "JPY" ? 0 : 2, 
        maximumFractionDigits: config.code === "JPY" ? 0 : 2,
    }).format(convertedAmount);
}