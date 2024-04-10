import React, {useState} from 'react'
import './Search.css';
import PeopleIcon from '@mui/icons-material/People';
import {Button} from "@mui/material";
import { DateRangePicker } from 'react-date-range';
 

const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate:endDate,
        key: "selection",
    }

    const handleSelect = (range) =>{
        setStartDate(range.selection.startDate);
        setEndDate(range.selection.endDate);
    }

  return (
    <div className='search'>
        <DateRangePicker ranges = {[selectionRange]} onChange = {handleSelect} />
       <h2>Number of guests
        <PeopleIcon />
       </h2>
       <input min = {0} defaultValue ={2} type='number' /> Search Airbnb <Button />
    </div>
  )
}

export default Search