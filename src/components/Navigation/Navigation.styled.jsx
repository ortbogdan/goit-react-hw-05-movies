import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  color: black;
  > a {
    text-decoration: none;
    :not(:first-child) {
      margin-left: 15px;
    }
    :visited {
      color: black;
    }
    &.active {
      font-size: 18px;
      color: rgb(7, 83, 23);
    }
  }
`;
export const Menu = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 20px 0 20px;
  background-color: rgb(176, 180, 177);
`;
