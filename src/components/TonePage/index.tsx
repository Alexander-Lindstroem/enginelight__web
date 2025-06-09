"use client";

import Image from "next/image";

type ToneProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  gameplayimage: string;
};

export default function TonePage() {
  const props: ToneProps = {
    title: "Tone",
    paragraph1: " The visuals are dark, gritty and moody but the low-poly stylization keeps it lighthearted.",
    paragraph2: "The dialogue, mechanics and events of the game contrasts this darkness with a lot of goofiness and comedy.",
    gameplayimage: "/gameplay2.jpg",
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src={props.gameplayimage}
        alt={`${props.title} Background`}
        fill
        className="object-cover object-center"
        quality={100}

        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-10" />
      {/* Content */}
      <div className="absolute z-20 top-[32%] font-elmain">
        <div className="ml-4 sm:ml-10 md:ml-32 lg:ml-[44rem] max-w-xl text-left text-[var(--color-elwhite)] space-y-5 tracking-wider px-4 sm:px-0">
          <h2 className="text-elh1 font-bold">{props.title}</h2>
          <p className="text-elbodym leading-8 mb-0">
            {props.paragraph1}
          </p>
          <p className="text-elbodym leading-8 ">
            {props.paragraph2}
          </p>
        </div>
      </div>
    </div>

  );
}
