import { NavLink, Link } from 'react-router-dom';
import { Nav, Menu } from './Navigation.styled';
import { BsFilm } from 'react-icons/bs';
export const Navigation = () => {
  return (
    <Menu>
      <Nav>
        <Link to="/">
          <BsFilm />
        </Link>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
    </Menu>
  );
};
