import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const ProductRating = ({ product }: { product: any }) => {
    const filledStars = Math.round(product.rating || 0);

    return (
        <div className="flex gap-3 order-3 items-start">
            <div className="flex gap">
                {[...Array(5)].map((_, index) => (
                    <HugeiconsIcon
                        key={index}
                        icon={StarIcon}
                        className={`size-5 ${index < filledStars ? "fill-primary text-primary" : "fill-muted-foreground text-muted-foreground"}`}
                    />
                ))}
            </div>
            <div className="flex items-center gap-2 text-sm">
                <span className="text-primary font-medium">{product.rating}</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">{product.reviewCount} reviews</span>
            </div>
        </div>
    );
};

export default ProductRating;
