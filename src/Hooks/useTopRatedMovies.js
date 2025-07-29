import { useEffect } from "react";
import { API_OPTIONS, TMDB_API_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(TMDB_API_URL + 'movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const res = await data.json();
        dispatch(addTopRatedMovies(res.results));
    }

    useEffect( () => {
        getTopRatedMovies();
    },[])

}

export default useTopRatedMovies;