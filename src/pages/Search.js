import React from 'react';
// import { Typography, Button, Card, CardContent, Paper } from '@mui/material';
// import {Link} from 'react-router-dom'
// import { getValue } from '@mui/system';
import SearchResults from '../components/searchResults';

const Search = ({searchResults, setRestId}) => {

    const cheapFood = searchResults.filter((value) => value.price === "$")
    const moderateFood = searchResults.filter((value) => value.price === "$$")
    const expansiveFood = searchResults.filter((value) => value.price === "$$$")


    return (
        <>
        <SearchResults food={cheapFood} title ={"cheap Food"} setSearchId={setRestId}/>
        <SearchResults food={moderateFood} title ={"Moderate Food"}setSearchId={setRestId}/>
        <SearchResults food={expansiveFood} title ={"Expansive Food"}setSearchId={setRestId}/>

        {/* <Typography> im The Search </Typography>
        <Button component={Link} to="/testgrid" variant='outlined'>test grid</Button> */}
        </>
    )
}
export default Search