import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
    stock: number;
}

interface CartState {
    items: CartItem[];
}


const loadInitialCart = (): CartItem[] => {
    if (typeof window === "undefined") return [];
    try {
        const savedCart = localStorage.getItem("maison_cart");
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        return [];
    }
}

const initialState: CartState = {
    items: loadInitialCart(),
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (
            state,
            action: PayloadAction<{ product: Product, quantity: number }>
        ) => {
            const { product, quantity = 1 } = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail || product.images[0],
                    quantity,
                    stock: product.stock || 10,
                })
            }
            if (typeof window !== "undefined") {
                localStorage.setItem("maison_cart", JSON.stringify(state.items));
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            if (typeof window !== "undefined") {
                localStorage.setItem("maison_cart", JSON.stringify(state.items));
            }
        },
        updateQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity = Math.max(1, action.payload.quantity);
            }
            if (typeof window !== "undefined") {
                localStorage.setItem("maison_cart", JSON.stringify(state.items));
            }
        },
        clearCart: (state) => {
            state.items = [];
            if (typeof window !== "undefined") {
                localStorage.removeItem("maison_cart");
            }
        }
    }
})


export const { addToCart, removeFromCart, updateQuantity, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;