import { ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import ProductCard from "@/components/MyComponents/Shop/ProductCard";
import { Product } from "@/types/product";
import { getProductsByCategory } from "@/lib/api";

interface SimilarProductsProps {
    category: string;
    currentProductId: number;
}

const SimilerProducts = async ({
    category,
    currentProductId,
}: SimilarProductsProps) => {
    const products = await getProductsByCategory(category);
    const similarProducts = products
        .filter((product) => product.id !== currentProductId)
        .slice(0, 4);

    return (
        <>
        <div className="flex flex-col w-full items-start">
            <div className="w-full flex justify-between items-center">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                        The considered edit
                    </p>
                    <h2 className="text-2xl font-semibold text-foreground">You may also like</h2>
                </div>
                <Link href={`/shop?category=${category}`} className="text-sm text-muted-foreground flex items-center gap-2 group hover:text-foreground transition-colors duration-300 ease-in-out">View All <HugeiconsIcon className="group-hover:translate-x-1 transition-transform " icon={ArrowRight} size={16} /></Link>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start mt-4">
                {similarProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        </>
    )
}

export default SimilerProducts