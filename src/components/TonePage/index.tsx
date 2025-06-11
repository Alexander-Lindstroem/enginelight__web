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
      <div className="absolute inset-0 bg-opacity-60 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-start font-elmain px-6 sm:px-10 md:px-20 lg:px-0 lg:pl-[46rem]">
        <div className="max-w-xl text-left text-[var(--color-elwhite)] space-y-5 tracking-wider">
          <h2 className="text-elh1 lg:text-elh1 md:text-elh1 sm:text-elh3 font-bold">Tone</h2>
          <p className="text-elbodyl lg:text-elbodym md:text-elbody1 sm:text-elbodym leading-8 mb-0"> The visuals are dark, gritty and moody but the low-poly stylization keeps it lighthearted. </p>
          <p className="text-elbodyl lg:text-elbodym md:text-elbodyl sm:text-elbodym leading-8"> The dialogue, mechanics and events of the game contrasts this darkness with a lot of goofiness and comedy.</p>
        </div>
      </div>
    </div>
  );
}