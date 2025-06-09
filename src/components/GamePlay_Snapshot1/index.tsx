const Gameplay_world = () => {
    return (

        <div className="h-screen w-screen bg-[url('/GamePlay_snapshot1.jpg')] bg-cover bg-no-repeat flex items-center justify-center">
            <div className="absolute top-60 left-10 bg-black/15 max-w-50 p-6 rounded-lg  xs:left-30  xs:max-w-[300px] md:max-w-[500px] md:left-60 md:top-80 lg:max-w-[700px]">
                <p className="font-elmain text-elwhite  text-3xl mb-4 font-bold ">The world</p>
                <p className="font-elmain text-elwhite mb-4">
                    Discover the Open World of Nosviken, infested with old mechanical war robots, or "Mechs", as the locals call them.
                </p>
                <p className="font-elmain text-elwhite mb-4">
                    Explore the world and help the local prepper & gas station owner liberate Nosviken from the invasion. Use any means necessary to take them down.
                </p>
                <p className="font-elmain text-elwhite">
                    Pimp your ride with cosmetic dashboard collectibles.
                </p>
            </div>
        </div>



    )
}

export default Gameplay_world;