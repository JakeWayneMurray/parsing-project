import { SetViewFilter } from '../interfaces/Actions/SetViewFilter';

//TODO: fully implement this
export function getViewFilterOutput(viewFilter: SetViewFilter): string{
    let output = "Where ";
    viewFilter.ViewFilters.forEach(view => {
        output += "This needs to be implemented";
    })
    return output;
}


