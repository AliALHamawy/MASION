const ProductHeader = ({ product }: { product: any }) => {
    return (
        <>
            <h1 className="text-4xl font-bold order-2">{product.title}</h1>
            <span className="order-1">{product.brand} / {product.category}</span>
        </>
    );
};

export default ProductHeader;
