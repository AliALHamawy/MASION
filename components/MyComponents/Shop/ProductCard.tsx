import Image from "next/image";

const ProductCard = () => {
  return (
    <>
      <div className="rounded-lg p-4 bg-card flex flex-col w-full gap-3 shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-103 hover:-translate-y-3 group border-2 border-border ease-in-out h-fit">
        <div className="relative w-f-ull h-auto overflow-hidden">
          <Image
            src="/images/image.png"
            alt="Product Image"
            width={500}
            height={500}
            className="rounded-lg w-full h-auto bg-muted"
          />
          <span className="absolute top-3 left-3 bg-black text-background p-[4px] px-3 rounded-md text-[10px] font-bold shadow-lg">
            10% off
          </span>
        </div>
        <div className="flex gap-2 w-fwll justify-between items-center pl-2">
          <h3 className="font-bold text-lg line-clamp-1 cursor-pointer hover:underline ">Product Name Nsfs Bsfs</h3>
          <span className="bg-foreground text-white text-xs font-semibold px-3 py-1 rounded-full shrink-0">19$</span>
        </div>
         <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed pl-2">
          A refined dsf ddsf piece — crafted for the modern MAISON collection with attention to material, form, and lasting quality.
        </p>
        <div className="pl-2 flex gap-1 items-center w-fwll">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full">
            Best Seller
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full">
            89 left
          </span>
        </div>
        <div className="flex items-center gap-2 w-full">
            <button className="w-full text-white text-sm font-medium py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 bg-foreground">View Details</button>
            <button className="w-12.5 text-white  font-medium p-2 rounded-full transition-colors flex items-center justify-center bg-foreground text-xl">+</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
