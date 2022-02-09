import { Link, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  Card,
  MovieTitle,
  MoviePoster,
} from './MoviesList.styled';
import PropTypes from 'prop-types';
const posterUrl = 'https://image.tmdb.org/t/p/w200';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {' '}
            <Card>
              <MoviePoster>
                <img
                  src={`${posterUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
              </MoviePoster>

              <MovieTitle>{movie.title}</MovieTitle>
            </Card>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
