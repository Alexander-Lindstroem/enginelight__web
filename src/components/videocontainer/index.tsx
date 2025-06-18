'use client'

import { useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { toggleMute,updateIconSize} from '@/utils/functions'

const VideoContainer = ({ video_link }: { video_link: string }) => {
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [mobileSizeCheck, setMobileSizeCheck] = useState<boolean>(false)
  const [iconSize, setIconSize] = useState<number>(32)

  useEffect(() => {
    const handleResize = () => { 
      updateIconSize(setIconSize) 
      setMobileSizeCheck(window.innerWidth <= 768);
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
      if (mobileSizeCheck) {
        setIsMuted(true)
      }
  }, [mobileSizeCheck])

  return (
    <div className="hidden md:block w-full h-screen bg-black relative">
      <video
        src={video_link}
        className="absolute w-full h-full"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      />
      <div className='absolute w-full max-h-full aspect-video top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' style={{ maxWidth: "calc(100vh / 0.5625)" }}>
        <button
          onClick={() => toggleMute(setIsMuted)}
          className="absolute bottom-0 right-0 -translate-x-[50%] -translate-y-[50%] bg-white/50 p-2 rounded-xl text-black text-3xl sm:text-7xl" >
          {isMuted ? <VolumeX size={iconSize} /> : <Volume2 size={iconSize} />}
        </button>
      </div>
    </div>
  )
}
export default VideoContainer;