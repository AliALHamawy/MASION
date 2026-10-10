import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

interface ProductMainProps {
    imageSrc?: string;
}

const ProductMain = ({ imageSrc = "/images/image.png" }: ProductMainProps) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 items-start">
            <ProductGallery imageSrc={imageSrc} />
            <ProductInfo />
        </section>
    );
};

export default ProductMain;