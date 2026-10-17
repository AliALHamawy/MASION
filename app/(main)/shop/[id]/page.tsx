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
    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: product.images,
        sku: product.sku,
        brand: {
            "@type": "Brand",
            name: product.brand || "MAISON",
        },
        offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: product.price,
            availability: product.stock > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            url: `${process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "https://masion-store.vercel.app"}/shop/${product.id}`,
        },
    };
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Shop", item: "/shop" },
            { "@type": "ListItem", position: 3, name: product.title },
        ],
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
            />
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