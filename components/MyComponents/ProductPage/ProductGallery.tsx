"use client";

import { useState } from "react";
import { Lens } from "@/components/ui/lens";
import Image from "next/legacy/image";

interface ProductGalleryProps {
    images: string[];
    discountPercentage?: number;
}

const ProductGallery = ({ images = [], discountPercentage = 0 }: ProductGalleryProps) => {
    // تحديد الصورة النشطة حالياً للعرض في الـ Lens
    const [selectedImage, setSelectedImage] = useState(images[0] || "/images/image.png");

    return (
        <div className="flex flex-col w-full gap-4">
            {/* الصورة الرئيسية مع تأثير الـ Lens */}
            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-card border border-border [&_div]:w-full [&_div]:h-full">
                {discountPercentage > 0 && (
                    <span className="absolute top-3 left-3 bg-black text-background p-1.5 px-4 rounded-md text-[10px] font-bold shadow-lg z-10">
                        {Math.round(discountPercentage)}% off
                    </span>
                )}
                <Lens
                    zoomFactor={2}
                    lensSize={150}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={selectedImage}
                            alt="Product Image"
                            layout="fill"
                            priority
                            className="object-cover object-center"
                        />
                    </div>
                </Lens>
            </div>

            {/* الصور المصغرة الديناميكية (Thumbnails) */}
            <div className="w-full justify-start items-center gap-3 h-[120px] overflow-x-auto overflow-y-hidden flex">
                {images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-[100px] h-[100px] flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${selectedImage === img ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            layout="fill"
                            className="object-cover object-center bg-white"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;