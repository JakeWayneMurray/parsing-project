import React, { createContext, useContext, useState } from 'react';
import { LoopThroughAttachments } from "../interfaces/Actions/LoopThroughAttachments";
import { LoopThroughGrid } from "../interfaces/Actions/LoopThroughGrid";
import { Designer } from "../interfaces/Designer";
import { SimplifiedActionSet } from '../interfaces/ActionSet';
import { LoopThroughTable } from '../interfaces/Actions/LoopThroughTable';
import { AddAttachmentToRecordID } from "../interfaces/Actions/AddAttachmentToRecordID";
import { AssignValueToActionResult } from "../interfaces/Actions/AssignValueToActionResult";
import { CallWebService } from "../interfaces/Actions/CallWebService";
import { ClearScreenForNewEntry } from "../interfaces/Actions/ClearScreenForNewEntry";
import { EnableDisableControls } from "../interfaces/Actions/EnableDisableControls";
import { ExpandCollapseSection } from "../interfaces/Actions/ExpandCollapseSection";
import { SaveAll } from "../interfaces/Actions/SaveAll";
import { SetFocusToControl } from "../interfaces/Actions/SetFocusToControl";
import { SetViewFilter } from "../interfaces/Actions/SetViewFilter";
import { ShowHideControls } from "../interfaces/Actions/ShowHideControls";
import { ShowRightPanel } from "../interfaces/Actions/ShowRightPanel";
import { StopProcessingMoreActions } from "../interfaces/Actions/StopProcessingMoreActions";
import { ValidateControlsOnScreen } from "../interfaces/Actions/ValidateControlsOnScreen";
import { AssignValueToSharedResult } from "../interfaces/Actions/AssignValueToSharedResult";
import { CalculateCurrencyConversion } from "../interfaces/Actions/CalculateCurrencyConversion";
import { CallRoutine } from "../interfaces/Actions/CallRoutine";
import { CharacterFunctions } from "../interfaces/Actions/CharacterFunctions";
import { CheckPermission } from "../interfaces/Actions/CheckPermission";
import { ConditionalStatement } from "../interfaces/Actions/ConditionalStatement";
import { CreateShortMethodURL } from "../interfaces/Actions/CreateShortMethodURL";
import { DateFunctions } from "../interfaces/Actions/DateFunctions";
import { DeleteRecordsFromTable } from '../interfaces/Actions/DeleteRecordsFromTable';
import { GenerateReport } from "../interfaces/Actions/GenerateReport";
import { GoToScreen } from "../interfaces/Actions/GoToScreen";
import { GoToWebpage } from "../interfaces/Actions/GoToWebpage";
import { InsertRecordsIntoTable } from "../interfaces/Actions/InsertRecordsIntoTable";
import { MappingFunctions } from "../interfaces/Actions/MappingFunctions";
import { MathFunctions } from "../interfaces/Actions/MathFunctions";
import { MergeEntitiesContacts } from "../interfaces/Actions/MergeEntitiesContacts";
import { PrepareForAccounting } from "../interfaces/Actions/PrepareForAccounting";
import { ProcessPayment } from "../interfaces/Actions/ProcessPayment";
import { RefreshControl } from "../interfaces/Actions/RefreshControl";
import { RetrieveExchangeRate } from "../interfaces/Actions/RetrieveExchangeRate";
import { RetrieveValueFromEmailGadget } from "../interfaces/Actions/RetrieveValueFromEmailGadget";
import { RetrieveValuesFromTable } from "../interfaces/Actions/RetrieveValuesFromTable";
import { SendEmail } from "../interfaces/Actions/SendEmail";
import { SendMobilePush } from "../interfaces/Actions/SendMobilePush";
import { SendSMS } from "../interfaces/Actions/SendSMS";
import { SetActiveRecordIDForScreen } from "../interfaces/Actions/SetActiveRecordIDForScreen";
import { ShowMessage } from "../interfaces/Actions/ShowMessage";
import { UpdateControlsOnScreen } from "../interfaces/Actions/UpdateControlsOnScreen";
import { UpdateEditableGridReadOnlyProperty } from "../interfaces/Actions/UpdateEditableGridReadOnlyProperty";
import { UpdateFieldsInTable } from "../interfaces/Actions/UpdateFieldsInTable";
import { DesignerContextType } from '../interfaces/DesignerContextInterface';

const DesignerContext = createContext<DesignerContextType | undefined>(undefined);

export const DesignerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [designer, setDesigner] = useState<Designer | null>(null);

    function getWhereClauseOutput(action: LoopThroughTable | DeleteRecordsFromTable | RetrieveValuesFromTable | PrepareForAccounting): string {
        let output = "Where ";
        let whereArray = action.WhereClause;
        whereArray.forEach(where => {
            output += isValidUUID(where.Source?.Value) ? extractActionResultName(where.Source?.Value) : where.Source?.Value + "\n";
            output += where.Source?.Value
        });

        return output;
    }


    function getActionByType(action: any):
        LoopThroughAttachments |
        LoopThroughGrid |
        LoopThroughTable |
        AddAttachmentToRecordID |
        AssignValueToActionResult |
        CallWebService |
        ClearScreenForNewEntry |
        EnableDisableControls |
        ExpandCollapseSection |
        SaveAll |
        SetFocusToControl |
        SetViewFilter |
        ShowHideControls |
        ShowRightPanel |
        StopProcessingMoreActions |
        ValidateControlsOnScreen |
        AssignValueToSharedResult |
        CalculateCurrencyConversion |
        CallRoutine |
        CharacterFunctions |
        CheckPermission |
        ConditionalStatement |
        CreateShortMethodURL |
        DateFunctions |
        DeleteRecordsFromTable |
        GenerateReport |
        GoToScreen |
        GoToWebpage |
        InsertRecordsIntoTable |
        MappingFunctions |
        MathFunctions |
        MergeEntitiesContacts |
        PrepareForAccounting |
        ProcessPayment |
        RefreshControl |
        RetrieveExchangeRate |
        RetrieveValueFromEmailGadget |
        RetrieveValuesFromTable |
        SendEmail |
        SendMobilePush |
        SendSMS |
        SetActiveRecordIDForScreen |
        ShowMessage |
        UpdateControlsOnScreen |
        UpdateEditableGridReadOnlyProperty |
        UpdateFieldsInTable |
        null {
        switch (action.Type) {
            case "Loop Through Attachments":
                return action as LoopThroughAttachments;
            case "Loop Through Grid":
                return action as LoopThroughGrid;
            case "Loop Through Table":
                return action as LoopThroughTable;
            case "Add Attachment To Record ID":
                return action as AddAttachmentToRecordID;
            case "Assign Value To Action Result":
                return action as AssignValueToActionResult;
            case "Call Web Service":
                return action as CallWebService;
            case "Clear Screen For New Entry":
                return action as ClearScreenForNewEntry;
            case "Enable Disable Controls":
                return action as EnableDisableControls;
            case "Expand Collapse Section":
                return action as ExpandCollapseSection;
            case "Save All":
                return action as SaveAll;
            case "Set Focus To Control":
                return action as SetFocusToControl;
            case "Set View Filter":
                return action as SetViewFilter;
            case "Show Hide Controls":
                return action as ShowHideControls;
            case "Show Right Panel":
                return action as ShowRightPanel;
            case "Stop Processing More Actions":
                return action as StopProcessingMoreActions;
            case "Validate Controls On Screen":
                return action as ValidateControlsOnScreen;
            case "Assign Value To Shared Result":
                return action as AssignValueToSharedResult;
            case "Calculate Currency Conversion":
                return action as CalculateCurrencyConversion;
            case "Call Routine":
                return action as CallRoutine;
            case "Character Functions":
                return action as CharacterFunctions;
            case "Check Permission":
                return action as CheckPermission;
            case "If...then":
                return action as ConditionalStatement;
            case "Create Short Method URL":
                return action as CreateShortMethodURL;
            case "Date Functions":
                return action as DateFunctions;
            case "Delete Records From Table":
                return action as DeleteRecordsFromTable;
            case "Generate Report":
                return action as GenerateReport;
            case "Go To Screen":
                return action as GoToScreen;
            case "Go To Webpage":
                return action as GoToWebpage;
            case "Insert Records Into Table":
                return action as InsertRecordsIntoTable;
            case "Mapping Functions":
                return action as MappingFunctions;
            case "Math Functions":
                return action as MathFunctions;
            case "Merge Entities Contacts":
                return action as MergeEntitiesContacts;
            case "Prepare For Accounting":
                return action as PrepareForAccounting;
            case "Process Payment":
                return action as ProcessPayment;
            case "Refresh Control":
                return action as RefreshControl;
            case "Retrieve Exchange Rate":
                return action as RetrieveExchangeRate;
            case "Retrieve Value From Email Gadget":
                return action as RetrieveValueFromEmailGadget;
            case "Retrieve Values From Table":
                return action as RetrieveValuesFromTable;
            case "Send Email":
                return action as SendEmail;
            case "Send Mobile Push":
                return action as SendMobilePush;
            case "Send SMS":
                return action as SendSMS;
            case "Set Active Record ID For Screen":
                return action as SetActiveRecordIDForScreen;
            case "Show Message":
                return action as ShowMessage;
            case "Update Controls On Screen":
                return action as UpdateControlsOnScreen;
            case "Update Editable Grid Read Only Property":
                return action as UpdateEditableGridReadOnlyProperty;
            case "Update Fields In Table":
                return action as UpdateFieldsInTable;
            default:
                return null;
        }
    }


    function getActionOutput(action: any): string {
        let output = ""
        let typedAction;
        switch (action.Type) {
            case "Loop Through Attachments":
                typedAction = action as LoopThroughAttachments;
                output += "Metadata: " + typedAction.Metadata + "\n";

                return output;
            case "Loop Through Grid":
                typedAction = action as LoopThroughGrid;
                output += typedAction.Type + "\n";
                output += "Grid: " + typedAction.GridView + "\n";
                return output;
            case "Loop Through Table":
                typedAction = action as LoopThroughTable;
                //output += "Where: " + typedAction. + "\n";

                output += typedAction.Type + "\n";
                return output;
            case "Add Attachment To Record ID":
                typedAction = action as AddAttachmentToRecordID;
                output += typedAction.Type + "\n";
                return output;
            case "Assign Value To Action Result":
                typedAction = action as AssignValueToActionResult;
                output += typedAction.Type + "\n";
                return output;
            case "Call Web Service":
                typedAction = action as CallWebService;
                output += typedAction.Type + "\n";
                return output;
            case "Clear Screen For New Entry":
                typedAction = action as ClearScreenForNewEntry;
                output += typedAction.Type + "\n";
                return output;
            case "Enable Disable Controls":
                typedAction = action as EnableDisableControls;
                output += typedAction.Type + "\n";
                return output;
            case "Expand Collapse Section":
                typedAction = action as ExpandCollapseSection;
                output += typedAction.Type + "\n";
                return output;
            case "Save All":
                typedAction = action as SaveAll;
                output += typedAction.Type + "\n";
                return output;
            case "Set Focus To Control":
                typedAction = action as SetFocusToControl;
                output += typedAction.Type + "\n";
                return output;
            case "Set View Filter":
                typedAction = action as SetViewFilter;
                output += typedAction.Type + "\n";
                return output;
            case "Show Hide Controls":
                typedAction = action as ShowHideControls;
                output += typedAction.Type + "\n";
                return output;
            case "Show Right Panel":
                typedAction = action as ShowRightPanel;
                output += typedAction.Type + "\n";
                return output;
            case "Stop Processing More Actions":
                typedAction = action as StopProcessingMoreActions;
                output += typedAction.Type + "\n";
                return output;
            case "Validate Controls On Screen":
                typedAction = action as ValidateControlsOnScreen;
                output += typedAction.Type + "\n";
                return output;
            case "Assign Value To Shared Result":
                typedAction = action as AssignValueToSharedResult;
                output += typedAction.Type + "\n";
                return output;
            case "Calculate Currency Conversion":
                typedAction = action as CalculateCurrencyConversion;
                output += typedAction.Type + "\n";
                return output;
            case "Call Routine":
                typedAction = action as CallRoutine;
                output += typedAction.Type + "\n";
                return output;
            case "Character Functions":
                typedAction = action as CharacterFunctions;
                output += typedAction.Type + "\n";
                return output;
            case "Check Permission":
                typedAction = action as CheckPermission;
                output += typedAction.Type + "\n";
                return output;
            case "If...then":
                typedAction = action as ConditionalStatement;
                output += typedAction.Type + "\n";
                return output;
            case "Create Short Method URL":
                typedAction = action as CreateShortMethodURL;
                output += typedAction.Type + "\n";
                return output;
            case "Date Functions":
                typedAction = action as DateFunctions;
                output += typedAction.Type + "\n";
                return output;
            case "Delete Records From Table":
                typedAction = action as DeleteRecordsFromTable;
                output += typedAction.Type + "\n";
                return output;
            case "Generate Report":
                typedAction = action as GenerateReport;
                output += typedAction.Type + "\n";
                return output;
            case "Go To Screen":
                typedAction = action as GoToScreen;
                output += typedAction.Type + "\n";
                return output;
            case "Go To Webpage":
                typedAction = action as GoToWebpage;
                output += typedAction.Type + "\n";
                return output;
            case "Insert Records Into Table":
                typedAction = action as InsertRecordsIntoTable;
                output += typedAction.Type + "\n";
                return output;
            case "Mapping Functions":
                typedAction = action as MappingFunctions;
                output += typedAction.Type + "\n";
                return output;
            case "Math Functions":
                typedAction = action as MathFunctions;
                output += typedAction.Type + "\n";
                return output;
            case "Merge Entities Contacts":
                typedAction = action as MergeEntitiesContacts;
                output += typedAction.Type + "\n";
                return output;
            case "Prepare For Accounting":
                typedAction = action as PrepareForAccounting;
                output += typedAction.Type + "\n";
                return output;
            case "Process Payment":
                typedAction = action as ProcessPayment;
                output += typedAction.Type + "\n";
                return output;
            case "Refresh Control":
                typedAction = action as RefreshControl;
                output += typedAction.Type + "\n";
                return output;
            case "Retrieve Exchange Rate":
                typedAction = action as RetrieveExchangeRate;
                output += typedAction.Type + "\n";
                return output;
            case "Retrieve Value From Email Gadget":
                typedAction = action as RetrieveValueFromEmailGadget;
                output += typedAction.Type + "\n";
                return output;
            case "Retrieve Values From Table":
                typedAction = action as RetrieveValuesFromTable;
                output += typedAction.Type + "\n";
                return output;
            case "Send Email":
                typedAction = action as SendEmail;
                output += typedAction.Type + "\n";
                return output;
            case "Send Mobile Push":
                typedAction = action as SendMobilePush;
                output += typedAction.Type + "\n";
                return output;
            case "Send SMS":
                typedAction = action as SendSMS;
                output += typedAction.Type + "\n";
                return output;
            case "Set Active Record ID For Screen":
                typedAction = action as SetActiveRecordIDForScreen;
                output += typedAction.Type + "\n";
                return output;
            case "Show Message":
                typedAction = action as ShowMessage;
                output += typedAction.Type + "\n";
                return output;
            case "Update Controls On Screen":
                typedAction = action as UpdateControlsOnScreen;
                output += typedAction.Type + "\n";
                return output;
            case "Update Editable Grid Read Only Property":
                typedAction = action as UpdateEditableGridReadOnlyProperty;
                output += typedAction.Type + "\n";
                return output;
            case "Update Fields In Table":
                typedAction = action as UpdateFieldsInTable;
                output += typedAction.Type + "\n";
                return output;
            default:
                return "Invalid action";
        }
    }




    const parseActions = () => {
        let output = `Screen Name: ${designer?.Data?.screen?.name}\n`;
        output += `Modified By: ${designer?.Data?.screen?.modifiedBy}\n`;

        const foundActionSets = extractActionSets();

        const processActionSet = (actionSet: any, indent: string) => {
            output += `${indent}${actionSet.Name || '(Unnamed Action Set)'}: \n`;
            //@ts-ignore
            actionSet.Actions?.forEach(action => {
                output += `${indent}- ${action.Type}\n`; // Output action type with indentation
                if (action.Type === "If...then") {
                    output += `${indent}{\n`;

                    const conditionalActionSet: ConditionalStatement = action;
                    if (conditionalActionSet.ActionSetOnTrue?.Actions) {
                        processActionSet(conditionalActionSet.ActionSetOnTrue, `${indent}  `); // Indent for true actions
                    }
                    if (conditionalActionSet.ActionSetOnFalse?.Actions) {
                        processActionSet(conditionalActionSet.ActionSetOnFalse, `${indent}  `); // Indent for false actions
                    }
                    output += `${indent}}\n`;
                }
                // New handling for Loop actions
                if (action.Type === "Loop Through Attachments") {
                    const loopActionSet: LoopThroughAttachments = action;
                    // Check for nested actions
                    if (loopActionSet.LoopActionSet?.Actions) {
                        output += `${indent}{`;
                        processActionSet(loopActionSet.LoopActionSet, `${indent}    `); // Process nested actions
                        output += `${indent}}`;

                    }
                } else if (action.Type === "Loop Through Grid") {
                    const loopActionSet: LoopThroughGrid = action; // Cast to LoopThroughGrid
                    output += `${indent}  Grid ID: ${loopActionSet.GridId}\n`;
                    output += `${indent}  Only Checked Records: ${loopActionSet.OnlyCheckedRecords}\n`;
                    // Check for nested actions
                    if (loopActionSet.LoopActionSet?.Actions) {
                        output += `${indent}{`;
                        processActionSet(loopActionSet.LoopActionSet, `${indent}    `); // Process nested actions
                        output += `${indent}}`;

                    }
                } else if (action.Type === "Loop Through Table") {
                    const loopActionSet: LoopThroughTable = action; // Assuming LoopThroughTable is defined similarly
                    //@ts-ignore
                    output += `${indent}  Table ID: ${loopActionSet.RecordId}\n`;
                    // Check for nested actions
                    if (loopActionSet.LoopActionSet?.Actions) {
                        output += `${indent}{`;
                        processActionSet(loopActionSet.LoopActionSet, `${indent}    `); // Process nested actions
                        output += `${indent}}`;

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

        return output;
    };

    const extractActionSets = (): SimplifiedActionSet[] => {

        const results: SimplifiedActionSet[] = [];
        const actionSets = designer?.Data?.screen?.actionSets;
        const eventsList = designer?.Data?.screen?.events;
        const controls = designer?.Data?.screen?.controls;

        const traverse = (value: any, parentName?: string) => {
            if (value && typeof value === 'object') {
                const { onClick, onFocus, onChange, onBlur, caption } = value;
                const eventMap = { onClick, onFocus, onChange, onBlur };

                Object.entries(eventMap).forEach(([eventType, eventId]) => {
                    if (eventId) {
                        const realActionSetId = eventsList?.[eventId]?.[0];
                        //@ts-ignore
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

    const isValidUUID = (value: string | null | undefined | number): boolean => {
        // Check if value is null, undefined, or a number
        if (!value || typeof value === 'number') return false;
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(value);
    };

    const extractActionResultName = (actionResultID: string | null | undefined | number): string => {
        if (!actionResultID || typeof actionResultID === 'number') return "No Name Found";


        const actionSets = designer?.Data?.screen?.actionSets;

        const traverse = (value: any): string | undefined => {
            if (value.Type === "Assign Value To Action Result") {
                const typedAction = value as AssignValueToActionResult;
                for (const action of typedAction.AssignValueToActions) {
                    if (action.ActionResultId === actionResultID) {
                        return action.ActionResultName;
                    }
                }
            }

            if (value.Actions) {
                for (const nestedAction of value.Actions) {
                    const result = traverse(nestedAction);
                    if (result) {
                        return result;
                    }
                }
            }
        };

        //@ts-ignore
        for (const actionSet of actionSets) {
            const result = traverse(actionSet);
            if (result) {
                return result; // Return the result if found
            }
        }

        return "ActionResultName not found";
    }

    const extractShowMessageActionSets = (): SimplifiedActionSet[] => {
        const results: SimplifiedActionSet[] = [];
        const actionSets = designer?.Data?.screen?.actionSets;
        const eventsList = designer?.Data?.screen?.events;
        const controls = designer?.Data?.screen?.controls;

        const traverse = (value: any, parentName?: string) => {
            if (value && typeof value === 'object') {
                const { onClick, onFocus, onChange, onBlur, caption } = value;
                const eventMap = { onClick, onFocus, onChange, onBlur };

                Object.entries(eventMap).forEach(([eventType, eventId]) => {
                    if (eventId) {
                        const realActionSetId = eventsList?.[eventId]?.[0];
                        //@ts-ignore
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

    const handleMessageParsing = (filteredActionSets: any, output: string, setOutputBox: (ouptut: string) => void, setShowParsed: (output: boolean) => void) => {
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

    const handleCSVGeneration = (filteredActionSets: any) => {
        // Generate CSV content
        let csvContent = "ActionSet,Title,Body,Buttons,Comments\n";

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
        link.setAttribute('download', 'parsed_data.csv');

        document.body.appendChild(link);
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link from the DOM
    };


    return (
        <DesignerContext.Provider value={{
            designer,
            setDesigner,
            getWhereClauseOutput,
            getActionByType,
            getActionOutput,
            parseActions,
            extractActionSets,
            isValidUUID,
            extractActionResultName,
            extractShowMessageActionSets,
            handleMessageParsing,
            handleCSVGeneration
        }}>
            {children}
        </DesignerContext.Provider>
    );
};

export const useDesigner = () => {
    const context = useContext(DesignerContext);
    if (!context) {
        throw new Error('useDesigner must be used within a DesignerProvider');
    }
    return context;
};