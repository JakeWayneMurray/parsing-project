// Generated by https://quicktype.io

export interface LoopThroughGrid {
    Type:               string;
    GridId:             string;
    OnlyCheckedRecords: boolean;
    LoopActionSet:      LoopActionSet;
    GridView:           null;
    Notes:              string;
    ActionId:           number;
    Disabled:           boolean;
    InValid:            boolean;
    ValidationMessages: any[];
    Metadata:           null;
}

export interface LoopActionSet {
    Name:         string;
    ActionSetId:  string;
    Key:          string;
    Scope:        number;
    Actions:      any[];
    Notes:        string;
    IsInAppStore: boolean;
}
