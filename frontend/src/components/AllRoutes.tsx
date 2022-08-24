import {Route, Routes} from "react-router-dom";
import useProjects from "./useProjects";
import Home from "./Home";
import ProjectsShow from "./ProjectsShow";

export default function AllRoutes() {

    const {projects, addProject,deleteProject,updateProject} = useProjects();
    
    return (
        <>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/projects"} element={<ProjectsShow updateProjectForm={updateProject}
                                                                 deleteProject={deleteProject}
                                                                 addProject={addProject}
                                                                 projects={projects}/>}/>
            </Routes>
        </>
    )
}
