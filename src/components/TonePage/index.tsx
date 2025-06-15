"use client";

import Image from "next/image";

export default function TonePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/gameplay2.jpg"
        alt="Tone Background"
        fill
        className="object-cover object-center"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-opacity-0 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-end font-elmain px-6 sm:px-10 md:px-20 lg:px-32">
        <div className="w-full max-w-xl text-left text-[var(--color-elwhite)] space-y-5 tracking-wide lg:pl-32 ml-0 lg:ml-[8vw]">
          <h2 className="text-elh2 sm:text-elh3 md:text-elh1 lg:text-elh1 font-bold max-[180px]:text-elh4">Tone</h2>
          <p className="text-elbodys sm:text-elbodym md:text-elbodyl lg:text-elbodym leading-8 mb-0 max-[180px]:text-elbodys">
            The visuals are dark, gritty and moody but the low-poly stylization keeps it lighthearted.
          </p>
          <p className="text-elbodys sm:text-elbodym md:text-elbodyl lg:text-elbodym leading-8 max-[180px]:text-elbodys">
            The dialogue, mechanics and events of the game contrasts this darkness with a lot of goofiness and comedy.
          </p>
        </div>
      </div>
    </div>
  );
}