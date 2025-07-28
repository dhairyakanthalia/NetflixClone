import React from 'react'
import Header from './Header'
import './Styles/Browse.css';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {

  useNowPlayingMovies();
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