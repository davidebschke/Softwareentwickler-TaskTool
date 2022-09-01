import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IssueTable from "./IssueTable";
import DialogActions from "@mui/material/DialogActions";
import * as React from "react";
import Paper, {PaperProps} from "@mui/material/Paper";
import Draggable from "react-draggable";
import {Issue} from "./Issue";


type showIssuesProps={
    getAllOpenIssues:(userName:string,RepositoryName:string) => Issue

}

export default function ImportGithubForm(){


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

    export default function ShowIssues(props: showIssuesProps) {

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
                        <IssueTable issues={props.issues}/>
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