import NewsBtn from "../NewsBtn"
import Image from "next/image"

const HeroSection = () => {
    return (
        <div className="h-full bg-elblack relative font-elmain">
            <div className="absolute h-full w-full bg-[url(/hero-section-bg.jpg)] bg-center bg-cover bg-no-repeat blur-sm"></div>
            <div className="flex flex-col gap-5 text-center absolute text-elwhite top-[50%] left-[50%] translate-[-50%]">
                <h1 className="text-elh1 font-bold drop-shadow-(--red-shadow) flex justify-center">
                    <div className="md:w-lg sm: w-2xs">
                        <Image
                            src="/enginelight-logo.png"
                            alt="EngineLight logo"
                            width={500}
                            height={500}
                            priority
                            className="w-full h-auto"
                        />
                    </div>
                </h1>
                <p className="text-elbodyl font-medium max-w-[490px]">Discover the Open World of Nosviken, infested with old mechanical war robots, or "Mechs", as the locals call them.</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center text-white">
                    <NewsBtn hrefPath="https://www.youtube.com/watch?v=a5epkhg6s8A" btnTitle="WATCH TRAILER" />
                    <NewsBtn hrefPath="https://futuregames.itch.io/enginelight" btnTitle="VIEW ON ITCH.IO" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection