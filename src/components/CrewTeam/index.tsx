import { TeamMembers } from "@/utils/data";
import { TeamCategory } from "@/utils/types";

import Image from "next/image";

const CrewTeam = () => {
    return (
        <>
            <div className="relative py-12 space-y-8 bg-black font-elmain text-white">
                <div className="mb-50">
                <h2 className="text-center p-6 text-xl">Get to know your team</h2>
                <Image  className="absolute left-[0] tr top-[5%]" src="/el_vec_l.png" alt="vector_left_image" width={400} height={400} />
                <Image  className="absolute right-[0] top-[10%] " src="/el_vec_r.png" alt="vector_left_image" width={500} height={500} />
                {TeamMembers.map((category, index) => (
                    <div key={index} className="relative z-50" >
                        <h4 className="text-l font-semibold text-center text-white mb-8">
                            {category.category}
                        </h4>

                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {category.members.map((member, memberIndex) => (

                                <div
                                    key={memberIndex} className="w-[200px] flex flex-col items-center hover:scale-105 transition rounded-lg shadow-lg text-xs whitespace-nowrap text-center p-8 mb-2 ">
                                    <div className="w-20 h-32 rounded-lg overflow-hidden" style={{ boxShadow: '6px 5px 5px rgba(255, 0, 0, 0.3)' }}>
                                        <Image
                                            src={member.image}
                                            alt={member.name} className="w-full h-full object-cover"  width={150} height={150}/>
                                    </div>
                                    <h3 className="font-medium text-white py-5">{member.name}</h3>
                                    <p className=" text-gray-400 py-5">{member.title}</p>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src="/linkedin_logo.png" alt="LinkedIn" className="w-6 h-6 bg-blue-600 rounded " />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                ))}
                </div>
                <Image  className="absolute top-[100%] -translate-y-[100%] right-[50%] translate-x-[50%] z-10 pt-100 " src="/el_vec_b.png" alt="vector_left_image" width={1000} height={1000} />

            </div>

        </>
    )
}

export default CrewTeam;