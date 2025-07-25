import React from 'react'
import useMovieTrailer from '../Hooks/useMovieTrailer';
import { useSelector } from 'react-redux';
import './Styles/VideoBackground.css';

const VideoBackground = ({movieId}) => {

useMovieTrailer(movieId);
const trailerVideo = useSelector(store => store.movies?.trailer);
if (!trailerVideo || trailerVideo.length === 0 || !trailerVideo[0].key) {
  return <div>Loading trailer...</div>;
}
  return (
    <div className='video'>
        <iframe className='frame' width="500" height="300" src={`https://www.youtube.com/embed/${trailerVideo[0].key}?&autoplay=1&mute=1` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground