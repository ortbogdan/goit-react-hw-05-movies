import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  text-transform: uppercase;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :not(:first-child) {
      margin-left: 15px;
    }
    :visited {
      color: inherit;
    }
    :hover,
    :focus {
      transform: scale(1.2);
      text-shadow: 1px 1px 1px rgb(121, 170, 154), 0 0 0.2em rgb(194, 236, 222);
    }
    &.active {
      cursor: default;
      color: rgb(221, 233, 224);
    }
  }
`;
export const Menu = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 20px 0 20px;

  background: rgb(22, 101, 78);
  background: linear-gradient(
    148deg,
    rgba(22, 101, 78, 1) 0%,
    rgba(18, 19, 32, 1) 54%,
    rgba(13, 172, 145, 1) 100%
  );
`;
