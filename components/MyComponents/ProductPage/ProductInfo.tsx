import ProductActions from "./ProductActions";
import ProductDescription from "./ProductDescription";
import ProductFeatures from "./ProductFeatures";
import ProductHeader from "./ProductHeader";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductTags from "./ProductTags";

const ProductInfo = () => {
    return (
        <div className="flex flex-col w-full gap-7 pt-5">
            <ProductHeader />
            <ProductRating />
            <ProductPrice />
            <ProductDescription />
            <ProductTags />
            <ProductActions />
            <ProductFeatures />
        </div>
    );
};

export default ProductInfo;
