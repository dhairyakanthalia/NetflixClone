import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import './Styles/SecondaryContainer.css'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='secondary'>
      <MovieList title = {"Now Playing Movies"} movies = {movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer