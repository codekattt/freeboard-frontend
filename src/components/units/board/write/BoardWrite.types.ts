import { ChangeEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';
import { Address } from 'react-daum-postcode';

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
  isOpen: boolean;
  zipcode: string;
  address: string;
  fileUrls: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
  isEdit: boolean;
}
