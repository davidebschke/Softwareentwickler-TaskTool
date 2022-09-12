import React, {ChangeEvent, useState} from "react";
import {Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Issue} from "./Issue";
import {DataGrid} from "@mui/x-data-grid";
import {GridColDef} from "@mui/x-data-grid-premium";
import moment from "moment";
import './showallIssue.css'
import {toast} from "react-toastify";

type ShowAllIssuesProps = {
    Issue: Issue[] | undefined,
    addIssue: (Issue: { number: string; title: string; state: string, created_at: string }
    ) => Promise<Issue>
}
export default function ShowAllIssues(props: ShowAllIssuesProps) {

    const [number, setNumber] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [created_at, setCreatedOn] = useState<string>("");

    function onNumberChange(event: ChangeEvent<HTMLInputElement>) {
        setNumber(event.target.value)
    }

    function onTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    function onStateChange(event: ChangeEvent<HTMLInputElement>) {
        setState(event.target.value)
    }

    function onCreatedOnChange(event: ChangeEvent<HTMLInputElement>) {
        setCreatedOn(event.target.value)
    }

    const onIssueSubmit = () => {
        if (!number) {
            toast.error("Aufgabennummer muss gesetzt sein")
        } else if (!title) {
            toast.error("Aufgabentitel muss gesetzt sein")
        } else if (!state) {
            toast.error("Status muss gesetzt sein")
        } else if (!created_at) {
            toast.error("Erstellungsdatum muss gesetzt sein")
        } else {
            props.addIssue({number, title, state, created_at})
                .then(() => {
                    setNumber("")
                    setTitle("")
                    setState("")
                    setCreatedOn("")
                })
                .then(() => toast.success("Aufgabe wurde hinzugefügt", {theme: "light"}))
                .catch(() => toast.error("Aufgabe konnte nicht hinzugefügt werden", {theme: "light"}))
        }
    }


    const columns: GridColDef[] = [
        {
            field: 'number',
            headerName: 'ID',
            width: 150,
            headerClassName: 'super-app-theme--header'
        },
        {
            field: 'title',
            headerName: 'Projektname',
            width: 200,
            headerClassName: 'super-app-theme--header'

        },
        {
            field: 'state',
            headerName: 'Status',
            width: 200,
            headerClassName: 'super-app-theme--header',
        },

        {
            field: 'created_at',
            headerName: 'Erstellt am',
            type: "date",
            width: 180,
            headerClassName: 'super-app-theme--header',
            valueFormatter: params =>
                moment(params?.value).format("DD.MM.YYYY"),
        }]
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const rows = props.Issue

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
                        sx={{backgroundColor: 'var( --ButtonColor)', color: 'black', borderColor: '#FFD700'}}
                >
                    Alle Aufgaben
                </Button>
                <Dialog open={open} onClose={handleClose} fullWidth={true}
                        sx={{width: '800px', height: '800px'}}>
                    <DialogTitle sx={{backgroundColor: '#9CA3AF', color: 'inherit', width: '800px'}}>Alle Aufgaben des
                        Projekts </DialogTitle>
                    <DialogContent sx={{backgroundColor: '#9CA3AF', height: '800px', width: '800px',}}>
                        {rows ?
                            <DataGrid
                                getRowId={(row) => rows?.indexOf(row)}
                                rows={rows}
                                columns={columns}
                                pageSize={10}
                                rowsPerPageOptions={[10]}
                                checkboxSelection
                                disableSelectionOnClick
                            /> : <p> Hier gibt nix zu sehen</p>}
                        Number
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={number}
                            fullWidth
                            variant="outlined"
                            onChange={onNumberChange}
                        />
                        Title
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={title}
                            fullWidth
                            variant="outlined"
                            onChange={onTitleChange}
                        />
                        Status
                        <TextField
                            autoFocus
                            margin="dense"
                            label=""
                            type="text"
                            value={state}
                            fullWidth
                            variant="outlined"
                            onChange={onStateChange}
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
                            onChange={onCreatedOnChange}
                        /> </DialogContent>
                    <DialogActions sx={{backgroundColor: '#9CA3AF'}}>
                        <Button onClick={handleClose}
                                sx={{backgroundColor: '#051e25', color: 'white', borderRadius: '2em'}}
                                size={'small'}>Zurück</Button>
                        <Button onClick={onIssueSubmit}
                                sx={{backgroundColor: '#051e25', color: 'white', borderRadius: '2em'}}
                                size={'small'}>Speichern</Button>
                    </DialogActions>

                </Dialog>
            </Box>
        </>
    )
}
