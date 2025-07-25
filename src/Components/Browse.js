import React from 'react'
import Header from './Header'
import './Styles/Browse.css';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div className='browse'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse