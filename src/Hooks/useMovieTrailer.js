import { API_OPTIONS } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addTrailer } from '../Utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getBackgroundMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
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
