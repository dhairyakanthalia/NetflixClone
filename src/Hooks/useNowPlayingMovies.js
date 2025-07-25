import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const getNowPLayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const res = await data.json();
        dispatch(addNowPlayingMovies(res.results));
    }

    useEffect( () => {
        getNowPLayingMovies();
    },[])

}

export default useNowPlayingMovies;