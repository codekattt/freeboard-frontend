import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
`;

export const button = styled.div`
  width: 900px;
  height: auto;
  font-size: 52px;
  text-align: center;
  color: #6d30d7;
  background-color: white;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 3px solid #6d30d7;
  border-radius: 8px;

  :hover {
    color: white;
    background-color: #6d30d7;
    cursor: pointer;
  }
`;

export const Loading = styled.div`
  width: 100px;
  height: auto;
  font-size: 40px;
`;
