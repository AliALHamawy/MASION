import { ContainerTruck02Icon, ShieldCheckIcon, ShoppingBag02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const ProductFeatures = () => {
    return (
        <div className="w-full flex justify-between items-start sm:items-center p-2 py-4 order-8 flex-col sm:flex-row gap-5 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="flex items-start text-xs text-primary gap-3 pb-4 sm:pb-0 w-full sm:w-auto">
                <HugeiconsIcon icon={ContainerTruck02Icon} size={22} />
                <div className="flex flex-col items-start gap-2">
                    <span className="">Shipping</span>
                    <span className="text-muted-foreground">Ships overnight</span>
                </div>
            </div>
            <div className="flex items-start text-xs text-primary gap-3 pb-4 sm:pb-0 w-full sm:w-auto">
                <HugeiconsIcon icon={ShieldCheckIcon} size={22} />
                <div className="flex flex-col items-start gap-2">
                    <span className="">Authentic selection</span>
                    <span className="text-muted-foreground">Curated by MAISON</span>
                </div>
            </div>
            <div className="flex items-start text-xs text-primary gap-3 pb-4 sm:pb-0 w-full sm:w-auto">
                <HugeiconsIcon icon={ShoppingBag02Icon} size={22} />
                <div className="flex flex-col items-start gap-2">
                    <span className="">Availability</span>
                    <span className="text-muted-foreground">58 pieces in stock</span>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;
