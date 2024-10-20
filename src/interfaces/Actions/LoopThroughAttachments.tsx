// Generated by https://quicktype.io

export interface LoopThroughAttachments {
    METADATA_ATTACHTOEMAIL: string;
    METADATA_CREATEDBY:     string;
    METADATA_CREATEDDATE:   string;
    METADATA_EXTENSION:     string;
    METADATA_FILENAME:      string;
    METADATA_SIZE:          string;
    METADATA_TENANTID:      string;
    METADATA_URL:           string;
    Type:                   string;
    ViewNameFriendly:       string;
    RecordId:               RecordID;
    LoopActionSet:          LoopActionSet;
    Notes:                  string;
    ActionId:               number;
    Disabled:               boolean;
    InValid:                boolean;
    ValidationMessages:     any[];
    Metadata:               null;
}

export interface LoopActionSet {
    Name:         string;
    ActionSetId:  string;
    Key:          string;
    Scope:        number;
    Actions:      any[];
    Notes:        null;
    IsInAppStore: boolean;
}

export interface RecordID {
    ValueType:         number;
    Value:             number;
    Property:          string;
    ChildProperty:     null;
    ValidationMessage: null;
    FontStyles:        null;
}