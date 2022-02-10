import styled from 'styled-components';

export const Card = styled.article`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, auto));
  grid-gap: 20px;
  justify-items: center;

  padding: 10px 0 10px 0;
  border-radius: 6px;

  color: rgb(170, 194, 224);

  background-color: rgb(18, 24, 32);
  box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);
`;
export const FilmInfo = styled.div`
  padding: 15px 15px 15px 15px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-bottom: 10px;
  padding: 5px 10px 5px 10px;
  border-radius: 4px;
  border: 1px solid rgb(18, 24, 32);
  background-color: rgb(18, 24, 32);
  box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);
  color: rgb(170, 194, 224);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    background-color: rgb(170, 194, 224);
    color: rgb(18, 24, 32);
  }
`;
export const Thumb = styled.div`
  width: 270px;
  height: 400px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
