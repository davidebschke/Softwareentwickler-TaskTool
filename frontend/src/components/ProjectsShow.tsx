import {Project} from "./Project";
import * as React from 'react';
import "./projectshow.css"
import AddProject from "./AddProject";
import {NewProject} from "./NewProject";


type ProjectProps = {
    projects: Project[],
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
                        <tbody>
                        <tr key={project.id}>
                            <td>{project.projectNumber}</td>
                            <td>{project.projectName}</td>
                            <td>{project.status}</td>
                            <td>{project.projectMember}</td>
                            <td>
                                <button> edit</button>
                            </td>
                            <td>
                                <button onClick={() => props.deleteProject(project.id)
                                }> delete
                                </button>
                            </td>
                        </tr>
                        </tbody>)}
                </table>
                <AddProject addProject={props.addProject}/>
            </div>
        </>
    )
}
