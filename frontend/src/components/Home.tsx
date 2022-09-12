import * as React from 'react';
import Box from '@mui/material/Box';

export default function Home() {

    return (
        <>
            <Box
                sx={{
                    width: 1000,
                    height: 'auto',
                    backgroundColor: 'rgba(255,215,0,0.44)',
                    borderRadius: '1em',
                    textAlign: 'left',
                    marginLeft: '300px',
                    marginTop: 7,
                    marginBottom: 2,
                    marginRight: 2,


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
                            <li> Einbinden einer MongoDB mit zwei Repositories</li>
                            <li> Provisorische Home Seite</li>
                            <li> Filterung der Projekte mit verschiedenen Möglichkeiten</li>
                            <li> Sortierung der Projekte</li>
                        </p>
                        <p> Folgende Featueres sind noch in Arbeit </p>
                        <p>
                            <li> Validieren der verschiedenen Imputfelder</li>
                            <li> Einlogfunktion mit verschiedenen Berechtigungen</li>
                            <li> Aktives Nachrichtensystem zwischen den einzelnen Benutzern</li>
                            <li> Tabellen export als PDF und Excel-Datei</li>
                            <li> Datenabfrage mit GraphQL optimieren</li>
                            <li> Automatische aktualisierung der Daten</li>
                        </p>
                    </h4>
                </div>
            </Box>
    </>
    )
}
