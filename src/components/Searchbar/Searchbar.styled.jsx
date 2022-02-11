import styled from 'styled-components';

export const SearchButton = styled.button`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 1px solid rgb(18, 24, 32);

  text-transform: uppercase;

  background-color: rgb(170, 194, 224);
  color: rgb(18, 24, 32);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    background-color: rgb(18, 24, 32);
    box-shadow: 0 0 7px 5px rgba(170, 194, 224, 0.3);
    color: rgb(170, 194, 224);
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  padding: 15px;
  margin-left: 20px;

  font-size: 18px;

  border: none;
  border-radius: 6px;
  background-color: rgb(170, 194, 224);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus,
  :hover {
    outline: 1px solid rgb(18, 24, 32);
    box-shadow: 0 0 7px 5px rgba(170, 194, 224, 0.3);
  }
  ::placeholder {
    font-size: 18px;
    text-transform: uppercase;
    color: rgb(18, 24, 32);
  }
  :focus::placeholder {
    color: transparent;
  }
`;
export const Form = styled.form`
  padding: 20px;
  display: flex;
  justify-content: center;
`;
