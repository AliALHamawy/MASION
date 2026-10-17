import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

interface ProductsResponse {
  products: Array<{ id: number }>;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/shop`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/craft`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  let productPages: MetadataRoute.Sitemap = [];
  try {
    const response = await fetch("https://dummyjson.com/products?limit=0", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to generate sitemap: ${response.status}`);
    }

    const data: ProductsResponse = await response.json();
    productPages = data.products.map((product) => ({
      url: `${siteUrl}/shop/${product.id}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Unable to load product URLs for sitemap", error);
  }

  return [...staticPages, ...productPages];
}
