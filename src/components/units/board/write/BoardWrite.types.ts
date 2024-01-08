import { ChangeEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';
import { Address } from 'react-daum-postcode';

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
  address: string;
  zonecode: string;
}

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  subjectError: string;
  contentsError: string;
  addressModalOpen: () => void;
  handleComplete: (data: Address) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSubject: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  isModalOpen: boolean;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
  address: string;
  zonecode: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
