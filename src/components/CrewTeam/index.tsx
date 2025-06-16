import { TeamMembers } from "@/utils/data";
import { TeamCategory } from "@/utils/types";

const CrewTeam = () => {
    return (
        <>
            <div className=" py-12 space-y-8 bg-black font-elmain text-white">
                <h2 className="text-center p-6 text-xl">Get to know your team</h2>
                {TeamMembers.map((category, index) => (
                    <div key={index} className={`${category.category === "Management" ? "bg-contain bg-center bg-no-repeat" : ""}`}
                        style={
                            category.category === "Management"
                                ? { backgroundImage: "url('/el_bg1_crew.png')", filter: "brightness(1)" }
                                : {}
                        }>
                        <h4 className="text-l font-semibold text-center text-white mb-8">
                            {category.category}
                        </h4>

                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {category.members.map((member, memberIndex) => (

                                <div
                                    key={memberIndex} className="w-[200px] flex flex-col items-center hover:scale-105 transition rounded-lg shadow-lg text-xs whitespace-nowrap text-center p-8 mb-2 ">
                                    <div className="w-20 h-32 rounded-lg overflow-hidden" style={{ boxShadow: '6px 5px 5px rgba(255, 0, 0, 0.3)' }}>
                                        <img
                                            src={member.image}
                                            alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-medium text-white py-5">{member.name}</h3>
                                    <p className=" text-gray-400 py-5">{member.title}</p>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src="/linkedin_logo.png" alt="LinkedIn" className="w-6 h-6 bg-blue-600 rounded" />
                                    </a>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
                <div
                    className="h-[250px] bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: "url('/el_bg_2.png')" }}
                >
                </div>

            </div>

        </>
    )
}

export default CrewTeam;