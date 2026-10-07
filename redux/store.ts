import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import currencyReducer from "./slices/currencySlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        currency: currencyReducer,
        products: productReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch