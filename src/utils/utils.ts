import { SetViewFilter } from '../interfaces/Actions/SetViewFilter';

export function getViewFilterOutput(viewFilter: SetViewFilter): string{
    let output = "Where ";
    viewFilter.ViewFilters.forEach(view => {
        output += "This needs to be implemented";
    })
    return output;
}


