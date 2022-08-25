import React, {ChangeEvent, useState} from "react";
import {NewProject} from "./NewProject";
import {Status} from "./Enum_Status";
import {Project} from "./Project";
import Button from "@mui/material/Button";
import {Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {toast} from "react-toastify";

type addProjectProps = {
    addProject: (newProject: NewProject
    ) => Promise<Project>
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

    function onProjectMemberChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectMember(event.target.value)
    }

    const onProjectSubmit = () => {
        if (!projectNumber) {
            toast.error("Projektnummer muss gesetzt sein")
        } else if (!projectName) {
            toast.error("Projektname muss gesetzt sein")
        } else if (!status) {
            toast.error("Status muss gesetzt sein")
        } else if (!projectMember) {
            toast.error("Projektteilnehmer muss gesetzt sein")
        } else {
            props.addProject({projectNumber, projectName, status, projectMember})
                .then(() => {
                    setProjectNumber(0);
                    setProjectName("");
                    setStatus(Status.Wait);
                    setProjectMember("");
                     })
                .then(()=> toast.success("Project wurde hinzugefügt",{theme: "light"}))
                .catch(() => toast.error("Project konnte nicht hinzugefügt werden", {theme: "light"}));
        }
    }

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                <Button variant="contained" size={"small"} onClick={handleClickOpen} sx={{backgroundColor:'#1F2937'}}>
                    New Project
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={{backgroundColor:'#9CA3AF'}}>Änderung des Projects</DialogTitle>
                    <DialogContent sx={{backgroundColor:'#9CA3AF'}}>
                        <DialogContentText>
                            Please enter here your new Project
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
                            <MenuItem key={"Wait"} value={Status.Wait}> Wait </MenuItem>
                            <MenuItem key={"In_Progress"} value={Status.In_Progress}> In_Progress </MenuItem>
                            <MenuItem key={"Done"} value={Status.Done}> Done </MenuItem>
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
                        <Button onClick={onProjectSubmit} sx={{color:'#4B5563'}}>Speichern</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}
