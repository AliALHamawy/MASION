const ProductTags = () => {
    return (
        <ul className="flex gap-2 items-center order-6 uppercase text-[9px] text-muted-foreground font-normal text-center">
            <li className="bg-white text-primary p-1.25 rounded-md border border-border flex text-center items-center">fragrances</li>
            <li className="bg-white text-primary p-1.25 rounded-md border border-border flex text-center items-center">perfume</li>
            <li className="bg-white text-primary p-1.25 rounded-md border border-border flex text-center items-center">in stock</li>
        </ul>
    );
};

export default ProductTags;
