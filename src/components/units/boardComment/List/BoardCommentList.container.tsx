import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from './BoardCommentList.queries';
import type { ChangeEvent } from 'react';
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';
import BoardCommentListUI from './BoardCommentList.presenter';

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === 'string' ? router.query.boardId : '';
  // if (typeof router.query.boardId !== 'string') return <></>; // 해당 코드 적용 시 새로고침 할 때 에러 발생으로 위 코드로 대체.

  const [isActive, setIsActive] = useState(false);

  const [commentPassword, setCommentPassword] = useState('');
  const [commentContents, setCommentContents] = useState('');
  const [star, setStar] = useState(0);

  const [commentPasswordError, setCommentPasswordError] = useState('');
  const [commentContentsError, setCommentContentsError] = useState('');

  const [commentIdToDelete, setCommentIdToDelete] = useState(null);
  const [commentIdToEdit, setCommentIdToEdit] = useState(null);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, 'updateBoardComment'>,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId },
  });

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
    if (event.target.value !== '') {
      setCommentPasswordError('');
    }

    if (event.target.value && commentContents && star) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value);
    if (event.target.value !== '') {
      setCommentContentsError('');
    }

    if (commentPassword && event.target.value && star) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeStar = (value: number): void => {
    setStar(value);
  };

  // 수정 아이콘 클릭하면 수정창 생성 //
  const onClickEditComment = (commentId: any) => {
    setCommentIdToEdit(commentId);
  };

  // 수정취소 클릭하면 원래대로 돌리기 //
  const onCancelEditComment = () => {
    setCommentIdToEdit(null);
  };

  const onClickUpdateComment = async (commentId: any) => {
    interface updateBoardCommentInput {
      contents?: string;
      rating?: number;
    }

    setCommentIdToEdit(commentId);

    if (!commentContents && !star) {
      alert('수정한 내용이 없습니다.');
      return;
    }

    if (!commentPassword) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    const updateBoardCommentInput: updateBoardCommentInput = {};
    if (commentContents) updateBoardCommentInput.contents = commentContents;
    if (star) updateBoardCommentInput.rating = star;

    try {
      const result = await updateBoardComment({
        variables: {
          boardCommentId: commentId,
          password: commentPassword,
          updateBoardCommentInput,
        },
      });
      console.log(result);

      await refetch();

      setCommentIdToEdit(null);
      setCommentContents('');
      setCommentPassword('');
      setStar(0);

      alert('댓글이 수정되었습니다.');
      refetch();
    } catch (error) {
      alert((error as { message: string }).message);
    }
  };

  const onClickDeleteComment = async (commentId: any) => {
    setCommentIdToDelete(commentId);

    const isConfirmed = window.confirm('댓글을 삭제하시겠습니까?');

    if (isConfirmed) {
      try {
        const passwordConfirmation = prompt('비밀번호를 입력하세요');

        await deleteBoardComment({
          variables: {
            boardCommentId: commentId,
            password: passwordConfirmation,
          },
        });
        alert('댓글이 삭제되었습니다.');
        refetch();
      } catch (error) {
        if (error instanceof Error) alert(error.message);
        console.error('댓글 삭제 중 오류 발생', error);
      }
    }
  };

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListUI
      data={data}
      isActive={isActive}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeStar={onChangeStar}
      onClickDeleteComment={onClickDeleteComment}
      onClickEditComment={onClickEditComment}
      onCancelEditComment={onCancelEditComment}
      onClickUpdateComment={onClickUpdateComment}
      commentIdToEdit={commentIdToEdit}
      onLoadMore={onLoadMore}
    />
  );
}
