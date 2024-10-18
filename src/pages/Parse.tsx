import React, { useState } from 'react';
import { DesignerObject } from '../assets/DesignerObject';
import SecondaryButton from '../components/SecondaryButton';
import { extractActionSets, getActions } from '../utils/utils';

export default function Settings() {
  const [response, setResponse] = useState(DesignerObject);
  const [showParsed, setShowParsed] = useState(false);
  const [outputBox, setOutputBox] = useState<string>('');

  const handleParseClick = () => {
    let output = `Screen Name: ${response?.Data?.screen?.name}\n`;
    output += `Modified By: ${response?.Data?.screen?.modifiedBy}\n`;

    const foundActionSets = extractActionSets(response);
    console.log('Found Action Sets:', foundActionSets); // Log found action sets

    Object.values(foundActionSets).forEach(actionSet => {
        const actionSetWName = foundActionSets.find(a => a.ActionSetId === actionSet.ActionSetId);
        output += `\n${actionSetWName ? actionSetWName.Name : '(Not found in parsed data)'}: \n`;

        const actions = getActions(actionSet.ActionSetId, response);
        console.log('Actions for ActionSetId:', actionSet.ActionSetId, actions); // Log the actions retrieved

        if (!actions.length) {
            output += `- No actions found for this action set.\n`;
            return;
        }
        
        actions.forEach(action => {
          //@ts-ignore
            output += `- ${action.Type}\n`; // Removed extra '+' for clarity
        });
    });

    setOutputBox(output);
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
          <SecondaryButton
            onClick={handleParseClick}
            label="Parse Now"
          />) :
          <div className="flex flex-row space-x-5">

            <SecondaryButton
              onClick={handleGoBackClick}
              label="Go Back"
            />
            <SecondaryButton
              onClick={handleCopyClick}
              label="Copy Text"
            />
          </div>


        }
      </div>
    </div>
  );
}
