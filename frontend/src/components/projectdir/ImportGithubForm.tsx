import {Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import React, {ChangeEvent, useState} from "react";
import {toast} from "react-toastify";


type ImportGithubProps = {
    getAllRepositoryInfo: (username: string, repositoryname: string) => Promise<void>
}
export default function ImportGithubForm(props: ImportGithubProps) {

    const [userName, setUserName] = useState<string>("");
    const [repositoryName, setRepositoryName] = useState<string>("");

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    function onGithubUserNameChange(event: ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value)
    }

    function onRepositoryNameChange(event: ChangeEvent<HTMLInputElement>) {
        setRepositoryName(event.target.value)
    }

    const onProjectSubmit = () => {
        if (!userName) {
            toast.error("Username muss gesetzt sein")
        } else if (!repositoryName) {
            toast.error("Repositoryname muss gesetzt sein")
        } else {
            props.getAllRepositoryInfo(userName, repositoryName)
                .then(() => {
                    setUserName("");
                    setRepositoryName("");
                })
                .then(() => toast.success("Project wurde hinzugefügt", {theme: "light"}))
                .catch(() => toast.error("Project konnte nicht hinzugefügt werden", {theme: "light"}))
        }
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
                <Button onClick={handleClickOpen}
                        sx={{
                            backgroundColor: 'var( --ButtonColor)',
                            color: 'black',
                            marginLeft: '2em',
                            borderColor: '#FFD700',
                            borderWidth: 'medium'
                        }}
                        startIcon={<img src={"../github.svg"} alt={"GithubIcon"}/>}>
                    Import Github
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={{backgroundColor: '#9CA3AF', color: 'inherit'}}>Erstellen des
                        Projects</DialogTitle>
                    <DialogContent sx={{backgroundColor: '#9CA3AF'}}>
                        GithubUserName
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={userName}
                            fullWidth
                            variant="outlined"
                            onChange={onGithubUserNameChange}
                        />
                        Repositoryname
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={repositoryName}
                            onChange={onRepositoryNameChange}
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
