import Navbar from "@/components/MyComponents/Navbar";

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
            <div className="min-h-full flex flex-col">
                <Navbar />
                {children}
            </div>
    );
}