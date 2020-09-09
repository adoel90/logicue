import React, { useState } from 'react';
import { Typography, Box, Paper, TextField, Button, CircularProgress, Snackbar } from '@material-ui/core'
import { useTheme, makeStyles, fade } from '@material-ui/core/styles'

import axios from 'axios';
const LoginForm = props => {

    const theme = useTheme()    
    const [ isOpenSnackbar, setOpenSnackbar ] = useState(false)

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const [isLoader, setLoader]= useState(false)
    const handleSubmit = () => {

        setLoader(true)
        let data = {
            username,
            password
        };

        console.log("Data : ", data);

         /*
    
        ```````````````````````````````````````````````````````
        Testing Direct axios to server, harusnya jalan pake ini.

        ```````````````````````````````````````````````````````
        */
        const header =  {       
        
            'Accept': "application/json",
            'Content-Type' : "application/json",
            'x-api-key':'API_BANINDO_KEY',
            'Authorization': 'Basic amt0OmpvZ2ph'
        };
      
        axios.defaults.headers.common = header;   
      
        axios.post(`http://banindo-api.l.logique.co.id/login`, data).then((response) => {
            
            setLoader(false)
            console.log("Response : ", response)
    
        }).catch(e => {
            
            setLoader(false)
            console.log(e.response)
            setOpenSnackbar(true)
        })
    };

    return (

        <>
              <Box display='flex' flexDirection='row' justifyContent='center' mb={8}>
                <Paper elevation={3} style={{padding :40, margin: 32}}>

                    <Typography variant='h6' >
                        Form Login - For testing Only
                    </Typography>

                    <TextField id="email" label="Email/Username" type='text' onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <br />

                    <TextField id="password" label="Password" type='password' onChange={(e) => setPassword(e.target.value)} />

                    <br />
                    <br />
                    <Button variant='outlined' onClick={handleSubmit}>
                        {isLoader !== true ? "Masuk" : <CircularProgress size={16} />}
                        
                    </Button>
                </Paper>            
              </Box>

              <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={isOpenSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                message='Whoops, something wwnt wrong !'
                style={{backgroundColor: theme.palette.warning}}
                
            />
        </>
    )
};

export default LoginForm;



