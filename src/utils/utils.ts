import { SetViewFilter } from '../interfaces/Actions/SetViewFilter';
import { ConditionalStatement } from '../interfaces/Actions/ConditionalStatement';
//TODO: fully implement this
export function getViewFilterOutput(viewFilter: SetViewFilter): string{
    let output = "Where ";
    viewFilter.ViewFilters.forEach(view => {
        output += "This needs to be implemented";
    })
    return output;
}

type ActionSet = {
    Name: string;
    ActionSetId: string;
    Actions?: any[];
};

type DesignerData = {
    Data: {
        screen: {
            actionSets: Record<string, any>;
            events: Record<string, any>;
            controls: any;
            name: string
        };
    };
};



export const extractShowMessageActionSets = (obj: DesignerData): ActionSet[] => {
    const results: ActionSet[] = [];
    const actionSets = obj?.Data?.screen?.actionSets;
    const eventsList = obj?.Data?.screen?.events;
    const controls = obj?.Data?.screen?.controls;

    const traverse = (value: any, parentName?: string) => {
        if (value && typeof value === 'object') {
            const { onClick, onFocus, onChange, onBlur, caption } = value;
            const eventMap = { onClick, onFocus, onChange, onBlur };

            Object.entries(eventMap).forEach(([eventType, eventId]) => {
                if (eventId) {
                    const realActionSetId = eventsList?.[eventId]?.[0];
                    const actionSet = actionSets?.[realActionSetId];

                    if (actionSet) {
                        // Filter actions to only include those of type "Show Message"
                        //@ts-ignore
                        const filteredActions = actionSet?.Actions?.filter(action => action.Type === "Show Message") || [];

                        results.push({
                            Name: `${caption || parentName || 'Unnamed Action'} (${eventType})`,
                            ActionSetId: realActionSetId || 'Unknown',
                            //@ts-ignore
                            Actions: filteredActions.map(action => ({
                                Title: action.Title || 'No title',
                                Message: action.Message || 'No message',
                                Buttons: action.Buttons || 'No buttons',
                                Notes: action.Notes || 'No comments',
                            })),
                        });
                    }
                }
            });

            Object.values(value).forEach((e) => traverse(e, caption || parentName));
        }
    };

    traverse(controls);
    return results;
};

export const handleMessageParsing = (filteredActionSets: any, output: string, setOutputBox: (ouptut: string) => void, setShowParsed: (output: boolean) => void) => {
    const appendShowMessage = (actionSetName: string, action: any) => {
        output += `\n${actionSetName}: \n`;
        output += `  Title: ${action.Title || '(No title)'}\n`;
        output += `  Body: ${action.Message || '(No message)'}\n`;
        output += `  Buttons: ${action.Buttons || '(No buttons)'}\n`;
        output += `  Comments: ${action.Notes || '(No comments)'}\n`;
    };
    //@ts-ignore

    filteredActionSets.forEach(actionSet => {
        //@ts-ignore
        actionSet?.Actions?.forEach(action => {
            if (action.Type === "Show Message") {
                appendShowMessage(actionSet.Name, action);
            }

            if (action.Type === "If...then") {
                const conditionalActionSet: ConditionalStatement = action;
                conditionalActionSet.ActionSetOnTrue?.Actions?.forEach(innerAction => {
                    if (innerAction.Type === "Show Message") {
                        appendShowMessage(`${actionSet.Name} (If True)`, innerAction);
                    }
                });
                conditionalActionSet.ActionSetOnFalse?.Actions?.forEach(innerAction => {
                    if (innerAction.Type === "Show Message") {
                        appendShowMessage(`${actionSet.Name} (If False)`, innerAction);
                    }
                });
            }
        });
    });

    setOutputBox(output);
    setShowParsed(true);
};

export const extractActionSetsForShow = (obj: DesignerData): ActionSet[] => {
    const results: ActionSet[] = [];
    const actionSets = obj?.Data?.screen?.actionSets;
    const eventsList = obj?.Data?.screen?.events;
    const controls = obj?.Data?.screen?.controls;

    const traverse = (value: any, parentName?: string) => {
        if (value && typeof value === 'object') {
            const { onClick, onFocus, onChange, onBlur, caption } = value;
            const eventMap = { onClick, onFocus, onChange, onBlur };

            Object.entries(eventMap).forEach(([eventType, eventId]) => {
                if (eventId) {
                    const realActionSetId = eventsList?.[eventId]?.[0];
                    const actionSet = actionSets?.[realActionSetId];

                    if (actionSet) {
                        results.push({
                            Name: `${caption || parentName || 'Unnamed Action'} (${eventType})`,
                            ActionSetId: realActionSetId || 'Unknown',
                            Actions: actionSet?.Actions || [],
                        });
                    }
                }
            });

            Object.values(value).forEach((e) => traverse(e, caption || parentName));
        }
    };

    traverse(controls);
    return results;
};

export const handleCSVGeneration = (filteredActionSets: any, designer: DesignerData) => {
   // Generate CSV content
        let screenName = `${designer?.Data?.screen?.name}\n`;
        //@ts-ignore
        const currentVersionId = designer?.Data?.screen?.versionId;
        //@ts-ignore
        const currentVersion = designer?.Data?.versionList[currentVersionId];
        let csvContent = `Screen Name: ${designer?.Data?.screen?.name}\n`;
        csvContent += currentVersion + '\n';
        csvContent += "ActionSet,Title,Body,Buttons,Comments\n";

    const addToCSV = (actionSetName: string, action: any) => {
        const title = action.Title || '(No title)';
        const body = action.Message || '(No message)';
        const buttons = action.Buttons || '(No buttons)';
        const comments = action.Notes || '(No comments)';
        csvContent += `"${actionSetName}","${title}","${body}","${buttons}","${comments}"\n`;
    };
    //@ts-ignore

    filteredActionSets.forEach(actionSet => {
        //@ts-ignore
        actionSet?.Actions?.forEach(action => {
            if (action.Type === "Show Message") {
                addToCSV(actionSet.Name, action);
            }

            if (action.Type === "If...then") {
                const conditionalActionSet: ConditionalStatement = action;
                conditionalActionSet.ActionSetOnTrue?.Actions?.forEach(innerAction => {
                    if (innerAction.Type === "Show Message") {
                        addToCSV(`${actionSet.Name} (If True)`, innerAction);
                    }
                });
                conditionalActionSet.ActionSetOnFalse?.Actions?.forEach(innerAction => {
                    if (innerAction.Type === "Show Message") {
                        addToCSV(`${actionSet.Name} (If False)`, innerAction);
                    }
                });
            }
        });
    });

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);       
    link.setAttribute('download', screenName + ' ' + currentVersion + '.csv');

    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link from the DOM
};