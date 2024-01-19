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
  subjectError: string;
  contentsError: string;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSubject: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
  isOpen: boolean;
  zipcode: string;
  address: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
  isEdit: boolean;
}
