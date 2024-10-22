
export interface ActionSet {
    Name:         string;
    ActionSetId:  string;
    Key:          string;
    Scope:        number;
    Actions:      any[];
    Notes:        string;
    IsInAppStore: boolean;
}


export type SimplifiedActionSet = {
    Name: string;
    ActionSetId: string;
    Actions?: any[];
};
