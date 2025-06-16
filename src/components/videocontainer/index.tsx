'use client'

import { useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { toggleMute,updateIconSize} from '@/utils/functions'

const VideoContainer = ({ video_link }: { video_link: string }) => {
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [iconSize, setIconSize] = useState<number>(32)

  useEffect(() => {
   
    const handleResize = () => updateIconSize(setIconSize)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative w-[100%] h-screen">
      <video
        src={video_link}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      />
      <button
        onClick={() => toggleMute(setIsMuted)}
        className="absolute top-20 right-20 bg-white/50 p-2 rounded-xl text-black text-3xl sm:text-7xl" >
        {isMuted ? <VolumeX size={iconSize} /> : <Volume2 size={iconSize} />}
      </button>
    </div>
  )
}
export default VideoContainer;