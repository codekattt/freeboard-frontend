import { MouseEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardListUIProps {
  data?: Pick<IQuery, 'fetchBoards'>;
  startPage: number;
  lastPage: number;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickNextPage: (event: MouseEvent<HTMLSpanElement>) => void;
}
