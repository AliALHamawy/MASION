"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { TShirtIcon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";

const heroImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
];

const Hero = () => {
    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="w-full h-screen sm:p-6 box-border overflow-hidden flex flex-col">

                <div className="relative flex-1 w-full sm:rounded-3xl overflow-hidden flex flex-col items-center justify-center space-y-5 shadow-xl">

                    {heroImages.map((imgSrc, index) => (
                        <div
                            key={imgSrc}
                            style={{ backgroundImage: `url('${imgSrc}')` }}
                            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out scale-110 ${index === bgIndex ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    ))}

                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] scale-110" />

                    <span className="relative z-10 inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 mb-8 animate-fade-up text-primary-foreground/80 font-bold">
                        <HugeiconsIcon icon={TShirtIcon} /> Autumn / Winter 2026
                    </span>

                    <h1 className="relative z-10 text-4xl md:text-8xl font-medium italic text-center text-transparent bg-clip-text bg-gradient-to-r from-foreground to-background">
                        <span className="text-[33px] md:text-[88px] not-italic font-black">
                            The Art of
                        </span>
                        <br /> Refined Living
                    </h1>

                    <p className="relative z-10 text-md md:text-lg max-w-2xl text-center font-bold text-white/80 px-4">
                        Curated essentials for the modern connoisseur. Discover pieces that
                        blend timeless craft with contemporary vision.
                    </p>

                    <div className="relative z-10 flex flex-row space-x-4  items-stratch justify-center">
                        <button className="group relative inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 active:scale-97">
                            <HugeiconsIcon
                                icon={ArrowRight02Icon}
                                className="transition-all duration-500 transform group-hover:translate-x-37 group-hover:text-white order-1 sm:order-0"
                            />

                            <span className="transition-all duration-500 transform group-hover:-translate-x-8">
                                Explore Collection
                            </span>
                        </button>
                        <button className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-full px-8 py-4 font-semibold text-white text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-97">
                            Our Craft
                        </button>
                    </div>

                    <div className="relative z-10 flex items-center justify-center gap-2 mt-4">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setBgIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-2.5 rounded-full transition-all duration-500 ease-in-out cursor-pointer ${index === bgIndex
                                    ? "w-8 bg-white"
                                    : "w-2.5 bg-white/40 hover:bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;