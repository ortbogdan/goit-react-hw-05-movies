import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
const posterUrl = 'https://image.tmdb.org/t/p/w300';
export const MovieCard = ({ movieInfo }) => {
  const location = useLocation();
  const history = useHistory();
  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  const onGoBack = () => {
    history.push(location?.state?.from ?? '/'); // Elvis (Optional chaining) - location?.state?.from
  };
  return (
    <div>
      {/* useHistory метод який повертає в стеку історії на один шлях назад, те саме, що метод go(-1), але його не можна використовувати, оскыльки він тільки повертає на попередню вкладку    */}
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      <article>
        <img src={`${posterUrl}${poster_path}`} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>User voute: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && (
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </div>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
