import React, { useState, useMemo } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Slide} from '@material-ui/core'
import { useTheme  } from '@material-ui/core/styles'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import logo from '../images/logo-tmdb.png'

const HeaderBar = props => {  

    const theme = useTheme()  
    const [hideOnScroll, setHideOnScroll] = useState(true)   

    useScrollPosition(

        ({ prevPos, currPos }) => {

          const isShow = currPos.y > prevPos.y;

          if (isShow !== hideOnScroll) {
            setHideOnScroll(isShow)
          };
          
        },[hideOnScroll], false, false, 300
    );
    
    return useMemo(//*Untuk safety render :)

        () => (
            <>
                <CssBaseline />                      
                <Slide direction="bottom" in={hideOnScroll === true ? false : true}>
                    <AppBar
                        position="fixed"
                        elevation={1}  
                        style={{ backgroundColor: `${theme.palette.common.white}`, opacity: 0.7}}            
                    >
                        <Toolbar>            
                            <Box flexGrow={1}> 
                                <img src={logo} alt='logo' width={124} height={16} />
                            </Box>            
                        </Toolbar>
                    </AppBar>                                                                          
                </Slide>
            </>
        )

        
    )
};
export default HeaderBar;