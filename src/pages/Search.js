import React from 'react';
import { Typography, Grid, Button, Card, CardContent, Paper } from '@mui/material';
import {Link} from 'react-router-dom'
import { getValue } from '@mui/system';
import SearchResults from '../components/searchResults';

const Search = ({searchResults}) => {
    const people = ["kenny","teddy","billy","me","myself","I"]

    const cheapFood = searchResults.filter((value) => value.price === "$")
    const moderateFood = searchResults.filter((value) => value.price === "$$")
    const expansiveFood = searchResults.filter((value) => value.price === "$$$")


    return (
        <>
        <SearchResults food={cheapFood} title ={"cheap Food"}/>
        <SearchResults food={moderateFood} title ={"Moderate Food"}/>
        <SearchResults food={expansiveFood} title ={"Expansive Food"}/>

        {/* <Typography> im The Search </Typography>
        <Button component={Link} to="/testgrid" variant='outlined'>test grid</Button> */}
        </>
    )
}
export default Search