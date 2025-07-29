import { useEffect } from "react";
import { API_OPTIONS, TMDB_API_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(TMDB_API_URL + 'movie/popular?language=en-US&page=1', API_OPTIONS)
        const res = await data.json();
        dispatch(addPopularMovies(res.results));
    }

    useEffect( () => {
        getPopularMovies();
    },[])

}

export default usePopularMovies;