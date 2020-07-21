
import React, { useEffect, useState } from 'react'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography,  } from '@material-ui/core'
import { useTheme, makeStyles, fade } from '@material-ui/core/styles'
import axios from 'axios'
const _ = require('lodash')

const useStyles = makeStyles((theme) => ({

    root: {        
        maxWidth: 270        
    },
    media: {

        height: 200,
    },
}))

const Cards = props => {

    const { tab, idGenre  } = props;
    const classes = useStyles();
    const [listMovieGenreDetail, setListMovieGenreDetail ] = useState(dummyFirst)

    useEffect(() => {


        const { REACT_APP_URL_API, REACT_APP_LIST_MOVIES, REACT_APP_API_KEY} = process.env;

        const header =  {  //*Need refactor-man    
    
            'Accept': "application/json",
            'Content-Type' : "application/json",            
        };    
        axios.defaults.headers.common = header;   

        axios.get(`${REACT_APP_URL_API}${REACT_APP_LIST_MOVIES}?api_key=${REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`)
            .then(function(response){

                console.log("Original response : ", response)
                if(response !== undefined && response !== null ){

                    setListMovieGenreDetail(response.data.results);                  
                };
                
            })
            .catch(function(error){
                            
                console.log("Error : ", error.response);
            })

    },[])

    useEffect(() => {

        const { REACT_APP_URL_API, REACT_APP_LIST_MOVIES, REACT_APP_API_KEY} = process.env;

        const header =  {  //*Need refactor-man    
    
            'Accept': "application/json",
            'Content-Type' : "application/json",            
        };    
        axios.defaults.headers.common = header;   

        axios.get(`${REACT_APP_URL_API}${REACT_APP_LIST_MOVIES}?api_key=${REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGenre}`)
            .then(function(response){

                console.log("Original response : ", response)
                if(response !== undefined && response !== null ){

                    setListMovieGenreDetail(response.data.results);                  
                };
                
            })
            .catch(function(error){
                            
                console.log("Error : ", error.response);
            })        

    },[tab])

    return (
        <Box display='flex' flexWrap="wrap" alignContent="flex-start" justifyContent='center'>
            {
                
                listMovieGenreDetail.length > 0 && listMovieGenreDetail.map((item, i) => {
                    
                    return (
                        
                        <Box 
                            ml={2} mb={4} mr={2} mt={2}
                            key={i}
                            >
                        <Card className={classes.root} >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.REACT_APP_IMAGE_ORIGINAL_PATH}${item.poster_path}`}
                                    title={item.original_title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {
                                            item.overview
                                        }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>                           
                        </Card>
                    </Box>          
                    )
                })
            }
        </Box>
    )
};

export default Cards;

const dummyFirst = [
    {
        "popularity": 278.89,
        "vote_count": 1084,
        "video": false,
        "poster_path": "/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
        "id": 547016,
        "adult": false,
        "backdrop_path": "/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg",
        "original_language": "en",
        "original_title": "The Old Guard",
        "genre_ids": [
            28,
            14
        ],
        "title": "The Old Guard",
        "vote_average": 7.4,
        "overview": "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
        "release_date": "2020-07-10"
    }
]
