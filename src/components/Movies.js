import React, { useState, useEffect } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core'
import { useTheme, makeStyles, fade } from '@material-ui/core/styles'
import axios from 'axios';

import Cards from './Cards'
const _ = require('lodash')

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginTop: 8
    } 
}))

const Movies = props => {

    const theme = useTheme()
    const classes = useStyles();       

    useEffect(() => {

        
        const { REACT_APP_URL_API, REACT_APP_LIST_GENRE_MOVIES, REACT_APP_API_KEY} = process.env;

        const header =  {  //*Need refactor-man    
    
            'Accept': "application/json",
            'Content-Type' : "application/json",            
        };    
        axios.defaults.headers.common = header;   

        axios.get(`${REACT_APP_URL_API}${REACT_APP_LIST_GENRE_MOVIES}?api_key=${REACT_APP_API_KEY}`)
            .then(function(response){

                if(response !== undefined && response !== null ){

                    setListGenre(response.data.genres);                  
                };
                
            })
            .catch(function(error){
                            
                console.log("Error : ", error.response);
            })

    },[])

    const [tab, setTab] = useState(0);
    const [ idGenre, setIdGenre ] = useState(28);
    const handleChange = (e, newValue) => {        
        
        // console.log(newValue)
        setTab(newValue);

        const filtered = _.filter(listGenre, (item, i) => i == newValue ? item : null  )        
        setIdGenre(filtered[0].id)
    };

    const [ listGenre, setListGenre ] = useState([{

        id: 28,
        name: "Action"
    }]);

    return (
        <>
            <Paper className={classes.root} elevation={0}>
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"                
                    // centered
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {
                        listGenre.length > 0 && listGenre.map((item, i) => (

                            <Tab label={item.name} key={i} />
                        ))
                    }         
                </Tabs>
            </Paper>
            <Cards 
                tab={tab} 
                idGenre = { idGenre }                    
            />
        </>
    )
}

export default Movies;
