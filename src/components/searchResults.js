import { SettingsBackupRestoreOutlined } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarRateIcon from '@mui/icons-material/StarRate';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CallIcon from '@mui/icons-material/Call';
import ThirtyFpsSharpIcon from '@mui/icons-material/ThirtyFpsSharp';
import MoneySharpIcon from '@mui/icons-material/MoneySharp';
import SixtyFpsSharpIcon from '@mui/icons-material/SixtyFpsSharp';
import Looks5SharpIcon from '@mui/icons-material/Looks5Sharp';



const SearchResults = ({food,title,setRestId}) => {

    const navigate =useNavigate()
    const goToDetails = (restId) => {
        setRestId(restId)
        navigate("/detail")


        }
        const stars = (value) => {   
             
             let starRating = value.rating
            const starsEnd = [];
              
                    for( let i = 0; i <= 5; i++ ){
                        
                         if (starRating >= 1) {
                             starRating = starRating - 1
                               starsEnd.push(<StarBorderIcon/>)
                            
                            
                         }
                          
                          else if (starRating > 0){
                               starRating = 0
                               starsEnd.push(<StarHalfIcon/>)
                         }
                        
                        else{
                        starsEnd.push(<StarRateIcon/>)
                    }


        
                }
                return (
                    <>
                    {starsEnd[0]}
                    {starsEnd[1]}
                    {starsEnd[2]}
                    {starsEnd[3]}
                    {starsEnd[4]}
                    </>
                )
    }
    const peopleTalk = (value) => {   
       if (value.review_count > 100) {
        return(
            <>
            With more then <MoneySharpIcon/> reviews this place is definetly something.
            </>
        )
       }
      else if (value.review_count > 60) {
        return(
            <>
            And you knows its true cuz thats out of more then <SixtyFpsSharpIcon/> freaking reviews.
            </>
        )
       }
       else if (value.review_count > 30) {
        return(
            <>
            And thats out of more then <ThirtyFpsSharpIcon/> reviews.
            </>
        )
       }
       else if (value.review_count > 5) {
        return(
            <>
           Averaged out of more then <Looks5SharpIcon/> reviews.
            </>
        )
       }
       else {
       return(
        <>
        Out of, well not many reviews.
        </>
            )
       }

    }

    const typesOfTrans = (value) => {   
             let transTypes = [];
               for( let i = 0; i <= value.transactions.length;){
                   
                    if (value.transactions[i] === `pickup`) {
                        transTypes.push(<ShoppingBagIcon/>)
                        i++
                    }
                     
                   
                   else if (value.transactions[i] === `delivery`){
                    transTypes.push(<LocalShippingIcon/>)
                    i++
        
                   }
                   else if (value.transactions[i] === `restaurant_reservation`){
                    transTypes.push(<CallIcon/>)
                    i++
                }
                else{
                    transTypes.push("")
                    i++
                }

            }

           return (
           <>
                    
                    {value.transactions[0]}
                    {transTypes[0]}
                    {value.transactions[1]}
                    {transTypes[1]}
                    {value.transactions[2]}
                    {transTypes[2]}
                    {value.transactions[3]}
                    {transTypes[3]}
                </>
                )
    
}       

    

    
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
                        alt="This picture has gone to lunch."
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {value.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Address: {value.location.address1}, {value.location.city}, {value.location.state} <br/>
                           Phone #: {value.display_phone}<br/>
                           Rating: <br/>{stars(value)} <br/> {peopleTalk(value)}
                           <br/>
                           Transaction Types: <br/>
                            {typesOfTrans(value)}


                           


                
                        </Typography>
                    </CardContent>
                    <CardActions>
                        
                        <Button size="small" onClick={(e) => goToDetails(value.id)}>details</Button>
                        <a href={""+value.url} target="_blank" rel="noopener noreferrer">
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