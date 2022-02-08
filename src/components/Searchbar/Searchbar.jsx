import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchButton, Input } from './Searchbar.styled';
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
        <SearchButton type="submit">Search</SearchButton>
        <Input type="text" name="search" />
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
