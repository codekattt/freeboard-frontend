import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin-top: 32px;
`;

export const Input = styled.input`
  width: 386px;
  height: 58px;
  border: 1px solid #bdbdbd;
  margin: 4px 0;
  padding-left: 16px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 386px;
  height: 58px;
  border: 1px solid #bdbdbd;
  margin: 20px 0 40px 0;
  padding-left: 16px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : '#6d30d7')};
  color: ${(props) => (props.disabled ? '#9e9e9e' : 'white')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#e0e0e0' : '#6d30d7')};
  }
`;

export const Message = styled.p`
  width: 386px;
  text-align: left;
  padding-left: 12px;
  color: #f44336;
  font-size: 14px;
  margin: 4px 0 10px 0;
`;
