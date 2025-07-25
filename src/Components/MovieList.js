import React from 'react'
import MovieCard from './MovieCard'
import './Styles/MovieList.css'

const MovieList = ({title,movies}) => {
  return (
    <div className='movieList'>
            <h1 className='movieTitle'>{title}</h1>
            <div className='list'>
            <div className='movieCard'>
            <div className='cards'>
              {
                movies?.map((movie) => (
                  <MovieCard key={movie.id} posterPath = { movie?.poster_path}/>
                ))
              }
            </div>
            </div>
        </div>

    </div>
  )
}

export default MovieList