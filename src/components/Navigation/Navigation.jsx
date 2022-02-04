import { NavLink as RouterLink } from 'react-router-dom';
import { Nav, Menu } from './Navigation.styled';
import styled from 'styled-components';

const NavLink = styled(RouterLink)`
  text-decoration: none;
  &.active {
    color: green;
  }
  :not(:first-child) {
    margin-left: 15px;
  }
`;
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
