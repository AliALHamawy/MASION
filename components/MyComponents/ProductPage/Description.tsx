import { CheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


const Description = ({ product }: { product: any }) => {
    const discrip = [
        {
        id: 1,
        title: `From the ${product.brand} collection`,
    },
        {
        id: 2,
        title: "Selected for quality, character, and intention",
    },
        {
        id: 3,
        title: "Ships overnight",
    },
        {
        id: 4,
        title: "No return policy",
    },
    ]
    return (
        <div className="w-full py-10 grid grid-cols-1 md:grid-cols-2 items-start gap-3 gap-x-10">
            <div className="flex flex-col gp-2 w-full items-start">
                <h2 className="text-xl font-bold">A considered addition to your everyday.</h2>
                <p className="text-muted-foreground text-md">Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.</p>
            </div>
            <ul className="flex flex-col gap-2 text-muted-foreground">
                {discrip.map((item) => (
                    <li key={item.id} className="flex items-center gap-3 text-sm">
                        <HugeiconsIcon icon={CheckIcon} size={16} />
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Description