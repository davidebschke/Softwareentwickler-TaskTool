import React, {ChangeEvent, useState} from "react";
import {Project} from "./Project";
import Button from "@mui/material/Button";
import {Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {toast} from "react-toastify";
import {Issue} from "./Issue";

type addProjectProps = {
    addProject: (newProject: { created_on: string; projectName: string; issues: Issue[] }
    ) => Promise<Project>
}

export default function AddProject(props: addProjectProps) {

    const [projectName, setProjectName] = useState<string>("");
    const [created_on, setCreated_on] = useState<string>("");
    const [issues, setIssues] = useState<Issue[]>([])

    function onProjectNameChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectName(event.target.value)
    }

    function onProjectCreatedAtChange(event: ChangeEvent<HTMLInputElement>) {
        setCreated_on(event.target.value)
    }

    const onProjectSubmit = () => {
        if (!projectName) {
            toast.error("Projektname muss gesetzt sein")
        } else if (!created_on) {
            toast.error("Erstellungsdatum muss gesetzt sein")
        } else if (!issues) {
            toast.error("Mindestens eine Aufgabe muss gesetzt sein")
        } else {
            props.addProject({projectName, issues, created_on: created_on})
                .then(() => {
                    setIssues([]);
                    setProjectName("");
                    setCreated_on("");
                })
                .then(() => toast.success("Project wurde hinzugefügt", {theme: "light"}))
                .catch(() => toast.error("Project konnte nicht hinzugefügt werden", {theme: "light"}))
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
                <Button onClick={handleClickOpen}
                        sx={{backgroundColor: 'var( --ButtonColor)'}}>
                    New Project
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={{backgroundColor: '#9CA3AF', color: 'inherit'}}>Erstellen des
                        Projects</DialogTitle>
                    <DialogContent sx={{backgroundColor: '#9CA3AF'}}>
                        Projektname
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={projectName}
                            fullWidth
                            variant="outlined"
                            onChange={onProjectNameChange}
                        />
                        Erstellungsdatum
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="date"
                            value={created_on}
                            fullWidth
                            variant="outlined"
                            onChange={onProjectCreatedAtChange}
                        />
                    </DialogContent>
                    <DialogActions sx={{backgroundColor: '#9CA3AF'}}>
                        <Button onClick={handleClose}
                                sx={{backgroundColor: '#051e25', color: 'white', borderRadius: '2em'}}
                                size={'small'}>Zurück</Button>
                        <Button onClick={onProjectSubmit}
                                sx={{backgroundColor: '#051e25', color: 'white', borderRadius: '2em'}}
                                size={'small'}>Speichern</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}
