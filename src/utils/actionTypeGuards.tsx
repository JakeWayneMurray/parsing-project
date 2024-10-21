// src/utils/actionTypeGuards.ts
import { LoopThroughAttachments } from "../interfaces/Actions/LoopThroughAttachments";
import { LoopThroughGrid } from "../interfaces/Actions/LoopThroughGrid";
import { LoopThroughTable } from "../interfaces/Actions/LoopThroughTable";
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
import { DeleteRecordsFromTable } from "../interfaces/Actions/DeleteRecordsFromTable";  
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

export function getActionByType(action: any): 
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
null{
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
