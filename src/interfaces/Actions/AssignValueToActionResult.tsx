export interface AssignValueToActionResult {
    Type:                   string;
    AssignValueToActions:   AssignValueToAction[];
    IgnoreLogging:          boolean;
    IsAppRoutineInputValue: boolean;
    Notes:                  string;
    ActionId:               number;
    Disabled:               boolean;
    InValid:                boolean;
    ValidationMessages:     any[];
    Metadata:               null;
}

export interface AssignValueToAction {
    Source:             Source;
    ActionResultId:     string;
    IsSharedResult:     boolean;
    ActionResultName:   string;
    ValidationMessages: any[];
}

export interface Source {
    ValueType:         number;
    Value:             string;
    Property:          string;
    ChildProperty:     null;
    ValidationMessage: null;
    FontStyles:        null;
}
