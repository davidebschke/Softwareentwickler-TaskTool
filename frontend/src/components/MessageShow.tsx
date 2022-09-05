import * as React from 'react';
import {Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Messages} from "./Messages";

type MessageProps = {
    messages: Messages[],
}
export default function MessageShow(props: MessageProps) {
    return (
        <List sx={{
            width: '100%',
            maxWidth: 1000,
            bgcolor: '#9CA3AF',
            marginLeft: '10em',
            marginTop: '1em',
            color: '#E5E7EB'
        }}>
            {props.messages.map((message) => {
                return (
                    <>
                        <ListItem alignItems="flex-start"
                                  sx={{backgroundColor: '#606470', borderRadius: '2em', marginBottom: '1em',}}>
                            <ListItemAvatar>
                                <Avatar alt="MessageIcon" src="../envelope.svg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={"Title: " + message.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{display: 'inline', color: '#E5E7EB'}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            <p> Absender: {message.sender}</p>
                                            <p> Empfänger: {message.receiver}</p>
                                            <p> Empfangen am: {message.created_at}</p>
                                        </Typography>
                                        <p className={'message'}>{message.message}</p>
                                        <Button> Löschen </Button>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li"/>
                    </>
                )
            })
            }
            <Button> Neue Nachricht </Button>
        </List>
    );
}
