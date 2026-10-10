"use client";

import { useAppdispatch, useAppSelector } from "@/redux/hooks";
import { setFiltersFromURL } from "@/redux/slices/productSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export const useSyncFilters = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useAppdispatch();
    const filters = useAppSelector((state) => state.products.filters);

    const isInitialRender = useRef(true);

    // 1. قراءة الـ URL عند التجميع الأول وعكسه في Redux
    useEffect(() => {
        const category = searchParams.get("category") || "all";
        const sortBy = searchParams.get("sortBy") || "featured";
        const minPrice = searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : 0;
        const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : 20000;
        const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

        dispatch(
            setFiltersFromURL({
                category,
                sortBy,
                priceRange: [minPrice, maxPrice],
                page,
            })
        );
    }, []);

    // 2. تحديث الـ URL فور تغيير القيم بـ Redux
    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }

        const params = new URLSearchParams();

        if (filters.category && filters.category !== "all") {
            params.set("category", filters.category);
        }
        if (filters.sortBy && filters.sortBy !== "featured") {
            params.set("sortBy", filters.sortBy);
        }
        if (filters.priceRange[0] > 0) {
            params.set("minPrice", filters.priceRange[0].toString());
        }
        if (filters.priceRange[1] < 20000) {
            params.set("maxPrice", filters.priceRange[1].toString());
        }
        if (filters.page > 1) {
            params.set("page", filters.page.toString());
        }

        const queryString = params.toString();
        const query = queryString ? `?${queryString}` : "";

        router.replace(`${pathname}${query}`, { scroll: false });
    }, [filters, pathname, router]);
};