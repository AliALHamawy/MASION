import Image from "next/legacy/image";

const BrandStory = () => {
    return (
        <>

            <div className="min-h-screen h-full w-full flex items-center px-4 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-17">
                    <div className="left flex flex-col gap-4">
                        <h2 className="text-neutral-400 text-sm font-semibold tracking-widest uppercase mb-3">Brand Story</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-primary">Crafted with <br /><span className="font-medium">Uncompromising</span><br />Precision</h3>
                        <p>For over two decades, MAISON has pursued a single ideal: to create objects of extraordinary quality that endure.
                            We partner with the finest ateliers across the world, combining heritage techniques with modern innovation.
                            Every stitch, every surface, every detail is an act of devotion to the craft — a refusal to compromise on what matters most.
                        </p>
                        <div className="border-t-1 border-border w-full p-3 flex gap-3 sm:gap-5">
                            <div className="flex flex-col gap-2">
                                <span className="text-[12px] sm:text-sm font-bold text-primary">100%</span>
                                <span className="text-[12px] sm:text-sm text-muted-foreground">Sustainable</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[12px] sm:text-sm font-bold text-primary">Hand-Finished</span>
                                <span className="text-[12px] sm:text-sm text-muted-foreground">by Master Artisans</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[12px] sm:text-sm font-bold text-primary">Express Global</span>
                                <span className="text-[12px] sm:text-sm text-muted-foreground">Shipping in 90+ Countries</span>
                            </div>
                        </div>
                    </div>
                    <div className="right relative w-full rounded-xl overflow-hidden min-h-62 sm:min-h-96">
                        <Image src="/images/craft.jpg" alt="Brand Story" layout="fill" objectFit="cover" className="object-cover object-center w-full h-full rounded-xl" loading="lazy" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandStory