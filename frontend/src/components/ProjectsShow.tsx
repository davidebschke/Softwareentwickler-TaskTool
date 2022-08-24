import {Project} from "./Project";
import * as React from 'react';
import "./projectshow.css"
import AddProject from "./AddProject";
import {NewProject} from "./NewProject";
import UpdateProjectForm from "./UpdateProjectForm";
import Button from "@mui/material/Button";


type ProjectProps = {
    projects: Project[],
    updateProjectForm: (project: Project) => Promise<void>,
    addProject: (newProject: NewProject) => Promise<Project>,
    deleteProject: (id: string) => Promise<void>;
}

export default function ProjectsShow(props: ProjectProps) {

    const objectList = props.projects;

    return (

        <>
            <div className={"tableShow"}>
                <table>
                    <thead>
                    <tr>
                        <th>Projectnumber</th>
                        <th>Projectname</th>
                        <th>Projectstatus</th>
                        <th>Projectsmember</th>
                    </tr>
                    </thead>

                    {objectList.map((project) =>
                        <tbody key={project.id}>
                        <tr>
                            <td>{project.projectNumber}</td>
                            <td>{project.projectName}</td>
                            <td>{project.status}</td>
                            <td>{project.projectMember}</td>
                            <td className={"tableButton"}>
                                <UpdateProjectForm project={project} projectUpdate={props.updateProjectForm}/>
                            </td>
                            <td className={"tableButton"}>
                                <Button variant={"contained"} size={"small"} onClick={() => props.deleteProject(project.id)
                                }> delete
                                </Button>
                            </td>
                        </tr>
                        </tbody>)}
                </table>

            </div>

            <div className={"tableShow"}>
                <AddProject addProject={props.addProject}/>

            </div>
        </>
    )
}
