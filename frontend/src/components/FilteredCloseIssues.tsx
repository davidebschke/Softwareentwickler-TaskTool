import {Dialog, DialogContent, DialogContentText, Table, TableCell} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import * as React from "react";
import {Issue} from "./Issue";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Paper, {PaperProps} from "@mui/material/Paper";
import Draggable from "react-draggable";

type showIssuesProps = {
    issues: Issue[];
}

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

export default function FilteredCloseIssues(props: showIssuesProps) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    interface Column {
        id: 'number' | 'title' | 'state' | 'created_at';
        label: string;
        minWidth?: number;
        align?: 'right';
        format?: (value: number) => string;
    }

    const columns: readonly Column[] = [
        {id: 'number', label: 'Issuenummer',},
        {id: 'title', label: 'Issuename',},
        {
            id: 'state',
            label: 'Issuestatus',
            align: 'right',
        },
        {
            id: 'created_at',
            label: 'Erstellt am',
            align: 'right',
        },
    ];

    return (
        <div>
            <Button sx={{backgroundColor:'#1F2937'}} variant="contained" size='small' onClick={handleClickOpen}>
                Closed Issues
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
                    {props.issues.filter(issue=> issue.state==='closed')
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
