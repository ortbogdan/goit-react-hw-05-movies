import { getTrendingMovies } from '../services/moviesApi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to="/movies/:movieId">{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
