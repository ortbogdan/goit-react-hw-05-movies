import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigation } from './components';
import { getTrendingMovies } from './services/moviesApi';
import { HomePage, MoviesPage, NotFoundPage, MovieDetailsPage } from './pages';
export const App = () => {
  getTrendingMovies();
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
};
