import * as React from 'react';
import {Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Messages} from "./Messages";
import {NewMessage} from "./NewMessage";
import AddMessages from "./AddMessages";

import "./message.css"

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
                                  sx={{
                                      backgroundColor: '#2b4b8e',
                                      borderRadius: '2em',
                                      marginBottom: '1em',
                                      color: 'white'
                                  }}>
                            <ListItemAvatar>
                                <Avatar alt="MessageIcon" src="../envelope.svg"/>
                            </ListItemAvatar>
                            <ListItemText sx={{color: 'white'}}
                                          primary={"Title: " + message.title}
                                          secondary={
                                              <React.Fragment>
                                                  <Typography
                                                      sx={{display: 'flex', color: '#E5E7EB'}}
                                                      component="span"
                                                      variant="subtitle1"
                                                      color="text.primary"
                                                  >{'Absender: ' + message.sender}
                                                  </Typography>

                                                  <Typography
                                                      sx={{display: 'flex', color: '#E5E7EB'}}
                                                      component="span"
                                                      variant="subtitle2"
                                                      color="text.primary"
                                                  >{'Empfänger:' + message.receiver}
                                                  </Typography>
                                                  <Typography
                                                      sx={{display: 'flex', color: '#E5E7EB'}}
                                                      component="span"
                                                      variant="subtitle2"
                                                      color="text.primary"
                                                  >
                                                  </Typography>
                                                  <Typography
                                                      sx={{display: 'inline', color: '#E5E7EB'}}
                                                      component="span"
                                                      variant="body2"
                                                      color="text.primary"
                                                  >
                                                      {message.message}
                                                  </Typography>
                                              </React.Fragment>
                                          }/>
                            {(<Button sx={{backgroundColor: '#051e25', color: 'white', borderRadius: '2em'}}
                                      variant={'contained'} size={'small'}
                                      onClick={() => props.deleteMessage(message.id)}> Löschen </Button>)}

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
