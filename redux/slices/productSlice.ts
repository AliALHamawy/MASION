import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    category: string;
    sortBy: string;
    priceRange: [number, number];
}

interface ProductState {
    items: Product[];
    filteredItems: Product[];
    filters: FilterState;
}

const initialState: ProductState = {
    items: [],
    filteredItems: [],
    filters: {
        category: "all",
        sortBy: "featured",
        priceRange: [0, 20000],
    },

}

const applyFilters = (state: ProductState) => {
    let result = [...state.items];

    if(state.filters.category !== "all") {
        result = result.filter(item => item.category === state.filters.category);
    }

    const [minPrice, maxPrice] = state.filters.priceRange;  
    result = result.filter(item => item.price >= minPrice && item.price <= maxPrice);

    switch(state.filters.sortBy) {
        case "price-low-to-high":
            result.sort((a, b) => a.price - b.price);
            break;
        case "price-high-to-low":
            result.sort((a, b) => b.price - a.price);
            break;
        case "rating":
            result.sort((a, b) => b.rating - a.rating);
            break;
        case "name-a-to-z":
            result.sort((a, b) => a.title.localeCompare(b.title));
            break;
            default:
            break;
    }

    state.filteredItems = result;

}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setInitialProducts: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload;
            applyFilters(state);
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.filters.category = action.payload;
            applyFilters(state);
        },
        setSortBy: (state, action: PayloadAction<string>) => {
            state.filters.sortBy = action.payload;
            applyFilters(state);
        },
        setPriceRange: (state, action: PayloadAction<[number, number]>) => {
            state.filters.priceRange = action.payload;
            applyFilters(state);
        },
    }
})

export const { setInitialProducts, setCategory, setSortBy, setPriceRange } = productSlice.actions;

export default productSlice.reducer;