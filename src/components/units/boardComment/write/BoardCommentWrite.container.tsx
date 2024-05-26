import { useRouter } from 'next/router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../commons/libraries/firebase';

export default function BoardCommentWrite(): JSX.Element {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [commentWriter, setCommentWriter] = useState('');
  const [commentPassword, setCommentPassword] = useState('');
  const [commentContents, setCommentContents] = useState('');
  const [star, setStar] = useState(0);

  const [commentWriterError, setCommentWriterError] = useState('');
  const [commentPasswordError, setCommentPasswordError] = useState('');
  const [commentContentsError, setCommentContentsError] = useState('');

  const [inputCount, setInputCount] = useState(0);

  const onChangeStar = (value: number): void => {
    setStar(value);
  };

  const onChangeCommentWriter = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setCommentWriter(event.target.value);
    if (event.target.value !== '') {
      setCommentWriterError('');
    }

    if (event.target.value && commentPassword && commentContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCommentPassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setCommentPassword(event.target.value);
    if (event.target.value !== '') {
      setCommentPasswordError('');
    }

    if (commentWriter && event.target.value && commentContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCommentContents = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setInputCount(event.target.value.length); // 글자수 표시
    setCommentContents(event.target.value);
    if (event.target.value !== '') {
      setCommentContentsError('');
    }

    if (commentWriter && commentPassword && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickCommentSubmit = async () => {
    if (!commentWriter || !commentPassword || !commentContents || !star) {
      alert('모든 필드를 채워주세요.');
      return;
    }

    // router.query.boardId가 undefined가 아닌지 확인
    const boardId = router.query.boardId;
    if (typeof boardId !== 'string') {
      alert('게시판 ID가 잘못되었습니다.');
      return;
    }

    try {
      const commentRef = collection(db, 'boardComments', boardId, 'comments');
      const newComment = {
        writer: commentWriter,
        password: commentPassword,
        contents: commentContents,
        rating: star,
        createdAt: new Date(),
      };

      await addDoc(commentRef, newComment);

      alert('댓글이 등록되었습니다.');
      setCommentWriter('');
      setCommentPassword('');
      setCommentContents('');
      setStar(0);
    } catch (error) {
      console.error('Error updating comment: ', error);
      alert('댓글 등록 실패');
    }
  };

  return (
    <>
      <BoardCommentWriteUI
        commentWriter={commentWriter}
        commentPassword={commentPassword}
        commentContents={commentContents}
        commentWriterError={commentWriterError}
        commentPasswordError={commentPasswordError}
        commentContentsError={commentContentsError}
        onChangeCommentWriter={onChangeCommentWriter}
        onChangeCommentPassword={onChangeCommentPassword}
        onChangeCommentContents={onChangeCommentContents}
        onClickCommentSubmit={onClickCommentSubmit}
        isActive={isActive}
        inputCount={inputCount}
        onChangeStar={onChangeStar}
      />
    </>
  );
}
