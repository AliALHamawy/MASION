import ProductActions from "./ProductActions";
import ProductDescription from "./ProductDescription";
import ProductFeatures from "./ProductFeatures";
import ProductHeader from "./ProductHeader";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductTags from "./ProductTags";

const ProductInfo = ({ product }: { product: any }) => {
    return (
        <div className="flex flex-col w-full gap-7 pt-5">
            <ProductHeader product={product} />
            <ProductRating product={product} />
            <ProductPrice product={product} />
            <ProductDescription product={product} />
            <ProductTags product={product} />
            <ProductActions />
            <ProductFeatures />
        </div>
    );
};

export default ProductInfo;
