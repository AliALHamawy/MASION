import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout",
    description: "Complete your MAISON order securely.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function CheckoutLayout({
    children,
}: LayoutProps<"/checkout">) {
    return children;
}
