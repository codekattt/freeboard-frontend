import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from './BoardCommentDetail.queries';
import { useRouter } from 'next/router';
import BoardCommentDetailUI from './BoardCommentDetail.presenter';

export default function BoardCommentDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardCommentDetailUI data={data} />;
}
