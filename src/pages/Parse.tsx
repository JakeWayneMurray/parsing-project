import React, { useState } from 'react';
import type { Designer } from '../interfaces/Designer';
import { parser } from '../utils/helperFunctions';
import type { ActionSet } from '../interfaces/ActionSet';

export default function Settings() {
  const [response, setResponse] = useState<null | Designer>(null);
  const [showParsed, setShowParsed] = useState(false);
  const [outputBox, setOutputBox] = useState<string>('');

  const handleParseClick = () => {
    const parsedResponse = parser();
    if (!response) {
      setResponse(parsedResponse);
    }


    const actionSets = response?.Data?.screen?.actionSets;
    const parsedActionSets: ActionSet[] = [];
    if (actionSets && typeof actionSets === 'object') {
      Object.keys(actionSets).forEach((guid) => {
        
        //parsedActionSets.push(actionSets[guid]);
      });
    }
    const screenVersions = response?.Data?.versionList;
    const parsedScreenVersions: string[] = [];
    if (screenVersions && typeof screenVersions === 'object') {
      Object.keys(screenVersions).forEach((guid) => {
        //parsedScreenVersions.push(screenVersions[guid]);
      });
    }
    let output = "Screen Name: " + parsedResponse?.Data.screen.name + "\n";
    output += "Screen Version: " + parsedScreenVersions[parsedScreenVersions.length - 1] + "\n";
    output += "Modified By: " + parsedResponse?.Data.screen.modifiedBy;

    parsedActionSets.map((p) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      parsedResponse?.Data.screen.controls
      p.Actions.map(()=>{
      console.log('This curly brace is unexpected due to a syntax error in the code.');
      
      })
    })






    setOutputBox(output)
    setShowParsed(true);
  };

  const handleCopyClick = () => {
    const parsedText = (document.getElementById('parsedCode') as HTMLTextAreaElement).value;
    navigator.clipboard.writeText(parsedText)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch((err) => {
        alert('Failed to copy text');
        console.error('Failed to copy: ', err);
      });
  };

  const handleGoBackClick = () => {
    setShowParsed(false);
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen px-4">
      <div className="flex flex-col items-center w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">Parse</h1>
          <h3 className="text-white">Parse your No Code</h3>
        </div>
        {!showParsed ? (
          <div className="flex space-x-4 mb-8 w-full">
            <div className="w-1/2">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter old screen json here"
                style={{ minHeight: '20vh', height: '50vh', resize: 'vertical' }}
              />
            </div>
            <div className="w-1/2">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter new screen json here"
                style={{ minHeight: '20vh', height: '50vh', resize: 'vertical' }}
              />
            </div>
          </div>)
          : <div className="w-1/2">
            <textarea
              id="parsedCode"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Parsed code will appear here"
              style={{ minHeight: '20vh', height: '50vh', resize: 'vertical' }}
              value={outputBox}
            />
          </div>}
        {!showParsed ? (
          <button
            onClick={handleParseClick}
            className="btn btn-secondary"
          >
            Parse Now
          </button>
        ) :
          <div className="flex flex-row space-x-5">

            <button
              onClick={handleGoBackClick}
              className="btn btn-primary"
            >
              Go Back
            </button>
            <button onClick={handleCopyClick} className="btn btn-primary">Copy Text</button>
          </div>


        }
      </div>
    </div>
  );
}
