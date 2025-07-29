import { API_OPTIONS, TMDB_API_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addTrailer } from '../Utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getBackgroundMovie = async () => {
    const data = await fetch(
      TMDB_API_URL + `movie/${movieId}/videos`,
      API_OPTIONS
    );
    const res = await data.json();

    const filterData = res.results.filter((movie) => movie.type === "Trailer");

    const trailerArray = filterData.length ? [filterData[0]] : [res.results[0]];
    dispatch(addTrailer(trailerArray));
  };

  useEffect(() => {
    getBackgroundMovie();
  }, [movieId]);
};

export default useMovieTrailer;
