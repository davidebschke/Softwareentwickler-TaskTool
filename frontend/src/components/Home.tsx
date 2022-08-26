import * as React from 'react';
import Box from '@mui/material/Box';

export default function Home() {

    return (
        <>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    borderRadius: '50%',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    marginLeft:3,
                    marginTop:3,
                    marginBottom:3,
                    marginRight:3,
                    borderStyle:'solid',

                }}
            >

                <div className={'homeCircle'}>
                    Hier ist der Inhalt der Box
                </div>
            </Box>

        <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                borderRadius: '50%',
                textAlign: 'center',
                textTransform: 'uppercase',
                marginLeft:3,
                marginTop:3,
                marginBottom:3,
                marginRight:3,
                borderStyle:'solid',

            }}
        >

            <div className={'homeCircle'}>
                Hier ist der Inhalt der Box
            </div>
        </Box>

    </>
    )
}
