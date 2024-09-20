import PropTypes from 'prop-types';
import AudioPlayer from "./AudioPlayer";
import Difinations from "./Difinations";

function List({ selectedFont,isDarkMode ,word, phonetic, audio, definitions }) {

    return (
        <div className=" overflow-x-hidden w overflow-y-scroll flex flex-col justify-between items-start">
            <div className="w-full flex justify-between items-start">   
                <div className="text-black text-6xl "style={{ fontFamily: selectedFont }}>{word}</div>
                <AudioPlayer isDarkMode={isDarkMode} src={audio} />
            </div>
            <div className="text-[#9c27b0] text-xl" style={{ fontFamily: selectedFont }}>{phonetic}</div>

            {definitions.map((meaning, index) => (
                <Difinations
key={index}
selectedFont={selectedFont} 
isDarkMode={isDarkMode}
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
        definitions: PropTypes.arrayOf(PropTypes.shape({
            definition: PropTypes.string.isRequired, 
            example: PropTypes.string, 
        })).isRequired, 
    })).isRequired,
/*     isDarkMode:PropTypes.boolean.isRequired
 */ };
export default List;
