import {Navigate, Route, Routes} from "react-router-dom";
import useProjects from "./projectdir/useProjects";
import Home from "./Home";
import ProjectsShow from "./projectdir/ProjectsShow";
import MessageShow from "./messagedir/MessageShow";
import useMessages from "./messagedir/useMessages";

export default function AllRoutes() {

    const {
        projects, issues, addProject, deleteProject, updateProject,
    } = useProjects();

    const {messages, deleteMessage, addMessage} = useMessages();

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
                <Route path={"/messages"} element={<MessageShow messages={messages} deleteMessage={deleteMessage}
                                                                addMessage={addMessage}/>}/>
            </Routes>
        </>
    )
}
