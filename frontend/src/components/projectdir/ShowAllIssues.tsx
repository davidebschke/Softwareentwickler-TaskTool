import React from "react";
import {Box, Dialog, DialogContent, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import {Issue} from "./Issue";
import {DataGrid} from "@mui/x-data-grid";
import {GridColDef} from "@mui/x-data-grid-premium";
import moment from "moment";
import './showallIssue.css'

type ShowAllIssuesProps = {
    Issue: Issue[] | undefined,
}
export default function ShowAllIssues(props: ShowAllIssuesProps) {

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
            field: 'created_on',
            headerName: 'Erstellt am',
            type: "date",
            width: 160,
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
        <Box sx={{m: 0, p: 2,}}>
            <Button onClick={handleClickOpen}
                    sx={{backgroundColor: 'var( --ButtonColor)'}}
                    startIcon={<img src={"../github.svg"} alt={"GithubIcon"}/>}>
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
                </DialogContent>
            </Dialog>
        </Box>
    )
}
