import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const SearchResults = ({food,title}) => {
    return(
    <>
        {

            (food.length > 0) ? (
                    <Typography variant="h3"> {title}</Typography>
            ) : (
                <></>
            )
        
        }

        <Grid container spacing={2} sx={{Pb:2}}>
            {
                food.map(
                    (value, index) => {
                    return (
                <Grid key={index} item xs={6} md={2}>
                {/* <Card>
                    <CardContent> 
                          {value.name}
                    </CardContent>
                </Card> */}
            
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={value.image_url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {value.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Address: {value.location.address1}, {value.location.city}, {value.location.state} <br/>
                           Phone #: {value.display_phone}<br/>
                           Rating: {value.rating}/5 with {value.review_count} reviews.

                            
                        </Typography>
                    </CardContent>
                    <CardActions>
                        
                        <Button size="small">Share</Button>
                        <a href={""+value.url } target="_blank" rel="noopener noreferrer">
                        <Button size="small">
                                    Vist Website
                                    
                            </Button>
                            </a>
                    </CardActions>
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