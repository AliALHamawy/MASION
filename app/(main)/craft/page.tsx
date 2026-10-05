import CraftHero from "@/components/MyComponents/Craft/CraftHero";
import Featuers from "@/components/MyComponents/Craft/Featuers";
import OurPhilosophy from "@/components/MyComponents/Craft/OurPhilosophy";

const page = () => {
    return (
        <main className="min-h-screen w-full">
            <CraftHero />
            <OurPhilosophy />
            <Featuers />
        </main>
    );
};

export default page;