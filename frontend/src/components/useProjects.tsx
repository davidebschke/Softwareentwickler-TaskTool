import {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "./Project";
import {NewProject} from "./NewProject";
import {Issue} from "./Issue";
import {GridRowId} from "@mui/x-data-grid-premium";

export default function UseProjects() {

    const [projects, setProjects] = useState<Project[]>([])
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(() => {
            getAllProjects()
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

    const getAllClosedIssues = (username: string ,repositoryName: string ) => {
        axios.get("/stt/github/issuesC/"+ username + "/"+repositoryName)
            .then((response) =>
               response.data)
            .then(setIssues)
    }
    const getAllOpenIssues = (username: string ,repositoryName: string ) => {
        axios.get("/stt/github/issuesO/"+ username + "/"+repositoryName)
            .then((response) =>
                response.data)
            .then(setIssues)
    }

    const getAllRepositoryInfos = (username: string ,repositoryName: string ) => {
        axios.get("/stt/github/"+ username + "/"+repositoryName)
            .then((response) =>
                response.data)
            .then(setIssues)
    }

    return {
        issues,
        getAllOpenIssues,
        getAllClosedIssues,
        getAllRepositoryInfos,
        projects,
        updateProject,
        addProject,
        deleteProject,
    }
}
