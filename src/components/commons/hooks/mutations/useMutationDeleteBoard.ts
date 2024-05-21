import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from '../../../../commons/types/generated/types';

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const useMutationDeleteBoard = () => {
  const router = useRouter();
  const [deleteBoard] = useMutation<
    Pick<IMutation, 'deleteBoard'>,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteBoard({
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

  return onClickDelete;
};
