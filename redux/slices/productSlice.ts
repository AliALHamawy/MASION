import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

interface FilterState {
    category: string;
    sortBy: string;
    priceRange: [number, number];
    page: number;
}

interface ProductState {
    items: Product[];
    filteredItems: Product[];
    paginatedItems: Product[];
    totalPages: number; 
    filters: FilterState;
}

const ITEMS_PER_PAGE = 9;

const initialState: ProductState = {
    items: [],
    filteredItems: [],
    paginatedItems: [],
    totalPages: 1,
    filters: {
        category: "all",
        sortBy: "featured",
        priceRange: [0, 20000],
        page: 1,
    },
};

const applyFiltersAndPagination = (state: ProductState) => {
    let result = [...state.items];

    if (state.filters.category !== "all") {
        result = result.filter((item) => item.category === state.filters.category);
    }

    const [minPrice, maxPrice] = state.filters.priceRange;
    result = result.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
    );

    switch (state.filters.sortBy) {
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
        case "name-z-to-a":
            result.sort((a, b) => b.title.localeCompare(a.title));
            break;
        default:
            break;
    }

    state.filteredItems = result;

    state.totalPages = Math.ceil(result.length / ITEMS_PER_PAGE) || 1;

    if (state.filters.page > state.totalPages) {
        state.filters.page = 1;
    }

    const startIndex = (state.filters.page - 1) * ITEMS_PER_PAGE;
    state.paginatedItems = result.slice(startIndex, startIndex + ITEMS_PER_PAGE);
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setInitialProducts: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload;
            applyFiltersAndPagination(state);
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.filters.category = action.payload;
            state.filters.page = 1; 
            applyFiltersAndPagination(state);
        },
        setSortBy: (state, action: PayloadAction<string>) => {
            state.filters.sortBy = action.payload;
            applyFiltersAndPagination(state);
        },
        setPriceRange: (state, action: PayloadAction<[number, number]>) => {
            state.filters.priceRange = action.payload;
            state.filters.page = 1; 
            applyFiltersAndPagination(state);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.filters.page = action.payload;
            applyFiltersAndPagination(state);
        },
        setFiltersFromURL: (state, action:PayloadAction<{
            category?: string;
            sortBy?: string;
            priceRange?: [number, number];
            page?: number;
        }>) => {
            action.payload.category !== undefined && (state.filters.category = action.payload.category);
            action.payload.sortBy !== undefined && (state.filters.sortBy = action.payload.sortBy);
            action.payload.priceRange !== undefined && (state.filters.priceRange = action.payload.priceRange);
            action.payload.page !== undefined && (state.filters.page = action.payload.page);
            applyFiltersAndPagination(state);
        }
    },
});

export const {
    setInitialProducts,
    setCategory,
    setSortBy,
    setPriceRange,
    setPage,
    setFiltersFromURL,
} = productSlice.actions;

export default productSlice.reducer;