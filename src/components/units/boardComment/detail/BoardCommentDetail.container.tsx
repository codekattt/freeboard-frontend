import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from './BoardCommentDetail.queries';
import BoardCommentDetailUI from './BoardCommentDetail.presenter';

export default function BoardCommentDetail() {
  // 별점 시작 //
  const ARRAY = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const starClick = (index: any) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);

    //true 갯수 세기
    const newNumberOfTrue = clickStates.filter(
      (value) => value === true,
    ).length;
    setNumberOfTrue(newNumberOfTrue);
  };
  // 별점 끝 //

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const { data, refetch } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const [commentPassword, setCommentPassword] = useState('');
  const [commentContents, setCommentContents] = useState('');
  const [numberOfTrue, setNumberOfTrue] = useState(0);

  const [commentPasswordError, setCommentPasswordError] = useState('');
  const [commentContentsError, setCommentContentsError] = useState('');
  const [numberOfTrueError, setNumberOfTrueError] = useState<string | number>(
    0,
  );

  const [commentIdToDelete, setCommentIdToDelete] = useState(null);
  const [commentIdToEdit, setCommentIdToEdit] = useState(null);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const onChangeCommentPassword = (event: any) => {
    setCommentPassword(event.target.value);
    if (event.target.value !== '') {
      setCommentPasswordError('');
    }

    if (event.target.value && commentContents && numberOfTrue) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCommentContents = (event: any) => {
    setCommentContents(event.target.value);
    if (event.target.value !== '') {
      setCommentContentsError('');
    }

    if (commentPassword && event.target.value && numberOfTrue) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeNumberOfTrue = (event: any) => {
    setNumberOfTrue(event.target.value);
    if (event.target.value !== '') {
      setNumberOfTrueError('');
    }

    if (commentPassword && commentContents && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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

    if (!commentContents && !numberOfTrue) {
      alert('수정한 내용이 없습니다.');
      return;
    }

    if (!commentPassword) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    const updateBoardCommentInput: updateBoardCommentInput = {};
    if (commentContents) updateBoardCommentInput.contents = commentContents;
    if (numberOfTrue) updateBoardCommentInput.rating = Number(numberOfTrue);

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
      setNumberOfTrue(0);

      alert('댓글이 수정되었습니다.');
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
        console.error('댓글 삭제 중 오류 발생', error);
      }
    }
  };

  return (
    <BoardCommentDetailUI
      data={data}
      isActive={isActive}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeNumberOfTrue={onChangeNumberOfTrue}
      onClickDeleteComment={onClickDeleteComment}
      onClickEditComment={onClickEditComment}
      onCancelEditComment={onCancelEditComment}
      onClickUpdateComment={onClickUpdateComment}
      commentIdToEdit={commentIdToEdit}
      ARRAY={ARRAY}
      starClick={starClick}
      clicked={clicked}
    />
  );
}
