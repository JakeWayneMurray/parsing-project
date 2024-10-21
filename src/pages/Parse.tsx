import React, { useState } from 'react';
//import { DesignerObject } from '../assets/DesignerObject';
import { NewEditInvoice } from '../assets/NewEditInvoices';
import SecondaryButton from '../components/SecondaryButton';
import { extractActionSets, extractShowMessageActionSets, handleMessageParsing, handleCSVGeneration } from '../utils/utils';
import Checkbox from '../components/Checkbox';
import type { ConditionalStatement } from '../interfaces/Actions/ConditionalStatement';
import type { ActionSet } from '../interfaces/ActionSet';

export default function Settings() {
  const [response] = useState(NewEditInvoice);
  const [showParsed, setShowParsed] = useState(false);
  const [outputBox, setOutputBox] = useState<string>('');
  const [onlyShowMessages, setOnlyShowMessages] = useState(false);
  const [outputToCSV, setOutputToCSV] = useState(false);

  const handleShowMessageParseClick = () => {
    let output = `Screen Name: ${response?.Data?.screen?.name}\n`;
    output += `Modified By: ${response?.Data?.screen?.modifiedBy}\n`;

    const foundActionSets = extractActionSets(response);
    const filteredActionSets = foundActionSets.filter(actionSet => actionSet.Actions && actionSet.Actions.length > 0);

    if (!outputToCSV) {
        // Call the function to handle message parsing
        handleMessageParsing(filteredActionSets, output, setOutputBox, setShowParsed);
    } else {
        // Call the function to generate CSV content
        handleCSVGeneration(filteredActionSets);
    }
};


  const handleParseClick = () => {
    let output = `Screen Name: ${response?.Data?.screen?.name}\n`;
    output += `Modified By: ${response?.Data?.screen?.modifiedBy}\n`;

    const foundActionSets = extractActionSets(response);
    //@ts-ignore
    const processActionSet = (actionSet, indent: string) => {
        output += `${indent}${actionSet.Name || '(Unnamed Action Set)'}: \n`;
    //@ts-ignore

        actionSet.Actions?.forEach(action => {
            output += `${indent}- ${action.Type}\n`; // Output action type with indentation
            if (action.Type === "If...then") {
                const conditionalActionSet: ConditionalStatement = action;
                if (conditionalActionSet.ActionSetOnTrue?.Actions) {
                    processActionSet(conditionalActionSet.ActionSetOnTrue, `${indent}  `); // Indent for true actions
                }
                if (conditionalActionSet.ActionSetOnFalse?.Actions) {
                    processActionSet(conditionalActionSet.ActionSetOnFalse, `${indent}  `); // Indent for false actions
                }
            }
        });
    };

    Object.values(foundActionSets).forEach(actionSet => {
        const actionSetWName = foundActionSets.find(a => a.ActionSetId === actionSet.ActionSetId);
        if (actionSetWName) {
            processActionSet(actionSetWName, ''); // Start processing with no indentation
        } else {
            output += `\n(Not found in parsed data): \n`;
        }
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
          <>
            <div className="text-center mb-8">
              <Checkbox label="Only Show Messages" checked={onlyShowMessages} onChange={() => { setOnlyShowMessages(!onlyShowMessages) }} />
              <Checkbox label="Output to CSV" checked={outputToCSV} onChange={() => { onlyShowMessages ? setOutputToCSV(!outputToCSV) : alert('Only show messages are currently supported for csv output, please check that to continue') }} />
            </div>
            <div className="flex space-x-4 mb-8 w-full">
              <div className="w-1/2">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Enter old screen json here"
                  style={{ minHeight: '20vh', height: '50vh', resize: 'vertical' }}
                />
              </div>
              <div className="w-1/2">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Enter new screen json here"
                  style={{ minHeight: '20vh', height: '50vh', resize: 'vertical' }}
                />
              </div>
            </div>
          </>)
          : <div className="w-full">
            <textarea
              id="parsedCode"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              placeholder="Parsed code will appear here"
              style={{ minHeight: '20vh', height: '50vh', resize: 'vertical' }}
              value={outputBox}
            />
          </div>
        }
        {!showParsed ? (
          <SecondaryButton
            onClick={onlyShowMessages ? handleShowMessageParseClick : handleParseClick}
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
