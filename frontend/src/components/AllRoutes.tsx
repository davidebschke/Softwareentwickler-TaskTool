import {Route, Routes} from "react-router-dom";
import UseProjects from "./UseProjects";
import Home from "./Home";
import ProjectsShow from "./ProjectsShow";

export default function AllRoutes() {

    const {projects, addProject,deleteProject} = UseProjects();
    
    return (
        <>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/projects"} element={<ProjectsShow deleteProject={deleteProject} addProject={addProject} projects={projects}/>}/>
            </Routes>
        </>
    )
}