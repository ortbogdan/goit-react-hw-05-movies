import {
  useParams,
  useRouteMatch,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getMovieDetailsById } from '../services/moviesApi';
import { Container } from '../components/index.js';

const MovieCard = lazy(() =>
  import('../components/index.js').then(module => ({
    default: module.MovieCard,
  })),
);
const Cast = lazy(() =>
  import('../components/index.js').then(module => ({
    default: module.Cast,
  })),
);
const Reviews = lazy(() =>
  import('../components/index.js').then(module => ({
    default: module.Reviews,
  })),
);

export const MovieDetailsPage = () => {
  const { movieId } = useParams(); // movieId відповідає параметрам App
  const { url } = useRouteMatch();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    async function fetchMovieInfo(id) {
      try {
        const data = await getMovieDetailsById(id);
        setMovieInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieInfo(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          {movieInfo && (
            <>
              <MovieCard movieInfo={movieInfo} />
              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link to={`${url}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`${url}/reviews`}>Reviews</Link>
                </li>
              </ul>
              <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                  <Route path={`${url}/cast`} exact>
                    <Cast cast={movieInfo.credits.cast} />
                  </Route>
                  <Route path={`${url}/reviews`} exact>
                    <Reviews articles={movieInfo.reviews.results} />
                  </Route>
                </Suspense>
              </Switch>
            </>
          )}
        </Suspense>
      </Container>
    </main>
  );
};
