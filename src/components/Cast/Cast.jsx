import PropTypes from 'prop-types';
import { CastPreview, ActorInfo } from './Cast.styled';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import noPoster from '../../images/sorry-poster.jpg';

const photoUrl = 'https://image.tmdb.org/t/p/w200';
export const Cast = ({ cast }) => {
  const handleDragStart = e => e.preventDefault();
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
    1024: {
      items: 6,
    },
  };
  const movieCast = cast.map(({ original_name, profile_path, id }) => (
    <ActorInfo key={id}>
      {profile_path ? (
        <img
          src={`${photoUrl}${profile_path}`}
          alt={`${original_name}`}
          onDragStart={handleDragStart}
        />
      ) : (
        <img src={noPoster} alt="No poster" />
      )}
      <p>{original_name}</p>
    </ActorInfo>
  ));

  return (
    <CastPreview>
      <AliceCarousel
        autoPlay
        responsive={responsive}
        infinite
        disableButtonsControls
        disableDotsControls
        mouseTracking
        items={movieCast}
      />
    </CastPreview>
  );
};

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};
