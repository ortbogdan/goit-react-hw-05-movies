import PropTypes from 'prop-types';
import { CastList, NoImage } from './Cast.styled';

const photoUrl = 'https://image.tmdb.org/t/p/w200';
export const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ original_name, profile_path, character, id }) => (
        <li key={id}>
          {profile_path ? (
            <img src={`${photoUrl}${profile_path}`} alt={`${original_name}`} />
          ) : (
            <NoImage>No photo</NoImage>
          )}
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </CastList>
  );
};

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};
