const ProductTags = ({ product }: { product: any }) => {
    const tags = Array.isArray(product?.tags)
        ? product.tags
        : [
            product?.category,
            product?.brand,
            product?.stock > 0 ? 'in stock' : 'out of stock',
        ].filter(Boolean);

    return (
        <ul className="flex gap-2 items-center order-6 uppercase text-[9px] text-muted-foreground font-normal text-center">
            {tags.map((tag: string, index: number) => (
                <li
                    key={`${tag}-${index}`}
                    className="bg-white text-primary p-1.25 rounded-md border border-border flex text-center items-center"
                >
                    {tag}
                </li>
            ))}
        </ul>
    );
};

export default ProductTags;
