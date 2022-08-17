import {Project} from "./Project";

type ProjectProps = {

    projects: Project[]

}

export default function ProjectsShow(props: ProjectProps) {


    const objectList = props.projects

    return (

        <>
            <div>{objectList.map((project) => <li key={project.projectNumber}>
                    {project.projectNumber +
                        project.projectName +
                        project.projectMember +
                        project.status}
                </li>
            )}
            </div>
        </>

    )
}