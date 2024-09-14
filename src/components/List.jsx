import AudioPlayer from "./AudioPlayer";
import Difinations from "./Difinations";

export default function List({ word, phonetic, audio, deifinations }) {
  return (
    <div className="flex flex-col
     justify-between items-start ">
     <div className=" w-full flex justify-between items-start">   
      <div className="text-black text-6xl">{word}</div>
      <AudioPlayer src={audio}/>
      </div>
      <div className="text-[#9c27b0] text-xl" >`/{phonetic}/`</div>
        <div>
        {deifinations.map((item, index) => (
          <Difinations
            key={index}
            partOfSpeech={item.partOfSpeech} 
            definitions={item.definitions} 
          />
        ))}
      </div>
    </div>
  );
}
