
import React, {ChangeEvent, useState} from "react";
import {Status} from "./Enum_Status";
import {Project} from "./Project";
import Button from "@mui/material/Button";
import {Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {toast} from "react-toastify";

type UpdateProjectProps = {
    project: Project,
    projectUpdate: (project: Project) => void,
}

export default function UpdateProjectForm(props: UpdateProjectProps) {

    const [projectNumber, setProjectNumber] = useState<number>(0);
    const [projectName, setProjectName] = useState<string>("");
    const [status, setStatus] = useState<Status>(Status.Wait);
    const [projectMember, setProjectMember] = useState<string>("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = () => {
        if (props.project) {
            const updatedProject: Project = {
                id: props.project.id,
                projectNumber: projectNumber,
                projectName: projectName,
                status: status,
                projectMember: projectMember
            };
            props.projectUpdate(updatedProject)
            toast.success("Update Erfolgreich");
            setOpen(false);
        }
        else{

            toast.error("Update Fehlgeschlagen")
        }
    }

    function onProjectNumberChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectNumber(parseInt(event.target.value))
    }

    function onProjectNameChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectName(event.target.value)
    }

    function onProjectMemberChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectMember(event.target.value)
    }

    return (
        <>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <Button sx={{backgroundColor:'#1F2937'}} variant="contained" size={"small"} onClick={handleClickOpen}>
                        Update
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle sx={{backgroundColor:'#9CA3AF'}}>Änderung des Projects</DialogTitle>
                        <DialogContent sx={{backgroundColor:'#9CA3AF'}}>
                            <DialogContentText>
                                Please enter here the new Data
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Projectnumber"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={onProjectNumberChange}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Projectname"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={onProjectNameChange}
                            />
                            <TextField
                                id="Status"
                                select
                                label="Select"
                                defaultValue={Status.Wait}
                                onChange={event => {
                                    const {value} = event.target;
                                    setStatus(value as Status)
                                }}
                                helperText="Please select the Project Status"
                                variant={"standard"}
                            >
                                <MenuItem key={"Wait"}   value={Status.Wait}> Wait </MenuItem>
                                <MenuItem key={"In_Progress"} value={Status.In_Progress}> In_Progress </MenuItem>
                                <MenuItem key={"Done"}        value={Status.Done}> Done </MenuItem>
                            </TextField>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Projectmember"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={onProjectMemberChange}
                            />
                        </DialogContent>
                        <DialogActions sx={{backgroundColor:'#9CA3AF'}}>
                            <Button onClick={handleClose} sx={{color:'#4B5563'}}>Zurück</Button>
                            <Button onClick={handleUpdate} sx={{color:'#4B5563'}}>Update</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Box>
        </>
    )
}
