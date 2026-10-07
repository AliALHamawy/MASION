"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppdispatch, useAppSelector } from "@/redux/hooks";
import { setPage } from "@/redux/slices/productSlice";

export function ShopPagination() {
    const dispatch = useAppdispatch();
    const page = useAppSelector((state) => state.products.filters.page);
    const totalPages = useAppSelector((state) => state.products.totalPages);

    if (totalPages <= 1) return null;

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            dispatch(setPage(newPage));
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // دالة لتوليد أرقام الصفحات والنقاط (Ellipsis)
    const generatePageNumbers = () => {
        const pages: (number | "ellipsis")[] = [];

        // إذا كان عدد الصفحات قليل (مثلاً 5 أو أقل) اعرض كل الصفحات
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }

        // دائماً نعرض الصفحة الأولى
        pages.push(1);

        // إضافة النقاط الأولى إذا كنا بعيدين عن البداية
        if (page > 3) {
            pages.push("ellipsis");
        }

        // تحديد أرقام الصفحات المجاورة للصفحة الحالية
        const startPage = Math.max(2, page - 1);
        const endPage = Math.min(totalPages - 1, page + 1);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // إضافة النقاط الثانية إذا كنا بعيدين عن النهاية
        if (page < totalPages - 2) {
            pages.push("ellipsis");
        }

        // دائماً نعرض الصفحة الأخيرة
        pages.push(totalPages);

        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="w-full flex justify-center py-6 col-span-full">
            <Pagination>
                <PaginationContent>
                    {/* زر الصفحة السابقة */}
                    <PaginationItem>
                        <PaginationPrevious
                            className="cursor-pointer"
                            onClick={() => handlePageChange(page - 1)}
                        />
                    </PaginationItem>

                    {/* عرض الصفحات والنقاط */}
                    {pageNumbers.map((p, index) => {
                        if (p === "ellipsis") {
                            return (
                                <PaginationItem key={`ellipsis-${index}`}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            );
                        }

                        return (
                            <PaginationItem key={p}>
                                <PaginationLink
                                    className="cursor-pointer"
                                    isActive={p === page}
                                    onClick={() => handlePageChange(p)}
                                >
                                    {p}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    {/* زر الصفحة التالية */}
                    <PaginationItem>
                        <PaginationNext
                            className="cursor-pointer"
                            onClick={() => handlePageChange(page + 1)}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}