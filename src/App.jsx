import { Route, Switch } from 'react-router-dom';
import { Navigation } from './components';
import { getTrendingMovies } from './services/moviesApi';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  getTrendingMovies();
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
};
