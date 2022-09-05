import {Navigate, Route, Routes} from "react-router-dom";
import useProjects from "./useProjects";
import Home from "./Home";
import ProjectsShow from "./ProjectsShow";
import MessageShow from "./MessageShow";

export default function AllRoutes() {

    const {
        projects, issues, addProject, deleteProject, updateProject,
    } = useProjects();

    return (
        <>
            <Routes>
                <Route path={"*"} element={
                    <Navigate to={"/sett"} replace/>
                }/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/sett"} element={<ProjectsShow issues={issues} updateProjectForm={updateProject}
                                                             deleteProject={deleteProject}
                                                             addProject={addProject}
                                                             projects={projects}/>}/>
                <Route path={"/messages"} element={<MessageShow/>}/>

            </Routes>
        </>
    )
}
