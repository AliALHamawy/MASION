"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { TShirtIcon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";

const HERO_IMAGES: string[] = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 5000)
    }, [])

    return (
        <>
            <div className="min-h-screen h-screen w-full box-border p-0 sm:p-6">
                <div className="h-full w-full sm:rounded-3xl bg-[url('/images/hero3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center space-y-5">
                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 mb-8 animate-fade-up text-primary-foreground/80 font-bold"><HugeiconsIcon icon={TShirtIcon} /> Autumn / Winter 2026</span>
                    <h1 className="text-4xl md:text-8xl font-medium italic text-center text-primary-foreground"><span className="text-[33px] md:text-[88px] not-italic font-black text-foreground">The Art of</span><br /> Refined Living</h1>
                    <p className="text-md md:text-lg max-w-2xl text-center font-bold text-white/80">Curated essentials for the modern connoisseur. Discover pieces that blend timeless craft with contemporary vision.</p>
                    <div className="flex flex-col items-stretch sm:flex-row  space-x-4 space-y-4 sm:space-y-0 sm:items-center">
                        <button className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl">Explore Collection <HugeiconsIcon icon={ArrowRight02Icon} className="transition-transform duration-300 group-hover:translate-x-[4px]" /></button>
                        <button className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-full px-8 py-4 font-semibold text-white text-base transition-all duration-300 hover:scale-105">Our Craft</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero