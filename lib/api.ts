import { Product } from "@/types/product";

export const API_BASE_URL = "https://dummyjson.com";

interface ProductsResponse {
    products: Product[];
}

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
