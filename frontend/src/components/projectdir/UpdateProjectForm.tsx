import React, {ChangeEvent, useState} from "react";
import {Project} from "./Project";
import Button from "@mui/material/Button";
import {Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {toast} from "react-toastify";
import {GridRowId} from "@mui/x-data-grid-premium";

type UpdateProjectProps = {
    selectedID: GridRowId,
    projectUpdate: (project: Project) => void,
    projects: Project[]
}

export default function UpdateProjectForm(props: UpdateProjectProps) {

    const [projectUp, setProjectUp] = useState<Project>();
    const [projectName, setProjectName] = useState<string>("");
    const [open, setOpen] = React.useState(false);
    const [created_at, setCreatedAt] = useState<string>("")

    const handleClickOpen = () => {
        isID();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isID=()=>{
        if(props.selectedID !== undefined) {
            props.projects.forEach((project) => {
                if (project.id === props.selectedID.toString()) {
                    setProjectUp(project)
                    return project;


                }
            })
        }
    }

    const handleUpdate = () => {
        if (projectUp) {
            const updatedProject: Project = {
                id: projectUp.id,
                projectName: projectName,
                issues: [],
                created_on: created_at,
            };
            props.projectUpdate(updatedProject)
            toast.success("Update Erfolgreich");
            setOpen(false);
        } else {

            toast.error("Update Fehlgeschlagen")
        }
    }

    function onProjectNameChange(event: ChangeEvent<HTMLInputElement>) {
        const re = /[0-9ß-üÄ-Ü]/g;
        const validValue = event.target.value.replace(re, "")
        setProjectName(validValue)
    }

    function onCreatedAtChange(event: ChangeEvent<HTMLInputElement>) {

        setCreatedAt(event.target.value)
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
                    <Button variant={'outlined'} sx={{
                        backgroundColor: 'var( --ButtonColor)',
                        color: 'black',
                        marginLeft: '2em',
                        borderColor: '#FFD700',
                        borderWidth: 'medium'
                    }}
                            onClick={handleClickOpen}>
                        Update
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle sx={{backgroundColor: 'var(--TableBodyMessageBackground)', color: 'inherit'}}>Änderung
                            des
                            Projects</DialogTitle>
                        <DialogContent sx={{backgroundColor: 'var(--TableBodyMessageBackground)'}}>
                            Projektname
                            <TextField
                                autoFocus
                                margin="dense"
                                label=""
                                type="text"
                                fullWidth
                                variant="outlined"
                                onChange={onProjectNameChange}
                            />
                            Erstellt am
                            <TextField
                                autoFocus
                                margin="dense"
                                label=""
                                type="date"
                                fullWidth
                                variant="outlined"
                                onChange={onCreatedAtChange}
                            />
                        </DialogContent>
                        <DialogActions sx={{backgroundColor: 'var(--TableBodyMessageBackground)'}}>
                            <Button onClick={handleClose}
                                    sx={{
                                        backgroundColor: 'var( --ButtonColor)',
                                        color: 'black',
                                        marginLeft: '2em',
                                        borderColor: '#FFD700',
                                        borderWidth: 'medium'
                                    }}
                                    variant={'outlined'}
                                    size={'small'}>Zurück</Button>
                            <Button onClick={handleUpdate}
                                    sx={{
                                        backgroundColor: 'var( --ButtonColor)',
                                        color: 'black',
                                        marginLeft: '2em',
                                        borderColor: '#FFD700',
                                        borderWidth: 'medium'
                                    }}
                                    variant={'outlined'}
                                    size={'small'}>Update</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Box>
        </>
    )
}
