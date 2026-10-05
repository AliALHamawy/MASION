import ProductCard, { Product } from "@/components/MyComponents/Home/ProductCard";

interface ProductsResponse {
    products: Product[];
}

const getFeatureProducts = async (): Promise<Product[]> => {
    const res = await fetch('https://dummyjson.com/products?limit=6', {
        next: { revalidate: 3600 } // Revalidate every 60 seconds
    });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const data: ProductsResponse = await res.json();
    return data.products;
}

const FeatureProducts = async () => {
    const products = await getFeatureProducts();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default FeatureProducts