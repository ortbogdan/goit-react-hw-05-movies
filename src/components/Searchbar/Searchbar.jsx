import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchButton, Input, Form } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
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
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <BsSearch />
        </SearchButton>
        <Input type="text" name="search" placeholder="Search film" />
      </Form>
    </div>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
