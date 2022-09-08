import {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "./Project";
import {NewProject} from "./NewProject";
import {GridRowId} from "@mui/x-data-grid-premium";

export default function UseProjects() {

    const [projects, setProjects] = useState<Project[]>([])

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

    const getAllRepositoryInfos = (username: string, repositoryname: string) => {
        return axios.post("/stt/github/" + username + "/" + repositoryname)
            .then((response) => {
                getAllProjects()
                return response.data
            });
    }

    return {
        getAllRepositoryInfos,
        projects,
        updateProject,
        addProject,
        deleteProject,
    }
}
