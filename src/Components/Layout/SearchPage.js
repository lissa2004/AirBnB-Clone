import React from 'react'
import { Button } from '@mui/material';
import './SearchPage.css';

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className ='searchPage_info'>
          <p>62 Stays * 26 August to 30 August 2 * Guests</p>
          <h1>Stays nearby</h1>
          <Button varient="outlined">Cancellation Flexible</Button>
          <Button varient="outlined">Type of Place</Button>
          <Button varient="outlined">Price</Button>
          <Button varient="outlined">Rooms and Beds</Button>
          <Button varient="outlined">More Filters</Button> 
        </div>
    </div>
  )
}

export default SearchPage