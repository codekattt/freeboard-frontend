import { FireFilled } from '@ant-design/icons';
import styled from '@emotion/styled';

export const Searchbar = styled.div`
  width: 776px;
  height: 52px;
  border-radius: 15px;
  background-color: #f5f2fc;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1250px) {
    width: 100%;
  }
`;

export const FireFilledIcon = styled(FireFilled)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
  padding-top: 2px;
  font-size: 18px;
`;
