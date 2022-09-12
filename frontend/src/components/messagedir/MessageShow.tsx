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
            bgColor: 'green',
            marginLeft: '10em',
            marginTop: '1em',
            color: 'black'
        }}>
            {props.messages.map((message) => {
                return (
                    <div key={message.id}>
                        <ListItem alignItems="flex-start"
                                  sx={{
                                      backgroundColor: 'var(--TableBodyMessageBackground)',
                                      borderRadius: '2em',
                                      marginBottom: '1em',
                                      color: 'black'
                                  }}>
                            <ListItemAvatar>
                                <Avatar alt="MessageIcon" src="../envelope.svg"/>
                            </ListItemAvatar>
                            <ListItemText sx={{color: 'black'}}
                                          primary={"Title: " + message.title}
                                          secondary={
                                              <React.Fragment>
                                                  <Typography
                                                      sx={{display: 'flex', color: 'black'}}
                                                      component="span"
                                                      variant="subtitle1"
                                                      color="text.primary"
                                                  >{'Absender: ' + message.sender}
                                                  </Typography>

                                                  <Typography
                                                      sx={{display: 'flex', color: 'black'}}
                                                      component="span"
                                                      variant="subtitle2"
                                                      color="text.primary"
                                                  >{'Empfänger:' + message.receiver}
                                                  </Typography>
                                                  <Typography
                                                      sx={{display: 'flex', color: 'black'}}
                                                      component="span"
                                                      variant="subtitle2"
                                                      color="text.primary"
                                                  >
                                                  </Typography>
                                                  <Typography
                                                      sx={{display: 'inline', color: 'black'}}
                                                      component="span"
                                                      variant="body2"
                                                      color="text.primary"
                                                  >
                                                      {message.message}
                                                  </Typography>
                                              </React.Fragment>
                                          }/>
                            {(<Button sx={{
                                backgroundColor: 'var( --ButtonColor)',
                                color: 'black',
                                marginLeft: '3em',
                                borderColor: '#FFD700',
                                borderWidth: 'thin', borderStyle: 'solid', borderRadius: '3em'
                            }}
                                      variant={'outlined'} size={'small'}
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
