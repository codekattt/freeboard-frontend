import BoardDetailUI from './BoardDetail.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickMoveToList = () => {
    router.push('/boards');
  };

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = () => {
    try {
      deleteBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
      });
      alert('게시글이 삭제되었습니다.');
      router.push('/boards');
    } catch (error) {
      console.error('삭제 중 오류 발생', error);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
    />
  );
}
