import styled from '@emotion/styled';
import type { ISubmitButtonProps } from './BoardWrite.types';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';
import { theme } from '../../../../commons/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 0 5% 0s;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #cccccc;
`;

export const Post = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 80px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Label = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;

  & span {
    color: red;
    margin-right: 4px;
  }
`;

export const WriterWrapperContainer = styled.div`
  width: 48%;
`;

export const Writer = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding-left: 16px;
`;

export const Password = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding-left: 16px;
`;

export const Title = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding-left: 16px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 480px;
  resize: none;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding-left: 16px;
  padding-top: 16px;

  @media (max-width: 767px) {
    height: 300px;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  margin-top: 40px;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const ZipCode = styled.input`
  width: 90px;
  height: 52px;
  font-size: 16px;
  letter-spacing: 1px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-right: 10px;
  padding-left: 14px;
`;

export const AddressWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ZipCodeButton = styled.button`
  width: 124px;
  height: 52px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  background-color: black;
  border-radius: 5px;
  cursor: pointer;
`;

export const AddressOne = styled.input`
  width: 100%;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 10px;
`;

export const AddressTwo = styled.input`
  width: 100%;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-top: 4px;
  padding-left: 10px;
`;

export const YoutubeLink = styled.input`
  width: 100%;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding-left: 10px;
`;

export const YoutubeWrapper = styled.div`
  width: 100%;
  margin-top: 40px;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  border-radius: 5px;
`;

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
  }

  & img {
    width: 100px;
    height: 100px;
  }
`;

export const UploadButton = styled.button`
  margin-top: 10px;
  padding: 5px 20px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;

  :hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: white;
    border: none;
  }
`;

export const OptionWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
  color: yellow;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button<ISubmitButtonProps>`
  width: 179px;
  height: 52px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #dddddd;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  background-color: ${(props) =>
    props.isEdit
      ? props.isActive
        ? theme.colors.hover
        : theme.colors.hover
      : props.isActive
      ? theme.colors.hover
      : 'none'};

  color: ${(props) =>
    props.isEdit
      ? props.isActive
        ? 'white'
        : 'white'
      : props.isActive
      ? 'white'
      : 'none'};
`;

export const Error = styled.div`
  font-size: 16px;
  color: red;
  margin-left: 16px;
  margin-top: 10px;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;
