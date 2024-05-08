import { getDate } from '../../../../commons/libraries/utils';
import Paginations01 from '../../../commons/paginations/01/Paginations01.container';
import Searchbars01 from '../../../commons/searchbars/01/Searchbars01.container';
import * as S from './BoardList.styles';
import { IBoardListUIProps } from './BoardList.types';
import { v4 as uuidv4 } from 'uuid';

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <Searchbars01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.TableTop />
      <S.TopRow>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.TopRow>
      {props.data?.fetchBoards.map((el: any) => (
        <S.Row key={el._id}>
          <S.ColumnBasic className="DisplayNone">
            {String(el._id).slice(-3).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `#$%%%${props.keyword}#$%%%`)
              .split('#$%%%')
              .map((el: any) => (
                <span
                  key={uuidv4()}
                  style={{
                    color: el === props.keyword ? '#6d30d7' : 'none',
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
        <Paginations01 refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <img src="/img/write.png" />
          <span className="hide-text">게시물 등록</span>
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
