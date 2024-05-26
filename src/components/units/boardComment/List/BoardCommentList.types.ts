export interface IBoardCommentListUIProps {
  commentIdToEdit?: any;
  onChangeCommentPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStar: (value: number) => void;
  onChangeCommentContents: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onCancelEditComment: () => void;
  onClickUpdateComment: (id: string) => void;
  onClickEditComment: (id: string) => void;
  onClickDeleteComment: (id: string) => void;
}

export interface Comment {
  id: string;
  writer: string;
  password: string;
  contents: string;
  rating: number;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}
