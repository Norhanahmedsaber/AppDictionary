import React from 'react';
import Divider from '@mui/material/Divider';

export default function Definitions({selectedFont,isDarkMode, partOfSpeech, definitions }) {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      {/* Part of Speech with Divider */}
      <div className="w-full mb-4 flex items-center">
        <div className="font-bold text-lg italic" style={{ fontFamily: selectedFont }}>{partOfSpeech}</div>
        {isDarkMode?               
          <Divider style={{ flexGrow: 1, marginLeft: '8px',height: '2px' }} />
          :        <Divider style={{ flexGrow: 1, marginLeft: '8px',height: '2px' }} />

        }
        <Divider style={{ flexGrow: 1, marginLeft: '8px',height: '2px' }} />
      </div>

      {/* Definitions */}
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
      </div>
    </div>
  );
}
