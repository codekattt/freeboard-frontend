import { ChangeEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  subjectError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSubject: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
