import {Route, Routes} from "react-router-dom";
import useProjects from "./useProjects";
import Home from "./Home";
import ProjectsShow from "./ProjectsShow";
import {Project} from "./Project";

type ProjectProps = {

    projects: Project[]

}

export default function AllRoutes() {

    const {projects, addProject} = useProjects();
    
    return (
        <>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/projects"} element={<ProjectsShow addProject={addProject} projects={projects}/>}/>
            </Routes>
        </>
    )
}