import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
    id: number;
    imgsrc: string;
    number: string;
    title: string;
    description: string;
}

const FeatuersCard = ({ id, imgsrc, number, title, description }: CardProps) => {
    return (
        <>
            <div className="grid grid-reverse grid-cols-1 md:grid-cols-2 gap-20 items-center" id={`feature-card-${id}`}>
                <div className={cn("flex w-full relative overflow-hidden", id % 2 === 0 && "md:order-2")}>
                    <Image src={imgsrc} alt="Featuers" width={800} height={450} className="w-full h-auto object-cover object-center hover:scale-103 transition-transform ease-in-out duration-300 min-h-[530px]" loading="lazy" />
                </div>
                <div className="w-full flex flex-col gap-3 items-start">
                    <span className="text-2xl text-muted-foreground italic">{number}</span>
                    <h3 className="text-4xl text-primary font-medium">{title}</h3>
                    <div className="h-px w-18 my-5 bg-primary" />
                    <p className="text-lg text-muted-foreground">{description}</p>
                </div>
            </div>
        </>
    )
}

export default FeatuersCard