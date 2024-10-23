import React, { useState, useEffect } from 'react';
import { NewEditInvoice } from '../assets/NewEditInvoices';
import SecondaryButton from '../components/SecondaryButton';
import Checkbox from '../components/Checkbox';
import { useDesigner } from '../providers/DesignerContext';

export default function Parse() {
  const [response] = useState(NewEditInvoice);
  const { setDesigner, extractActionSets, parseActions, handleMessageParsing, handleCSVGeneration, } = useDesigner();
  const [showParsed, setShowParsed] = useState(false);
  const [outputBox, setOutputBox] = useState<string>('');
  const [onlyShowMessages, setOnlyShowMessages] = useState(false);
  const [outputToCSV, setOutputToCSV] = useState(false);

  const handleParseClick = () => {
    const textAreaValue = (document.getElementById('oldScreenJson') as HTMLTextAreaElement).value;
    //@ts-ignore
    const newDesignerState = textAreaValue.trim() === '' ? NewEditInvoice : JSON.parse(textAreaValue);
    setDesigner(newDesignerState);
    // Trigger parsing after state has been updated
    setShowParsed(true);
  };

  const handleShowMessageParseClick = () => {
    const textAreaValue = (document.getElementById('oldScreenJson') as HTMLTextAreaElement).value;
    //@ts-ignore
    const newDesignerState = textAreaValue.trim() === '' ? NewEditInvoice : JSON.parse(textAreaValue);
    setDesigner(newDesignerState);
    let output = `Screen Name: ${response?.Data?.screen?.name}\n`;
    output += `Modified By: ${response?.Data?.screen?.modifiedBy}\n`;
    const foundActionSets = extractActionSets();
    const filteredActionSets = foundActionSets.filter(actionSet => actionSet.Actions && actionSet.Actions.length > 0);

    if (!outputToCSV) {
      handleMessageParsing(filteredActionSets, output, setOutputBox, setShowParsed);
    } else {
      handleCSVGeneration(filteredActionSets);
    }
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

  // Add this useEffect to handle parsing when designer state changes
  useEffect(() => {
    if (showParsed) {
      const output = parseActions();
      setOutputBox(output);
    }
  }, [showParsed, parseActions]); // Add parseActions to dependencies

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
              <div className={!onlyShowMessages ? "w-1/2" : "w-full"}>
                <textarea
                  id="oldScreenJson"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  placeholder={!onlyShowMessages ? "Enter old screen json here" : "Enter screen json here"}
                  style={{ minHeight: '20vh', height: '50vh', resize: 'vertical' }}
                />
              </div>
              {!onlyShowMessages ?
                <div className="w-1/2">
                  <textarea
                    id="newScreenJson"
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    placeholder="Enter new screen json here"
                    style={{ minHeight: '20vh', height: '50vh', resize: 'vertical' }}
                  />
                </div> : null
              }
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
