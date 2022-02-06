import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
const posterUrl = 'https://image.tmdb.org/t/p/w300';
export const MovieCard = ({ movieInfo }) => {
  const history = useHistory();
  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  return (
    <main>
      {/* useHistory метод який повертає в стеку історії на один шлях назад, те саме, що метод go(-1)   */}
      <button type="button" onClick={() => history.goBack()}>
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
    </main>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
