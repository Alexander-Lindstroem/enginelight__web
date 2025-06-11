import NewsBtn from "../NewsBtn";


const DescriptionContent = () => {
  return (
    <div className="w-full h-full bg-cover bg-center bg-no-repeat text-white bg-[url('/background-vector.png')]">
      <div className="h-full max-w-6xl w-4/5 mx-auto py-8">
        <div className="h-full flex flex-col gap-5 font-elmain justify-center">
          <div className="grow-1"></div>
          <div className="flex flex-col gap-2 border-white border md:w-1/2 w-full p-2">
            <h2 className="text-elh2 font-bold">"A Swedish Mad Max"</h2>
            <h2 className="font-medium">FPS</h2>
            <div>
              <p>Genres: Combat & Survival</p>
              <p>Art style: Low-Poly Stylization</p>
              <p>Setting: Desolate Northern Sweden</p>
              <p>Theme: Nasa-Punk, Near Future Fiction, Post-Apocalypse</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-white border md:w-1/2 w-full self-end p-2">
            <h2 className="text-elh2 font-bold">Story</h2>
            <p>The year is 2325, Summer, Sweden.</p>
            <p>
              The world is in ruins after the advancement of AI and Robotics plunged
              humanity into a global conflict. Those few humans who survived live
              among the ruins, and the roaming Mechs. The Mechs are programmed to
              shoot any potential threat on sight.
            </p>
            <p>
              A local resident of a small village finds theirself fed up with the
              robotic overlords, after a Mega Mech accidentally flattens their house.
              The local digs up a nuclear warhead, half buried in their backyard, and
              straps it in the passenger seat. With their car as their primary weapon
              they set out on a path to vengeance.
            </p>
          </div>
          <div className="flex flex-col justify-center grow-1">
            <NewsBtn hrefPath="/" btnTitle="SIGN UP FOR NEWS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionContent;