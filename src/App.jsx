import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigation } from './components';
import { getTrendingMovies } from './services/moviesApi';

// Зразок функції для застосування lazy до іменованого імпорту
const createChunk = componentName => {
  return lazy(() =>
    import('./pages/index.js').then(module => ({
      default: module[componentName],
    })),
  );
};

const HomePage = createChunk('HomePage');
const MoviesPage = createChunk('MoviesPage');
const NotFoundPage = createChunk('NotFoundPage');
const MovieDetailsPage = createChunk('MovieDetailsPage');

export const App = () => {
  getTrendingMovies();
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <ToastContainer />
    </>
  );
};
