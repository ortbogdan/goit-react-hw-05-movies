import { getTrendingMovies } from '../services/moviesApi';
import { useState, useEffect } from 'react';
import { MoviesList } from '../components';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getTrendingMovies();
        setMovies(items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);

  return <MoviesList movies={movies} />;
};
