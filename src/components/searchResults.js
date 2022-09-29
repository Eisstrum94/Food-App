import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const SearchResults = ({food,title}) => {
    return(
    <>
                <Typography variant="h3"> {title}</Typography>
        <Grid container spacing={2} sx={{Pb:2}}>
            {
                food.map(
                    (value, index) => {
                    return (
                <Grid key={index} item xs={6} md={2}>
                <Card>
                    <CardContent> 
                          {value.name}
                    </CardContent>
                </Card>
            
                </Grid>
                    )
                    }
                )
}
</Grid>
        
        
        </>
    )
}

export default SearchResults