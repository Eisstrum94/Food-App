import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import {Link} from 'react-router-dom'



const Search = () => {

    return (
        <>
        <Grid container spacing={2}>
            
            <Grid item xs={6} md={2}>Hi i am the search page.</Grid>
            <Grid item xs={6} md={2}>Hello </Grid>
            <Grid item xs={6} md={2}>kwnny </Grid>
            <Grid item xs={6} md={2}>bill </Grid>
            <Grid item xs={6} md={2}>alex </Grid>
            <Grid item xs={6} md={2}>ted </Grid>
            
        </Grid> 
        <Typography> im The Search </Typography>
        <Button component={Link} to="/testgrid" variant='outlined'>test grid</Button>
        </>
    )
}
export default Search