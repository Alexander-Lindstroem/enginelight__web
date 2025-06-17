const CrewIntro = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/darkforest.png')" }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#7a001a] opacity-60 mix-blend-multiply" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-20">
                <div className="text-center max-w-2xl sm:max-w-lg md:max-w-xl font-elmain text-elwhite px-34 sm:px-20 md:px-10">
                    <h1 className="text-4xl sm:text-5xl font-semibold mb-5 text-shadow-soft">
                        Enginelights team
                    </h1>
                    <p className="text-md sm:text-lg leading-relaxed">
                        Enginelight is a project created by young and talented people from around the world, working together to create an experience of a future nightmare
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CrewIntro

