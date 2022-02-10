import {
  useParams,
  useRouteMatch,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getMovieDetailsById } from '../services/moviesApi';
import { Container, Loader } from '../components/index.js';
import {
  AdditionalMovieInfo,
  AdditionalList,
  AdditionalListItem,
} from './Page.styled';

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
        <Suspense fallback={<Loader />}>
          {movieInfo && (
            <>
              <MovieCard movieInfo={movieInfo} />
              <AdditionalMovieInfo>
                <h3>Additional information</h3>
                <AdditionalList>
                  <AdditionalListItem>
                    <NavLink to={`${url}/cast`}>Cast</NavLink>
                  </AdditionalListItem>
                  <AdditionalListItem>
                    <NavLink to={`${url}/reviews`}>Reviews</NavLink>
                  </AdditionalListItem>
                </AdditionalList>
              </AdditionalMovieInfo>
              <Switch>
                <Suspense fallback={<Loader />}>
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
