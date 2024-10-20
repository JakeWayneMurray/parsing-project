// Generated by https://quicktype.io

export interface SetActiveRecordIDForScreen {
    Type:                string;
    ActiveRecordId:      ActiveRecordID;
    NoReload:            boolean;
    NoRecordChangeEvent: boolean;
    NoRefresh:           boolean;
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