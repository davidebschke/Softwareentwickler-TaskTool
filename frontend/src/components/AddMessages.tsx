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
            toast.error("Nummer muss gesetzt sein")
        } else if (!title) {
            toast.error("title muss gesetzt sein")
        } else if (!created_at) {
            toast.error("Erstellungsdatum muss gesetzt sein")
        } else if (!message) {
            toast.error("Sie müssen eine Nachricht eingeben")
        } else if (!receiver) {
            toast.error("Empfänger muss gesetzt sein")
        } else if (!sender) {
            toast.error("Absender muss gesetzt sein")
        } else if (!projectName) {
            toast.error("Projektname muss gesetzt sein")
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
                <Button onClick={handleClickOpen}
                        sx={{backgroundColor: '#455d7a'}}>
                    New Project
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={{backgroundColor: '#9CA3AF'}}>Änderung des Projects</DialogTitle>
                    <DialogContent sx={{backgroundColor: '#9CA3AF'}}>
                        <DialogContentText>
                            Please enter here your new Project
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Number"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={onMessageNumberChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={onMessageTitleChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Erstellt am"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={onMessageCreatedAtChange}
                        />
                        <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Empty"
                            minRows={5}
                            style={{width: 545}}
                            defaultValue={"Bitte hier ihre Nachricht eingeben"}
                            onChange={onMessageMessageChange}

                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Empfänger"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={onMessageReceiverChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Sender"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={onMessageSenderChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Projektname"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={onMessageProjectNameChange}
                        />
                    </DialogContent>
                    <DialogActions sx={{backgroundColor: '#9CA3AF'}}>
                        <Button onClick={handleClose} sx={{color: '#4B5563'}}>Zurück</Button>
                        <Button onClick={onProjectSubmit} sx={{color: '#4B5563'}}>Speichern</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}
