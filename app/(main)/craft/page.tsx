import CraftHero from "@/components/MyComponents/Craft/CraftHero";
import Featuers from "@/components/MyComponents/Craft/Featuers";
import FeatureCatigorys from "@/components/MyComponents/Craft/FeatureCatigorys";
import OurPhilosophy from "@/components/MyComponents/Craft/OurPhilosophy";
import Qout from "@/components/MyComponents/Craft/Qout";

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