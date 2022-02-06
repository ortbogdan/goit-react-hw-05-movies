import PropTypes from 'prop-types';
const photoUrl = 'https://image.tmdb.org/t/p/w200';
export const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ original_name, profile_path, character, id }) => (
        <li key={id}>
          <img src={`${photoUrl}${profile_path}`} alt={`${original_name}`} />
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};
