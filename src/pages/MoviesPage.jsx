import { Searchbar, MoviesList } from '../components';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { toast } from 'react-toastify';
import { getMoviesByQuery } from '../services/moviesApi';
export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.search) {
      const queryParam = queryString.parse(location.search).query;
      setQuery(queryParam);
    }
    return;
  }, [location]);

  useEffect(() => {
    if (query === '') return;
    async function fetchItems() {
      try {
        const items = await getMoviesByQuery(query);
        if (items.length === 0) {
          return toast.warn(
            'No movies found! Please try again with some different keywords',
          );
        }
        setMovies(items);
        history.push({ search: `query=${query}` });
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, [query, history]);

  const onFormSubmit = searchedMovie => {
    setQuery(searchedMovie);
  };
  return (
    <main>
      <Searchbar onFormSubmit={onFormSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};
