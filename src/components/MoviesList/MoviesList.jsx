import { Link, useLocation } from 'react-router-dom';
import { List, ListItem } from './MoviesList.styled';
import PropTypes from 'prop-types';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
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
            {movie.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
