import React, { createContext, useContext, useState } from 'react';
import { LoopThroughAttachments } from "../interfaces/Actions/LoopThroughAttachments";
import { LoopThroughGrid } from "../interfaces/Actions/LoopThroughGrid";
import { Designer, Expression } from '../interfaces/Designer';
import { SimplifiedActionSet } from '../interfaces/ActionSet';
import { LoopThroughTable } from '../interfaces/Actions/LoopThroughTable';
import { AddAttachmentToRecordID } from "../interfaces/Actions/AddAttachmentToRecordID";
import { AssignValueToActionResult, AssignValueToActions } from "../interfaces/Actions/AssignValueToActionResult";
import { CallWebService } from "../interfaces/Actions/CallWebService";
import { ClearScreenForNewEntry } from "../interfaces/Actions/ClearScreenForNewEntry";
import { EnableDisableControls } from "../interfaces/Actions/EnableDisableControls";
import { ExpandCollapseSection } from "../interfaces/Actions/ExpandCollapseSection";
import { SaveAll } from "../interfaces/Actions/SaveAll";
import { SetFocusToControl } from "../interfaces/Actions/SetFocusToControl";
import { SetViewFilter } from '../interfaces/Actions/SetViewFilter';
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
import { ActionResult, ProcessPayment } from "../interfaces/Actions/ProcessPayment";
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
import { TextFunctionType } from '../constants/textFunctionTypes';
import { PermissionTypes } from '../constants/permission';
import { getConditionalType } from '../constants/conditionals';
import { DateFunctionTypes } from '../constants/dateFunctionTypes';
import { ReportTypes } from '../constants/reportType';
import { MathFunctionTypes, MathFunctionExpressions } from '../constants/mathFunctionTypes';
import { ProcessPaymentTypes } from '../constants/processPaymentTypes';
import { getViewFilterOutput } from '../utils/utils';


const DesignerContext = createContext<DesignerContextType | undefined>(undefined);

export const DesignerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [designer, setDesigner] = useState<Designer | null>();
    const [simplifiedActionSets, setSimplifiedActionSet] = useState<SimplifiedActionSet[]>([]); // Changed from SimplifiedActionSet | [] to SimplifiedActionSet[]
    const [controls, setControls] = useState<Record<string, string>>({});
    const [actionResults, setActionResults] = useState<Record<string, string>>({});

    async function initializeDesigner(newDesigner: Designer | null): Promise<void> {
        setDesigner(newDesigner)
    }

    function getConditionalOutput(action: ConditionalStatement, indent: string): string {
        const getSourceValue = (value: any) => {
            let output = ""
            if(!value) return "null"
            output += actionResults[value] ? actionResults[value] : (controls[value] ? controls[value] : value);
            return output; 
        }
        
        let output = "";

        action.ExpressionList.forEach((e : Expression) => {
            const operation = e.Operation;
            switch(operation){
                case 0: output += indent + "If "; break;
                case 1: output += "\n"; break;
                case 2: output += indent + "\nAND\n"; break;
                case 3: output += indent + "\nOR\n"; break;
                case null: output += getSourceValue(e.Source?.Value); break;
                default: output += " " + getConditionalType(operation) + " ";
            }
        });
        return output;
    }


    function getWhereClauseOutput(action: LoopThroughTable | DeleteRecordsFromTable | RetrieveValuesFromTable | PrepareForAccounting, indent: string): string {
        let output = "Where ";
        let whereArray = action.WhereClause;
        whereArray.forEach(where => {
            if (where.Source?.Value) output += "\t" + actionResults[where.Source?.Value] + "\n" + indent;
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
            case "Retrive Values From Table":
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


    function getActionOutput(action: any, indent: string): string {
        let output = indent;
        let typedAction;
        switch (action.Type) {
            case "Loop Through Attachments":
                typedAction = action as LoopThroughAttachments;
                output += "\tTable: " + typedAction.ViewNameFriendly + "\n"
                output += "\tMetadata: " + typedAction.Metadata + "\n";
                return output;

            case "Loop Through Grid":
                typedAction = action as LoopThroughGrid;
                output += "\tGrid: " + typedAction.GridView + "\n";
                output += "\tOnly checked: " + (typedAction.OnlyCheckedRecords ? "true" : "false");
                return output;

            case "Loop Through Table":
                typedAction = action as LoopThroughTable;
                output += "\tTable:" + typedAction.ViewNameFriendly + "\n";
                output += "\tWhere: " + getWhereClauseOutput(typedAction, indent) + "\n";
                return output;

            case "Add Attachment To Record ID":
                typedAction = action as AddAttachmentToRecordID;
                output += "\tTable: " + typedAction.ViewNameFriendly + "\n";
                return output;

            case "Assign Value To Action Result":
                typedAction = action as AssignValueToActionResult;
                typedAction.AssignValueToActions.forEach((assignValue: AssignValueToActions) => {
                    const sourceValue = isValidUUID(assignValue.Source?.Value) ? actionResults[assignValue.Source?.Value] : assignValue.Source?.Value;
                    output += `\t${sourceValue} -> ${assignValue.ActionResultName}\n`;
                });
                return output;

            case "Call Web Service":
                typedAction = action as CallWebService;
                return output;

            case "Clear Screen For New Entry":
                typedAction = action as ClearScreenForNewEntry;
                return output;

            case "Enable Disable Controls":
                typedAction = action as EnableDisableControls;
                typedAction.ControlsToUpdate.forEach((control) => {
                    output += "\t" + controls[control.ControlId] + " -> " +
                        (control.ToggleOptions === 1 ? "Enabled" : "Disabled") + "\n";
                })

                return output;

            case "Expand Collapse Section":
                typedAction = action as ExpandCollapseSection;
                typedAction.ControlsToUpdate.forEach((control) => {
                    output += "\t" + controls[control.ControlId] + " -> " +
                        (control.ToggleOptions === 1 ? "Expanded" : "Collapsed") + "\n";
                })
                return output;

            case "Save All":
                typedAction = action as SaveAll;
                return output;

            case "Set Focus To Control":
                typedAction = action as SetFocusToControl;
                output += "\tSet Focus to " + controls[typedAction.ControlId] + "\n";
                return output;

            case "Set View Filter":
                typedAction = action as SetViewFilter;
                output += "\t" + typedAction + getViewFilterOutput(action) + "\n";
                return output;

            case "Show Hide Controls":
                typedAction = action as ShowHideControls;
                typedAction.ControlsToUpdate.forEach((control) => {
                    output += "\t" + controls[control.ControlId] + " -> " +
                        (control.ToggleOptions === 1 ? "Show" : "Hide") + "\n";
                })
                return output;

            case "Show Right Panel":
                typedAction = action as ShowRightPanel;
                return output;

            case "Stop Processing More Actions":
                typedAction = action as StopProcessingMoreActions;
                return output;

            case "Validate Controls On Screen":
                typedAction = action as ValidateControlsOnScreen;
                typedAction.ControlsToValidate.forEach((control) => {
                    output += "\t" + controls[control.ControlId];
                })

                return output;
            case "Assign Value To Shared Result":
                typedAction = action as AssignValueToSharedResult;
                typedAction.AssignValueToActions.forEach((action) => {
                    output += "\t" + action.Source.Value + " -> " + action.ActionResultName + "\n";
                    ;
                })
                return output;

            case "Calculate Currency Conversion":
                typedAction = action as CalculateCurrencyConversion;
                output += "\t" + typedAction.Value.Value
                return output;

            //TODO: Expand the functionality    
            case "Call Routine":
                typedAction = action as CallRoutine;
                output += "\t" + getCallRoutineActionName(typedAction.ActionSetId);
                return output;

            //TODO: Expand the functionality  
            case "Character Functions":
                typedAction = action as CharacterFunctions;
                output += "\t" + TextFunctionType[typedAction.TextFunctionType] + "\n";
                output += "\t" + typedAction.Notes + "\n";
                return output;

            //TODO: Get the AppId's     
            case "Check Permission":
                typedAction = action as CheckPermission;
                output += "\tapp unknown " + PermissionTypes[typedAction.Permission] + " permission for " + typedAction.User?.Value + "\n";
                output += "\tcomments: " + typedAction.Notes + "\n";
                return output;

            case "If...then":
                typedAction = action as ConditionalStatement;
                output += "\t" + getConditionalOutput(typedAction, indent) + "\n";
                return output;

            case "Create Short Method URL":
                typedAction = action as CreateShortMethodURL;
                output += "\tcreated for " + typedAction.ScreenId + " -> " + typedAction.ResultToSet + "\n";
                output += "\tComments: " + typedAction.Notes + "\n";
                return output;

            //TODO: Expand the functionality  
            case "Date Functions":
                typedAction = action as DateFunctions;
                output += "\t" + DateFunctionTypes[typedAction.DateFunctionType] + "-> \n";
                return output;

            case "Delete Records From Table":
                typedAction = action as DeleteRecordsFromTable;
                output += "\t" + typedAction.ViewNameFriendly + "\n";
                output += "\t" + getWhereClauseOutput(typedAction, indent) + "\n";
                return output;

            case "Generate Report":
                typedAction = action as GenerateReport;
                output += "\t" + typedAction.ReportName + "in " + ReportTypes[typedAction.ReportType] + "format \n";
                return output;

            case "Go To Screen":
                typedAction = action as GoToScreen;
                output += "\tGo to " + typedAction.ScreenId + "\n";
                output += "\tComments: " + typedAction.Notes + "\n";
                return output;

            case "Go To Webpage":
                typedAction = action as GoToWebpage;
                output += "\tWebpage: " + typedAction + "\n";
                output += "\tComments: " + typedAction.Notes + "\n";
                return output;

            case "Insert Records Into Table":
                typedAction = action as InsertRecordsIntoTable;

                output += "\tTable:" + typedAction.ViewNameFriendly + "\n";
                typedAction.Fields.forEach((field) => {
                    output += "\t" + field.Field + " -> " + actionResults[field.Source.Value] + "\n";
                    ;
                })
                return output;

            //TODO: Expand the functionality  
            case "Mapping Functions":
                typedAction = action as MappingFunctions;
                output += "\tComments: " + typedAction.Notes + "\n";
                return output;

            //TODO: Expand the functionality  
            case "Math Functions":
                typedAction = action as MathFunctions;
                output += "\t" + MathFunctionTypes[typedAction.MathFunctionType] + "\n";
                output += "\t" + (typedAction.Values[0] ? typedAction.Values[0] : "NAN") + MathFunctionExpressions[typedAction.MathFunctionType] + (typedAction.Values[1] ? typedAction.Values[1] : "NAN")
                return output;

            case "Merge Entities Contacts":
                typedAction = action as MergeEntitiesContacts;
                output += "\tFrom RecordID: " + typedAction.FromRecordID;
                output += "\tTo RecordID: " + typedAction.ToRecordID;
                output += "\tComments: " + typedAction.Notes + "\n";
                return output;

            case "Prepare For Accounting":
                typedAction = action as PrepareForAccounting;
                output += "\t" + typedAction.ViewNameFriendly + "\n";
                output += "\t" + getWhereClauseOutput(typedAction, indent) + "\n";
                output += "\tOverride sync: " + (typedAction.SyncOverride ? "true" : "false") + "\n";
                return output;

            case "Process Payment":
                typedAction = action as ProcessPayment;
                output += "\tType: " + ProcessPaymentTypes[typedAction.ActionType] + "\n";
                output += "\tEntity recordID: " + typedAction.EntityId + "\n";
                output += "\tAmount: " + typedAction.Amount + "\n";
                output += "\tResponse -> " + typedAction.ActionResultGatewayResponse.ActionResultName + "\n";
                output += "\tProcess successful -> " + typedAction.ActionResultSuccessOrFail.ActionResultName + "\n";
                output += "\tReference # -> " + typedAction.ActionResultReferenceNumber.ActionResultName + "\n";
                return output;

            case "Refresh Control":
                typedAction = action as RefreshControl;
                typedAction.ControlsToRefresh.forEach((control) => {
                    output += "\t" + controls[control.ControlId] + "\n";
                })
                return output;

            //TODO: Expand the functionality      
            case "Retrieve Exchange Rate":
                typedAction = action as RetrieveExchangeRate;
                output += "\tComments: " + typedAction.Notes + "\n";
                return output;

            case "Retrieve Value From Email Gadget":
                typedAction = action as RetrieveValueFromEmailGadget;
                typedAction.Bindings.forEach((binding) => {
                    if (binding.ControlToUpdate) output += "\t" + binding.ValueName + " -> " + (binding.UpdateControl ? controls[binding.ControlToUpdate] : binding.ResultToSet.ActionResultName) + "\n";
                })
                return output;
            case "Retrive Values From Table":
                typedAction = action as RetrieveValuesFromTable;
                output += "\tTable: " + typedAction.ViewNameFriendly + "\n";
                output += getWhereClauseOutput(typedAction, indent);
                typedAction.Bindings.forEach((binding) => {
                    if (binding.ControlToUpdate) output += "\t" + binding.FieldName + " -> " + (binding.UpdateControl ? controls[binding.ControlToUpdate] : binding.ResultToSet.ActionResultName) + "\n";
                })
                return output;

            case "Send Email":
                typedAction = action as SendEmail;
                output += "\tSenders Email Address: " + typedAction.From.Value + "\n";
                output += "\tSenders Name: " + typedAction.FromName.Value + "\n";
                output += "\tContact RecordID: " + typedAction.ContactRecordId.Value + "\n";
                output += "\tContact RecordID: " + typedAction.ContactRecordId.Value + "\n";
                output += "\tRecipient Email Address: " + typedAction.To.Value + "\n";
                output += "\tSubject: " + typedAction.Subject.Value + "\n";
                output += "\tBody: " + typedAction.Metadata + "\n";
                return output;

            case "Send Mobile Push":
                typedAction = action as SendMobilePush;
                output += "\tTo: " + typedAction.ToUser.Value + "\n";
                output += "\tTitle: " + typedAction.Title + "\n";
                output += "\tMessage: " + typedAction.Msg + "\n";
                return output;

            case "Send SMS":
                typedAction = action as SendSMS;
                output += "\tTo: " + typedAction.PhoneTo.Value + "\n";
                output += "\tMessage: " + typedAction.Message + "\n";
                return output;

            case "Set Active Record ID For Screen":
                typedAction = action as SetActiveRecordIDForScreen;
                output += "\tSet to " + typedAction.ActiveRecordId + "\n";
                return output;

            case "Show Message":
                typedAction = action as ShowMessage;
                output += "\tTitle: " + typedAction.Title + "\n";
                output += "\tBody: " + typedAction.Message + "\n";
                output += "\tButtons: " + typedAction.Buttons + "\n";
                return output;

            case "Update Controls On Screen":
                typedAction = action as UpdateControlsOnScreen;
                typedAction.ControlsToUpdate.forEach((control) => {
                    output += "\t" + controls[control.ControlId] + " -> " + actionResults[control.Source.Value] + "\n";
                })
                return output;

            case "Update Editable Grid Read Only Property":
                typedAction = action as UpdateEditableGridReadOnlyProperty;
                typedAction.ControlsToUpdate.forEach((control) => {
                    output += "\t" + controls[control.ControlId] + " -> " + (control.ToggleOptions === 1 ? "read only" : "editable") + "\n";
                })
                return output;

            case "Update Fields In Table":
                typedAction = action as UpdateFieldsInTable;
                output += "\tTable: " + typedAction.ViewNameFriendly + "\n";
                typedAction.Fields.forEach((field) => {
                    output += "\t" + field.Field + " -> " + controls[field.Source.Value];
                })
                return output;

            default:
                return "Invalid action: " + action.type + "\n";
        }
    }


    const parseActions = async (): Promise<string> => {
        console.log("Parsing actions...");
        let output = `Screen Name: ${designer?.Data?.screen?.name}\n`;
        output += `Modified By: ${designer?.Data?.screen?.modifiedBy}\n`;
        const currentVersionId = designer?.Data?.screen?.versionId;
        //@ts-ignore
        const currentVersion = designer?.Data?.versionList[currentVersionId];
        output += currentVersion + '\n';
        if(!designer) {return 'press the button again';}
        await extractControlNames();
        await extractActionResults();

        console.log(actionResults);
        console.log(controls);

        const foundActionSets = extractActionSets();

        const processActionSet = (actionSet: any, indent: string) => {
            output += `${indent}${actionSet.Name || '(Unnamed Action Set)'}: \n`;

            //@ts-ignore
            actionSet.Actions?.forEach(action => {
                output += `${indent}- ${action.Type}\n`;
                output += getActionOutput(action, indent);
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
                }
                if (action.Type === "Loop Through Grid") {
                    const loopActionSet: LoopThroughGrid = action; // Cast to LoopThroughGrid
                    output += `${indent}  Grid ID: ${loopActionSet.GridId}\n`;
                    output += `${indent}  Only Checked Records: ${loopActionSet.OnlyCheckedRecords}\n`;
                    // Check for nested actions
                    if (loopActionSet.LoopActionSet?.Actions) {
                        output += `${indent}{`;
                        processActionSet(loopActionSet.LoopActionSet, `${indent}    `); // Process nested actions
                        output += `${indent}}`;

                    }
                }
                if (action.Type === "Loop Through Table") {
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
                output += getActionOutput(action, indent);

            });
        };

        Object.values(foundActionSets).forEach(actionSet => {
            console.log("Processing action set:", actionSet);
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
        setSimplifiedActionSet(results);
        return results;
    };


    const extractControlNames = async () => {
        const controls: Record<string, string> = {};

        function traverse(obj: any) {
            if (Array.isArray(obj)) {
                obj.forEach(item => traverse(item));
            } else if (typeof obj === 'object' && obj !== null) {
                if (obj.hasOwnProperty('id') && obj.hasOwnProperty('name')) {
                    controls[obj.id] = obj.name;
                }
                Object.values(obj).forEach(value => traverse(value));
            }
        }

        traverse(designer);
        setControls(controls);
    }

    const isValidUUID = (value: string | null | undefined | number): boolean => {
        // Check if value is null, undefined, or a number
        if (!value || typeof value === 'number') return false;
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(value);
    };

    function getCallRoutineActionName(actionsetId: string): string {
        try {
            if (simplifiedActionSets) return simplifiedActionSets.filter(e => e.ActionSetId === actionsetId)[0].Name;
        }
        finally {
            return "actionSet name couldn't be found \n"
        }
    }


    function extractActionResults() {
        const actionResultNames: Record<string, string> = {};

        //@ts-ignore
        function traverseActions(actions) {
            //@ts-ignore
            actions.forEach(action => {
                // Check if the action has the expected properties
                if (action.ActionResultName && action.Source) {
                    const typedAction = action as ActionResult;
                    actionResultNames[typedAction.ActionResultId] = action.ActionResultName;
                }

                // Handle nested actions if they exist
                if (action.AssignValueToActions) {
                    traverseActions(action.AssignValueToActions);
                }

                // Check for other potential nested structures
                if (action.Actions) {
                    traverseActions(action.Actions);
                }
            });
        }

        const actionSets = designer?.Data.screen.actionSets as Record<string, any>;
        Object.values(actionSets).forEach(actionSet => {
            if (actionSet.Actions) traverseActions(actionSet.Actions);
            if (actionSet.Actions.ActionsOnTrue) traverseActions(actionSet.Actions.ActionsOnTrue);
            if (actionSet.Actions.ActionsOnFalse) traverseActions(actionSet.Actions.ActionsOnFalse);

        });

        setActionResults(actionResultNames);
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


    return (
        <DesignerContext.Provider value={{
            designer,
            simplifiedActionSets,
            initializeDesigner,
            getWhereClauseOutput,
            getActionByType,
            parseActions,
            extractActionSets,
            isValidUUID,
            extractShowMessageActionSets,
            getCallRoutineActionName,
            getActionOutput
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

