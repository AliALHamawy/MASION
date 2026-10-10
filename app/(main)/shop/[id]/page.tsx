import MyBreadcrumb from "@/components/MyComponents/ProductPage/MyBreadcrumb";
import ProductMain from "@/components/MyComponents/ProductPage/ProductMain";
import { Product } from "@/types/product"
import { notFound } from "next/navigation";

interface props {
    params: Promise<{ id: string }>
}

const gitSinglrProduct = async (id: string): Promise<Product | null> => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`, {
            next: { revalidate: 3600 }
        })
        if (!res.ok) return null
        const data: Product = await res.json()
        return data
    } catch (error) {
        return null
    }
}

const page = async ({ params }: props) => {
    const { id } = await params

    const product = await gitSinglrProduct(id)

    if (!product) {
        notFound()
    }
    return (
        <>
            <main className="max-w-7xl w-full mx-auto px-4 flex flex-col my-35 min-h-screen gap-10">
                <MyBreadcrumb product={product} />
                <ProductMain />
            </main>
        </>
    )
}

export default page