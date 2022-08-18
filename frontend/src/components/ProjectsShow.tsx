import {Project} from "./Project";
import * as React from 'react';
import "./projectshow.css"
import AddProject from "./AddProject";
import {NewProject} from "./NewProject";


type ProjectProps = {
    projects: Project[],
    addProject: (newProject: NewProject) => Promise<Project>
}

export default function ProjectsShow(props: ProjectProps) {

    const objectList = props.projects

    return (

        <>
            <div className={"tableShow"}>
                <table>
                    <tbody>
                    <tr>
                        <th>Projectnumber</th>
                        <th>Projectname</th>
                        <th>Projectstatus</th>
                        <th>Projectsmember</th>
                    </tr>

                    {objectList.map((project) =>
                        <tr key={project.id}>
                            <td>{project.projectNumber}</td>
                            <td>{project.projectName}</td>
                            <td>{project.status}</td>
                            <td>{project.projectMember}</td>
                            <td>
                                <button> edit</button>
                            </td>
                            <td>
                                <button> delete</button>
                            </td>
                        </tr>)}
                    </tbody>

                    <AddProject addProject={props.addProject}/>

                </table>
            </div>
        </>

    )
}
