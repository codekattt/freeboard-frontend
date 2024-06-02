import { ChangeEvent } from 'react';

export interface Comment {
  id: string;
  writer: string;
  contents: string;
  rating: number;
  createdAt: {
    seconds: number;
  };
  password?: string;
}

export interface CommentWithImage extends Comment {
  imageUrl: string;
}

export interface IBoardCommentListUIProps {
  comments: CommentWithImage[];
  commentIdToEdit: string | null;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStar: (value: number) => void;
  onClickDeleteComment: (commentId: string) => void;
  onClickEditComment: (commentId: string) => void;
  onCancelEditComment: () => void;
  onClickUpdateComment: (commentId: string) => void;
  error: string;
}
