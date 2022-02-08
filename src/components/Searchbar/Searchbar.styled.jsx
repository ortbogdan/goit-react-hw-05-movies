import styled from 'styled-components';

export const SearchButton = styled.button`
  height: 30px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid rgb(7, 83, 23);
  background-color: rgb(144, 199, 156);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: rgb(7, 83, 23);
    color: rgb(144, 199, 156);
  }
`;
export const Input = styled.input`
  height: 30px;
  margin-left: 20px;
`;
