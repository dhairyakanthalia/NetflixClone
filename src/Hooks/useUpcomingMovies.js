import { useEffect } from "react";
import { API_OPTIONS, TMDB_API_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Utils/moviesSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch(TMDB_API_URL + 'movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const res = await data.json();
        dispatch(addUpcomingMovies(res.results));
    }

    useEffect( () => {
        getUpcomingMovies();
    },[])

}

export default useUpcomingMovies;