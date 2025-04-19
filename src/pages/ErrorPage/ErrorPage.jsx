import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

const ErrorPage = () => {
    return (
        <Stack sx={{ backgroundColor:'InactiveCaption',justifyContent: 'start', height: '100vh', alignItems: 'center', overflow:'hidden', }} spacing={2}>
            <Alert sx={{width:'100%',}} variant='filled' severity="error"><AlertTitle>Error</AlertTitle>
                Hay un inconveniente en la ruta</Alert>
        </Stack>


    );
}

export default ErrorPage