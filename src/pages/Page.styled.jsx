import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 10px;
`;
export const AdditionalMovieInfo = styled.div`
  padding: 10px 5px 10px 5px;
  border-radius: 6px;
  background-color: rgb(18, 24, 32);
  box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);
`;
export const AdditionalList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 5px;

  font-size: 18px;
`;
export const AdditionalListItem = styled.li`
  text-align: center;
  > a {
    display: inline-block;
    padding: 5px;
    width: 100px;
    border-radius: 10px;

    text-transform: uppercase;
    text-decoration: none;
    color: inherit;

    box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover,
    :focus {
      color: rgb(12, 16, 22);
      background-color: rgb(170, 194, 224);
    }
    &.active {
      cursor: default;
      /* color: rgb(221, 233, 224);
     text-shadow: 1px 1px 1px rgb(121, 170, 154), 0 0 0.2em rgb(194, 236, 222); */
      color: rgb(12, 16, 22);
      background-color: rgb(170, 194, 224);
    }
  }
`;
