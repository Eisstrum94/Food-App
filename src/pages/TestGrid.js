import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import {Link} from 'react-router-dom'



const TestGrid = () => {

    return (
        <>
        <Grid container spacing={2}>

            <Grid item xs={6} md={2}>Hi </Grid>
            <Grid item xs={6} md={2}>Hello </Grid>
            <Grid item xs={6} md={2}>kwnny </Grid>
            <Grid item xs={6} md={2}>bill </Grid>
            <Grid item xs={6} md={2}>alex </Grid>
            <Grid item xs={6} md={2}>ted </Grid>
            
        </Grid> 
        <Typography> im The TestGrid </Typography>
        <Button component={Link} to="/search" variant='outlined'>Search</Button>
        </>
    )
}
export default TestGrid