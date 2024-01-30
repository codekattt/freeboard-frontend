import { ChangeEvent, MouseEvent } from 'react';

export interface IBoardCommentWriteUIProps {
  commentWriter: string;
  commentPassword: string;
  commentContents: string;
  commentWriterError: string;
  commentPasswordError: string;
  commentContentsError: string;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeStar: (value: number) => void;
  isActive: boolean;
  inputCount: number;
}
