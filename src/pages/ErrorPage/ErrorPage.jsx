import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

const ErrorPage = () => {

    return (
        <>






                <Stack sx={{ justifyContent: 'center', height: '100%', alignItems: 'center', overflow: 'hidden', padding: 4, }} spacing={2}>

                    <img src="./loading.gif" alt="" style={{width:"100vh",height:"100%",}} />
                    <Alert sx={{ width: '50', }} variant='filled' severity="error"><AlertTitle>
                          Error 404</AlertTitle>
                        Hay un inconveniente en la ruta</Alert>

                </Stack>







        </>



    );
}

export default ErrorPage