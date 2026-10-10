const ProductDescription = ({ product }: { product: any }) => {
    return (
        <p className="text-muted-foreground order-5 text-sm sm:text-md leading-7 tracking-wide">
            {product.description}
        </p>
    );
};

export default ProductDescription;
