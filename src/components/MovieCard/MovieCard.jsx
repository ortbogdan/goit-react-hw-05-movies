import PropTypes from 'prop-types';
import {
  useLocation,
  useHistory,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import {
  Card,
  FilmInfo,
  Button,
  Thumb,
  Genres,
  MovieDescription,
  AdditionalList,
  AdditionalMovieInfo,
  AdditionalListItem,
} from './MovieCard.styled';
import { BiArrowBack } from 'react-icons/bi';
import noPoster from '../../images/sorry-poster.jpg';
import ReactStars from 'react-rating-stars-component';
const posterUrl = 'https://image.tmdb.org/t/p/w300';
export const MovieCard = ({ movieInfo }) => {
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  const onGoBack = () => {
    history.push(location?.state?.from ?? '/'); // Elvis (Optional chaining) - location?.state?.from
  };
  return (
    <div>
      {/* useHistory метод який повертає в стеку історії на один шлях назад, те саме, що метод go(-1), але його не можна використовувати, оскыльки він тільки повертає на попередню вкладку    */}
      <Button type="button" onClick={onGoBack}>
        <BiArrowBack />
        Go back
      </Button>
      <Card>
        <Thumb>
          {poster_path ? (
            <img src={`${posterUrl}${poster_path}`} alt={title} />
          ) : (
            <img src={noPoster} alt="No poster" />
          )}
        </Thumb>
        <FilmInfo>
          <h2>{title}</h2>
          <p>
            User voute:{' '}
            {vote_average ? vote_average * 10 + '%' : <span>Not found</span>}
          </p>
          <ReactStars
            isHalf={true}
            value={vote_average}
            count={10}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
          <h3>Overview</h3>
          {overview ? (
            <MovieDescription>{overview}</MovieDescription>
          ) : (
            <p>Not found</p>
          )}
          <h3>Genres</h3>
          {genres ? (
            <Genres>{genres.map(({ name }) => name).join(', ')}</Genres>
          ) : (
            <p>Not found</p>
          )}
        </FilmInfo>
      </Card>
      <AdditionalMovieInfo>
        <h3>Additional information</h3>
        <AdditionalList>
          <AdditionalListItem>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: location.state.from,
                },
              }}
            >
              Cast
            </NavLink>
          </AdditionalListItem>
          <AdditionalListItem>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: location.state.from,
                },
              }}
            >
              Reviews
            </NavLink>
          </AdditionalListItem>
        </AdditionalList>
      </AdditionalMovieInfo>
    </div>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
