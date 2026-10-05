import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import currencyReducer from "./slices/currencySlice";


export const store = configureStore({
    reducer: {
        ui: uiReducer,
        currency: currencyReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch