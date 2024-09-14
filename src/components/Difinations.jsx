import React from 'react';
import Divider from '@mui/material/Divider';

export default function Definitions({ partOfSpeech, definitions }) {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      {/* Part of Speech with Divider */}
      <div className="w-full mb-4 flex items-center">
        <div className="font-bold text-lg italic">{partOfSpeech}</div>
        <Divider style={{ flexGrow: 1, marginLeft: '8px' }} />
      </div>

      {/* Definitions */}
      <div className="w-full">
        <div className="font-semibold text-md mb-2">Meaning</div>
        <ul className="list-disc ml-6">
          {definitions.map((def, index) => (
            <li key={index} className="mb-4" style={{ color: 'purple' }}>
              <p style={{ color: 'black' }}>{def.definition}</p>
              {def.example && (
                <p className="text-gray-600">
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
