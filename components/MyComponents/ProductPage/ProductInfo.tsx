import ProductActions from "@/components/MyComponents/ProductPage/ProductActions";
import ProductDescription from "@/components/MyComponents/ProductPage/ProductDescription";
import ProductFeatures from "@/components/MyComponents/ProductPage/ProductFeatures";
import ProductHeader from "@/components/MyComponents/ProductPage/ProductHeader";
import ProductPrice from "@/components/MyComponents/ProductPage/ProductPrice";
import ProductRating from "@/components/MyComponents/ProductPage/ProductRating";
import ProductTags from "@/components/MyComponents/ProductPage/ProductTags";

const ProductInfo = ({ product }: { product: any }) => {
    return (
        <div className="flex flex-col w-full gap-7 pt-5">
            <ProductHeader product={product} />
            <ProductRating product={product} />
            <ProductPrice product={product} />
            <ProductDescription product={product} />
            <ProductTags product={product} />
            <ProductActions product={product} />
            <ProductFeatures />
        </div>
    );
};

export default ProductInfo;
