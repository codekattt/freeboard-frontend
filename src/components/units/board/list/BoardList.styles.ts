import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 10px;
`;

export const TableTop = styled.div`
  border-top: 2px solid black;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid #bdbdbd;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  background-color: #f3f3f2;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  background-color: #f3f3f2;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: lightseagreen;
    font-weight: 800;
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

export const Pagination = styled.div`
  width: 420px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const paginationItem = styled.span`
  color: black;

  &:hover {
    font-weight: 700;
    color: #6d30d7;
    cursor: pointer;
  }
`;

export const paginationArrow = styled.span`
  color: black;

  &:hover {
    font-weight: 700;
    color: #6d30d7;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 171px;
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
    background-color: lightseagreen;
    animation: ${fadeIn} 0.2s ease-in-out;
  }
`;
