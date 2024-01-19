import { useQuery } from '@apollo/client';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import { useRouter } from 'next/router';
import BoardListUI from './BoardList.presenter';
import { useState, type MouseEvent } from 'react';
import type {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsCountArgs,
} from '../../../../commons/types/generated/types';

export default function BoardList() {
  const [startPage, setStartPage] = useState(1);

  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
      : 1;

  const onClickMoveToBoardNew = () => {
    router.push('/boards/new');
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event?.currentTarget.id) });
  };

  const onClickPrevPage = (event: MouseEvent<HTMLSpanElement>): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (event: MouseEvent<HTMLSpanElement>): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <BoardListUI
      data={data}
      startPage={startPage}
      lastPage={lastPage}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
