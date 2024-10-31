
import React, { createContext, useContext, useState } from 'react';
import { LoopThroughAttachments } from "../interfaces/Actions/LoopThroughAttachments";
import { LoopThroughGrid } from "../interfaces/Actions/LoopThroughGrid";
import { Designer } from "../interfaces/Designer";
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
import { SimplifiedDesigner } from '../interfaces/Designer';
import { SimplifiedActionSet } from './ActionSet';

export interface DesignerContextType {
    designer: Designer | null | undefined;
    initializeDesigner(designer: Designer | null): void;
    getWhereClauseOutput: (action: LoopThroughTable | DeleteRecordsFromTable | RetrieveValuesFromTable | PrepareForAccounting, indent: string) => string;
    getActionByType: (action: any) => 
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
        null;
    parseActions: () => string;
    extractActionSets: () => SimplifiedActionSet[];
    isValidUUID: (value: string | null | undefined | number) => boolean;
    extractShowMessageActionSets: () => SimplifiedActionSet[];
    simplifiedActionSets:  SimplifiedActionSet[] | null;
    getCallRoutineActionName(actionsetId: string): string;
    getActionOutput(action: any, indent: string): string;

}