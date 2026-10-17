import { Product } from "@/types/product";

export const API_BASE_URL = "https://dummyjson.com";

interface ProductsResponse {
    products: Product[];
    total: number;
}

export const PRODUCTS_PER_PAGE = 9;

export const getProduct = async (id: string | number): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch product "${id}"`);
    }

    return response.json();
};

export const getProductsByCategory = async (
    category: string,
    limit = 5,
): Promise<Product[]> => {
    const response = await fetch(
        `${API_BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}`,
        { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch products for category "${category}"`);
    }

    const data: ProductsResponse = await response.json();
    return data.products;
};

export interface ProductPageOptions {
    category?: string;
    sortBy?: string;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
}

export interface ProductPage {
    products: Product[];
    total: number;
    totalPages: number;
    page: number;
}

export const getProductPage = async ({
    category = "all",
    sortBy = "featured",
    minPrice = 0,
    maxPrice = 20000,
    page = 1,
}: ProductPageOptions = {}): Promise<ProductPage> => {
    const sortParams = sortBy === "price-low-to-high"
        ? "&sortBy=price&order=asc"
        : sortBy === "price-high-to-low"
            ? "&sortBy=price&order=desc"
            : sortBy === "rating"
                ? "&sortBy=rating&order=desc"
                : "";
    const canUseApiPagination = minPrice === 0 && maxPrice === 20000 &&
        !["name-a-to-z", "name-z-to-a"].includes(sortBy);
    const skip = (Math.max(page, 1) - 1) * PRODUCTS_PER_PAGE;
    const endpoint = category === "all"
        ? `${API_BASE_URL}/products?limit=${canUseApiPagination ? PRODUCTS_PER_PAGE : 0}&skip=${canUseApiPagination ? skip : 0}${sortParams}`
        : `${API_BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${canUseApiPagination ? PRODUCTS_PER_PAGE : 0}&skip=${canUseApiPagination ? skip : 0}${sortParams}`;
    const response = await fetch(endpoint, { next: { revalidate: 3600 } });

    if (!response.ok) {
        throw new Error(`Failed to fetch products for category "${category}"`);
    }

    const data: ProductsResponse = await response.json();
    const filteredProducts = canUseApiPagination
        ? data.products
        : data.products.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice,
        );

    switch (sortBy) {
        case "price-low-to-high":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case "price-high-to-low":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case "rating":
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case "name-a-to-z":
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "name-z-to-a":
            filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    const total = canUseApiPagination ? data.total : filteredProducts.length;
    const totalPages = Math.max(1, Math.ceil(total / PRODUCTS_PER_PAGE));
    const safePage = Math.min(Math.max(page, 1), totalPages);
    const start = (safePage - 1) * PRODUCTS_PER_PAGE;

    return {
        products: canUseApiPagination
            ? filteredProducts
            : filteredProducts.slice(start, start + PRODUCTS_PER_PAGE),
        total,
        totalPages,
        page: safePage,
    };
};
