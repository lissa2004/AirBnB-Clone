import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './SearchResults.css';
import SearchResults from './SearchResults';

const SearchResults = ({img, location, description, title, price, total, star}) => {
  return (
    <div className='searchResult'>
        <img src={img} alt='' />
        <FavoriteBorderIcon />
        <div className='searchResult_hearts'>
            <div className='searchResult_infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>----</p>
                <p>{description}</p>
            </div>
            <div className='searchResult_infoBottom'>
                <div className='searchResult_stars'>
                    <p><strong>{star}</strong></p>
                </div>
            </div>
            <div className='searchResult_infoBottom'>
                <div className='searchResult_price'>
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
            </div>
        </div>
        <SearchResults 
        img=''
        location={''}
        title={welcome}
        description={''}
        stars={''}
        price={''}
        total={''}
        />
    </div>

  )
}

export default SearchResults