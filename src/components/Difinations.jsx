import React from 'react';
import Divider from '@mui/material/Divider';

export default function Definitions({selectedFont,isDarkMode,synonyms, partOfSpeech, definitions }) {
  console.log(synonyms);
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="w-full mb-4 flex items-center">
        <div className="font-bold text-lg italic" style={{ fontFamily: selectedFont }}>{partOfSpeech}</div>           
        {isDarkMode?               
          <Divider style={{ flexGrow: 1, marginLeft: '8px',height: '2px',borderWidth:"2px",borderColor:"#1f1f1f" }} />
          :        <Divider style={{ flexGrow: 1, marginLeft: '8px',height: '2px' ,borderWidth:"2px"}} />

        }      </div>
      <div className="w-full">
        <div className="font-semibold text-md mb-2" style={{ fontFamily: selectedFont }}>Meaning</div>
        <ul className="list-disc ml-6">
          {definitions.map((def, index) => (
            <li key={index} className="mb-4" style={{fontFamily: selectedFont, color: 'purple' }}>
              <div> 
              {isDarkMode?               
                <p style={{fontFamily: selectedFont, color: 'white' }}>{def.definition}</p>
                :<p style={{fontFamily: selectedFont, color: 'black' }}>{def.definition}</p>
              }
                </div>
              {def.example && (
                <p className="text-gray-600" style={{ fontFamily: selectedFont }}>
                  <em>"{def.example}"</em>
                </p>
              )}
            </li>
          ))}
          </ul>
          {synonyms.length ?<div className='h-full w-full pt-4 pb-4 flex items-center' >
            <div className='pr-8' style={{ color: isDarkMode ? 'white' : '#9e9e9e' }}>source</div>
            <div className='text-[#9c27b0]'>{synonyms[0]}</div>
        </div>:null}
          </div>
    </div>
  );
}
