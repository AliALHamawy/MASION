"use client"

import { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";
import Specifications from "./Specifications";
import { cn } from "@/lib/utils";
interface Filters {
    id: number;
    title: string;
    section: string;
}

const filters: Filters[] = [
    {
        id: 1,
        title: "Description",
        section: "description"
    },
    {
        id: 2,
        title: "Specifications",
        section: "specifications"
    },
    {
        id: 3,
        title: "Reviews",
        section: "reviews"
    }
];

const Feature = ({ product }: { product: any }) => {
    const [section, setSection] = useState("description");
    return (
        <>
            <div className="w-full flex flex-col items-start border-b border-border">
                <div className="border-b border-border w-full flex gap-4 items-center">
                    {filters.map((filter) => (

                        <button className={cn("flex flex-col group items-start uppercase text-sm text-muted-foreground transition-colors duration-300 hover:text-primary cursor-pointer", section === filter.section && "text-primary")} key={filter.id} onClick={() => setSection(filter.section)}>
                            {filter.title} {filter.title === "Reviews" && "(3)"}
                            <div className={cn("h-1 w-0 bg-primary group-hover:w-full transition-normal duration-300 ease-in-out rounded-xs mt-1", section === filter.section && "w-full")}></div>
                        </button>
                    ))}
                </div>
                
                {section === "reviews" && <Reviews />}
                {section === "specifications" && <Specifications product={product} />}
                {section === "description" && <Description />}
            </div>
        </>
    )
}

export default Feature