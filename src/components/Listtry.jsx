import PropTypes from 'prop-types';
import AudioPlayer from "./AudioPlayer";
import Difinations from "./Difinations";
function List({ word, phonetic, audio, definitions }) {
    return (
        <div className=" flex flex-col
     justify-between items-start  p-4">
     <div className=" w-full flex justify-between items-start">   
     <div className="text-black text-6xl">{word}</div>
     <AudioPlayer src={audio}/>
     </div>
     <div className="text-[#9c27b0] text-xl" >`/{phonetic}/`</div>

            {definitions.map((meaning, index) => (
                <Difinations
                key={index}
                partOfSpeech={meaning.partOfSpeech} 
                definitions={meaning.definitions} 
              />

            ))}
        </div>
    );
}

List.propTypes = {
    word: PropTypes.string.isRequired,
    phonetic: PropTypes.string.isRequired,
    audio: PropTypes.string,
    definitions: PropTypes.arrayOf(PropTypes.shape({
        partOfSpeech: PropTypes.string.isRequired,
        definitions:PropTypes.string.isRequired,
    })).isRequired,
};

export default List;
