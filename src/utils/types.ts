export type TeamMember = {
    name:string,
    title:string,
    image:string,
    linkedin:string
}


export type TeamCategory ={
    category: string,
    members: TeamMember[];
} 