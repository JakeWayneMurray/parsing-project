// Generated by https://quicktype.io

export interface GoToScreen {
    Type:                string;
    ScreenId:            string;
    ActiveRecordId:      ActiveRecordID;
    ReplaceHistory:      boolean;
    RefreshOnTransition: boolean;
    RefreshCurrent:      boolean;
    OpenIn:              number;
    Params:              Param[];
    Notes:               string;
    ActionId:            number;
    Disabled:            boolean;
    InValid:             boolean;
    ValidationMessages:  any[];
    Metadata:            null;
}

export interface ActiveRecordID {
    ValueType:         number;
    Value:             number;
    Property:          string;
    ChildProperty:     null;
    ValidationMessage: null;
    FontStyles:        null;
}

export interface Param {
    Key:   null;
    Value: Value;
}

export interface Value {
    ValueType:         number;
    Value:             string;
    Property:          string;
    ChildProperty:     null;
    ValidationMessage: null;
    FontStyles:        null;
}