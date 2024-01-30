import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import { FETCH_BOARD_COMMENTS } from '../List/BoardCommentList.queries';
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries';

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

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

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
    if (!commentWriter) {
      alert('작성자를 입력해주세요.');
      return;
    }
    if (!commentPassword) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (!commentContents) {
      alert('내용을 입력해주세요.');
      return;
    }
    if (!star) {
      alert('평점을 선택해주세요.');
      return;
    }

    if (commentWriter && commentPassword && commentContents && star) {
      try {
        const result = await createBoardComment({
          variables: {
            boardId: router.query.boardId,
            createBoardCommentInput: {
              writer: commentWriter,
              password: commentPassword,
              contents: commentContents,
              rating: star,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        alert('댓글이 등록되었습니다.');
      } catch (error) {
        alert((error as { message: string }).message);
      }
    }
    setCommentWriter('');
    setCommentPassword('');
    setCommentContents('');
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
