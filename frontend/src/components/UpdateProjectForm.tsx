import React, {ChangeEvent, useState} from "react";
import {Project} from "./Project";
import Button from "@mui/material/Button";
import {Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {toast} from "react-toastify";
import {GridRowId} from "@mui/x-data-grid-premium";

type UpdateProjectProps = {
    selectedID: GridRowId,
    projectUpdate: (project: Project) => void,
    projects: Project[]
}

export default function UpdateProjectForm(props: UpdateProjectProps) {

    const isID=()=>{
        if(props.selectedID != undefined) {
            console.log(props.selectedID.valueOf())
            props.projects.forEach((project) => {
                if (project.id === props.selectedID.toString()) {
                    console.log(project + "Projekt")
                    return project;

                } else {

                    console.log(project.id)
                }

            })
        }
    }

    const project= props.projects.find(isID)

    const [projectName, setProjectName] = useState<string>("");
    const [open, setOpen] = React.useState(false);
    const[creator,setCreator]= useState<string>("")
    const[created_at,setCreatedAt]= useState<string>("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = () => {
        if (project) {
            const updatedProject: Project = {
                id: project.id,
                projectName: projectName,
                creator: creator,
                created_at:created_at,
            };
            props.projectUpdate(updatedProject)
            toast.success("Update Erfolgreich");
            setOpen(false);

        } else {

            toast.error("Update Fehlgeschlagen")
        }
    }

    function onProjectNameChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectName(event.target.value)
    }

    function onProjectMemberChange(event: ChangeEvent<HTMLInputElement>) {
        setCreator(event.target.value)
    }
    function onCreatedAtChange(event:ChangeEvent<HTMLInputElement>){
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
                    <Button sx={{backgroundColor: '#455d7a'}} variant="contained"
                            onClick={handleClickOpen}>
                        Update
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle sx={{backgroundColor: '#9CA3AF'}}>Änderung des Projects</DialogTitle>
                        <DialogContent sx={{backgroundColor: '#9CA3AF'}}>
                            <DialogContentText>
                                Please enter here the new Data
                            </DialogContentText>
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
                                autoFocus
                                margin="dense"
                                label="Projeccreator"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={onProjectMemberChange}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Erstellt am"
                                type="text"
                                fullWidth
                                defaultValue={"dd.mm.yyyy"}
                                variant="standard"
                                onChange={onCreatedAtChange}
                            />
                        </DialogContent>
                        <DialogActions sx={{backgroundColor: '#9CA3AF'}}>
                            <Button onClick={handleClose} sx={{color: '#4B5563'}}>Zurück</Button>
                            <Button onClick={handleUpdate} sx={{color: '#4B5563'}}>Update</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Box>
        </>
    )
}
