import PropTypes from 'prop-types';
import AudioPlayer from "./AudioPlayer";
import Difinations from "./Difinations";
import Divider from '@mui/material/Divider';

function List({ selectedFont,isDarkMode ,word, phonetic, audio, definitions,sourceUrls }) {

    return (
        <div className={`w-full flex flex-col justify-between items-start ${isDarkMode ? 'dark' : ''}` }>
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
                    synonyms={meaning.synonyms}
                />
            ))}
            <div className='w-full h-full pb-4'>          {isDarkMode?               
                <Divider style={{ flexGrow: 1, marginLeft: '8px',height: '2px',borderWidth:"2px",borderColor:"#1f1f1f" }} />
                :        <Divider style={{ flexGrow: 1, marginLeft: '8px',height: '2px' ,borderWidth:"2px"}} />
              
              }  </div>
              <div className='h-full w-full pt-4 pb-4 flex items-center' >
              <div className='pr-8' style={{ color: isDarkMode ? 'white' : '#9e9e9e' }}>source</div>
              <a href={sourceUrls} target="_blank" rel="noopener noreferrer"  className='underline'>{sourceUrls}
            </a>  <i className="fa-solid fa-link pl-2"></i></div>
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
