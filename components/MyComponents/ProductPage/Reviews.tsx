import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


const Reviews = ({product}: {product: any}) => {    

    return (
        <>
            <div className="w-full py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
                {product.reviews.map((review: any, index: number) => (

                    <div className="flex flex-col items-start justify-start gap-4 border-l border-border pl-2" key={index}>
                    <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, index) => (
                            <HugeiconsIcon
                            key={index}
                            icon={StarIcon}
                            className={`size-4 ${index < review.rating ? "fill-primary text-primary" : "fill-muted-foreground text-muted-foreground"}`}
                            />
                        ))}
                    </div>
                        <p className="text-sm font-normal text-muted-foreground">{review.comment}</p>
                        <span className="text-sm font-medium text-primary">{review.reviewerName}</span>
                </div>
                    ))}
            </div>
        </>
    )
}

export default Reviews