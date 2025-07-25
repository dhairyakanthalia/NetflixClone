import React from 'react'
import './Styles/VideoTitle.css';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='title'>
        <h1 className='heading'>{title}</h1>
        <p className='overview'>{overview}</p>
    </div>
  )
}

export default VideoTitle