import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import currencyReducer from "./slices/currencySlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        currency: currencyReducer,
        products: productReducer,
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch