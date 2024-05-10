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
  width: 100%;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const TableTop = styled.div`
  border-top: 2px solid black;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid #bdbdbd;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #bdbdbd;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #bdbdbd;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: auto;
    line-height: 1.4;
    padding: 12px 4px;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  background-color: #f3f3f2;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  background-color: #f3f3f2;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;

  &.writer,
  &.date {
    width: 50%;
  }

  @media (max-width: 767px) {
    text-align: left;
    color: gray;

    &.writer,
    &.date {
      width: auto;
    }
    &.DisplayNone {
      display: none;
    }
  }
`;

export const Mobile = styled.div`
  width: 20%;
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;

  :hover {
    color: #6d30d7;
    font-weight: 800;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    text-align: left;
    font-size: 20px;
    padding-bottom: 12px;
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
    background-color: #6d30d7;
    animation: ${fadeIn} 0.2s ease-in-out;
  }

  @media (max-width: 767px) {
    max-width: 54px;

    *.hide-text {
      display: none;
    }
  }
`;
