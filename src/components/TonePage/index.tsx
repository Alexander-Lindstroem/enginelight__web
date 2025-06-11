"use client";

import Image from "next/image";

export default function TonePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/gameplay2.jpg"
        alt= "Tone Background"
        fill
        className="object-cover object-center"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-opacity-60 z-10" />
      <div className="absolute z-20 top-[32%] font-elmain">
        <div className="ml-4 sm:ml-10 md:ml-32 lg:ml-[44rem] max-w-xl text-left text-[var(--color-elwhite)] space-y-5 tracking-wider px-4 sm:px-0">
          <h2 className="text-elh1 font-bold">Tone</h2>
          <p className="text-elbodym leading-8 mb-0"> The visuals are dark, gritty and moody but the low-poly stylization keeps it lighthearted. </p>
          <p className="text-elbodym leading-8"> The dialogue, mechanics and events of the game contrasts this darkness with a lot of goofiness and comedy.</p>
        </div>
      </div>
    </div>
  );
}
