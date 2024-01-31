import { ChangeEvent, MouseEvent } from 'react';

export interface IBoardCommentListUIProps {
  data?: any;
  isActive: boolean;
  commentIdToEdit: string | null;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEditComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onCancelEditComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeStar: (value: number) => void;
  onLoadMore: any;
}
