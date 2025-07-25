import React from 'react'
import { IMG_URL } from '../Utils/Constants'
import './Styles/MovieCard.css';

const MovieCard = ({posterPath}) => {
  return (
    <div className='poster'>
        <img src={IMG_URL + posterPath} alt = "Movie Card"/>
    </div>
  )
}
export default MovieCard