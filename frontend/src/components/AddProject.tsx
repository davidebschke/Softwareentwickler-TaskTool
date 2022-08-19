import {Project} from "./Project";
import {ChangeEvent, FormEvent, useState} from "react";
import {NewProject} from "./NewProject";


type addProjectProps = {
    addProject: (project: NewProject
    ) => Promise<Project>
}

export default function AddProject(props: addProjectProps) {

    const [projectNumber, setProjectNumber] = useState<number>(0);
    const [projectName, setProjectName] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [projectMember, setProjectMember] = useState<string>("");

    function onProjectNumberChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectNumber(parseInt(event.target.value))
    }

    function onProjectNameChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectName(event.target.value)
    }

    function onStatusChange(event: ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.value)
    }

    function onProjectMemberChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectMember(event.target.value)
    }

    const onProjectSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!projectNumber) {
            console.error("Projectnumber must not be empty")
        } else if (!projectName) {
            console.error("ProjectName must not be empty")
        } else if (!status) {
            console.error("Status must not be empty")
        } else if (!projectMember) {
            console.error("Projectmember must not be empty")
        } else {
            props.addProject({projectNumber, projectName, status, projectMember})
                .then(() => {
                    setProjectNumber(0);
                    setProjectName("");
                    setStatus("");
                    setProjectMember("");
                })
        }
    }

    return (

        <form className="form" onSubmit={onProjectSubmit}>
            <table>
                <tr>
                    <td><input type={"number"} value={projectNumber} onChange={onProjectNumberChange}/></td>
                    <td><input type={"text"} value={projectName} onChange={onProjectNameChange}/></td>
                    <td><input type={"text"} value={status} onChange={onStatusChange}/></td>
                    <td><input type={"text"} value={projectMember} onChange={onProjectMemberChange}/></td>
                </tr>
                <tr>
                    <td>
                        <button type={"submit"}> Speichern</button>
                    </td>
                </tr>
            </table>
        </form>
    )
}
