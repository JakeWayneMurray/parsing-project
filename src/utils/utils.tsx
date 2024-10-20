type ActionSet = {
    Name: string;
    ActionSetId: string;
    Actions?: any[];
};

type DesignerData = {
    Data: {
        screen: {
            actionSets: Record<string, any>;
            events: Record<string, any>;
            controls: any;
        };
    };
};

export const extractActionSets = (obj: DesignerData): ActionSet[] => {
    const results: ActionSet[] = [];
    const actionSets = obj?.Data?.screen?.actionSets;
    const eventsList = obj?.Data?.screen?.events;
    const controls = obj?.Data?.screen?.controls;

    const traverse = (value: any, parentName?: string) => {
        if (value && typeof value === 'object') {
            const { onClick, onFocus, onChange, onBlur, caption } = value;
            const eventMap = { onClick, onFocus, onChange, onBlur };

            Object.entries(eventMap).forEach(([eventType, eventId]) => {
                if (eventId) {
                    const realActionSetId = eventsList?.[eventId]?.[0];
                    const actionSet = actionSets?.[realActionSetId];

                    if (actionSet) {
                        results.push({
                            Name: `${caption || parentName || 'Unnamed Action'} (${eventType})`,
                            ActionSetId: realActionSetId || 'Unknown',
                            Actions: actionSet?.Actions || [],
                        });
                    }
                }
            });

            Object.values(value).forEach((e) => traverse(e, caption || parentName));
        }
    };

    traverse(controls);
    return results;
};

export const extractShowMessageActionSets = (obj: DesignerData): ActionSet[] => {
    const results: ActionSet[] = [];
    const actionSets = obj?.Data?.screen?.actionSets;
    const eventsList = obj?.Data?.screen?.events;
    const controls = obj?.Data?.screen?.controls;

    const traverse = (value: any, parentName?: string) => {
        if (value && typeof value === 'object') {
            const { onClick, onFocus, onChange, onBlur, caption } = value;
            const eventMap = { onClick, onFocus, onChange, onBlur };

            Object.entries(eventMap).forEach(([eventType, eventId]) => {
                if (eventId) {
                    const realActionSetId = eventsList?.[eventId]?.[0];
                    const actionSet = actionSets?.[realActionSetId];

                    if (actionSet) {
                        // Filter actions to only include those of type "Show Message"
                        //@ts-ignore
                        const filteredActions = actionSet?.Actions?.filter(action => action.Type === "Show Message") || [];

                        results.push({
                            Name: `${caption || parentName || 'Unnamed Action'} (${eventType})`,
                            ActionSetId: realActionSetId || 'Unknown',
                        //@ts-ignore
                        Actions: filteredActions.map(action => ({
                                Title: action.Title || 'No title',
                                Message: action.Message || 'No message',
                                Buttons: action.Buttons || 'No buttons',
                                Notes: action.Notes || 'No comments',
                            })),
                        });
                    }
                }
            });

            Object.values(value).forEach((e) => traverse(e, caption || parentName));
        }
    };

    traverse(controls);
    return results;
};