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
export const Genres = styled.p`
  height: 30px;
  padding: 5px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);
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
export const MovieDescription = styled.p`
  padding: 5px;

  border-radius: 6px;
  box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);
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

      color: rgb(12, 16, 22);
      background-color: rgb(170, 194, 224);
    }
  }
`;
