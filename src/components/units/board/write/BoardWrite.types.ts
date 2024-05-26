import { ChangeEvent } from 'react';
import { Address } from 'react-daum-postcode';

export interface IBoardWriteProps {
  isEdit: boolean;
}

export interface IBoardWriteUIProps {
  // Errors
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;

  // Address Handlers
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;

  // Change Handlers
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;

  // Image Upload Handlers
  onClickUploadImg: (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
  onClickEditUploadImg: (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;

  // Submit Handlers
  onClickSubmit: () => void;
  onClickEdit: () => void;

  // States
  isActive: boolean;
  isEdit: boolean;
  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
  fileUrls: string[];
  selectedFiles: (File | null)[];

  // Data
  data?: any;
}

export interface ISubmitButtonProps {
  isActive: boolean;
  isEdit: boolean;
}
