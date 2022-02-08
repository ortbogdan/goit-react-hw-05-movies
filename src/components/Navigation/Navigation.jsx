import { NavLink } from 'react-router-dom';
import { Nav, Menu } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Menu>
      <Nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
    </Menu>
  );
};
