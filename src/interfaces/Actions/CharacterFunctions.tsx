export interface CharacterFunctions {
    Type:               string;
    Source:             Source;
    Options:            Options;
    ControlToUpdate:    null;
    ResultToSet:        ResultToSet;
    TextFunctionType:   number;
    Notes:              string;
    ActionId:           number;
    Disabled:           boolean;
    InValid:            boolean;
    ValidationMessages: any[];
    Metadata:           null;
}

export interface Options {
    Separator:          string;
    TextValues:         Source[];
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

export interface ResultToSet {
    Source:             null;
    ActionResultId:     string;
    IsSharedResult:     boolean;
    ActionResultName:   string;
    ValidationMessages: any[];
}
