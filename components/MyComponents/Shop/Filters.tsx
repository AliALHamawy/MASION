"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { PreferenceHorizontalIcon } from "@hugeicons/core-free-icons";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useAppdispatch, useAppSelector } from "@/redux/hooks";
import { setCategory, setPriceRange, setSortBy } from "@/redux/slices/productSlice";

interface CategorySort {
    value: string;
    label: string;
}

const categories: CategorySort[] = [
    { value: "all", label: "All Products" },
    { value: "beauty", label: "Beauty" },
    { value: "fragrances", label: "Fragrances" },
    { value: "furniture", label: "Furniture" },
    { value: "groceries", label: "Groceries" },
    { value: "home-decoration", label: "Home Decoration" },
    { value: "kitchen-accessories", label: "Kitchen Accessories" },
    { value: "laptops", label: "Laptops" },
    { value: "mens-shirts", label: "Mens Shirts" },
    { value: "mens-shoes", label: "Mens Shoes" },
    { value: "mens-watches", label: "Mens Watches" },
    { value: "mobile-accessories", label: "Mobile Accessories" },
    { value: "motorcycle", label: "Motorcycle" },
    { value: "skin-care", label: "Skin Care" },
    { value: "smartphones", label: "Smartphones" },
    { value: "sports-accessories", label: "Sports Accessories" },
    { value: "sunglasses", label: "Sunglasses" },
    { value: "tablets", label: "Tablets" },
    { value: "tops", label: "Tops" },
    { value: "vehicle", label: "Vehicle" },
    { value: "womens-bags", label: "Womens Bags" },
    { value: "womens-dresses", label: "Womens Dresses" },
    { value: "womens-jewellery", label: "Womens Jewellery" },
    { value: "womens-shoes", label: "Womens Shoes" },
    { value: "womens-watches", label: "Womens Watches" },
];

const sortOptions: CategorySort[] = [
    { value: "featured", label: "Featured" },
    { value: "price-low-to-high", label: "Price: Low to High" },
    { value: "price-high-to-low", label: "Price: High to Low" },
    { value: "rating", label: "Top Rated" },
    { value: "name-a-to-z", label: "Name: A to Z" },
    { value: "name-z-to-a", label: "Name: Z to A" },
];

const Filters = () => {
    // const [value, setValue] = useState<number[]>([0, 20000]);
    const dispatch = useAppdispatch();
    const filters = useAppSelector((state) => state.products.filters);

    return (
        <>
            <div className="bg-white rounded-xl p-4 py-6 shadow-md flex flex-col gap-4 items-start w-full">
                <div className="flex items-center justify-start gap-2 pb-2 border-b border-border w-full">
                    <HugeiconsIcon
                        icon={PreferenceHorizontalIcon}
                        className="h-5 text-muted-foreground"
                    />
                    <span className="font-medium uppercase tracking-wide text-muted-foreground text-sm">
                        Filters
                    </span>
                </div>
                <div className="flex flex-col gap-2 w-full items-start">
                    <span className="font-medium text-sm pl-2">Category</span>
                    <Select
                        value={filters.category}
                        onValueChange={(val) => dispatch(setCategory(val))}>
                        <SelectTrigger className="bg-background w-full rounded-sm focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent
                            align="start"
                            position="popper"
                            className=" rounded-sm max-h-100 overflow-hidden"
                        >
                            {categories.map((category) => (
                                <SelectItem
                                    key={category.value}
                                    value={category.value}
                                    className="rounded-none"
                                >
                                    {category.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2 w-full items-start">
                    <span className="font-medium text-sm pl-2">Sort By</span>
                    <Select value={filters.sortBy}
                        onValueChange={(val) => dispatch(setSortBy(val))}>
                        <SelectTrigger className="bg-background w-full rounded-sm focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent
                            align="start"
                            position="popper"
                            className=" rounded-sm max-h-100 overflow-hidden"
                        >
                            {sortOptions.map((option) => (
                                <SelectItem
                                    key={option.value}
                                    value={option.value}
                                    className="rounded-none"
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="mx-auto grid w-full max-w-xs gap-3">
                    <div className="flex items-center justify-between gap-2">
                        <Label htmlFor="slider-demo-temperature">Price</Label>
                        <span className="text-sm text-muted-foreground">
                            ${filters.priceRange[0]} - ${filters.priceRange[1]}
                        </span>
                    </div>
                    <Slider
                        id="price-slider"
                        value={filters.priceRange}
                        onValueChange={(val) => dispatch(setPriceRange(val as [number, number]))}
                        min={0}
                        max={20000}
                        step={10}
                    />
                </div>
            </div>
        </>
    );
};

export default Filters;
