import { getDate } from '../../../../commons/libraries/utils';
import { theme } from '../../../../commons/styles/theme';
import { useMoveToPage } from '../../../commons/hooks/customs/useMoveToPage';
import { useSearch } from '../../../commons/hooks/customs/useSearch';
import { useQueryFetchBoards } from '../../../commons/hooks/queries/useQueryFetchBoards';
import { useQueryFetchBoardsCount } from '../../../commons/hooks/queries/useQueryFetchBoardsCount';
import Paginations01 from '../../../commons/paginations/01/Paginations01.container';
import Searchbars01 from '../../../commons/searchbars/01/Searchbars01.container';
import * as S from './BoardList.styles';
import { v4 as uuidv4 } from 'uuid';

export default function BoardList(): JSX.Element {
  const { keyword, onChangeKeyword } = useSearch();
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();

  return (
    <S.Wrapper>
      <Searchbars01
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        onChangeKeyword={onChangeKeyword}
      />
      <S.TableTop />
      <S.TopRow>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.TopRow>
      {data?.fetchBoards.map((el: any) => (
        <S.Row key={el._id}>
          <S.ColumnBasic className="DisplayNone">
            {String(el._id).slice(-3).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle onClick={onClickMoveToPage(`/boards/${el._id}`)}>
            {el.title
              .replaceAll(keyword, `#$%%%${keyword}#$%%%`)
              .split('#$%%%')
              .map((el: any) => (
                <span
                  key={uuidv4()}
                  style={{
                    color: el === keyword ? theme.colors.hover : 'none',
                  }}
                >
                  {el}
                </span>
              ))}
          </S.ColumnTitle>
          <S.Mobile>
            <S.ColumnBasic className="writer">
              {String(el.writer).slice(-5).toUpperCase()}
            </S.ColumnBasic>
            <S.ColumnBasic className="date">
              {getDate(el.createdAt)}
            </S.ColumnBasic>
          </S.Mobile>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Paginations01
          refetch={refetch}
          count={dataBoardsCount?.fetchBoardsCount}
        />
        <S.Button onClick={onClickMoveToPage('/boards/new')}>
          <img src="/img/write.png" />
          <span className="hide-text">게시물 등록</span>
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
