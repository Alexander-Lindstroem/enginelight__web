import NewsBtn from "../NewsBtn"

const HeroSection = () => {
    return (
        <div className="h-full bg-elblack relative font-elmain">
            <div className="absolute h-full w-full bg-[url(/hero-section-bg.jpg)] bg-center bg-cover bg-no-repeat blur-sm"></div>
            <div className="flex flex-col gap-5 text-center absolute text-white top-[50%] left-[50%] translate-[-50%]">
                <h1 className="text-elh1 drop-shadow-(--red-shadow)">EngineLight</h1>
                <p className="text-elbodym">Discover the Open World of Nosviken, infested with old mechanical war robots, or "Mechs", as the locals call them.</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <NewsBtn hrefPath="/" btnTitle="WATCH TRAILER" />
                    <NewsBtn hrefPath="/" btnTitle="ADD TO STEAM" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection