import {Issue} from "./Issue";

export type Project = {
    id: string,
    projectName: string,
    issues: Issue[],
    created_on: string,
}
