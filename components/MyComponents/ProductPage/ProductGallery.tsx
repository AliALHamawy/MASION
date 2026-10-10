import { Lens } from "@/components/ui/lens";
import Image from "next/legacy/image";

interface ProductGalleryProps {
    imageSrc: string;
}

const ProductGallery = ({ imageSrc }: ProductGalleryProps) => {
    return (
        <div className="flex flex-col w-full ">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-card border border-border [&_div]:w-full [&_div]:h-full">
                <span className="absolute top-3 left-3 bg-black text-background p-1.5 px-4 rounded-md text-[10px] font-bold shadow-lg">
                    10% off
                </span>
                <Lens
                    zoomFactor={2}
                    lensSize={150}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={imageSrc}
                            alt="Product Image"
                            layout="fill"
                            priority
                            className="object-cover object-center"
                        />
                    </div>
                </Lens>
            </div>
            <div className="w-full justify-start items-center gap-3 h-[200px] overflow-x-auto overflow-y-hidden flex">
                <Image
                    src="/images/image.png"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="object-cover object-center rounded-lg bg-white"
                />
                <Image
                    src="/images/image.png"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="object-cover object-center rounded-lg bg-white"
                />
                <Image
                    src="/images/image.png"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="object-cover object-center rounded-lg bg-white"
                />
            </div>
        </div>
    );
};

export default ProductGallery;
