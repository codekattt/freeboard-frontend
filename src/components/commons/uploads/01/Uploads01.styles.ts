import styled from '@emotion/styled';

export const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #dddddd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #e5e5e5;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
