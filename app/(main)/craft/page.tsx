import type { Metadata } from "next";
import CraftHero from "@/components/MyComponents/Craft/CraftHero";
import Featuers from "@/components/MyComponents/Craft/Featuers";
import FeatureCatigorys from "@/components/MyComponents/Craft/FeatureCatigorys";
import OurPhilosophy from "@/components/MyComponents/Craft/OurPhilosophy";
import Qout from "@/components/MyComponents/Craft/Qout";

export const metadata: Metadata = {
    title: "Our Craft",
    description:
        "Discover the materials, details, and thoughtful processes behind MAISON's refined collection.",
    alternates: {
        canonical: "/craft",
    },
    openGraph: {
        title: "Our Craft",
        description:
            "Discover the thoughtful craft and materials behind MAISON's refined collection.",
        url: "/craft",
    },
};

const page = () => {
    return (
        <main className="min-h-screen w-full">
            <CraftHero />
            <OurPhilosophy />
            <Featuers />
            <Qout />
            <FeatureCatigorys />
        </main>
    );
};

export default page;