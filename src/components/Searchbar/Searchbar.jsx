import PropTypes from 'prop-types';
export const Searchbar = ({ onFormSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchedMovie = e.currentTarget.children.search.value;
    onFormSubmit(searchedMovie.trim().toLowerCase());
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
