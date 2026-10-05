import NewArrivalsHeading from "@/components/MyComponents/Home/NewArrivalsHeading";
import FeatureProducts from "@/components/MyComponents/Home/FeatureProducts";

const NewArrivals = () => {
    return (
        <>
            <div className="min-h-screen h-full w-full flex items-center px-4 py-16">
                <div className="max-w-7xl mx-auto flex flex-col w-full gap-17">
                    <NewArrivalsHeading />
                    <FeatureProducts />
                </div>
            </div>
        </>
    )
}

export default NewArrivals