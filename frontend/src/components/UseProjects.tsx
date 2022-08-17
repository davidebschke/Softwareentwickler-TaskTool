import {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "./Project";

export default function UseProjects() {

    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        getAllProjects()
    }, [])

    const getAllProjects = () => {
        axios.get("stt/projects")
            .then((response) => response.data)
            .then(setProjects)
    }

    return {

        projects

    }
}