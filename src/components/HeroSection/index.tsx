'use client';

import { useState } from "react";
import NewsBtn from "../NewsBtn"
import Image from "next/image";
import { X } from "lucide-react";



const HeroSection = () => {
    const [showVideo, setShowVideo] = useState(false);
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
                    <NewsBtn btnTitle="WATCH TRAILER" onClick={() => setShowVideo(true)} />
                    <NewsBtn hrefPath="https://futuregames.itch.io/enginelight" btnTitle="VIEW ON ITCH.IO" />
                </div>
            </div>

            {showVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                    <div className="relative w-[90%] max-w-4xl max-h-[90vh] lg:landscape:max-w-4xl sm:landscape:max-w-sm">
                        <div className="aspect-video ">
                            <iframe
                                src="https://www.youtube.com/embed/a5epkhg6s8A?autoplay=1"
                                className="w-full h-full pointer-events-auto"
                                title="EngineLight Trailer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <button onClick={() => setShowVideo(false)} className="absolute top-5 right-1 text-white text-2xl z-20" aria-label="Close video">
                            <X />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HeroSection