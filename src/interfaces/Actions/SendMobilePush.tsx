// Generated by https://quicktype.io

export interface SendMobilePush {
    Type:               string;
    ToUser:             RecordID;
    RecordId:           RecordID;
    ScreenId:           string;
    Title:              Msg;
    Msg:                Msg;
    Sound:              string;
    Priority:           string;
    Notes:              string;
    ActionId:           number;
    Disabled:           boolean;
    InValid:            boolean;
    ValidationMessages: any[];
    Metadata:           null;
}

export interface Msg {
    ValueType:         number;
    Value:             string;
    Property:          string;
    ChildProperty:     null;
    ValidationMessage: null;
    FontStyles:        null;
}

export interface RecordID {
    ValueType:         number;
    Value:             number;
    Property:          string;
    ChildProperty:     null;
    ValidationMessage: null;
    FontStyles:        null;
}