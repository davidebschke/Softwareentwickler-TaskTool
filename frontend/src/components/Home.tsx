import * as React from 'react';
import Box from '@mui/material/Box';

export default function Home() {

    return (
        <>
            <Box
                sx={{
                    width: 1000,
                    height: 600,
                    backgroundColor: 'grey',
                    borderRadius: '3em',
                    textAlign: 'left',
                    marginLeft: '300px',
                    marginTop: 3,
                    marginBottom: 3,
                    marginRight: 3,
                    borderStyle: 'solid',


                }}>
                <div className={'homeCircle'}>
                    <h1>Capstone Projekt : Softwareentwickler-TaskTool</h1>

                    <h3>Das Programm dient der Verwaltung von Projekten in der Softwareentwicklung. Bei Bedarf ist es
                        auch für andere Bereiche geeignet.</h3>

                    <h4><p>Folgende Features sind schon implementiert:</p>
                        <p>
                            <li> Import von Github Projekten mit Datagrid Attributen</li>
                            <li> Anzeigen, Einfügen, Editieren und Löschen von Projekten</li>
                            <li> Anzeigen, Einfügen und Löschen von Nachrichten</li>
                        </p>
                    </h4>
                </div>
            </Box>
    </>
    )
}
