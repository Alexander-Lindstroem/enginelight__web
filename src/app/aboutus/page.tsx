import CrewIntro from "@/components/CrewIntro"
import CrewTeam from "@/components/CrewTeam"

const AboutUs = () => {
    return (
      <>
        <div className="w-full">
        <section className="relative w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat"
         style={{ backgroundImage: "url('/darkforest.png')" }}
         >
        <div className="absolute top-0 left-0 w-full h-full bg-[#7a001a] opacity-60 mix-blend-multiply" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-20">
            <CrewIntro />
          </div>
        </section>
      </div>
       <CrewTeam />
       </>
    )
}

export default AboutUs