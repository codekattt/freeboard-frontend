import BoardDetail from '../../../src/components/units/board/detail/BoardDetail.index';
import BoardCommentList from '../../../src/components/units/boardComment/List/BoardCommentList.container';
import BoardCommentWrite from '../../../src/components/units/boardComment/write/BoardCommentWrite.container';

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
