import PropTypes from 'prop-types';
const imageUrl = 'https://image.tmdb.org/t/p/w300';
export const MovieCard = ({ movieInfo }) => {
  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  return (
    <article>
      <img src={`${imageUrl}${poster_path}`} alt={title} />
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
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
