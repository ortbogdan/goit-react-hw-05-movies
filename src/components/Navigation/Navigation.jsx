import { NavLink as RouterLink } from 'react-router-dom';
import { NavList, NavItem } from './Navigation.styled';
import styled from 'styled-components';

const NavLink = styled(RouterLink)`
  &:active {
    color: red;
  }
`;
export const Navigation = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/movies">Movies</NavLink>
      </NavItem>
    </NavList>
  );
};
