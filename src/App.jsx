import { Route } from 'react-router-dom';
import { Navigation, MoviesList } from './components';
import { getTrendingMovies } from './services/moviesApi';

export const App = () => {
  getTrendingMovies();
  return (
    <div>
      <Route>
        <Navigation />
      </Route>
      <Route path="/" exact>
        <MoviesList />
      </Route>
    </div>
  );
};
