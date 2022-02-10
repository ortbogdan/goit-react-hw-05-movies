import styled from 'styled-components';

export const CastPreview = styled.div`
  padding: 10px 5px 10px 5px;
  margin-top: 20px;
  border-radius: 6px;

  background-color: rgb(18, 24, 32);

  box-shadow: 0 0 5px 2px rgba(170, 194, 224, 0.3);
`;

export const ActorInfo = styled.div`
  padding: 5px;
  margin-left: 10px;
  text-align: center;
  border-radius: 6px;
  background-color: rgb(170, 194, 224);
  color: rgb(18, 24, 32);
  > img {
    width: 200px;
    height: 250px;
    border-radius: 6px;
  }
  > p {
    font-weight: 700;
  }
`;
