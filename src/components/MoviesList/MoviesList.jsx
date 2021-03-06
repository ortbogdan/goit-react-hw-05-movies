import { Link, useLocation } from 'react-router-dom';
import noPoster from '../../images/sorry-poster.jpg';
import slugify from 'slugify';
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
  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${slugify(`${movie.title} ${movie.id}`, {
                lower: true,
              })}`, //метод пакету slugify отримує строку і перетвоює її, з додатковими налаштуваннями - {lower: true}
              state: {
                from: location,
              },
            }}
          >
            <Card>
              <MoviePoster>
                {movie.poster_path ? (
                  <img
                    src={`${posterUrl}${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <img src={noPoster} alt="No poster" />
                )}
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
