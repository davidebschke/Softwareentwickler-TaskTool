import React, {ChangeEvent, useState} from "react";
import {NewProject} from "./NewProject";
import {Status} from "./Enum_Status";
import {Project} from "./Project";
import Button from "@mui/material/Button";
import {Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

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
                    <DialogTitle>Änderung des Projects</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter here your new Project
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Projectnumber"
                            type="number"
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
                    <DialogActions>
                        <Button onClick={handleClose}>Zurück</Button>
                        <Button onClick={onProjectSubmit}>Speichern</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}
