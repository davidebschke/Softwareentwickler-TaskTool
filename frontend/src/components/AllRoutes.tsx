import {Route, Routes} from "react-router-dom";
import UseProjects from "./UseProjects";
import Home from "./Home";
import ProjectsShow from "./ProjectsShow";
import {Project} from "./Project";

type ProjectProps = {

    projects: Project[]

}

export default function AllRoutes() {

    const {projects}= UseProjects();
    
    return (
        <>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/projects"} element={<ProjectsShow projects={projects}/>}/>
            </Routes>
        </>
    )
}