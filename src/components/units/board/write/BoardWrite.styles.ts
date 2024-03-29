import styled from '@emotion/styled';
import type { ISubmitButtonProps } from './BoardWrite.types';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 80px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 16px;
`;

export const WriterWrapperContainer = styled.div`
  margin-left: 12px;
  margin-right: 12px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const SubjectWrapper = styled.div`
  margin-top: 40px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  padding-top: 16px;
`;

export const ContentsWrapper = styled.div`
  margin-top: 40px;
`;

export const ZipCode = styled.input`
  width: 80px;
  height: 52px;
  font-size: 16px;
  letter-spacing: 1px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
  padding-left: 14px;
`;

export const AddressWrapper = styled.div`
  margin-top: 40px;
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
  cursor: pointer;
`;

export const AddressOne = styled.input`
  width: 996px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  margin-top: 10px;
  padding-left: 10px;
`;

export const AddressTwo = styled.input`
  width: 996px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  margin-top: 4px;
  padding-left: 10px;
`;

export const YoutubeLink = styled.input`
  width: 996px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
`;

export const YoutubeWrapper = styled.div`
  margin-top: 40px;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const ImageBox = styled.div`
  display: flex;
`;

export const OptionWrapper = styled.div`
  width: 996px;
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
  box-shadow: 2px 2px 4px #dddddd;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  /* 수정 페이지에서 isActive 여부에 따라 색상 바뀌도록 구현해야함 */
  background-color: ${(props) =>
    props.isEdit
      ? props.isActive
        ? 'yellow' // isEdit가 true이고 isActive가 true
        : 'yellow' // isEdit가 true이고 isActive가 false
      : props.isActive
      ? 'yellow' // isEdit가 false이고 isActive가 true
      : 'none'}; // isEdit가 false이고 isActive가 false
`;

export const Error = styled.div`
  font-size: 16px;
  color: red;
  margin-left: 16px;
  margin-top: 10px;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;
