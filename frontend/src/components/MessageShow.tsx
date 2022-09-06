import * as React from 'react';
import {Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Messages} from "./Messages";
import {NewMessage} from "./NewMessage";
import AddMessages from "./AddMessages";

type MessageProps = {
    messages: Messages[],
    deleteMessage: (id: string) => Promise<void>
    addMessage: (newMessage: NewMessage) => Promise<Messages>,
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
                    <div key={message.id}>
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
                                        </Typography>
                                        <p> Absender: {message.sender} , Empfänger: {message.receiver} , Empfangen
                                            am: {message.created_at}</p>
                                        <p className={'message'}>{message.message}</p>
                                        <Button onClick={() => props.deleteMessage(message.id)}> Löschen </Button>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li"/>
                    </div>
                )
            })
            }
            {<AddMessages addMessage={props.addMessage}/>}
        </List>
    );
}
