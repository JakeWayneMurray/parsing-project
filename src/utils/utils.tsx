
type ActionSet = {
    Name: string;
    ActionSetId: string;
    Actions?: any[]; // Include actions in the ActionSet type
};

type DesignerData = {
    [key: string]: any; // General type for flexibility
};
export const extractActionSets = (obj: DesignerData): ActionSet[] => {
    const results: ActionSet[] = [];
    const actionSets = obj?.Data?.screen?.actionSets;
    const eventsList = obj?.Data?.screen?.events;
    const controls = obj?.Data.screen;

    const traverse = (value: any, parentName?: string) => {
        if (value && typeof value === 'object') {
            const actionSetId = value.ActionSetId || null;

            // Destructure the event properties
            const { onClick, onFocus, onChange, onBlur } = value;

            // Define the current name (use parentName if available)
            let currentName = parentName;

            if (value.caption) {
                currentName = value.caption; // Prefer the current element's caption if it exists
            } else if (!currentName) {
                currentName = 'Unnamed Action'; // Fallback to 'Unnamed Action'
            }

            // Log for debugging
            console.log('Parent Name:', parentName);
            console.log('Current Caption:', value.caption);
            console.log('Selected Name:', currentName);

            // If there are event properties, try to get the actionSet
            if (actionSetId || onClick || onFocus || onChange || onBlur) {
                let realActionSetId = actionSetId;

                if (actionSetId && eventsList) {
                    // Find the corresponding realActionSetId from eventsList
                    //@ts-ignore
                    const event = Object.values(eventsList).find(e => e.key === actionSetId);
                    if (event) {
                        //@ts-ignore
                        realActionSetId = event.actionSetId;
                    }
                }

                // Find the action set from the available actionSets
                const actionSet = actionSets?.[realActionSetId];

                if (actionSet) {
                    // Add action set to the results with a proper name
                    results.push({
                        Name: currentName || 'Unnamed Action', // Ensure name fallback
                        ActionSetId: realActionSetId || 'Unknown',
                        Actions: actionSet?.Actions || [],
                    });
                }
            }

            // Recursively search through all nested properties
            Object.values(value).forEach((e) => traverse(e, currentName)); // Pass the currentName to children
        }
    };

    traverse(controls);
    return results;
};
