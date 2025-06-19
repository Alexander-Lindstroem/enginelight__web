import Gameplay_world from "@/components/GamePlay_Snapshot1";
import VideoContainer from "@/components/videocontainer";
import TonePage from "@/components/TonePage"

const Gameplay = () => {
    return (
        <>
        <VideoContainer video_link="/GP3_Team2_video.mp4" />
        <Gameplay_world />
        <TonePage/>
        </>
    )
}

export default Gameplay;
