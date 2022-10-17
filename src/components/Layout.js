import React, {useState, useEffect} from 'react';
import { Typography, Box, AppBar, Toolbar, IconButton, Button, TextField, InputAdornment, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from '../pages/Search';
import SearchIcon from '@mui/icons-material/Search';
import Yelp from '../api/Yelp';
import Details from '../pages/Details';

const Layout = () => {
    const[searchText,setSearchText] = useState("Empty")
    const [results, setResults] = useState([])
    const [restId, setRestId] = useState("Nothing")
    let mySearchTest = "here"
    // let mySearchTest = "Empaty."

    const searchApi = async (term) => {
      //  const response = await Yelp('24416', term)
      //  console.log(response.data.businesses)
      //  setResults(response.data.businesses)
      try {
      const location = `24416`

       const response2 = await fetch(`/api/yelp?term=${term}&location=${location}`)
       const data = await response2.json()
       console.log("hi", data.businesses)
       setResults(data.businesses)
      } catch (e){
        console.log(e)
      }
    }
  
    const doSearch = (e) => {
        setSearchText(e.target.value)
        searchApi(e.target.value)
    }

  

      useEffect (() => {
          searchApi("Pizza")
      } , [ ])
    
    return (
        <>
        <Paper sx={{backgroundColor : "#eeeeee", pb: 2}}>
        <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <TextField 
            
            onKeyPress = {
                (e) => {
                    if (e.key === "Enter"){
                        doSearch(e)
                    }
                }
            }

            label = "search"
            
            variant='outlined'
             InputProps={{
               startAdornment: (
                    <InputAdornment position='start'>
                   <SearchIcon />
                    </InputAdornment>
               )
   }}
            />
             
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        <Typography variant="h6"> Your search for:  {searchText}</Typography>

        
        <Routes>
            <Route exact path='/' element={<Search searchResults={results}/>} restId={setRestId}/>
            <Route exact path='/search' element={<Search searchResults={results}/>} restId={setRestId}/>
            <Route exact path='/Details' element={<Details restId = {restId}/>}/>
            
        </Routes>
        </BrowserRouter>
        </Paper>
        </>
    )
}
export default Layout