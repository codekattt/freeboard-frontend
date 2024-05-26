import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import BoardCommentListUI from './BoardCommentList.presenter';
import { doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../commons/libraries/firebase';

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  const boardId =
    typeof router.query.boardId === 'string' ? router.query.boardId : '';

  const [isActive, setIsActive] = useState(false);

  const [commentPassword, setCommentPassword] = useState('');
  const [commentContents, setCommentContents] = useState('');
  const [star, setStar] = useState(0);

  const [commentPasswordError, setCommentPasswordError] = useState('');
  const [commentContentsError, setCommentContentsError] = useState('');

  const [commentIdToEdit, setCommentIdToEdit] = useState<string | null>(null);

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

  // 수정 아이콘 클릭하면 수정창 생성
  const onClickEditComment = (commentId: string) => {
    setCommentIdToEdit(commentId);
  };

  // 수정취소 클릭하면 원래대로 돌리기
  const onCancelEditComment = () => {
    setCommentIdToEdit(null);
  };

  const onClickUpdateComment = async (commentId: string) => {
    if (!commentContents && star === 0) {
      alert('수정한 내용이 없습니다.');
      return;
    }

    if (!commentPassword) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const commentRef = doc(
        db,
        'boardComments',
        boardId as string,
        'comments',
        commentId,
      );
      const commentSnapshot = await getDoc(commentRef);

      if (!commentSnapshot.exists()) {
        alert('댓글을 찾을 수 없습니다.');
        return;
      }

      const commentData = commentSnapshot.data();
      if (commentData?.password !== commentPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      const updatedData: {
        contents?: string;
        rating?: number;
        updatedAt: Date;
      } = {
        updatedAt: new Date(),
      };
      if (commentContents) updatedData.contents = commentContents;
      if (star !== 0 && star !== commentData.rating) updatedData.rating = star;

      await updateDoc(commentRef, updatedData);

      setCommentIdToEdit(null);
      setCommentContents('');
      setCommentPassword('');
      setStar(0);

      alert('댓글이 수정되었습니다.');
    } catch (error) {
      console.error('Error updating comment: ', error);
      alert('댓글 수정 실패');
    }
  };

  const onClickDeleteComment = async (commentId: string) => {
    if (!boardId) {
      alert('게시판 ID가 잘못되었습니다.');
      return;
    }

    const confirmed = window.confirm('댓글을 삭제하시겠습니까?');
    if (!confirmed) return;

    const password = prompt('비밀번호를 입력해주세요.');
    if (!password) return;

    try {
      const commentRef = doc(
        db,
        'boardComments',
        boardId as string,
        'comments',
        commentId,
      );
      const commentSnapshot = await getDoc(commentRef);

      if (!commentSnapshot.exists()) {
        alert('댓글을 찾을 수 없습니다.');
        return;
      }

      const commentData = commentSnapshot.data();
      if (commentData?.password !== password) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      await deleteDoc(commentRef);
      alert('댓글이 삭제되었습니다.');
    } catch (error) {
      console.error('Error deleting comment: ', error);
      alert('댓글 삭제 실패');
    }
  };

  return (
    <BoardCommentListUI
      commentIdToEdit={commentIdToEdit}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeStar={onChangeStar}
      onClickDeleteComment={onClickDeleteComment}
      onClickEditComment={onClickEditComment}
      onCancelEditComment={onCancelEditComment}
      onClickUpdateComment={onClickUpdateComment}
    />
  );
}
