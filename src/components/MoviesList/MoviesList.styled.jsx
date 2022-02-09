import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 210px);
  grid-gap: 15px;
  justify-content: center;

  font-size: 18px;
  border-radius: 8px;
`;
export const ListItem = styled.li`
  padding: 5px;
  border-radius: 6px;
  background-color: rgb(170, 194, 224);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);
  }
  & > a {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    color: rgb(18, 24, 32);
    :visited {
      color: inherit;
    }
  }
`;
export const Card = styled.div`
  border-radius: 6px;
  overflow: hidden;
`;
export const MovieTitle = styled.h2`
  margin: 0;
  font-size: 12px;
  text-align: center;
  line-height: 1.3;

  color: inherit;
`;
export const MoviePoster = styled.div`
  width: 200px;
  height: 300px;
  margin-bottom: 5px;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
