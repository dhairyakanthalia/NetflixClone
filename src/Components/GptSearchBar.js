import React from 'react'
import './Styles/GptSearchBar.css';

const GptSearchBar = () => {
  return (
    <div className='gpt'>
        <form className='gptForm'>
            <input type='text' className='gptInput' placeholder='What you would like to watch'/>
            <button className='search'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar