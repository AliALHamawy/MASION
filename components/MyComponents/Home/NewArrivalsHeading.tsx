

const NewArrivalsHeading = () => {
    return (
        <>
            <div className="w-full flex justify-between flex-col lg:flex-row gap-6">
                <div className="left">
                    <h2 className="text-neutral-400 text-sm font-semibold tracking-widest uppercase mb-3">New Arrivals</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-neutral-900">Curated Selection</h3>
                </div>
                <div className="right">
                    <p className="text-neutral-500 mt-4 md:mt-0 max-w-sm text-base leading-relaxed">Six standout pieces handpicked from our latest drop — each one a study in material, form, and intention.</p>
                </div>
            </div>
        </>
    )
}

export default NewArrivalsHeading