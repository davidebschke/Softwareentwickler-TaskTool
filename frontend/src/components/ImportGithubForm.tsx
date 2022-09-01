import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {Table, TableCell} from "@mui/material";
import * as React from "react";
import {Issue} from "./Issue";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import DialogActions from "@mui/material/DialogActions";
import Paper, {PaperProps} from "@mui/material/Paper";
import Draggable from "react-draggable";



type showIssuesProps={
    getAllOpenIssues:(userName:string,RepositoryName:string) => Issue
    issues: Issue[];
}

export default function ImportGithubForm(props:showIssuesProps) {


    function PaperComponent(props: PaperProps) {
        return (
            <Draggable
                handle="#draggable-dialog-title"
                cancel={'[class*="MuiDialogContent-root"]'}
            >
                <Paper {...props} />
            </Draggable>
        );
    }
    interface Column {
        id: | 'title' | 'created_at' | 'state';
        label: string;
        minWidth?: number;
        align?: 'right';
        format?: (value: number) => string;
    }

    const columns: readonly Column[] = [
        {id: 'title', label: 'Issuename',},
        {
            id: 'created_at',
            label: 'Erstellt am',
            align: 'right',
        },
        {
            id: 'state',
            label: 'Owner',
            align: 'right',
        },
    ];


        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

    return(

        <div>
            <Button variant="contained" size='small' onClick={handleClickOpen}>
                Open draggable dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
                    Subscribe
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div>
                            <Table sx={{backgroundColor: '#6B7280'}}>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell sx={{backgroundColor: "#374151", color: "var(--table_Head_color);"}}
                                                       key={column.id}
                                                       align={column.align}
                                                       style={{minWidth: column.minWidth}
                                                       }
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.issues
                                        .map((issues) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={issues.number}>
                                                    {columns.map((column) => {
                                                        const value = issues[column.id];
                                                        return (
                                                            <TableCell sx={{color: 'var(--table_content_color);'}} key={column.id}
                                                                       align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}