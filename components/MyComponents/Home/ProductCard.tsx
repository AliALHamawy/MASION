import { HugeiconsIcon } from '@hugeicons/react';
import { PlusIcon } from '@hugeicons/core-free-icons';
import Image from 'next/legacy/image';
import PriceTag from './PriceTag';

export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const originalPriceUSD = product.discountPercentage > 0
    ? product.price / (1 - product.discountPercentage / 100)
    : null;

    return (
        <>
            <div className="relative p-2 rounded-xl bg-white group hover:translate-y-[-5px] transition-all duration-300 ease-in-out shadow-md hover:shadow-xl">
                <div className="relative overflow-hidden rounded-xl">

                    <Image src={product.thumbnail} alt={product.title} width={500} height={500} className="w-full h-auto rounded-xl relative transition-all duration-400 ease-in-out group-hover:scale-103 group-hover:rotate-2 grayscale-100 group-hover:grayscale-0" />
                    <div className="absolute inset-x-0 bottom-0 pt-10 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-[1px] text-white flex flex-col justify-end gap-1.5absolute width-full button-0">
                        <div className="w-full flex flex-col gap-2">
                            <span className="text-white/70 text-[11px] font-medium uppercase tracking-wider">{product.category}</span>
                            <h4 className="text-white text-sm font-semibold leading-snug line-clamp-1">{product.title}</h4>
                            <div className="flex w-full justify-between items-end">
                                <div className="flex flex-col gap-2">
                                    <PriceTag
                                        priceInUSD={product.price}
                                        className="text-white text-lg font-bold"
                                    />

                                    {originalPriceUSD && (
                                        <PriceTag
                                            priceInUSD={originalPriceUSD}
                                            className="text-white/50 text-xs line-through"
                                        />
                                    )}
                                </div>
                                <button className="rounded-full px-4 py-2 text-xs font-bold transition-all active:scale-95 flex items-center gap-1 shadow-md bg-white text-black hover:bg-neutral-200">
                                    <HugeiconsIcon icon={PlusIcon} size={16} />
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard