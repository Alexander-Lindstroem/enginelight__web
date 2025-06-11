'use client'

import {  useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react' 


const VideoContainer = ({video_link}:  { video_link: string }) => {
      const [isMuted, setIsMuted] = useState(true)

const toggleMute = () => {
    setIsMuted(prev => !prev)
  }

    return(
       <div className="relative w-[100%] h-screen mx-auto">
      <video
        src={video_link}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      />
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white" >
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>
    </div>
    )
}
export default VideoContainer;