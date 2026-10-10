import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const ProductRating = () => {
    return (
        <div className="flex gap-3 order-3 items-start">
            <div className="flex gap">
                <HugeiconsIcon icon={StarIcon} className="text-transparent fill-primary size-5" />
                <HugeiconsIcon icon={StarIcon} className="text-transparent fill-primary size-5" />
                <HugeiconsIcon icon={StarIcon} className="text-transparent fill-primary size-5" />
                <HugeiconsIcon icon={StarIcon} className="text-transparent fill-primary size-5" />
                <HugeiconsIcon icon={StarIcon} className="text-transparent fill-muted-foreground size-5" />
            </div>
            <div className="flex items-center gap-2 text-sm">
                <span className="text-primary font-medium">4.5</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">1.2k reviews</span>
            </div>
        </div>
    );
};

export default ProductRating;
