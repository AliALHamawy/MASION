"use client"

import { HugeiconsIcon } from '@hugeicons/react';
import { Menu01Icon, Search02Icon, ShoppingBag02Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import Link from "next/link";
import { useAppdispatch, useAppSelector } from "@/redux/hooks"; // استخدم الـ Typed Hooks الخاصة بك
import { closeMobileMenu, setNavbarVisibility, toggleMobileMenu } from "@/redux/slices/uiSlice";
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


const Navbar = () => {
    const pathName = usePathname();
    const dispatch = useAppdispatch()
    const isNavbarVisible = useAppSelector((state) => state.ui.isNavbarVisible);
    const isMobileMenuOpen = useAppSelector((state) => state.ui.isMopileMenueOpen);
    const [lastScrollY, setLastScrollY] = useState(0);

    const getLinkClass = (path: string) => {
        return `${pathName === path
            ? "text-foreground font-semibold"
            : "text-muted-foreground"} `;
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (isMobileMenuOpen) return;

            if (currentScrollY < 10) {
                dispatch(setNavbarVisibility(true));
            } else if (currentScrollY > lastScrollY) {
                dispatch(setNavbarVisibility(false));
            } else {
                dispatch(setNavbarVisibility(true));
            }
            setLastScrollY(currentScrollY);
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isMobileMenuOpen, dispatch]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 p-3 transition-transform duration-300 ease-in-out ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="container mx-auto mt-5 px-6 py-4 max-w-7xl flex items-center justify-between bg-muted/70 backdrop-blur-[6px] rounded-2xl shadow-sm">
                    <span className="inline-flex gap-2 items-center"><p className="font-extrabold">MASION</p><p className="hidden md:block text-xs text-muted-foreground/50 pl-2 border-l border-muted-background font-medium">Refined Living</p></span>
                    <ul className="hidden md:flex space-x-4 items-center">
                        <Link href={"/"} className={cn("text-muted-foreground transition-colors hover:text-foreground", getLinkClass("/"))}>Home</Link>
                        <Link href={"/shop"} className={cn("text-muted-foreground transition-colors hover:text-foreground", getLinkClass("/shop"))}>Shop</Link>
                        <Link href={"/craft"} className={cn("text-muted-foreground transition-colors hover:text-foreground", getLinkClass("/craft"))}>Craft</Link>
                    </ul>
                    <div className="flex gap-3 items-center">
                        <button aria-label="Search" className="hidden md:inline p-1 rounded-full text-muted-foreground hover:text-foreground transition-colors hover:bg-background">
                            <HugeiconsIcon icon={Search02Icon} size={20} />
                        </button>
                        <button aria-label="Cart" className="p-1 rounded-full text-muted-foreground hover:text-foreground transition-colors hover:bg-background">
                            <HugeiconsIcon icon={ShoppingBag02Icon} size={20} />
                        </button>
                        <button aria-label="Cart" className=" md:hidden p-1 rounded-full text-muted-foreground hover:text-foreground transition-colors bg-background" onClick={() => dispatch(toggleMobileMenu())}>
                            <HugeiconsIcon icon={isMobileMenuOpen ? Cancel01Icon : Menu01Icon} size={20} />
                        </button>
                    </div>
                </div>
                <MobileMenu isMobileMenuOpen={isMobileMenuOpen} dispatch={dispatch} closeMobileMenu={closeMobileMenu} />
            </nav>
        </>
    )
}

export default Navbar