import styled from '@emotion/styled';

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Up = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Down = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
