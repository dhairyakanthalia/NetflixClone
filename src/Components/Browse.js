import React from 'react'
import Header from './Header'
import './Styles/Browse.css';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

  return (
    <div className='browse'>
      <Header/>
      {showGptSearch?<GptSearch/>:
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      }
    </div>
  )
}

export default Browse