import React from 'react'
import  { useState, useRef } from 'react';
import audioIconWhite  from '../assets/images/play.png'
import audioIconBlack from '../assets/images/playDark.png'

export default function AudioPlayer({isDarkMode,src}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const togglePlay = () => {
      const audio = audioRef.current;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    };
    return (
        <div className=" flex flex-col relative">
        <div> 
        {isDarkMode?               
          <img src={audioIconBlack} className="{`play-button ${isPlaying ? 'playing' : ''}`}   w-[70px] h-[70px]" onClick={togglePlay} />
          :<img src={audioIconWhite} className="{`play-button ${isPlaying ? 'playing' : ''}`}   w-[70px] h-[70px]" onClick={togglePlay} />}  
        </div>
        <audio ref={audioRef} src={src}></audio>
      </div>
    )
}
 
