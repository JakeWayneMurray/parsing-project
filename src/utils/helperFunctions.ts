import { DesignerJSON } from "../assets";
import type { Designer, Data, Screen, VersionList } from "../interfaces/Designer";

export const parser = (): Designer | null => {
    try {
       const designer: Designer = DesignerJSON as unknown as Designer; 
       return designer;
    } catch (error) {
        console.error("Error parsing Designer JSON:", error);
        return null;
    }
    
};
