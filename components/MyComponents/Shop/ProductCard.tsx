import Image from "next/image";
import { Product } from "@/types/product";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingCartAdd02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import AddToCartButton from "@/components/MyComponents/Shop/AddToCartButton";
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <div className="rounded-lg p-4 bg-card flex flex-col w-full h-full gap-3 shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-103 hover:-translate-y-3 group border-2 border-border ease-in-out">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg w-full h-full object-contain bg-muted"
          />
          {product.discountPercentage > 0 && (
            <span className="absolute top-3 left-3 bg-black text-background p-[4px] px-3 rounded-md text-[10px] font-bold shadow-lg">
              {Math.round(product.discountPercentage)}% off
            </span>
          )}
        </div>
        <div className="flex gap-2 w-full justify-between items-center pl-2 min-h-7">
          <h3 className="font-bold text-lg line-clamp-1 cursor-pointer hover:underline ">
            {product.title}
          </h3>
          <span className="bg-foreground text-white text-xs font-semibold px-3 py-1 rounded-full shrink-0">
            {product.price}$
          </span>
        </div>
        <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed pl-2 min-h-10">
          {product.description}
        </p>
        <div className="pl-2 flex gap-1 items-start w-full flex-wrap min-h-6">
          {product.tags && product.tags.length > 0 ? (
            product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full">
              {product.category}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 w-full mt-auto">
          <Link href={`/shop/${product.id}`} className="w-full">
            <button className="w-full text-white text-sm font-medium py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 bg-foreground duration-300 cursor-pointer hover:bg-foreground/90">
              View Details
            </button>
          </Link>
          <AddToCartButton product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
