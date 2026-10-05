import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type CurrencyCode = "USD" | "EUR" | "GBP" | "JPY";

export interface CurrencyConfig {
    code: CurrencyCode;
    symbol: string;
    rate: number;
    locale: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
    USD:{ code: "USD", symbol: "$", rate: 1, locale: "en-US" },
    EUR:{ code: "EUR", symbol: "€", rate: 0.92, locale: "de-DE" },
    GBP:{ code: "GBP", symbol: "£", rate: 0.79, locale: "en-GB" },
    JPY:{ code: "JPY", symbol: "¥", rate: 155.0, locale: "ja-JP" },
}
interface CurrencyState {
    currentCurrency: CurrencyCode;
}

const initialState: CurrencyState = {
    currentCurrency: "USD",
};


const CurrencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrency: (state, action: PayloadAction<CurrencyCode>) => {
            state.currentCurrency = action.payload;
            if(typeof window !== "undefined") {
                localStorage.setItem("app_currency", action.payload);
            }
        }
    }
})

export const {setCurrency} = CurrencySlice.actions;
export default CurrencySlice.reducer;