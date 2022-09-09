import React, {ChangeEvent, useState} from "react";
import {Project} from "./Project";
import Button from "@mui/material/Button";
import {Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {toast} from "react-toastify";
import {NewProject} from "./NewProject";

type addProjectProps = {
    addProject: (newProject: NewProject
    ) => Promise<Project>
}

export default function AddProject(props: addProjectProps) {

    const [projectName, setProjectName] = useState<string>("");
    const [created_at, setProjectCreatedAt] = useState<string>("");
    const[creator,setCreator]= useState<string>("")

    function onProjectNameChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectName(event.target.value)
    }

    function onProjectCreatedAtChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectCreatedAt(event.target.value)
    }
    function onCreatorChange(event: ChangeEvent<HTMLInputElement>) {
        setCreator(event.target.value)
    }

    const onProjectSubmit = () => {
        if (!creator) {
            toast.error("Creator muss gesetzt sein")
        } else if (!projectName) {
            toast.error("Projektname muss gesetzt sein")
        } else if (!created_at) {
            toast.error("Erstellungsdatum muss gesetzt sein")
        } else {
            props.addProject({projectName, creator, created_at})
                .then(() => {
                    setProjectName("");
                    setCreator("");
                    setProjectCreatedAt("");
                     })
                .then(()=> toast.success("Project wurde hinzugefügt",{theme: "light"}))
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
                        Creator
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={creator}
                            fullWidth
                            variant="outlined"
                            onChange={onCreatorChange}
                        />
                        Erstellungsdatum
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="date"
                            value={created_at}
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
