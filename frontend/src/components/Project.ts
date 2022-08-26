import {Status} from "./Enum_Status";

export type Project ={
    id:string,
    projectNumber:number,
    projectName: String,
    status:Status,
    projectMember:string,
}
