import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  padding: 30px 20px 30px 20px;

  background-color: bisque;
`;
export const NavItem = styled.li`
  &:not(:first-child) {
    margin-left: 15px;
  }
`;
export const NavLink = styled(RouterLink)`
  &:active {
    color: red;
  }
`;
