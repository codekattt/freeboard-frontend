import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
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
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #faebd7;
  }
`;
