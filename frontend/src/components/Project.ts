import {Status} from "./Enum_Status";

export type Project ={
    id:string,
    projectNumber:number,
    projectName: string,
    status:Status,
    projectMember:string,
}
