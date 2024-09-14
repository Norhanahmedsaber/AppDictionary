import React from 'react'
import  { useState, useRef } from 'react';
import audioIcon  from '../assets/images/play.png'


export default function AudioPlayer({src}) {
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
        <img src={audioIcon} className="{`play-button ${isPlaying ? 'playing' : ''}`}   w-[70px] h-[70px]" onClick={togglePlay} />
        <audio ref={audioRef} src={src}></audio>
      </div>
    )
}
 
