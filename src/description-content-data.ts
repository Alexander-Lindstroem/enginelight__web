export interface Category {
    genre: string;
    artstyle: string;
    setting: string;
    theme: string;
}

export interface Description {
    title: string;
    firstpar: string;
    secondpar: string;
    thirdpar: string;
}

export const categorys: Category[] = [
    {
        genre: 'Combat & Survival',
        artstyle: 'Low-Poly Stylization',
        setting: 'Desolate Northern Sweden',
        theme: 'Nasa-Punk, Near Future Fiction, Post-Apocalypse'
    }
]

export const description: Description[] = [
    {
        title: 'Story',
        firstpar: 'The year is 2325, Summer, Sweden.',
        secondpar: 'The world is in ruins after the advancement of AI and Robotics plunged humanity into a global conflict. Those few humans who survived live among the ruins, and the roaming Mechs. The Mechs are programmed to shoot any potential threat on sight.',
        thirdpar: 'A local resident of a small village finds theirself fed up with the robotic overlords, after a Mega Mech accidentally flattens their house. The local digs up a nuclear warhead, half buried in their backyard, and straps it in the passenger seat. With their car as their primary weapon they set out on a path to vengeance.'
    }
]