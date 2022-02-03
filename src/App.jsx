import {
  getTrendingMovies,
  getMoviesByQuery,
  getMovieCreditsById,
  getMovieReviewsById,
} from './services/moviesApi';

export const App = () => {
  getTrendingMovies();
  getMoviesByQuery('batman');
  getMovieCreditsById(131885);
  getMovieReviewsById(597208);
  return <div className="App"></div>;
};
