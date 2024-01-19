import { ChangeEvent, MouseEvent } from 'react';

export interface IBoardCommentDetailUIProps {
  data?: any;
  isActive: boolean;
  ARRAY: number[];
  commentIdToEdit: string | null;
  clicked: boolean[];
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNumberOfTrue: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEditComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onCancelEditComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  starClick: (index: number) => void;
}
