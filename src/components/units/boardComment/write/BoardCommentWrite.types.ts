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
  isActive: boolean;
  ARRAY: number[];
  starClick: (index: number) => void;
  clicked: boolean[];
}
