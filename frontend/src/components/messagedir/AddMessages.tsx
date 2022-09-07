import React, {ChangeEvent, useState} from "react";
import {toast} from "react-toastify";
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextareaAutosize,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import {NewMessage} from "./NewMessage";
import {Messages} from "./Messages";
import './message.css'

type addProjectProps = {
    addMessage: (newMessage: NewMessage
    ) => Promise<Messages>
}

export default function AddMessages(props: addProjectProps) {

    const [number, setNumber] = useState<string>("");
    const [title, settitle] = useState<string>("");
    const [created_at, setCreated_at] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [receiver, setReceiver] = useState<string>("")
    const [sender, setSender] = useState<string>("")
    const [projectName, setProjectName] = useState<string>("")

    function onMessageNumberChange(event: ChangeEvent<HTMLInputElement>) {
        setNumber(event.target.value)
    }

    function onMessageTitleChange(event: ChangeEvent<HTMLInputElement>) {
        settitle(event.target.value)
    }

    function onMessageCreatedAtChange(event: ChangeEvent<HTMLInputElement>) {
        setCreated_at(event.target.value)
    }

    function onMessageMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value)
    }

    function onMessageReceiverChange(event: ChangeEvent<HTMLInputElement>) {
        setReceiver(event.target.value)
    }

    function onMessageSenderChange(event: ChangeEvent<HTMLInputElement>) {
        setSender(event.target.value)
    }

    function onMessageProjectNameChange(event: ChangeEvent<HTMLInputElement>) {
        setProjectName(event.target.value)
    }

    const onProjectSubmit = () => {
        if (!number) {
            toast.error("Die Nummer muss gesetzt sein")
        } else if (!title) {
            toast.error("Der Titel muss gesetzt sein")
        } else if (!created_at) {
            toast.error("Das Erstellungsdatum muss gesetzt sein")
        } else if (!message) {
            toast.error("Die Nachricht muss eigegeben werden")
        } else if (!receiver) {
            toast.error("Der Empfänger muss gesetzt sein")
        } else if (!sender) {
            toast.error("Der Absender muss gesetzt sein")
        } else if (!projectName) {
            toast.error("Der Projektname muss gesetzt sein")
        } else {
            props.addMessage({number, title, created_at, message, receiver, sender, projectName})
                .then(() => {
                    setNumber("");
                    settitle("");
                    setCreated_at("");
                    setMessage("");
                    setReceiver("");
                    setSender("");
                    setProjectName("");
                })
                .then(() => toast.success("Nachricht wurde erstellt", {theme: "light"}))
                .catch(() => toast.error("Nachricht konnte nicht erstellt werden", {theme: "light"}))
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
                <Button variant={'contained'} size={'small'} onClick={handleClickOpen}
                        sx={{backgroundColor: '#051e25', color: 'white'}}>
                    New Message
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={{backgroundColor: '#9CA3AF'}}>Änderung des Projects</DialogTitle>
                    <DialogContent sx={{backgroundColor: '#9CA3AF'}}>
                        <DialogContentText>
                            Please enter here your new Project
                        </DialogContentText>
                        Nachrichtnummer
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Number"
                            type="text"
                            value={number}
                            fullWidth
                            variant="standard"
                            onChange={onMessageNumberChange}
                        />
                        Titel der Nachricht
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={title}
                            fullWidth
                            variant="outlined"
                            onChange={onMessageTitleChange}
                        />
                        Erstellt am
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="date"
                            value={created_at}
                            fullWidth
                            variant="outlined"
                            onChange={onMessageCreatedAtChange}
                        />
                        Nachricht
                        <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Bitte hier ihre Nachricht eingeben"
                            minRows={5}
                            style={{width: 545}}
                            value={message}
                            onChange={onMessageMessageChange}
                        />
                        Empfänger
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={receiver}
                            fullWidth
                            variant="outlined"
                            onChange={onMessageReceiverChange}
                        />
                        Absender
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={sender}
                            fullWidth
                            variant="outlined"
                            onChange={onMessageSenderChange}
                        />
                        Projektname
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={projectName}
                            fullWidth
                            variant="outlined"
                            onChange={onMessageProjectNameChange}
                        />
                    </DialogContent>
                    <DialogActions sx={{backgroundColor: '#9CA3AF'}}>
                        <Button sx={{backgroundColor: '#051e25', color: 'white', borderRadius: '2em'}} size={'small'}
                                variant='contained' onClick={handleClose}> Zurück</Button>
                        <Button size={'small'} variant='contained' onClick={onProjectSubmit} sx={{
                            backgroundColor: '#051e25',
                            color: 'white',
                            borderRadius: '2em'
                        }}>Speichern</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}
