const ProductPrice = () => {
    return (
        <div className="flex items-center gap-4 order-4">
            <div className="bg-primary text-2xl p-3 px-5 rounded-2xl text-white font-bold">$129.99</div>
            <div className="text-2xl rounded-2xl text-muted-foreground font-normal line-through">$155.70</div>
            <div className="text-xs rounded-2xl text-muted-foreground font-normal ">Save $25.71</div>
        </div>
    );
};

export default ProductPrice;
