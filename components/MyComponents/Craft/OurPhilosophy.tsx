const OurPhilosophy = () => {
    return (
        <>
            <div className="flex items-center justify-start bg-background min-h-screen p-4 py-30">
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto justify-between w-full gap-10">
                    <div className="flex flex-col col-span-1 md:col-span-2 w-full order-2 gap-4">
                        <h2 className="text-3xl sm:text-5xl font-normal sm:font-medium">At MAISON, we believe true luxury lies in thoughtful curation.
                            Every piece in our collection—from everyday lifestyle essentials to high-fashion garments—is selected with intention,
                            precision, and an unwavering commitment to enduring quality.</h2>
                        <p className="text-lg text-muted-foreground">Our modern multi-category destination brings together fashion,
                            accessories, fragrances, fine watches, eyewear, and home essentials through one considered point of view.</p>
                    </div>
                    <h3 className="col-span-1 text-muted-foreground/80 text-sm font-medium order-1">OUR PHILOSOPHY</h3>
                </div>
            </div>
        </>
    )
}

export default OurPhilosophy