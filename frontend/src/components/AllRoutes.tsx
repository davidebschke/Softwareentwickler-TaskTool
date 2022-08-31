import {Navigate, Route, Routes} from "react-router-dom";
import useProjects from "./useProjects";
import Home from "./Home";
import ProjectsShow from "./ProjectsShow";

export default function AllRoutes() {

    const {projects,issues, addProject,deleteProject,updateProject} = useProjects();


    return (
        <>
            <Routes>
                <Route path={"*"} element={
                    <Navigate to={"/projects"} replace/>
                }/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/projects"} element={<ProjectsShow issues={issues} updateProjectForm={updateProject}
                                                                 deleteProject={deleteProject}
                                                                 addProject={addProject}
                                                                 projects={projects}/>}/>
            </Routes>
        </>
    )
}
