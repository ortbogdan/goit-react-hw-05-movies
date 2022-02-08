import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
export const Searchbar = ({ onFormSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchedMovie = e.currentTarget.children.search.value.trim();
    if (!searchedMovie) {
      toast.info('Please type the movie title!');
    }
    onFormSubmit(searchedMovie.toLowerCase());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input type="text" name="search" />
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
