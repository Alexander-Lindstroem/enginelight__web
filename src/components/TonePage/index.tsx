"use client";

export default function TonePage() {
  return (
    <div className="min-h-screen bg-[url('/snapshot2-background.jpg')] bg-cover bg-no-repeat flex items-center justify-end p-10 pr-0 lg:pr-60 md:pr-30">
      <div className=" bg-black/15 p-6 mt-5 ml-2 rounded-lg z-10 max-w-full xs:max-w-[300px]  md:mt-40 md:ml-16 md:max-w-[500px] lg:max-w-[600px] lg:mt-10 lg:ml-10 xl:max-w-[600px]">
        <h2 className="font-elmain text-elwhite text-3xl mb-4 font-bold">
          Tone
        </h2>
        <p className="font-elmain text-elwhite text-base leading-8">
          The visuals are dark, gritty and moody but the low-poly stylization keeps it lighthearted.
        </p>
        <p className="font-elmain text-elwhite text-base leading-8">
          The dialogue, mechanics and events of the game contrasts this darkness with a lot of goofiness and comedy.
        </p>
      </div>
    </div>
  );
}