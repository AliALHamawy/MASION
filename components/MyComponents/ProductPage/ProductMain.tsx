import ProductGallery from "@/components/MyComponents/ProductPage/ProductGallery";
import ProductInfo from "@/components/MyComponents/ProductPage/ProductInfo";
import { Product } from "@/types/product";

interface ProductMainProps {
    product: Product;
}

const ProductMain = ({ product }: ProductMainProps) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 items-start">
            <ProductGallery 
                images={product.images} 
                productTitle={product.title}
                discountPercentage={product.discountPercentage} 
            />
            
            <ProductInfo product={product} />
        </section>
    );
};

export default ProductMain;