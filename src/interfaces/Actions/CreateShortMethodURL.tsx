// Generated by https://quicktype.io

export interface CreateShortMethodURL {
    Type:               string;
    Domain:             number;
    InviteType:         number;
    ScreenId:           string;
    ActiveRecordId:     RecordID;
    ActivityRecordId:   null;
    CampaignRecordId:   null;
    ContactRecordId:    RecordID;
    ResultToSet:        ResultToSet;
    ControlToUpdate:    null;
    Notes:              string;
    ActionId:           number;
    Disabled:           boolean;
    InValid:            boolean;
    ValidationMessages: any[];
    Metadata:           null;
}

export interface RecordID {
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
