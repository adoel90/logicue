import React, { useState } from 'react';
import { Box, IconButton, Snackbar } from '@material-ui/core'
import { useTheme, makeStyles, fade } from '@material-ui/core/styles'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import pictBackground from '../images/sonic.jpg'
import logo from '../images/logo-tmdb.png'

const useStyles = makeStyles((theme) => ({

    icon: {
        boxShadow: 'inset 0 0 4px white',
        color: `${theme.palette.common.white}`, 
        border: `1px solid ${theme.palette.common.white}`, 
        opacity: 0.8,
        marginLeft: 16,
        '&::after' : {
  
            content: "''",
            width: '16px',        
            position: 'absolute',
            // left: 0,
            left: 44,                    
            top: '50%',
            zIndex: 1,
            borderBottom: `1px solid ${theme.palette.common.white}`
          },
        '&:hover':{
            border: `1px solid ${theme.palette.secondary.light}`, 
            color: `${theme.palette.secondary.light}`, 
            boxShadow: 'inset 0 0 0 white',
        }
            
    }   
}))
const Header = props => {    
    const theme = useTheme()
    const classes = useStyles();  
    
    const [ isOpenSnackbar, setOpenSnackbar ] = useState(false)
    return (

        <>          
            <Box
                style={{
                    backgroundImage: `url(${pictBackground})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    background: 'contain',
                    filter: 'blur(0.5px)'                    
                }}
            >
                <Box display='flex' flexDirection='row' justifyContent='center'>
                    <Box mt={16} mb={16}>                         
                        <IconButton 
                            className={classes.icon} 
                            onClick={() => setOpenSnackbar(true)}
                         >
                            <PlayArrowIcon style={{color:theme.palette.primary.contrastText, fontSize: 64}} fontSize='large' />
                        </IconButton>
                    </Box>              
                </Box>            
            </Box>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={isOpenSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                message="I am sorry, still development ☕"
                style={{backgroundColor: theme.palette.warning}}
                
            />
        </>
        
    )
};

export default Header;
