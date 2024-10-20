import React, { useState } from 'react';
//import { DesignerObject } from '../assets/DesignerObject';
import { NewEditInvoice } from '../assets/NewEditInvoices';
import SecondaryButton from '../components/SecondaryButton';
import { extractActionSets, extractShowMessageActionSets } from '../utils/utils';
import Checkbox from '../components/Checkbox';

export default function Settings() {
  const [response] = useState(NewEditInvoice);
  const [showParsed, setShowParsed] = useState(false);
  const [outputBox, setOutputBox] = useState<string>('');
  const [onlyShowMessages, setOnlyShowMessages] = useState(false);
  const [outputToCSV, setOutputToCSV] = useState(false);


  const handleShowMessageParseClick = () => {
    let output = `Screen Name: ${response?.Data?.screen?.name}\n`;
    output += `Modified By: ${response?.Data?.screen?.modifiedBy}\n`;

    const foundActionSets = extractShowMessageActionSets(response);

    // Filter out action sets that do not have any actions
    //@ts-ignore
    const filteredActionSets = foundActionSets.filter(actionSet => actionSet.Actions.length > 0);

    if (!outputToCSV) {
      filteredActionSets.forEach(actionSet => {
        output += `\n${actionSet.Name}: \n`;
        //@ts-ignore
        actionSet.Actions.forEach(action => {
          output += `  Title: ${action.Title || '(No title)'}\n`;
          output += `  Body: ${action.Message || '(No message)'}\n`;
          output += `  Buttons: ${action.Buttons || '(No buttons)'}\n`;
          output += `  Comments: ${action.Notes || '(No comments)'}\n`;
        });
      });

      setOutputBox(output);
      setShowParsed(true);
      return;
    }
    
    // Generate CSV content
    let csvContent = "ActionSet,Title,Body,Buttons,Comments\n";

    filteredActionSets.forEach(actionSet => {
      actionSet?.Actions?.forEach(action => {
        const title = action.Title || '(No title)';
        const body = action.Message || '(No message)';
        const buttons = action.Buttons || '(No buttons)';
        const comments = action.Notes || '(No comments)';

        csvContent += `"${actionSet.Name}","${title}","${body}","${buttons}","${comments}"\n`;
      });
    });

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'parsed_data.csv');

    // Append the link to the body
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link from the DOM

  };




  const handleParseClick = () => {
    let output = `Screen Name: ${response?.Data?.screen?.name}\n`;
    output += `Modified By: ${response?.Data?.screen?.modifiedBy}\n`;


    const foundActionSets = extractActionSets(response);

    Object.values(foundActionSets).forEach(actionSet => {
      const actionSetWName = foundActionSets.find(a => a.ActionSetId === actionSet.ActionSetId);
      output += `\n${actionSetWName ? actionSetWName.Name : '(Not found in parsed data)'}: \n`;
      actionSet.Actions?.forEach(action => {
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
