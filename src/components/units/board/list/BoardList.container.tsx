import { useQuery } from '@apollo/client';
import { FETCH_BOARDS } from './BoardList.queries';
import { useRouter } from 'next/router';
import BoardListUI from './BoardList.presenter';
import { MouseEvent } from 'react';
import {
  IQuery,
  IQueryFetchBoardArgs,
} from '../../../../commons/types/generated/types';

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardArgs>(
    FETCH_BOARDS,
  );

  const onClickMoveToBoardNew = () => {
    router.push('/boards/new');
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
