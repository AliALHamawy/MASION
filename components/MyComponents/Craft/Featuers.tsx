import FeatuersCard from "@/components/MyComponents/Craft/FeatuersCard";

interface FeatuersProps {
    id: number;
    imgsrc: string;
    number: string;
    title: string;
    description: string;
}

export const cardsData: FeatuersProps[] = [
    {
        id: 1,
        imgsrc: "/images/craft1.jpg",
        number: "01",
        title: "Curated Sourcing",
        description: "We partner with top-tier artisans and global creators to source fine textiles, rare ingredients, and sustainable metals across all our categories."
    },
    {
        id: 2,
        imgsrc: "/images/craft2.jpg",
        number: "02",
        title: "Precision & Design",
        description: "From intricate watch movements and tailored apparel to delicate fragrances, every item undergoes rigorous standards of design and craftsmanship."
    },
    {
        id: 3,
        imgsrc: "/images/craft3.jpg",
        number: "03",
        title: "The Final Selection",
        description: "Our collections are meticulously inspected to ensure they blend functionality, modern minimalism, and timeless aesthetic value for daily living."
    }
];

const Featuers = () => {
    return (
        <>
            <div className="flex flex-col items-center min-h-screen w-full py-20 px-4">
                <div className="max-w-5xl mx-auto w-full flex flex-col gap-10">
                    <div className="border-b border-border py-4 flex items-center justify-between w-full">
                        <h2 className="text-xs sm:text-sm uppercase font-normal text-muted-foreground/70 sm:font-medium">Inside the atelier</h2>
                        <p className="text-xs sm:text-sm uppercase font-normal text-muted-foreground/70 sm:font-medium">Materials / Method / Meaning</p>
                    </div>
                    <div className="flex flex-col w-full gap-15">
                        {cardsData.map((card) => (
                            <FeatuersCard
                                key={card.id}
                                id={card.id}
                                imgsrc={card.imgsrc}
                                number={card.number}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featuers