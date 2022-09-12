import {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "./Project";
import {NewProject} from "./NewProject";
import {GridRowId} from "@mui/x-data-grid-premium";
import {Issue} from "./Issue";

export default function UseProjects() {

    const [projects, setProjects] = useState<Project[]>([])
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(() => {
        getAllProjects()
        getAllIssue()
    }, [])

    const getAllProjects = () => {
        axios.get("/stt/projects")
            .then((response) => response.data)
            .then(setProjects)
    }

    const addProject = (newProject: NewProject) => {

        return axios.post("/stt/projects", newProject)
            .then((response) => {
                    getAllProjects()
                    return response.data
                }
            );
    }
    const deleteProject = (id: GridRowId[]) => {
        return axios.delete("/stt/projects",{data:id})
            .then((response) => response.status)
            .then(getAllProjects)
    }

    const updateProject = (updatedProject: Project) => {
        return axios.put("/stt/projects", updatedProject)
            .then(() => {
                getAllProjects();
            })
    }

    const getAllRepositoryInfos = (username: string, repositoryname: string) => {
        return axios.post("/stt/github/" + username + "/" + repositoryname)
            .then((response) => {
                getAllProjects()
                return response.data
            });
    }

    const getAllIssue = () => {
        axios.get("/stt/github/issue")
            .then((response) => response.data)
            .then(setIssues)
    }

    const addIssue = (issue: Issue) => {

        return axios.post("/stt/github/issue", issue)
            .then((response) => {
                    getAllIssue()
                    return response.data
                }
            );
    }

    return {
        issues,
        addIssue,
        getAllRepositoryInfos,
        projects,
        updateProject,
        addProject,
        deleteProject,
    }
}
