import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/redux/slices/uiSlice";
import currencyReducer from "@/redux/slices/currencySlice";
import productReducer from "@/redux/slices/productSlice";
import cartReducer from "@/redux/slices/cartSlice";

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