export const toggleMute = (setIsMuted: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsMuted(prev=> !prev)
  }


  export  const updateIconSize = (setIconSize:React.Dispatch<React.SetStateAction<number>>) => {
    return () => {
      if (window.innerWidth < 640) {
        setIconSize(20)
      } else {
        setIconSize(50)
      }
    }
}