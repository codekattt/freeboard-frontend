import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '../../../../commons/styles/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Button = styled.button`
  max-width: 170px;
  width: 30%;
  height: 52px;
  font-size: 15px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.hover};
    animation: ${fadeIn} 0.1s ease-in-out;
  }

  @media (max-width: 767px) {
    max-width: 54px;

    *.hide-text {
      display: none;
    }
  }
`;

////////////////

export const BoardList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoardItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const BoardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoardWriter = styled.div`
  color: #555;
`;

export const Views = styled.div`
  color: #555;
  margin-left: 10px;
`;

export const BoardDate = styled.div`
  color: #aaa;
  font-size: 12px;
`;
export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 5px 10px;
  margin: 0 3px;
  background-color: ${(props) =>
    props.active ? 'green' : props.disabled ? '#ccc' : theme.colors.hover};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : 'green')};
  }
`;
