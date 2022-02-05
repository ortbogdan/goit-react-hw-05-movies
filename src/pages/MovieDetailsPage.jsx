import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetailsById } from '../services/moviesApi';
import { MovieCard } from '../components';
export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    async function fetchMovieInfo(id) {
      try {
        const data = await getMovieDetailsById(id);
        console.log(data);
        setMovieInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieInfo(movieId);
  }, [movieId]);
  console.log(movieId);

  return movieInfo ? <MovieCard movieInfo={movieInfo} /> : <p>Not found</p>;
};
