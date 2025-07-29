import React, { useRef } from 'react'
import './Styles/GptSearchBar.css';
import { useDispatch } from 'react-redux';
import { API_OPTIONS, TMDB_API_URL } from '../Utils/Constants';
import openai from '../Utils/openai';
import { addGptMovieResult } from '../Utils/gptSlice';

const GptSearchBar = () => {
  const searchText=useRef(null);
  const dispatch = useDispatch();


  const searchMovieTmdb = async(movie)=>{
    const data = await fetch(TMDB_API_URL + 'search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json= await data.json();

    return json.results;
  }

  const handleGptSearchClick = async() => {
    const getQuery = "Act as a Movie Recommendation System and suggest some movies for the Query :"+searchText.current.value +"only give the name of most 5 relevant Movies,comma seperated.";
    const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'assistant', content:getQuery }],
        model: 'gpt-3.5-turbo',
      });
    const gptMovies=gptResults.choices?.[0]?.message.content.split(",");
    const promiseArray = gptMovies.map(movie=>searchMovieTmdb(movie));
    const tmdbResults= await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
  }

  return (
    <div className='gpt'>
        <form onSubmit={e=>e.preventDefault()} className='gptForm'>
            <input ref={searchText} type='text' className='gptInput' placeholder='What you would like to watch'/>
            <button onClick={handleGptSearchClick} className='search'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar