import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'

const CraftHero = () => {
    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
            {/* الصورة الرئيسية كخلفية متجاوبة بالكامل */}
            <Image
                src="/images/craft-hero.jpg"
                alt="Craft Hero"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-6 md:px-12">
                <div className="max-w-7xl w-full flex flex-col items-start gap-6 text-white z-10">

                    <Link
                        href="/"
                        className="group text-xs uppercase tracking-[0.2em] opacity-80 hover:opacity-100 transition-opacity gap-2 mb-2 flex items-center"
                    >
                        <HugeiconsIcon icon={ArrowLeft02Icon} className="group-hover:translate-x-[-2px] transition-transform" size={21} />
                        Back to Maison
                    </Link>

                    <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/80 font-medium">
                        Curated Excellence
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal italic leading-[1.05] tracking-tight">
                        Savoir-faire:<br />
                        The art of modern<br />
                        curating.
                    </h1>

                    <p className="text-sm md:text-base text-white/80 max-w-lg font-light leading-relaxed mt-2">
                        Discover the philosophy behind MAISON—where timeless design, exceptional quality, and everyday luxury meet.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default CraftHero