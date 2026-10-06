import Image from "next/image";


const ShopHero = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto min-h-100 p-4 flex flex-col justify-center items-start gap-4">
                <h1 className="text-4xl font-bold text-primary">Welcome to Our Shop</h1>
                <p className="text-lg text-muted-foreground max-w-xl">Explore our full catalog across all categories — each piece selected for material, form, and intention.</p>
            </section>
        </>
    )
}

export default ShopHero