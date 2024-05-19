import styled from '@emotion/styled';
import { theme } from '../../../commons/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin-top: 32px;

  & h1 {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 386px;
  height: 58px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin: 4px 0;
  padding-left: 16px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 386px;
  height: 58px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin: 20px 0 40px 0;
  padding-left: 16px;
  font-size: 16px;
  background-color: ${(props) =>
    props.disabled ? '#e0e0e0' : theme.colors.hover};
  color: ${(props) => (props.disabled ? '#9e9e9e' : 'white')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? '#e0e0e0' : theme.colors.hover};
  }
`;

export const Message = styled.p`
  width: 100%;
  max-width: 386px;
  text-align: left;
  padding-left: 12px;
  color: #f44336;
  font-size: 14px;
  margin: 4px 0 10px 0;
`;
