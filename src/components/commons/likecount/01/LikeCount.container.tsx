import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { LIKE_BOARD, DISLIKE_BOARD, FETCH_BOARD } from './LikeCount.queries';
import LikeCountUI from './LikeCount.presenter';

export default function LikeCount(): JSX.Element {
  const router = useRouter();

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const updateCount = (type: 'like' | 'dislike') => {
    if (type === 'like') {
      return setLikeCount((prev) => prev + 1);
    } else {
      return setDislikeCount((prev) => prev + 1);
    }
  };

  const handleMutation = async (type: 'like' | 'dislike') => {
    updateCount(type);
    try {
      const mutation = type === 'like' ? likeBoard : dislikeBoard;
      await mutation({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (error) {
      console.error(
        `게시물 ${type === 'like' ? '라이크' : '디스라이크'} 오류 발생`,
        error,
      );
    }
  };

  return (
    <LikeCountUI
      onClickLike={() => handleMutation('like')}
      onClickDislike={() => handleMutation('dislike')}
      likeCount={data?.fetchBoard?.likeCount}
      dislikeCount={data?.fetchBoard?.dislikeCount}
    />
  );
}
