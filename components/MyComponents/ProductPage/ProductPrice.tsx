const ProductPrice = ({ product }: { product: any }) => {
    return (
        <div className="flex items-center gap-4 order-4">
            <div className="bg-primary text-2xl p-3 px-5 rounded-2xl text-white font-bold">${product.price}</div>
            {product.originalPrice && (
                <>
                    <div className="text-2xl rounded-2xl text-muted-foreground font-normal line-through">${product.originalPrice}</div>
                    <div className="text-xs rounded-2xl text-muted-foreground font-normal ">Save ${product.originalPrice - product.price}</div>
                </>
            )}
        </div>
    );
};

export default ProductPrice;
