import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import './Styles/SecondaryContainer.css'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='secondary'>
      <MovieList title = {"Top Rated"} movies = {movies?.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer