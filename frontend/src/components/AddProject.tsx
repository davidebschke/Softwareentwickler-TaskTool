import {ChangeEvent, FormEvent, useState} from "react";
import {NewProject} from "./NewProject";
import {Status} from "./Enum_Status";


type addProjectProps = {
    addProject: (newProject: NewProject
    ) => Promise<NewProject>
}

export default function AddProject(props: addProjectProps) {

    const [projectNumber, setProjectNumber] = useState<number>(0);
    const [projectName, setProjectName] = useState<string>("");
    const [status, setStatus] = useState<Status>(Status.Wait);
    const [projectMember, setProjectMember] = useState<string>("");

    function onProjectNumberChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectNumber(parseInt(event.target.value))
    }

    function onProjectNameChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectName(event.target.value)
    }

    function onStatusChange(event: ChangeEvent<HTMLSelectElement>) {
        const {value} = event.target;
        setStatus(value as Status)
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
                    setStatus(Status.Wait);
                    setProjectMember("");
                })
        }
    }

    return (

        <form className="form" onSubmit={onProjectSubmit}>
            <table className={""}>
                <tbody>
                <tr>
                    <td>Projectnumber</td>
                    <td>Projectname</td>
                    <td>Status</td>
                    <td>Projectmember</td>


                </tr>
                <tr>
                    <td><input type={"number"} value={projectNumber} onChange={onProjectNumberChange}/></td>
                    <td><input type={"text"} value={projectName} onChange={onProjectNameChange}/></td>
                    <td>
                        <select id="status" name="status" onChange={onStatusChange}>
                            <option value="">Bitte Auswählen</option>
                            <option value="Wait">Wait</option>
                            <option value="In_Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </td>
                    <td><input type={"text"} value={projectMember} onChange={onProjectMemberChange}/></td>
                    <td className={"tableButton"}>
                        <button type={"submit"}> Speichern</button>
                    </td>
                    <td className={"tableButton"}></td>

                </tr>
                </tbody>
            </table>
        </form>
    )
}
