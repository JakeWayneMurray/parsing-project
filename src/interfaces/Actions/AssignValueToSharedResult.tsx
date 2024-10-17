export interface AssignValueToSharedResult {
    Type:                 string;
    AssignValueToActions: AssignValueToAction[];
    Notes:                string;
    ActionId:             number;
    Disabled:             boolean;
    InValid:              boolean;
    ValidationMessages:   any[];
    Metadata:             null;
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




