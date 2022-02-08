import styled from 'styled-components';

export const List = styled.ol`
  margin: 0;
`;
export const ListItem = styled.li`
  padding: 5px 10px 5px 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: rgb(144, 199, 156);
  }
  & > a {
    text-decoration: none;
  }
`;
