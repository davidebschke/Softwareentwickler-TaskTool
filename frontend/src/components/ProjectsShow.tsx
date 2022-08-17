import {Project} from "./Project";

type ProjectProps = {

    projects: Project[]

}

export default function ProjectsShow(props: ProjectProps) {


    const objectList = props.projects

    return (

        <>
            <div>{objectList.map((Project) => <li key={Project.projectnumber}>
                <Project.projectname/>
                <Project.status/>
                <Project.projectmember/>
            </li>
            )}
            </div>
        </>

    )
}