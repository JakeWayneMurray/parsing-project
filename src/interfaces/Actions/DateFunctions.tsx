export interface DateFunctions {
    Type:               string;
    Source:             Source;
    ControlToUpdate:    null;
    ResultToSet:        ResultToSet;
    DateFunctionType:   number;
    Options:            Options;
    Notes:              string;
    ActionId:           number;
    Disabled:           boolean;
    InValid:            boolean;
    ValidationMessages: any[];
    Metadata:           null;
}

export interface Options {
    Amount:             Amount;
    ValidationMessages: any[];
}

export interface Amount {
    ValueType:         number;
    Value:             number;
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

export interface Source {
    ValueType:         number;
    Value:             Date;
    Property:          string;
    ChildProperty:     null;
    ValidationMessage: null;
    FontStyles:        null;
}
