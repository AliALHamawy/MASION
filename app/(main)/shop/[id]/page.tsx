import type { Metadata } from "next";
import MyBreadcrumb from "@/components/MyComponents/ProductPage/MyBreadcrumb";
import ProductMain from "@/components/MyComponents/ProductPage/ProductMain";
import Feature from "@/components/MyComponents/ProductPage/Feature";
import SimilerProducts from "@/components/MyComponents/ProductPage/SimilerProducts";
import { Product } from "@/types/product"
import { getProduct } from "@/lib/api";
import { notFound } from "next/navigation";

interface props {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: props,
): Promise<Metadata> {
    const { id } = await params;
    const product = await getProduct(id);

    return {
        title: product.title,
        description: product.description,
        keywords: [
            product.title,
            product.category,
            ...(product.tags ?? []),
            "MAISON",
        ],
        alternates: {
            canonical: `/shop/${product.id}`,
        },
        openGraph: {
            type: "website",
            title: product.title,
            description: product.description,
            url: `/shop/${product.id}`,
            images: [
                {
                    url: product.thumbnail,
                    alt: product.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: product.title,
            description: product.description,
            images: [product.thumbnail],
        },
    };
}

const gitSinglrProduct = async (id: string): Promise<Product | null> => {
    try {
        return await getProduct(id);
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
                <ProductMain product={product} />
                <Feature product={product}/>
                <SimilerProducts category={product.category} currentProductId={product.id} />
            </main>
        </>
    )
}

export default page