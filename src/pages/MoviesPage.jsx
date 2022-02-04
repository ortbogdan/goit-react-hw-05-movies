import { Searchbar, MoviesList } from '../components';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getMoviesByQuery } from '../services/moviesApi';
export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (query === '') return;
    async function fetchItems() {
      try {
        const items = await getMoviesByQuery(query);
        setMovies(prevItems => [...prevItems, ...items]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, [query]);
  const onFormSubmit = searchedMovie => {
    console.log(searchedMovie);
    setQuery(searchedMovie);
  };
  return (
    <div>
      <Switch>
        <Route path="/movies" exact>
          <Searchbar onFormSubmit={onFormSubmit} />
          {movies.length > 0 && <MoviesList movies={movies} />}
        </Route>
      </Switch>
    </div>
  );
};
