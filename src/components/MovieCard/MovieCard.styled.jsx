import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  /* align-items: center; */
`;
export const FilmInfo = styled.div`
  padding: 15px 15px 15px 15px;
  margin-left: 20px;
`;
export const GenresList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  > li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Button = styled.button`
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid rgb(7, 83, 23);
  background-color: rgb(144, 199, 156);
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    background-color: rgb(7, 83, 23);
    color: rgb(144, 199, 156);
  }
`;
