import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  margin-left: -30px;
  display: flex;
  flex-wrap: wrap;
  > li {
    flex-basis: calc(100% / 3 - 30px);
    margin-left: 30px;
  }
`;
export const NoImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  background-color: #a8b4af;
`;
