export function getConditinoalType(value: number | null): string{
    if(!value) return "ERROR";
    return ConditionTypes[value];
}

export const ConditionTypes: string[] = [
    "Is Equal",
    "Is Not Equal",
    "Greater Than",
    "Greater or Equal To",
    "Less Than",
    "Less or Equal To",
    "Is Empty",
    "Is Not Empty",
    "Contains",
    "Does Not Contain",
    "Starts With",
    "Does Not Start With",
    "Ends With",
    "In List",
    "Not In List",
    "Is True",
    "Is False"
];