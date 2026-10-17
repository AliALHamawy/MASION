import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export function ShopPagination({ totalPages = 1, page = 1, query = "" }: { totalPages?: number; page?: number; query?: string }) {

    if (totalPages <= 1) return null;

    const pageHref = (newPage: number) => {
        const params = new URLSearchParams(query);
        params.set("page", String(newPage));
        return `/shop?${params.toString()}`;
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
                            href={page > 1 ? pageHref(page - 1) : "#"}
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
                                    href={pageHref(p)}
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
                            href={page < totalPages ? pageHref(page + 1) : "#"}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}