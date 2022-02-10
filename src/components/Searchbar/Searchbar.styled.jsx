import styled from 'styled-components';

export const SearchButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px 5px 10px;
  border-radius: 4px;
  border: 1px solid rgb(18, 24, 32);

  text-transform: uppercase;

  box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);

  background-color: rgb(170, 194, 224);
  color: rgb(18, 24, 32);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    background-color: rgb(18, 24, 32);

    color: rgb(170, 194, 224);
  }
`;

export const Input = styled.input`
  min-width: 190px;
  height: 30px;
  padding: 15px;
  margin-left: 20px;
  border: none;
  border-radius: 6px;
  background-color: rgb(170, 194, 224);
  box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);

  ::placeholder {
    color: rgb(10, 49, 34);
  }
`;
export const Form = styled.form`
  padding: 20px;
  display: flex;
  justify-content: center;
`;
