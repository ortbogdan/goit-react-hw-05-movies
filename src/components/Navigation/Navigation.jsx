import { NavLink } from 'react-router-dom';
import { Nav, Menu } from './Navigation.styled';
import { BsFilm } from 'react-icons/bs';
export const Navigation = () => {
  return (
    <Menu>
      <Nav>
        <a href="/">
          <BsFilm />
        </a>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
    </Menu>
  );
};
