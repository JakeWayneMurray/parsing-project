// Generated by https://quicktype.io

export interface CalculateCurrencyConversion {
    Type:               string;
    Value:              ExchangeRate;
    ExchangeRate:       ExchangeRate;
    ToHomeCurrency:     boolean;
    ControlToUpdate:    null;
    UpdateControl:      boolean;
    ResultToSet:        ResultToSet;
    Notes:              string;
    ActionId:           number;
    Disabled:           boolean;
    InValid:            boolean;
    ValidationMessages: any[];
    Metadata:           null;
}

export interface ExchangeRate {
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