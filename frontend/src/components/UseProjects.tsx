import {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "./Project";
import {NewProject} from "./NewProject";

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
    const deleteProject = (id: string) => {
        return axios.delete("/stt/projects/" + id)
            .then((response) => response.status)
            .then(getAllProjects)
    }

    const updateProject = (updatedProject: Project) => {
        return axios.put("/stt/projects/" + updatedProject.id, updatedProject)
            .then(() => {
                    getAllProjects();
                    //navigate('/employees');

            })
    }

    return {
        updateProject,
        addProject,
        projects,
        deleteProject,
    }
}
