
import Link from "next/link";
import { type Dispatch } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search02Icon } from "@hugeicons/core-free-icons";
import { usePathname } from 'next/navigation';

const MobileMenu = ({ isMobileMenuOpen, dispatch, closeMobileMenu }: { isMobileMenuOpen: boolean; dispatch: Dispatch<any>; closeMobileMenu: () => void }) => {
    const pathName = usePathname();
    const getLinkClass = (path: string) => {
        return `${pathName === path
            ? "text-foreground font-semibold transition-colors "
            : "text-muted-foreground hover:text-foreground transition-colors"} `;
    }

    return (
        <>
            <div
                className={`md:hidden bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-xl rounded-2xl p-5 mt-2 flex flex-col gap-4 text-neutral-800 font-medium animate-fade-up duration-400 ease-in-out ${isMobileMenuOpen
                    ? "max-h-75 opacity-100 pt-5 mt-4 border-t border-border/40"
                    : "max-h-0 opacity-0 pt-0 mt-0"
                    }`}
            >
                <div className="flex flex-col gap-3 font-medium text-sm text-foreground/90">
                    <Link
                        href={"/"}
                        onClick={() => dispatch(closeMobileMenu())}
                        className={getLinkClass("/")}
                    >
                        Home
                    </Link>
                    <Link
                        href={"/shop"}
                        onClick={() => dispatch(closeMobileMenu())}
                        className={getLinkClass("/shop")}
                    >
                        Shop
                    </Link>
                    <Link
                        href={"/craft"}
                        onClick={() => dispatch(closeMobileMenu())}
                        className={getLinkClass("/craft")}
                    >
                        Craft
                    </Link>

                    <div className="relative mt-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-9 pr-4 py-2 rounded-xl bg-background/60 border border-border/60 text-xs focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                        <HugeiconsIcon
                            icon={Search02Icon}
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu