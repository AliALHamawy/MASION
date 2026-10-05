import Link from "next/link";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import FeatureCatigoryCard from "./FeatureCatigoryCard";

interface FeatureCatigorysProps {
    id: number;
    imgsrc: string;
    title: string;
    category: string;
    link: URL | string;
}

const catigorys: FeatureCatigorysProps[] = [
    {
        id: 1,
        imgsrc: "/images/FashionImage.jpg",
        title: "Apparel & Tailoring",
        category: "fashion",
        link: "/shop/"
    },
    {
        id: 2,
        imgsrc: "/images/AccessoriesImage.jpg",
        title: "Watches & Horology",
        category: "accessories",
        link: "/shop/"
    },
    {
        id: 3,
        imgsrc: "/images/FragrancesImage.jpg",
        title: "Fragrance & Lifestyle",
        category: "fragrance",
        link: "/shop/"
    }
]

const FeatureCatigorys = () => {
    return (
        <>
            <div className="w-full p-4 py-20 flex items-center">
                <div className="max-w-5xl mx-auto w-full flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 items-end gap-4 w-full">
                        <div className="sm:col-span-2 flex flex-col gap-4">
                            <span className="text-xm text-muted-foreground font-medium tracking-wider">The complete MAISON edit</span>
                            <h2 className="text-5xl font-bold">Discover the result of our curation.</h2>
                        </div>
                        <p className="text-muted-foreground ">Explore our full catalog across all categories.</p>
                        <Link href="/shop" className="group text-sm text-muted-foreground hover:text-primary  font-medium tracking-wide hover:underline flex items-center transition-transform duration-300 ease-in-out">Explore the collection <HugeiconsIcon icon={ArrowRight02Icon} className="group-hover:translate-x-2 transition-transform duration-300 ease-in-out"/></Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
                        {catigorys.map((catigory) => (
                            <FeatureCatigoryCard key={catigory.id} {...catigory} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureCatigorys