import {Route, Routes} from "react-router-dom";
import UseProjects from "./UseProjects";
import Home from "./Home";
import ProjectsShow from "./ProjectsShow";

export default function AllRoutes() {

    const {projects, addProject} = UseProjects();
    
    return (
        <>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/projects"} element={<ProjectsShow addProject={addProject} projects={projects}/>}/>
            </Routes>
        </>
    )
}