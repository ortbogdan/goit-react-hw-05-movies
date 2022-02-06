import { Searchbar, MoviesList } from '../components';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { getMoviesByQuery } from '../services/moviesApi';
export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();

  console.log(history.location.search);

  useEffect(() => {
    if (history.location.search) {
      const queryParam = queryString.parse(history.location.search).query;
      console.log(queryParam);
      setQuery(queryParam);
    }
    if (query === '') return;
    async function fetchItems() {
      try {
        const items = await getMoviesByQuery(query);
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
