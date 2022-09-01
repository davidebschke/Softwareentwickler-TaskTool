import {Navigate, Route, Routes} from "react-router-dom";
import useProjects from "./useProjects";
import Home from "./Home";
import ProjectsShow from "./ProjectsShow";

export default function AllRoutes() {

    const {projects,issues, addProject,deleteProject,updateProject,
        getAllClosedIssues,getAllOpenIssues,getAllRepositoryInfos} = useProjects();

    return (
        <>
            <Routes>
                <Route path={"*"} element={
                    <Navigate to={"/Projects"} replace/>
                }/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/Projects"} element={<ProjectsShow issues={issues} updateProjectForm={updateProject}
                                                                 deleteProject={deleteProject}
                                                                 addProject={addProject}
                                                                 projects={projects}/>}/>
            </Routes>
        </>
    )
}
