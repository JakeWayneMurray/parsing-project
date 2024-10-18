import { WhereClause } from '../interfaces/Actions/PrepareForAccounting';

type ActionSet = {
    Name: string;
    ActionSetId: string;
    Actions?: any[]; // Include actions in the ActionSet type
    onClick?: string | null;
    onFocus?: string | null;
    onChange?: string | null;
    onBlur?: string | null;
};

type DesignerData = {
    [key: string]: any; // General type for flexibility
};

const constructName = (caption: string, onClick?: string | null, onFocus?: string | null, onChange?: string | null, onBlur?: string | null): string => {
    const parts = [caption];

    if (onClick) parts.push(' (OnClick)');
    if (onFocus) parts.push(' (OnFocus)');
    if (onChange) parts.push(' (OnChange)');
    if (onBlur) parts.push(' (OnBlur)');

    return parts.join(' ').trim();
};

export const extractActionSets = (obj: DesignerData): ActionSet[] => {
    const results: ActionSet[] = [];
    const actionSets = obj?.Data?.screen?.actionSets || {}; // Get actionSets from the response

    const traverse = (value: any) => {
        if (value && typeof value === 'object') {
            const actionSetId = value.ActionSetId || value.id; // Adjust as needed
            const caption = value.caption || '';

            // Destructure the properties
            const { onClick, onFocus, onChange, onBlur } = value;

            // Check if we should add this action set
            if (actionSetId && (caption || onClick || onFocus || onChange || onBlur)) {
                // Get actions corresponding to the actionSetId

                const actions = actionSets[actionSetId]?.Actions || []; // Retrieve actions

                results.push({
                    Name: constructName(caption, onClick, onFocus, onChange, onBlur),
                    ActionSetId: actionSetId,
                    Actions: [...actions], // Spread into a new array to avoid reference issues
                    onClick: onClick || null,
                    onFocus: onFocus || null,
                    onChange: onChange || null,
                    onBlur: onBlur || null,
                });
                console.log(actions)
            }

            // Recursively search through all properties
            Object.values(value).forEach(traverse);
        }
    };

    traverse(obj);
    return results;
};

export const getActions = (actionSetId: string, obj: DesignerData) => {
    const results: ActionSet[] = [];
    const actionSets = obj?.Data?.screen?.actionSets || {}; // Ensure it's an object

    // Log the actionSets to verify structure
    console.log('actionSets:', actionSets);

    // Convert actionSets object to an array and find the matching action set
    //@ts-ignore
    const actionSet = Object.values(actionSets).find(set => set.ActionSetId === actionSetId);

    // Log the found actionSet
    console.log('Found actionSet:', actionSet);

    if (actionSet) {
        //@ts-ignore
        results.push(...actionSet.Actions); // Assuming Actions is an array
    }

    return results;
};
